import { execFile } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createRerunQueue } from "./rerun-queue.js";

// W1: 本地脚本路径支持环境变量覆盖，默认保留原绝对路径，避免机器强耦合。
export const SCHEDULE_SCRIPT = process.env.LAOSU_SCHEDULE_SCRIPT
  || "/Users/laosu/Desktop/sjk-2026/苏据库/库管理与索引/老苏排课系统/schedule.py";
export const AFFAIRS_SCRIPT = process.env.LAOSU_AFFAIRS_SCRIPT
  || "/Users/laosu/Shared/Hana主动式事务系统/affairs.py";
export const CALENDAR_SYNC_SCRIPT = process.env.LAOSU_CALENDAR_SYNC_SCRIPT
  || "/Users/laosu/Desktop/sjk-2026/苏据库/库管理与索引/老苏排课系统/sync_to_calendar.py";

const PREVIEW_TTL_MS = 15 * 60 * 1000;
const EXPECTED_SCHEDULE_CONTRACT = 2;
const MIN_SCHEDULE_SCHEMA = 7;
const EXPECTED_AFFAIRS_CONTRACT = 1;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
const AFFAIR_ID_RE = /^aff_[a-zA-Z0-9]+$/;

function execute(file, args, options = {}) {
  return new Promise((resolve) => {
    execFile(file, args, {
      encoding: "utf8",
      timeout: options.timeout ?? 120_000,
      maxBuffer: 8 * 1024 * 1024,
      env: { ...process.env, PYTHONUNBUFFERED: "1" },
    }, (error, stdout = "", stderr = "") => {
      const text = String(stdout).trim();
      let parsed = null;
      if (text) {
        try {
          parsed = JSON.parse(text);
        } catch {
          parsed = null;
        }
      }
      const stderrText = String(stderr).trim();
      const protocolError = text && !parsed ? "底层命令返回了非 JSON 数据" : !text && !error ? "底层命令没有返回数据" : "";
      resolve({
        ok: Boolean(parsed && (parsed.ok ?? !error)),
        exitCode: error?.code ?? (protocolError ? 1 : 0),
        signal: error?.signal ?? null,
        stdout: text,
        stderr: stderrText || protocolError,
        data: parsed,
      });
    });
  });
}

function outputText(result) {
  const output = result?.data?.output;
  return typeof output === "string" && output.trim() ? output : result?.stdout || result?.stderr || "";
}

// W1: 首次调用前 fail-fast 校验脚本存在性；已通过校验的路径缓存，避免重复 stat。
const verifiedScripts = new Set();
function requireScript(file, label) {
  if (verifiedScripts.has(file)) return file;
  if (!file || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    throw new Error(`${label}脚本不可用：${file}。请用环境变量覆盖正确路径后再试。`);
  }
  verifiedScripts.add(file);
  return file;
}

export async function runSchedule(args, options) {
  const script = requireScript(SCHEDULE_SCRIPT, "排课");
  return execute("python3", [script, "agent", ...args], options);
}

export async function runAffairs(args, options) {
  const script = requireScript(AFFAIRS_SCRIPT, "事务");
  return execute("python3", [script, "agent", ...args], options);
}

export async function runCalendarSync(args, options) {
  const script = requireScript(CALENDAR_SYNC_SCRIPT, "日历同步");
  return execute("python3", [script, ...args], options);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runCalendarSyncWithRetry(args, options) {
  let result = null;
  for (let attempt = 0; attempt < 10; attempt += 1) {
    result = await runCalendarSync(args, options);
    if (result.ok || result.data?.error_code !== "SYNC_ALREADY_RUNNING") return result;
    await sleep(Math.min(1000 * (2 ** attempt), 5000));
  }
  return result;
}

const calendarSyncQueue = createRerunQueue((args, options) => runCalendarSyncWithRetry(args, options));

function runCalendarSyncQueued(args = ["--prune"], options) {
  return calendarSyncQueue.run(args, options);
}

function writeJsonAtomic(file, payload) {
  const dir = path.dirname(file);
  fs.mkdirSync(dir, { recursive: true });
  const temp = path.join(dir, `.${path.basename(file)}.${process.pid}.${crypto.randomUUID()}.tmp`);
  try {
    fs.writeFileSync(temp, JSON.stringify(payload, null, 2), "utf8");
    fs.renameSync(temp, file);
  } finally {
    fs.rmSync(temp, { force: true });
  }
}

function writeCalendarSyncStatus(dataDir, payload) {
  try {
    writeJsonAtomic(path.join(dataDir, "calendar-sync-status.json"), payload);
    return true;
  } catch {
    return false;
  }
}

function queueCalendarSyncAfterCommit(dataDir, context) {
  const queuedAt = new Date().toISOString();
  const queued = {
    ok: true,
    queued: true,
    data: { ok: true, queued: true, output: "飞书日历已进入后台同步队列" },
  };
  writeCalendarSyncStatus(dataDir, { status: "queued", queuedAt, ...context });
  void runCalendarSyncQueued(["--prune"]).then((result) => {
    const completedAt = new Date().toISOString();
    writeCalendarSyncStatus(dataDir, {
      status: result.ok ? "succeeded" : "failed",
      queuedAt,
      completedAt,
      ...context,
      result,
    });
    try {
      appendAudit(dataDir, "calendar_sync", {
        ...context,
        ok: result.ok,
        queuedAt,
        completedAt,
        errorCode: result.data?.error_code ?? null,
        message: summarizeResult(result),
      });
    } catch {
      // 主提交已成功，后台审计失败不能反向影响用户操作。
    }
  }).catch((error) => {
    const completedAt = new Date().toISOString();
    writeCalendarSyncStatus(dataDir, { status: "failed", queuedAt, completedAt, ...context, error: error.message });
    try {
      appendAudit(dataDir, "calendar_sync", { ...context, ok: false, queuedAt, completedAt, message: error.message });
    } catch {
      // 主提交已成功，后台审计失败不能反向影响用户操作。
    }
  });
  return queued;
}

export function resumePendingCalendarSync(dataDir) {
  try {
    const file = path.join(dataDir, "calendar-sync-status.json");
    if (!fs.existsSync(file)) return false;
    const status = JSON.parse(fs.readFileSync(file, "utf8"));
    if (status.status !== "queued") return false;
    queueCalendarSyncAfterCommit(dataDir, {
      token: status.token || null,
      operation: status.operation || "calendar_sync_resume",
      summary: status.summary || "恢复未完成的日历同步",
      resumed: true,
    });
    return true;
  } catch {
    return false;
  }
}

const CONTRACT_CACHE_TTL_MS = 60_000;
const contractCache = new Map();

async function readContract(kind) {
  const hit = contractCache.get(kind);
  if (hit && hit.expiresAt > Date.now()) return hit.value;
  const value = kind === "schedule" ? await runSchedule(["--help"]) : await runAffairs(["--help"]);
  contractCache.set(kind, { value, expiresAt: Date.now() + CONTRACT_CACHE_TTL_MS });
  return value;
}

async function assertContract(kind) {
  if (kind === "schedule") {
    const capabilities = await readContract("schedule");
    const version = capabilities.data?.contract_version;
    const schema = capabilities.data?.schema_version;
    if (!capabilities.ok || version !== EXPECTED_SCHEDULE_CONTRACT || !Number.isInteger(schema) || schema < MIN_SCHEDULE_SCHEMA) {
      throw new Error(`排课契约不匹配：contract 期望 ${EXPECTED_SCHEDULE_CONTRACT}、schema 至少 ${MIN_SCHEDULE_SCHEMA}；实际 ${version ?? "未知"}/${schema ?? "未知"}`);
    }
  }
  if (kind === "affairs") {
    const capabilities = await readContract("affairs");
    const version = capabilities.data?.contract_version;
    if (!capabilities.ok || version !== EXPECTED_AFFAIRS_CONTRACT) {
      throw new Error(`事务契约版本不匹配：期望 ${EXPECTED_AFFAIRS_CONTRACT}，实际 ${version ?? "未知"}`);
    }
  }
}

async function assertAffairsWriterAvailable() {
  const status = await runAffairs(["writer-status"]);
  if (!status.ok) throw new Error("无法读取事务写入锁状态");
  if (status.data?.data?.active) {
    const owner = status.data.data.owner || "其他写入端";
    throw new Error(`事务系统当前由 ${owner} 占用，请稍后重新预演`);
  }
}

const AUDIT_MAX_BYTES = 1024 * 1024;

function rotateAudit(auditDir) {
  const file = path.join(auditDir, "operations.jsonl");
  if (!fs.existsSync(file)) return;
  if (fs.statSync(file).size < AUDIT_MAX_BYTES) return;
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  fs.renameSync(file, path.join(auditDir, `operations-${stamp}.jsonl.bak`));
}

export function appendAudit(dataDir, event, payload) {
  try {
    const auditDir = path.join(dataDir, "audit");
    fs.mkdirSync(auditDir, { recursive: true });
    rotateAudit(auditDir);
    fs.appendFileSync(
      path.join(auditDir, "operations.jsonl"),
      `${JSON.stringify({ at: new Date().toISOString(), event, ...payload })}\n`,
      "utf8",
    );
    return true;
  } catch {
    return false;
  }
}

function localDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date);
}

export function logicalDateParts(date = new Date()) {
  return localDateParts(new Date(date.getTime() - 4 * 60 * 60 * 1000));
}

export async function getDashboard(scope = "week") {
  const allowedScope = ["today", "week", "month", "horizon"].includes(scope) ? scope : "week";
  const currentDate = logicalDateParts();
  const timelineArgs = allowedScope === "today"
    ? ["timeline", "day", currentDate]
    : allowedScope === "week"
      ? ["timeline", "week", currentDate]
      : allowedScope === "month"
        ? ["timeline", "month", currentDate.slice(0, 7)]
        : ["timeline", "horizon"];
  const [timeline, pending, health, schedule, students, commute, futureTimeline] = await Promise.all([
    runAffairs(timelineArgs),
    runAffairs(["pending"]),
    runAffairs(["health"]),
    runSchedule(allowedScope === "today" ? ["day", currentDate] : ["week"]),
    runSchedule(["student", "list"]),
    runSchedule(["commute", "matrix"]),
    runAffairs(["timeline", "horizon"]),
  ]);

  const timelineData = timeline.data?.data ?? { items: [], affairs: [], courses: [], warnings: [] };
  const affairItems = (timelineData.affairs ?? []).map((item) => ({ ...item, domain: "affair" }));
  const courseItems = (timelineData.courses ?? []).map((item) => ({ ...item, domain: "course" }));
  const pendingItems = (pending.data?.data?.items ?? []).map((item) => ({ ...item, domain: "affair" }));
  const healthData = health.data?.data ?? null;
  const studentItems = students.data?.data?.students ?? [];
  const futureCourses = futureTimeline.data?.data?.courses ?? [];
  const commuteMap = parseCommuteMatrix(outputText(commute));
  const nextCourseContext = buildNextCourseContext(futureCourses, commuteMap);
  const warnings = [
    ...(timelineData.warnings ?? []),
    ...[timeline, pending, health, schedule, students, commute, futureTimeline]
      .filter((result) => !result.ok)
      .map((result) => result.stderr || result.stdout || "底层命令执行失败"),
  ];

  const readHealth = {
    timeline: { ok: timeline.ok, label: "事务时间轴", detail: timeline.ok ? "正常" : (timeline.stderr || timeline.stdout || "读取失败") },
    pending: { ok: pending.ok, label: "待处理事务", detail: pending.ok ? "正常" : (pending.stderr || pending.stdout || "读取失败") },
    affairsHealth: { ok: health.ok, label: "事务系统健康", detail: health.ok ? "正常" : (health.stderr || health.stdout || "读取失败") },
    schedule: { ok: schedule.ok, label: "排课读取", detail: schedule.ok ? "正常" : (schedule.stderr || schedule.stdout || "读取失败") },
    students: { ok: students.ok, label: "学生名册", detail: students.ok ? "正常" : (students.stderr || students.stdout || "读取失败") },
    commute: { ok: commute.ok, label: "通勤矩阵", detail: commute.ok ? "正常" : (commute.stderr || commute.stdout || "读取失败") },
    futureTimeline: { ok: futureTimeline.ok, label: "后续课程", detail: futureTimeline.ok ? "正常" : (futureTimeline.stderr || futureTimeline.stdout || "读取失败") },
  };
  const readsOk = Object.values(readHealth).every((item) => item.ok);
  return {
    ok: readsOk && health.data?.data?.ok !== false,
    observedAt: timeline.data?.observed_at ?? new Date().toISOString(),
    localDate: currentDate,
    scope: allowedScope,
    range: timelineData.range ?? "",
    items: timelineData.items ?? [],
    affairs: affairItems,
    courses: courseItems,
    pending: pendingItems,
    health: {
      ...(healthData || {}),
      ok: readsOk && healthData?.ok !== false,
      reads: readHealth,
      readOk: readsOk,
    },
    scheduleText: outputText(schedule),
    students: studentItems,
    nextCourse: nextCourseContext.nextCourse,
    commuteAdvice: nextCourseContext.commuteAdvice,
    warnings,
  };
}

function mondayOf(dateText) {
  const date = new Date(`${dateText}T12:00:00Z`);
  const weekday = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() - weekday + 1);
  return date.toISOString().slice(0, 10);
}

function planningSource(label, result) {
  return {
    label,
    ok: Boolean(result.ok),
    errorCode: result.data?.error_code ?? null,
    observedAt: result.data?.observed_at ?? null,
    message: result.ok ? "" : (result.data?.output || result.stderr || result.stdout || "读取失败"),
  };
}

export function buildPlanningStudents(studentItems, onboardingData, pendingData, confirmedData, vacationData, currentDate, planningEnd, reservationData = {}) {
  const onboardingMap = new Map();
  for (const group of onboardingData.zones ?? []) {
    for (const item of group.students ?? []) {
      onboardingMap.set(item.student, {
        zone: item.zone || group.zone || "未分区",
        boundaryZones: item.boundary_zones ?? [],
        availability: item.availability ?? [],
      });
    }
  }
  const pendingMap = new Map((pendingData.entries ?? []).map((item) => [item.student, item]));
  const confirmed = new Set(confirmedData.students ?? []);
  const reservationStudents = new Set(
    (reservationData.reservations ?? [])
      .filter((item) => item.status === "预期" || item.status === "已确认")
      .flatMap((item) => [item.student, item.source_name].filter(Boolean)),
  );
  const vacationsByStudent = new Map();
  for (const item of vacationData.vacations ?? []) {
    if (item.end_date < currentDate || item.start_date > planningEnd) continue;
    vacationsByStudent.set(item.student, [...(vacationsByStudent.get(item.student) ?? []), item]);
  }

  return studentItems.filter((student) => student.status === "在读").map((student) => {
    const displayName = student.nickname || student.name;
    const detail = onboardingMap.get(displayName) ?? onboardingMap.get(student.name) ?? {
      zone: "未分区",
      boundaryZones: [],
      availability: [],
    };
    const weekdayOrder = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    const sortedAvailability = [...detail.availability].sort((a, b) => weekdayOrder.indexOf(a.weekday) - weekdayOrder.indexOf(b.weekday) || a.start_time.localeCompare(b.start_time));
    const pending = pendingMap.get(displayName) ?? pendingMap.get(student.name) ?? null;
    const vacations = vacationsByStudent.get(displayName) ?? vacationsByStudent.get(student.name) ?? [];
    const isConfirmed = confirmed.has(displayName) || confirmed.has(student.name);
    const issues = [];
    if (!isConfirmed) issues.push("未确认");
    if (!detail.zone || detail.zone === "未分区") issues.push("未分区");
    const hasReservation = reservationStudents.has(displayName) || reservationStudents.has(student.name);
    if (!sortedAvailability.length && !hasReservation) issues.push("缺候选时间");
    if (pending) issues.push(`待定${pending.weekday ? `·${pending.weekday}` : ""}`);
    if (vacations.length) issues.push("出游中/即将出游");
    return {
      name: displayName,
      sourceName: student.name,
      duration: student.default_duration,
      confirmed: isConfirmed,
      pendingWeekday: pending?.weekday ?? null,
      zone: detail.zone || "未分区",
      boundaryZones: detail.boundaryZones,
      availability: sortedAvailability,
      hasReservation,
      vacations,
      issues,
    };
  }).sort((a, b) => b.issues.length - a.issues.length || a.name.localeCompare(b.name, "zh-CN"));
}

export function buildTemplateDiagnostics(templates, planningStudents, commuteData) {
  const studentMap = new Map(planningStudents.map((student) => [student.name, student]));
  const routeMap = new Map((commuteData.routes ?? []).map((route) => [`${route.from_student}\u0000${route.to_student}`, route]));
  const byWeekday = new Map();
  for (const template of templates) {
    if (template.student_status !== "在读") continue;
    byWeekday.set(template.weekday, [...(byWeekday.get(template.weekday) ?? []), template]);
  }
  const overlaps = [];
  const missingAvailability = [];
  const requiredRoutes = [];
  const missingRoutes = [];
  for (const [weekday, entries] of byWeekday) {
    entries.sort((a, b) => a.start_time.localeCompare(b.start_time));
    entries.forEach((entry) => {
      const student = studentMap.get(entry.student);
      const windows = student?.availability?.filter((window) => window.weekday === weekday) ?? [];
      const covered = windows.some((window) => window.start_time <= entry.start_time && entry.end_time <= window.end_time);
      if (!covered) missingAvailability.push({
        templateId: entry.template_id,
        student: entry.student,
        weekday,
        startTime: entry.start_time,
        endTime: entry.end_time,
      });
    });
    for (let index = 1; index < entries.length; index += 1) {
      const previous = entries[index - 1];
      const current = entries[index];
      if (current.start_time < previous.end_time) {
        overlaps.push({
          weekday,
          first: previous.student,
          second: current.student,
          firstRange: `${previous.start_time}-${previous.end_time}`,
          secondRange: `${current.start_time}-${current.end_time}`,
        });
        continue;
      }
      if (previous.student === current.student) continue;
      const route = { weekday, from: previous.student, to: current.student, gapStart: previous.end_time, gapEnd: current.start_time };
      requiredRoutes.push(route);
      if (!routeMap.has(`${previous.student}\u0000${current.student}`)) missingRoutes.push(route);
    }
  }
  return {
    templateCount: templates.length,
    overlaps,
    availabilityConflicts: missingAvailability,
    requiredRouteCount: requiredRoutes.length,
    missingRoutes,
    ready: overlaps.length === 0 && missingRoutes.length === 0,
  };
}

export async function getPlanningData() {
  const currentDate = logicalDateParts();
  const planningEndDate = new Date(`${currentDate}T12:00:00Z`);
  planningEndDate.setUTCDate(planningEndDate.getUTCDate() + 75);
  const planningEnd = planningEndDate.toISOString().slice(0, 10);
  const entries = await Promise.all([
    ["预留", runSchedule(["reservation", "list", currentDate, planningEnd])],
    ["片区", runSchedule(["zone", "list"])],
    ["开学采集", runSchedule(["onboarding", "preview", currentDate, planningEnd])],
    ["可用时间", runSchedule(["availability", "list"])],
    ["复核", runSchedule(["review", "list"])],
    ["过期课", runSchedule(["quarantine-overdue"])],
    ["通勤", runSchedule(["commute", "matrix"])],
    ["待定名单", runSchedule(["pending", "list"])],
    ["确认名单", runSchedule(["confirm", "list"])],
    ["出游", runSchedule(["vacation", "list"])],
    ["固定模板", runSchedule(["template", "list"])],
    ["逻辑审查", runSchedule(["audit"])],
    ["学生", runSchedule(["student", "list"])],
    ["契约", runSchedule(["--help"])],
  ].map(async ([label, promise]) => [label, await promise]));
  const resultByLabel = new Map();
  for (const [label, result] of entries) resultByLabel.set(label, result);
  const get = (label) => resultByLabel.get(label);
  const reservations = get("预留");
  const zones = get("片区");
  const onboarding = get("开学采集");
  const availability = get("可用时间");
  const reviews = get("复核");
  const overduePreview = get("过期课");
  const commute = get("通勤");
  const pending = get("待定名单");
  const confirmed = get("确认名单");
  const vacations = get("出游");
  const templates = get("固定模板");
  const audit = get("逻辑审查");
  const students = get("学生");
  const capabilities = get("契约");

  const onboardingData = onboarding.data?.data ?? { zones: [], reservations: [], formal_courses: [], students_missing_availability: [] };
  const reservationData = reservations.data?.data ?? { reservations: [], count: 0 };
  const activeReservations = (reservationData.reservations ?? []).filter((item) => item.status !== "已取消");
  const reviewData = reviews.data?.data ?? { courses: [], count: 0 };
  const pendingData = pending.data?.data ?? { entries: [], count: 0 };
  const confirmedData = confirmed.data?.data ?? { students: [], count: 0 };
  const vacationData = vacations.data?.data ?? { vacations: [], count: 0 };
  const templateData = templates.data?.data ?? { templates: [], count: 0 };
  const commuteData = commute.data?.data ?? { routes: [], route_count: 0, students: [] };
  const auditData = audit.data?.data ?? {
    summary: {}, reservation_availability_advisories: [], reservation_hard_blockers: [],
    template_availability_advisories: [], inconsistent_weekly_limits: [], broken_confirmations: [], policy: {},
  };
  const studentItems = students.data?.data?.students ?? [];
  const planningStudents = buildPlanningStudents(
    studentItems, onboardingData, pendingData, confirmedData, vacationData,
    currentDate, planningEnd, reservationData,
  );
  const activeNames = new Set(planningStudents.flatMap((student) => [student.name, student.sourceName]));
  const inactiveConfirmed = (confirmedData.students ?? []).filter((name) => !activeNames.has(name));
  const templateDiagnostics = buildTemplateDiagnostics(templateData.templates ?? [], planningStudents, commuteData);
  const overdueText = outputText(overduePreview);
  const sources = entries.map(([label, result]) => planningSource(label, result));
  const warnings = sources.filter((source) => !source.ok).map((source) => `${source.label}：${source.message}`);

  return {
    ok: sources.every((source) => source.ok),
    observedAt: new Date().toISOString(),
    localDate: currentDate,
    weekMonday: mondayOf(currentDate),
    range: `${currentDate}..${planningEnd}`,
    contract: {
      version: capabilities.data?.contract_version ?? null,
      schemaVersion: capabilities.data?.schema_version ?? null,
    },
    summary: {
      activeStudentCount: planningStudents.length,
      unzonedCount: planningStudents.filter((student) => student.zone === "未分区").length,
      missingAvailabilityCount: planningStudents.filter((student) => !student.availability.length && !student.hasReservation).length,
      unconfirmedActiveCount: planningStudents.filter((student) => !student.confirmed).length,
      inactiveConfirmedCount: inactiveConfirmed.length,
      pendingCount: pendingData.count ?? 0,
      reservationCount: activeReservations.length,
      formalCourseCount: onboardingData.formal_courses?.length ?? 0,
      reviewCount: reviewData.count ?? 0,
      overdueCount: Number(String(overdueText).match(/(\d+) 节过期课程/)?.[1] || 0),
      activeVacationCount: planningStudents.filter((student) => student.vacations.length).length,
      templateCount: templateData.count ?? 0,
      availabilityWindowCount: availability.data?.data?.window_count ?? 0,
      reservationAvailabilityAdvisoryCount: auditData.summary?.reservation_availability_advisories ?? 0,
      reservationHardBlockerCount: auditData.summary?.reservation_hard_blockers ?? 0,
      templateAvailabilityAdvisoryCount: auditData.summary?.template_availability_advisories ?? 0,
    },
    students: planningStudents,
    inactiveConfirmed,
    pending: pendingData.entries ?? [],
    confirmed: confirmedData.students ?? [],
    reservations: activeReservations,
    audit: auditData,
    reviews: reviewData.courses ?? [],
    vacations: (vacationData.vacations ?? []).filter((item) => item.end_date >= currentDate && item.start_date <= planningEnd),
    zones: zones.data?.data?.groups ?? [],
    availability: availability.data?.data?.availability ?? [],
    commute: {
      routeCount: commuteData.route_count ?? 0,
      ...templateDiagnostics,
    },
    templates: templateData.templates ?? [],
    sources,
    warnings,
    raw: {
      onboarding: outputText(onboarding),
      reservations: outputText(reservations),
      zones: outputText(zones),
      availability: outputText(availability),
      reviews: outputText(reviews),
      overdue: overdueText,
      audit: outputText(audit),
    },
  };
}

export async function previewTemplateWeek(mondayDate) {
  const monday = requireDate(mondayDate, "周一日期");
  if (mondayOf(monday) !== monday) throw new Error("模板预演日期必须是周一");
  await assertContract("schedule");
  const result = await runSchedule(["generate", monday, "--dry-run"]);
  return {
    ok: true,
    passed: Boolean(result.ok),
    monday,
    errorCode: result.data?.error_code ?? null,
    output: outputText(result),
    affectedDates: result.data?.affected_dates ?? [],
  };
}

function parseCommuteMatrix(text = "") {
  const lines = String(text).split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return new Map();
  const headers = lines[0].split("\t").slice(1);
  const map = new Map();
  for (const line of lines.slice(1)) {
    const cells = line.split("\t");
    const from = cells[0];
    headers.forEach((to, index) => {
      const raw = cells[index + 1];
      if (raw && raw !== "—" && /^\d+$/.test(raw)) map.set(`${from}\u0000${to}`, Number(raw));
    });
  }
  return map;
}

// W10: 把课程时间字符串归一化为带时区的时间戳。naive（无偏移）按 Asia/Shanghai (+08:00) 解析。
function dateTs(value) {
  if (!value) return NaN;
  const text = String(value);
  const hasOffset = /[zZ]|[+-]\d{2}:\d{2}$/.test(text);
  return new Date(hasOffset ? text : `${text}+08:00`).getTime();
}

function buildNextCourseContext(courses, commuteMap) {
  const now = Date.now();
  const sorted = [...courses]
    .filter((course) => course.start_at && dateTs(course.start_at) >= now && !["已完成", "已取消"].includes(course.status))
    .sort((a, b) => dateTs(a.start_at) - dateTs(b.start_at));
  const nextCourse = sorted[0] ?? null;
  if (!nextCourse) return { nextCourse: null, commuteAdvice: null };

  const date = nextCourse.start_at.slice(0, 10);
  const previous = [...courses]
    .filter((course) => course.end_at && course.start_at?.slice(0, 10) === date && dateTs(course.end_at) <= dateTs(nextCourse.start_at) && !["已取消", "cancelled"].includes(course.status))
    .sort((a, b) => dateTs(b.end_at) - dateTs(a.end_at))[0] ?? null;

  if (!previous) {
    return {
      nextCourse,
      commuteAdvice: { available: false, reason: "这是当天第一节课，系统未配置固定出发起点。" },
    };
  }

  const minutes = commuteMap.get(`${previous.student_name || previous.title}\u0000${nextCourse.student_name || nextCourse.title}`);
  const gapMinutes = Math.round((dateTs(nextCourse.start_at) - dateTs(previous.end_at)) / 60_000);
  if (minutes === undefined) {
    return {
      nextCourse,
      commuteAdvice: { available: false, from: previous.title, to: nextCourse.title, gapMinutes, reason: "缺少这两位学生之间的通勤记录。" },
    };
  }
  return {
    nextCourse,
    commuteAdvice: {
      available: true,
      from: previous.title,
      to: nextCourse.title,
      minutes,
      gapMinutes,
      leaveBy: new Date(dateTs(nextCourse.start_at) - minutes * 60_000).toISOString(),
      tight: gapMinutes < minutes,
    },
  };
}

function requireText(value, label) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) throw new Error(`${label}不能为空`);
  return text;
}

function requireDate(value, label) {
  const text = requireText(value, label);
  if (!DATE_RE.test(text)) throw new Error(`${label}格式应为 YYYY-MM-DD`);
  return text;
}

function nextDate(dateText) {
  const date = new Date(`${dateText}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function requireTime(value, label) {
  const text = requireText(value, label);
  if (!TIME_RE.test(text)) throw new Error(`${label}格式应为 HH:MM`);
  return text;
}

function requireAffairId(value) {
  const text = requireText(value, "事务 ID");
  if (!AFFAIR_ID_RE.test(text)) throw new Error("事务 ID 格式无效");
  return text;
}

function shanghaiDateTime(dateValue, timeValue, label) {
  const date = requireDate(dateValue, `${label}日期`);
  const time = requireTime(timeValue, `${label}时刻`);
  return `${date}T${time}:00+08:00`;
}

export function buildOperation(input = {}, dryRun = true) {
  const operation = requireText(input.operation, "操作类型");
  if (operation === "course_move") {
    const student = requireText(input.student, "学生");
    const fromDate = requireDate(input.fromDate, "原日期");
    const fromTime = requireTime(input.fromTime, "原时间");
    const toDate = requireDate(input.toDate, "新日期");
    const toTime = requireTime(input.toTime, "新时间");
    const args = ["move", student, fromDate, fromTime, toDate, toTime];
    if (input.duration !== undefined && input.duration !== null && String(input.duration).trim()) {
      const duration = Number(input.duration);
      if (!Number.isInteger(duration) || duration < 1 || duration > 480) throw new Error("时长需为 1–480 分钟整数");
      args.push("--duration", String(duration));
    }
    if (input.overrideAvailability === true || input.overrideAvailability === "true" || input.overrideAvailability === "on") {
      args.push("--override-availability");
    }
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `调课：${student} ${fromDate} ${fromTime} → ${toDate} ${toTime}`,
      syncAfter: true,
    };
  }

  if (operation === "course_cancel") {
    const student = requireText(input.student, "学生");
    const date = requireDate(input.date, "取消日期");
    const time = requireTime(input.time, "取消时间");
    const args = ["cancel", student, date, "--time", time];
    if (input.reason && String(input.reason).trim()) args.push("--reason", String(input.reason).trim());
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `取消课程：${student} ${date} ${time}`,
      exportAfter: false,
      syncAfter: true,
    };
  }

  if (operation === "reservation_add") {
    const student = requireText(input.student, "学生");
    const date = requireDate(input.date, "预留日期");
    const time = requireTime(input.time, "预留时间");
    const args = ["reservation", "add", student, date, time];
    if (input.duration !== undefined && input.duration !== null && String(input.duration).trim()) {
      const duration = Number(input.duration);
      if (!Number.isInteger(duration) || duration < 1 || duration > 480) throw new Error("预留时长必须是 1–480 分钟");
      args.push(String(duration));
    }
    if (input.zone && String(input.zone).trim()) args.push("--zone", String(input.zone).trim());
    if (input.note && String(input.note).trim()) args.push("--note", String(input.note).trim());
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `预留课程：${student} ${date} ${time}`,
      exportAfter: false,
      syncAfter: false,
    };
  }

  if (operation === "reservation_update") {
    const reservationId = requireText(input.reservationId || input.id, "预留ID");
    if (!/^res_[a-f0-9]{16}$/.test(reservationId)) throw new Error("预留ID格式无效");
    const date = requireDate(input.date, "预留日期");
    const time = requireTime(input.time, "预留时间");
    const args = ["reservation", "update", reservationId, date, time];
    if (input.duration !== undefined && input.duration !== null && String(input.duration).trim()) {
      const duration = Number(input.duration);
      if (!Number.isInteger(duration) || duration < 1 || duration > 480) throw new Error("预留时长必须是 1–480 分钟");
      args.push(String(duration));
    }
    if (input.zone !== undefined) args.push("--zone", String(input.zone || "").trim());
    if (input.note !== undefined) args.push("--note", String(input.note || "").trim());
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `修改预留：${reservationId} → ${date} ${time}`,
      exportAfter: false,
      syncAfter: false,
    };
  }

  if (["reservation_confirm", "reservation_cancel"].includes(operation)) {
    const reservationId = requireText(input.reservationId || input.id, "预留ID");
    if (!/^res_[a-f0-9]{16}$/.test(reservationId)) throw new Error("预留ID格式无效");
    const action = operation === "reservation_confirm" ? "confirm" : "cancel";
    const args = ["reservation", action, reservationId];
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `${action === "confirm" ? "确认" : "取消"}预留：${reservationId}`,
      exportAfter: false,
      syncAfter: action === "confirm",
    };
  }

  if (operation === "zone_set") {
    const student = requireText(input.student, "学生");
    const zone = requireText(input.zone, "片区");
    const boundaries = String(input.boundaryZones || input.boundaries || "").split(/[、,，]/).map((item) => item.trim()).filter(Boolean);
    const args = ["zone", "set", student, zone];
    if (boundaries.length) args.push(boundaries.join(","));
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `设置片区：${student} → ${zone}${boundaries.length ? `（相邻：${boundaries.join("、")}）` : ""}`,
      exportAfter: true,
      syncAfter: false,
    };
  }

  if (["availability_set", "availability_clear"].includes(operation)) {
    const student = requireText(input.student, "学生");
    const weekday = requireText(input.weekday, "星期");
    if (!/^周[一二三四五六日]$/.test(weekday)) throw new Error("星期必须是周一至周日");
    const args = ["availability", operation === "availability_set" ? "set" : "clear", student, weekday];
    if (operation === "availability_set") {
      const windows = (Array.isArray(input.windows) ? input.windows : String(input.windows || "").split(/[、,，\s]+/))
        .map((item) => String(item).trim()).filter(Boolean);
      if (!windows.length || windows.some((window) => !/^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d$/.test(window))) {
        throw new Error("可用时间格式应类似 14:00-16:00，多段用顿号分隔");
      }
      args.push(...windows);
    }
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: operation === "availability_set"
        ? `设置可用时间：${student} ${weekday}`
        : `清空可用时间：${student} ${weekday}`,
      exportAfter: true,
      syncAfter: false,
    };
  }

  if (operation === "commute_set") {
    const fromStudent = requireText(input.fromStudent, "出发学生");
    const toStudent = requireText(input.toStudent, "到达学生");
    if (fromStudent === toStudent) throw new Error("通勤起点和终点不能相同");
    const minutes = Number(input.minutes);
    if (!Number.isInteger(minutes) || minutes < 0 || minutes > 600) throw new Error("通勤时间必须是 0–600 分钟整数");
    const transport = String(input.transport || "driving").trim() || "driving";
    const args = ["commute", "set", fromStudent, toStudent, String(minutes), transport];
    if (input.note && String(input.note).trim()) args.push(String(input.note).trim());
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `记录通勤：${fromStudent} → ${toStudent} ${minutes} 分钟`,
      exportAfter: true,
      syncAfter: false,
    };
  }

  if (operation === "quarantine_overdue") {
    return {
      operation,
      kind: "schedule",
      args: dryRun ? ["quarantine-overdue"] : ["quarantine-overdue", "--commit"],
      summary: "把过期待上课程转入人工复核",
      exportAfter: true,
      syncAfter: false,
    };
  }

  if (operation === "course_review_resolve") {
    const courseId = Number(input.courseId || input.id);
    if (!Number.isInteger(courseId) || courseId < 1) throw new Error("课程ID无效");
    const resolution = input.resolution === "cancelled" ? "cancelled" : input.resolution === "done" ? "done" : null;
    if (!resolution) throw new Error("复核结果必须是 done 或 cancelled");
    return {
      operation,
      kind: "schedule",
      args: ["review", "resolve", String(courseId), resolution],
      summary: `复核课程 ${courseId}：${resolution === "done" ? "已完成" : "未上课"}`,
      exportAfter: false,
      syncAfter: true,
    };
  }

  if (operation === "course_day_complete") {
    const date = requireDate(input.date, "完成日期");
    return {
      operation,
      kind: "schedule",
      args: ["mark-completed", date],
      summary: `完成 ${date} 当日课程`,
      exportAfter: true,
      syncAfter: true,
    };
  }

  if (operation === "course_add") {
    const student = requireText(input.student, "学生");
    const date = requireDate(input.date, "日期");
    const time = requireTime(input.time, "时间");
    const duration = Number(input.duration);
    if (!Number.isInteger(duration) || duration < 1 || duration > 480) throw new Error("时长需为 1–480 分钟整数");
    const args = ["add", student, date, time, String(duration)];
    if (input.note && String(input.note).trim()) args.push(String(input.note).trim());
    if (input.overrideAvailability === true || input.overrideAvailability === "true" || input.overrideAvailability === "on") {
      args.push("--override-availability");
    }
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "schedule",
      args,
      summary: `新建课程：${student} ${date} ${time}（${duration} 分钟）`,
      syncAfter: true,
    };
  }

  if (operation === "affair_create") {
    const affairKind = requireText(input.affairKind, "事务类型");
    if (!["timed", "deadline", "fuzzy", "retry"].includes(affairKind)) throw new Error("事务类型无效");
    const title = requireText(input.title, "标题");
    const args = ["create", affairKind, "--title", title];
    if (affairKind === "timed") {
      args.push("--start", shanghaiDateTime(input.startDate, input.startTime, "开始时间"));
      if (input.duration) {
        const duration = Number(input.duration);
        if (!Number.isInteger(duration) || duration < 1 || duration > 1440) throw new Error("预计时长需为 1–1440 分钟整数");
        args.push("--duration", String(duration));
      }
    } else if (affairKind === "deadline") {
      args.push("--deadline", shanghaiDateTime(input.deadlineDate, input.deadlineTime, "截止时间"));
    } else if (affairKind === "fuzzy") {
      const start = requireDate(input.windowStart, "窗口开始日期");
      const end = input.windowEnd ? requireDate(input.windowEnd, "窗口结束日期") : start;
      args.push("--window", start === end ? start : `${start}..${end}`);
    } else {
      const remindAt = input.remindAt ? requireTime(input.remindAt, "提醒时间") : "19:30";
      if (input.candidateDates && String(input.candidateDates).trim()) {
        const dates = String(input.candidateDates).split(",").map((item) => requireDate(item.trim(), "候选日期"));
        args.push("--candidate-dates", dates.join(","));
      } else {
        const weekdays = requireText(input.weekdays, "候选星期");
        if (!/^(mon|tue|wed|thu|fri|sat|sun)(,(mon|tue|wed|thu|fri|sat|sun))*$/.test(weekdays)) throw new Error("候选星期格式应类似 mon,wed");
        args.push("--weekdays", weekdays, "--start-week", requireDate(input.startWeek, "起始周"));
      }
      args.push("--remind-at", remindAt);
    }
    if (input.priority && ["low", "normal", "high", "urgent"].includes(String(input.priority))) args.push("--priority", String(input.priority));
    args.push("--actor", "hana-plugin");
    if (input.requestId && /^[a-f0-9-]{36}$/.test(String(input.requestId))) args.push("--request-id", String(input.requestId));
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "affairs",
      args,
      summary: `新建事务：${title}`,
      syncAfter: true,
    };
  }

  if (["affair_complete", "affair_retry_next", "affair_cancel"].includes(operation)) {
    const id = requireAffairId(input.id);
    const command = operation === "affair_complete"
      ? "complete"
      : operation === "affair_retry_next" ? "retry-next" : "cancel";
    const args = [command, id];
    if (operation === "affair_retry_next" && input.expectedVersion !== undefined && input.expectedVersion !== null && String(input.expectedVersion).trim()) {
      const version = Number(input.expectedVersion);
      if (!Number.isInteger(version) || version < 1) throw new Error("版本号无效");
      args.push("--expected-version", String(version));
    }
    args.push("--actor", "hana-plugin");
    if (input.requestId && /^[a-f0-9-]{36}$/.test(String(input.requestId))) {
      args.push("--request-id", String(input.requestId));
    }
    if (dryRun) args.push("--dry-run");
    const label = operation === "affair_complete" ? "完成事务" : operation === "affair_retry_next" ? "推进重试日期" : "取消事务";
    return {
      operation,
      kind: "affairs",
      args,
      summary: `${label}：${id}`,
      syncAfter: true,
    };
  }

  if (operation === "calendar_sync") {
    const args = ["--prune"];
    if (input.week) args.push("--week", requireDate(input.week, "周日期"));
    if (dryRun) args.push("--dry-run");
    return {
      operation,
      kind: "calendar",
      args,
      summary: `同步飞书日历${input.week ? `：${input.week} 所在周` : "：当前周"}`,
      syncAfter: false,
    };
  }

  throw new Error("暂不支持此操作");
}

function previewsDir(dataDir) {
  return path.join(dataDir, "previews");
}

function previewPath(dataDir, token) {
  if (!/^[a-f0-9-]{36}$/.test(token)) throw new Error("预览令牌无效");
  return path.join(previewsDir(dataDir), `${token}.json`);
}

const RECOVERED_PREVIEW_RETENTION_MS = 24 * 60 * 60 * 1000;

export function recoverInterruptedPreviews(dataDir) {
  const dir = previewsDir(dataDir);
  if (!fs.existsSync(dir)) return 0;
  let recovered = 0;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".json")) continue;
    const file = path.join(dir, name);
    try {
      const record = JSON.parse(fs.readFileSync(file, "utf8"));
      if (record.status !== "committing") continue;
      const recoveredAt = Date.now();
      writeJsonAtomic(file, {
        ...record,
        status: "failed",
        canCommit: false,
        interrupted: true,
        recoveredAt,
        updatedAt: recoveredAt,
        lastError: "提交进程曾中断，已锁定该预演；请先回读课表确认真实结果，再重新预演",
      });
      appendAudit(dataDir, "preview_recovered", { token: record.token, operation: record.input?.operation || null, recoveredAt });
      recovered += 1;
    } catch {
      fs.rmSync(file, { force: true });
    }
  }
  return recovered;
}

// 清理过期 preview；中断恢复记录保留 24 小时，便于核对真实提交结果。
export function pruneStalePreviews(dataDir) {
  const dir = previewsDir(dataDir);
  if (!fs.existsSync(dir)) return;
  const now = Date.now();
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".json")) continue;
    const file = path.join(dir, name);
    try {
      const record = JSON.parse(fs.readFileSync(file, "utf8"));
      if (record.status === "committing" && record.expiresAt < now) {
        const recoveredAt = now;
        writeJsonAtomic(file, {
          ...record,
          status: "failed",
          canCommit: false,
          interrupted: true,
          recoveredAt,
          updatedAt: recoveredAt,
          lastError: "提交进程超时中断，已锁定该预演；请先回读课表确认真实结果",
        });
        continue;
      }
      if (record.recoveredAt && now - record.recoveredAt < RECOVERED_PREVIEW_RETENTION_MS) continue;
      if (record.expiresAt < now) fs.rmSync(file, { force: true });
    } catch {
      fs.rmSync(file, { force: true });
    }
  }
}

async function createSchedulePlanPreview(input) {
  const moves = Array.isArray(input.moves) ? input.moves : [];
  if (moves.length < 2 || moves.length > 20) throw new Error("批量计划需要 2–20 项调课");
  const moveSpecs = moves.map((move) => buildOperation({ ...move, operation: "course_move" }, false));
  await assertContract("schedule");
  const title = input.title && String(input.title).trim() ? String(input.title).trim() : `工作台批量调课 ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}`;
  const created = await runSchedule(["plan", "create", "--title", title, "--source-session", "laosu-workbench"]);
  const planId = created.data?.plan_id;
  if (!created.ok || !planId) return { result: created, planId: null, baseline: null, summary: `批量调课计划：${title}` };

  for (const moveSpec of moveSpecs) {
    const added = await runSchedule(["plan", "add", planId, ...moveSpec.args]);
    if (!added.ok) return { result: added, planId, baseline: created.data?.baseline_db_revision ?? null, summary: `批量调课计划：${title}` };
  }

  const preview = await runSchedule(["plan", "preview", planId]);
  const shown = await runSchedule(["plan", "show", planId]);
  const baseline = shown.data?.data?.baseline_db_revision ?? created.data?.baseline_db_revision ?? null;
  const merged = {
    ...preview,
    ok: Boolean(preview.ok && shown.ok && Number.isInteger(baseline)),
    data: {
      ...(preview.data || {}),
      baseline_db_revision: baseline,
      plan_show: shown.data?.data ?? null,
    },
    stdout: preview.stdout || JSON.stringify(preview.data || {}, null, 2),
  };
  return { result: merged, planId, baseline, summary: `批量调课计划：${title}` };
}

export async function createPreview(dataDir, input) {
  const token = crypto.randomUUID();
  const storedInput = { ...input, requestId: token };
  let spec;
  let result;
  let planId = null;
  let baseline = null;
  let reviewSnapshot = null;
  if (storedInput.operation === "course_review_resolve") {
    const courseId = Number(storedInput.courseId || storedInput.id);
    if (!Number.isInteger(courseId) || courseId < 1) throw new Error("课程ID无效");
    const resolution = storedInput.resolution === "cancelled" ? "cancelled" : storedInput.resolution === "done" ? "done" : null;
    if (!resolution) throw new Error("复核结果必须是 done 或 cancelled");
    await assertContract("schedule");
    const courseResult = await runSchedule(["note", "get", String(courseId)]);
    reviewSnapshot = courseResult.data?.output || courseResult.stdout;
    const ok = Boolean(courseResult.ok && reviewSnapshot.includes("待确认"));
    result = {
      ...courseResult,
      ok,
      data: {
        ok,
        command: "review",
        dry_run: true,
        committed: false,
        affected_dates: [],
        output: ok
          ? `${reviewSnapshot}\n将复核为：${resolution === "done" ? "已完成" : "未上课/已取消"}`
          : `${reviewSnapshot}\n这节课当前不是待确认状态，不能复核`,
      },
    };
    spec = { operation: "course_review_resolve", kind: "schedule", summary: `复核课程 ${courseId}`, exportAfter: true, syncAfter: true };
  } else if (storedInput.operation === "course_day_complete") {
    const date = requireDate(storedInput.date, "完成日期");
    await assertContract("schedule");
    const eventsResult = await runSchedule(["events", date, nextDate(date)]);
    const courses = eventsResult.data?.data?.events ?? [];
    const pendingCourses = courses.filter((course) => course.status === "待上课");
    const ok = Boolean(eventsResult.ok && pendingCourses.length > 0);
    result = {
      ...eventsResult,
      ok,
      data: {
        ok,
        command: "mark-completed",
        dry_run: true,
        committed: false,
        affected_dates: [date],
        output: ok
          ? `将把 ${date} 的 ${pendingCourses.length} 节待上课程标记为已完成：${pendingCourses.map((course) => course.title).join("、")}`
          : `${date} 没有待上课程，无需提交`,
        data: { courses: pendingCourses, count: pendingCourses.length },
      },
    };
    spec = { operation: "course_day_complete", kind: "schedule", summary: `完成 ${date} 当日课程`, exportAfter: true, syncAfter: true };
  } else if (storedInput.operation === "course_plan") {
    const planPreview = await createSchedulePlanPreview(storedInput);
    result = planPreview.result;
    planId = planPreview.planId;
    baseline = planPreview.baseline;
    spec = { operation: "course_plan", kind: "schedule", summary: planPreview.summary, syncAfter: true };
  } else {
    spec = buildOperation(storedInput, true);
    await assertContract(spec.kind);
    result = spec.kind === "schedule"
      ? await runSchedule(spec.args)
      : spec.kind === "affairs"
        ? await runAffairs(spec.args)
        : await runCalendarSync(spec.args);
  }

  const record = {
    token,
    createdAt: Date.now(),
    expiresAt: Date.now() + PREVIEW_TTL_MS,
    input: storedInput,
    summary: spec.summary,
    preview: result,
    planId,
    baseline,
    reviewSnapshot,
    canCommit: Boolean(result.ok),
    status: "pending",
  };
  pruneStalePreviews(dataDir);
  fs.mkdirSync(previewsDir(dataDir), { recursive: true });
  writeJsonAtomic(previewPath(dataDir, token), record);
  appendAudit(dataDir, "preview", {
    token,
    operation: spec.operation,
    summary: spec.summary,
    ok: result.ok,
    committed: false,
  });
  return record;
}

function updatePreviewRecord(dataDir, token, patch) {
  const file = previewPath(dataDir, token);
  if (!fs.existsSync(file)) return null;
  const record = JSON.parse(fs.readFileSync(file, "utf8"));
  const updated = { ...record, ...patch, updatedAt: Date.now() };
  writeJsonAtomic(file, updated);
  return updated;
}

export function getPreview(dataDir, token, options = {}) {
  const file = previewPath(dataDir, token);
  if (!fs.existsSync(file)) throw new Error("预览不存在或已经使用");
  const record = JSON.parse(fs.readFileSync(file, "utf8"));
  if (record.status === "committing" && !options.allowCommitting) throw new Error("该预演正在提交，请稍后查看结果");
  if (record.status === "committed") throw new Error("该预演已经提交");
  if (record.expiresAt < Date.now()) {
    updatePreviewRecord(dataDir, token, { status: "expired", canCommit: false });
    throw new Error("预览已过期，请重新预演");
  }
  return record;
}

async function commitPreviewUnsafe(dataDir, token) {
  const record = getPreview(dataDir, token, { allowCommitting: true });
  if (!record.canCommit) throw new Error("预演未通过，不能提交");

  if (record.input.operation === "course_plan") {
    await assertContract("schedule");
    if (!record.planId || !Number.isInteger(record.baseline)) throw new Error("计划缺少提交所需的数据库版本，请重新预演");
    const backup = await runSchedule(["backup", `pre-plan-${record.planId}`]);
    if (!backup.ok) throw new Error("计划提交前备份失败，已停止提交");
    const primary = await runSchedule(["plan", "commit", record.planId, "--expected-db-revision", String(record.baseline)]);
    const verificationOk = primary.data?.data?.verification?.ok === true;
    const dayReadsOk = !primary.data?.data?.day_reads || Object.values(primary.data.data.day_reads).every((item) => item?.ok === true);
    const primaryVerified = Boolean(
      primary.ok === true
      && primary.exitCode === 0
      && primary.data?.ok === true
      && primary.data?.committed === true
      && primary.data?.dry_run === false
      && !primary.data?.error_code
      && backup.ok
      && verificationOk
      && dayReadsOk
    );
    const exported = primaryVerified ? await runSchedule(["export"]) : null;
    const sync = primaryVerified && exported?.ok
      ? queueCalendarSyncAfterCommit(dataDir, { token, operation: "course_plan", summary: record.summary })
      : null;
    // 日历同步是提交后的旁路动作；排课主提交完成后立即返回，由后台队列继续同步。
    const ok = Boolean(primaryVerified && exported?.ok);
    appendAudit(dataDir, "commit", {
      token,
      operation: "course_plan",
      summary: record.summary,
      ok,
      primaryCommitted: Boolean(primary.data?.committed),
      exportOk: exported ? exported.ok : null,
      syncQueued: Boolean(sync?.queued),
      syncOk: sync && !sync.queued ? sync.ok : null,
    });
    return { ok, summary: record.summary, primary, export: exported, sync, backup };
  }

  if (record.input.operation === "course_review_resolve") {
    const courseId = Number(record.input.courseId || record.input.id);
    const fresh = await runSchedule(["note", "get", String(courseId)]);
    const freshSnapshot = fresh.data?.output || fresh.stdout;
    if (!fresh.ok || !freshSnapshot.includes("待确认") || freshSnapshot !== record.reviewSnapshot) {
      throw new Error("课程复核状态已经变化，请重新预演");
    }
  }

  const spec = buildOperation(record.input, false);
  await assertContract(spec.kind);
  if (spec.kind === "affairs") await assertAffairsWriterAvailable();

  const primary = spec.kind === "schedule"
    ? await runSchedule(spec.args)
    : spec.kind === "affairs"
      ? await runAffairs(spec.args)
      : await runCalendarSync(spec.args);

  const isCalendar = spec.kind === "calendar";
  const committedEvidence = isCalendar || primary.data?.committed === true;
  const dryRunEvidence = isCalendar || primary.data?.dry_run === false;
  const backupOk = isCalendar || primary.data?.backup?.ok === true;
  const verificationOk = isCalendar || primary.data?.verification?.ok === true;
  const dayReadsOk = !primary.data?.day_reads || Object.values(primary.data.day_reads).every((item) => item?.ok === true);
  const primaryVerified = Boolean(
    primary.ok === true
    && primary.exitCode === 0
    && (isCalendar || primary.data?.ok === true)
    && committedEvidence
    && dryRunEvidence
    && !primary.data?.error_code
    && backupOk
    && verificationOk
    && dayReadsOk
  );

  let exported = null;
  if (primaryVerified && spec.exportAfter) {
    exported = await runSchedule(["export"]);
  }

  let sync = null;
  if (primaryVerified && (!exported || exported.ok) && spec.syncAfter) {
    sync = queueCalendarSyncAfterCommit(dataDir, { token, operation: spec.operation, summary: spec.summary });
  }

  // 日历同步是提交后的旁路动作；主提交完成后立即返回，避免网络同步占住操作按钮。
  const ok = primaryVerified && (!exported || exported.ok);
  appendAudit(dataDir, "commit", {
    token,
    operation: spec.operation,
    summary: spec.summary,
    ok,
    primaryCommitted: Boolean(primary.data?.committed),
    exportOk: exported ? exported.ok : null,
    syncQueued: Boolean(sync?.queued),
    syncOk: sync && !sync.queued ? sync.ok : null,
  });

  return {
    ok,
    summary: spec.summary,
    primary,
    export: exported,
    sync,
  };
}

export async function commitPreview(dataDir, token) {
  getPreview(dataDir, token);
  updatePreviewRecord(dataDir, token, { status: "committing" });
  try {
    const result = await commitPreviewUnsafe(dataDir, token);
    try {
      updatePreviewRecord(dataDir, token, { status: result.ok ? "committed" : "failed", canCommit: false, lastResult: result });
      if (result.ok) fs.rmSync(previewPath(dataDir, token), { force: true });
    } catch {
      // 主写入结果已经确定，令牌收尾失败不能反向改写业务结果。
    }
    return result;
  } catch (error) {
    try {
      updatePreviewRecord(dataDir, token, { status: "failed", canCommit: false, lastError: error.message });
    } catch {
      // 保留原始提交错误。
    }
    throw error;
  }
}

export function summarizeResult(result) {
  if (!result) return "无结果";
  const data = result.data;
  if (data?.action === "preview" && Array.isArray(data?.data?.operations)) {
    const passed = data.data.operations.filter((item) => item.ok).length;
    const affected = data.data.affected_dates?.join("、") || "无";
    return `计划预演 ${passed}/${data.data.operations.length} 项通过；影响日期：${affected}`;
  }
  if (data?.action === "commit" && data?.committed) {
    return `计划已原子提交；影响日期：${data.data?.affected_dates?.join("、") || "无"}`;
  }
  if (data?.dry_run && data?.output) {
    const previewText = String(data.output)
      .replace(/^✅ 已预留：/, "拟预留：")
      .replace(/^✅ 已将/, "拟将")
      .replace(/^✅ /, "预演：");
    const blockers = data.verification?.new_issues;
    const questions = Array.isArray(data.questions) ? data.questions.filter(Boolean) : [];
    const commuteNote = questions.length ? `\n通勤确认（仅提示，不锁定）：${questions.join("；")}` : "";
    return blockers?.length ? `${previewText}${commuteNote}\n阻止提交：${blockers.join("；")}` : `${previewText}${commuteNote}`;
  }
  if (data?.output) return data.output;
  if (data?.data?.message) return data.data.message;
  if (data?.error_code) return data.output || data.error_code;
  return result.stdout || result.stderr || (result.ok ? "执行成功" : "执行失败");
}
