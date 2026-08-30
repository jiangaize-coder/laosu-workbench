import fs from "node:fs";
import { backfillAffairEnds, commitPreview, createPreview, dataRevision, getAffairsMonth, getAffairsMissingEnd, getCalendarHealth, getCockpitData, getDashboard, getPlanningData, getPreview, getRuntimeVersions, getSuggestions, previewTemplateWeek, runSchedule, summarizeResult } from "../lib/backend.js";
import { getPluginRequestContext, parseModelJson, sampleText } from "../lib/hana-model.js";
import { OPERATION_IDS, buildAiOperationLines } from "../lib/operations.js";
import { createSnapshotCache } from "../lib/snapshot-cache.js";

const PLUGIN_VERSION = JSON.parse(fs.readFileSync(new URL("../manifest.json", import.meta.url), "utf8")).version;
const snapshotCache = createSnapshotCache(30_000);

function withSnapshot(key, fetcher, options) {
  return snapshotCache.get(key, fetcher, options);
}

function invalidateAllSnapshots() {
  snapshotCache.invalidate();
}

export default function registerPluginUiRoutes(app, ctx) {
  app.get("/page", (c) => c.html(renderShell(c, ctx, "page")));

  app.get("/api/dashboard", async (c) => {
    try {
      const scope = c.req.query("scope") || "week";
      const fresh = c.req.query("fresh") === "1";
      if (fresh) invalidateAllSnapshots();
      return c.json(await withSnapshot(`dashboard:${scope}`, () => getDashboard(scope, ctx.dataDir), { fresh }));
    } catch (error) {
      ctx.log.error("dashboard failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/planning", async (c) => {
    try {
      const fresh = c.req.query("fresh") === "1";
      if (fresh) invalidateAllSnapshots();
      return c.json(await withSnapshot("planning", () => getPlanningData(), { fresh }));
    } catch (error) {
      ctx.log.error("planning dashboard failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/cockpit", async (c) => {
    try {
      const fresh = c.req.query("fresh") === "1";
      return c.json(await withSnapshot("cockpit", () => getCockpitData(), { fresh }));
    } catch (error) {
      ctx.log.error("cockpit failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/versions", async (c) => {
    try {
      return c.json(await getRuntimeVersions());
    } catch (error) {
      ctx.log.error("versions failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/suggestions", async (c) => {
    try {
      const fresh = c.req.query("fresh") === "1";
      return c.json(await withSnapshot("suggestions", () => getSuggestions(), { fresh }));
    } catch (error) {
      ctx.log.error("suggestions failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/affairs-month", async (c) => {
    try {
      const fresh = c.req.query("fresh") === "1";
      return c.json(await withSnapshot("affairs-month", () => getAffairsMonth(), { fresh }));
    } catch (error) {
      ctx.log.error("affairs month failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/affairs/missing-end", async (c) => {
    try {
      return c.json(await withSnapshot("affairs-missing-end", () => getAffairsMissingEnd()));
    } catch (error) {
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.post("/api/affairs/backfill-end", async (c) => {
    try {
      const body = await c.req.json();
      const ids = Array.isArray(body.ids) ? body.ids.filter((id) => typeof id === "string" && /^aff_[a-zA-Z0-9]+$/.test(id)) : [];
      if (!ids.length) return c.json({ ok: false, error: "没有可补齐的事务" }, 400);
      const result = await backfillAffairEnds(ids);
      invalidateAllSnapshots();
      return c.json({ ...result, message: `已为 ${result.done} 个事务补齐结束时间（默认 60 分钟）` });
    } catch (error) {
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.get("/api/data-revision", async (c) => {
    try {
      return c.json(await dataRevision());
    } catch (error) {
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/calendar-health", async (c) => {
    try {
      return c.json(await getCalendarHealth(ctx.dataDir));
    } catch (error) {
      ctx.log.error("calendar health failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/planning/template-check", async (c) => {
    try {
      return c.json(await previewTemplateWeek(c.req.query("monday") || ""));
    } catch (error) {
      ctx.log.warn("template preview rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/ai/interpret", async (c) => {
    try {
      const body = await c.req.json();
      const message = typeof body.message === "string" ? body.message.trim() : "";
      if (!message) return c.json({ ok: false, error: "请先留下一句话" }, 400);
      const requestContext = getPluginRequestContext(c);
      const schedulingContext = await getAiSchedulingContext();
      const history = Array.isArray(body.history)
        ? body.history.slice(-8).map((item) => ({
          role: item?.role === "assistant" ? "assistant" : "user",
          content: String(item?.text || item?.content || "").slice(0, 1200),
        })).filter((item) => item.content)
        : [];
      const sampled = await sampleText(requestContext, {
        systemPrompt: buildAiSchedulingPrompt(),
        messages: [...history, { role: "user", content: JSON.stringify({ request: message, currentSchedulingContext: schedulingContext }) }],
        agentId: requestContext.agentId || ctx.agentId || undefined,
        temperature: 0.1,
        maxTokens: 1200,
        operation: "laosu-workbench-scheduling-intent",
      }, { timeout: 90_000 });
      const plan = parseModelJson(typeof sampled === "string" ? sampled : sampled?.text);
      if (plan.status === "need_clarification") {
        const options = Array.isArray(plan.options)
          ? plan.options.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim().slice(0, 24)).slice(0, 4)
          : [];
        return c.json({ ok: true, status: "need_clarification", reply: String(plan.reply || "还缺少一些排课信息。"), options });
      }
      const allowed = new Set(OPERATION_IDS);
      const batchOperations = Array.isArray(plan.operations) ? plan.operations : null;
      if (plan.status === "ready" && batchOperations) {
        if (batchOperations.length < 2 || batchOperations.length > 8) throw new Error("批量方案需要 2–8 条操作");
        const previews = [];
        for (const entry of batchOperations) {
          const operation = entry?.operation;
          const input = entry?.input;
          if (!allowed.has(operation) || !input || typeof input !== "object") throw new Error("批量方案里有不可执行的操作");
          const record = await createPreview(ctx.dataDir, { ...input, operation });
          previews.push({
            operation,
            token: record.token,
            summary: record.summary,
            canCommit: record.canCommit,
            message: summarizeResult(record.preview),
          });
        }
        return c.json({
          ok: true,
          status: "ready",
          batch: true,
          reply: String(plan.reply || `${previews.length} 项操作已预演`),
          previews,
        });
      }
            if (plan.status !== "ready" || !allowed.has(plan.operation) || !plan.input || typeof plan.input !== "object") {
        throw new Error("AI 没有生成可执行的操作方案");
      }
      const record = await createPreview(ctx.dataDir, { ...plan.input, operation: plan.operation });
      const commuteQuestions = Array.isArray(record.preview?.data?.questions) ? record.preview.data.questions.filter(Boolean) : [];
      const reply = commuteQuestions.length
        ? `${String(plan.reply || record.summary)}\n通勤只作提示，请确认：${commuteQuestions.join("；")}`
        : String(plan.reply || record.summary);
      return c.json({
        ok: true,
        status: "ready",
        reply,
        operation: plan.operation,
        input: plan.input,
        preview: {
          token: record.token,
          expiresAt: record.expiresAt,
          summary: record.summary,
          canCommit: record.canCommit,
          message: summarizeResult(record.preview),
          result: record.preview,
        },
      });
    } catch (error) {
      ctx.log.warn("AI scheduling rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/affairs/retry-next", async (c) => {
    try {
      const body = await c.req.json();
      const id = typeof body.id === "string" ? body.id.trim() : "";
      if (!id) return c.json({ ok: false, error: "事务 ID 不能为空" }, 400);
      const input = { operation: "affair_retry_next", id, expectedVersion: body.expectedVersion };
      const record = await createPreview(ctx.dataDir, input);
      if (!record.canCommit) {
        return c.json({
          ok: false,
          error: summarizeResult(record.preview) || "没约上的处理预演未通过",
          summary: record.summary,
          preview: record.preview,
        }, 409);
      }
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const change = result.primary?.data?.data || {};
      const updated = change.record || result.primary?.data?.readback?.records?.[0] || null;
      const previousDate = change.previous_candidate_date || null;
      const candidateDate = updated?.retry?.current_candidate_date || updated?.window_start || null;
      const nextPromptAt = updated?.next_prompt_at || null;
      const message = result.ok
        ? `已记录“没约上”${candidateDate ? `，下一次尝试 ${candidateDate}` : "并推进下一次尝试"}${nextPromptAt ? `，提醒 ${nextPromptAt.replace("T", " ").slice(0, 16)}` : ""}`
        : summarizeResult(result.primary);
      return c.json({
        ...result,
        message,
        detail: summarizeResult(result.primary),
        syncMessage: result.sync ? summarizeResult(result.sync) : null,
        outcome: updated ? {
          id: updated.id,
          title: updated.title,
          status: updated.status,
          version: updated.version,
          previousDate,
          candidateDate,
          nextPromptAt,
          windowLabel: updated.window_label || null,
        } : null,
      }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("affair retry-next rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/affairs/retry-prev", async (c) => {
    try {
      const body = await c.req.json();
      const id = typeof body.id === "string" ? body.id.trim() : "";
      if (!id) return c.json({ ok: false, error: "事务 ID 不能为空" }, 400);
      const input = { operation: "affair_retry_prev", id, expectedVersion: body.expectedVersion };
      const record = await createPreview(ctx.dataDir, input);
      if (!record.canCommit) {
        return c.json({
          ok: false,
          error: summarizeResult(record.preview) || "恢复上一候选日的预演未通过",
          summary: record.summary,
          preview: record.preview,
        }, 409);
      }
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const change = result.primary?.data?.data || {};
      const updated = change.record || result.primary?.data?.readback?.records?.[0] || null;
      const restoredDate = updated?.retry?.current_candidate_date || updated?.window_start || null;
      const message = result.ok
        ? `已恢复到上一候选日${restoredDate ? ` ${restoredDate}` : ""}`
        : summarizeResult(result.primary);
      return c.json({
        ...result,
        message,
        detail: summarizeResult(result.primary),
        outcome: updated ? {
          id: updated.id,
          title: updated.title,
          status: updated.status,
          version: updated.version,
          candidateDate: restoredDate,
        } : null,
      }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("affair retry-prev rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/reservations/confirm", async (c) => {
    try {
      const body = await c.req.json();
      const reservationId = typeof body.reservationId === "string" ? body.reservationId.trim() : "";
      if (!reservationId) return c.json({ ok: false, error: "预留 ID 不能为空" }, 400);
      const record = await createPreview(ctx.dataDir, { operation: "reservation_confirm", reservationId });
      if (!record.canCommit) {
        return c.json({ ok: false, error: summarizeResult(record.preview) || "预留确认预演未通过", preview: record.preview }, 409);
      }
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const syncNote = result.sync?.queued
        ? "，飞书日历正在后台同步"
        : result.sync && !result.sync.ok
          ? `；飞书日历暂未同步：${summarizeResult(result.sync)}`
          : "";
      const message = result.ok ? `已确认落课，临时预留已转入正式课程${syncNote}` : summarizeResult(result.primary);
      return c.json({ ...result, message, detail: summarizeResult(result.primary), syncMessage: result.sync ? summarizeResult(result.sync) : null }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("reservation confirm quick action rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  // 日历同步一键：预演+提交内部完成。
  app.post("/api/calendar/sync-quick", async (c) => {
    try {
      const record = await createPreview(ctx.dataDir, { operation: "calendar_sync" });
      if (!record.canCommit) return c.json({ ok: false, error: summarizeResult(record.preview) || "同步预演未通过" }, 409);
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const message = result.ok ? "日历已同步" : summarizeResult(result.primary);
      return c.json({ ...result, message }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("calendar sync-quick rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  // 批量转复核一键。
  app.post("/api/courses/quarantine-quick", async (c) => {
    try {
      const result = await runSchedule(["quarantine-overdue", "--commit"]);
      if (!result.ok) return c.json({ ok: false, error: summarizeResult(result) }, 409);
      invalidateAllSnapshots();
      return c.json({ ok: true, message: summarizeResult(result) });
    } catch (error) {
      ctx.log.warn("quarantine-quick rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  // 过期课"已上"：转复核＋确认完成合并执行（老苏即人工，一步到位）。
  app.post("/api/courses/overdue-complete", async (c) => {
    try {
      const body = await c.req.json();
      const student = typeof body.student === "string" ? body.student.trim() : "";
      const date = typeof body.date === "string" ? body.date.trim() : "";
      if (!student || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return c.json({ ok: false, error: "学生或日期无效" }, 400);
      const quarantine = await runSchedule(["quarantine-overdue", "--commit"]);
      if (!quarantine.ok) return c.json({ ok: false, error: "过期课转入复核失败：" + summarizeResult(quarantine) }, 409);
      const list = await runSchedule(["review", "list"]);
      const match = (list.data?.data?.courses ?? []).find((item) => (item.student === student || item.student_name === student) && item.date === date && item.status === "待确认");
      if (!match) return c.json({ ok: false, error: `没有找到 ${student} ${date} 的待确认课程（可能已被处理，请刷新）` }, 409);
      const record = await createPreview(ctx.dataDir, { operation: "course_review_resolve", courseId: match.course_id, resolution: "done" });
      if (!record.canCommit) return c.json({ ok: false, error: summarizeResult(record.preview) || "复核预演未通过" }, 409);
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      return c.json({ ...result, message: result.ok ? `已确认 ${student} ${date} 已完成` : summarizeResult(result.primary) }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("overdue complete rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  // 事务"完成"一键：预演＋提交内部完成，前台只点一下。
  app.post("/api/affairs/complete", async (c) => {
    try {
      const body = await c.req.json();
      const id = typeof body.id === "string" ? body.id.trim() : "";
      if (!/^aff_[a-zA-Z0-9]+$/.test(id)) return c.json({ ok: false, error: "事务 ID 格式无效" }, 400);
      const input = { operation: "affair_complete", id, expectedVersion: body.expectedVersion };
      const record = await createPreview(ctx.dataDir, input);
      if (!record.canCommit) return c.json({ ok: false, error: summarizeResult(record.preview) || "完成预演未通过" }, 409);
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const message = result.ok ? "已完成" : summarizeResult(result.primary);
      return c.json({ ...result, message }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("affair complete rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  // 预留"取消"一键。
  app.post("/api/reservations/cancel-quick", async (c) => {
    try {
      const body = await c.req.json();
      const reservationId = typeof body.reservationId === "string" ? body.reservationId.trim() : "";
      if (!reservationId) return c.json({ ok: false, error: "预留 ID 不能为空" }, 400);
      const record = await createPreview(ctx.dataDir, { operation: "reservation_cancel", reservationId });
      if (!record.canCommit) return c.json({ ok: false, error: summarizeResult(record.preview) || "取消预演未通过" }, 409);
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const message = result.ok ? "已取消预留" : summarizeResult(result.primary);
      return c.json({ ...result, message }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("reservation cancel-quick rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/courses/cancel", async (c) => {
    try {
      const body = await c.req.json();
      const input = {
        operation: "course_cancel",
        student: body.student,
        date: body.date,
        time: body.time,
        reason: body.reason || "没上",
      };
      const record = await createPreview(ctx.dataDir, input);
      if (!record.canCommit) {
        return c.json({ ok: false, error: summarizeResult(record.preview) || "课程没上的预演未通过", preview: record.preview }, 409);
      }
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const message = result.ok
        ? `已记录 ${input.student} ${input.date} ${input.time} 没上，并同步课表与日历`
        : summarizeResult(result.primary);
      return c.json({ ...result, message, detail: summarizeResult(result.primary) }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("course cancel quick action rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/courses/day-complete", async (c) => {
    try {
      const body = await c.req.json();
      const input = { operation: "course_day_complete", date: body.date };
      const record = await createPreview(ctx.dataDir, input);
      if (!record.canCommit) {
        return c.json({ ok: false, error: summarizeResult(record.preview) || "全部上完的预演未通过", preview: record.preview }, 409);
      }
      const count = record.preview?.data?.data?.count || 0;
      const result = await commitPreview(ctx.dataDir, record.token);
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      const message = result.ok
        ? `已记录 ${input.date} 全部上完，共完成 ${count} 节，并同步课表与日历`
        : summarizeResult(result.primary);
      return c.json({ ...result, message, count, detail: summarizeResult(result.primary) }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("course day-complete quick action rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.post("/api/preview", async (c) => {
    try {
      const input = await c.req.json();
      const record = await createPreview(ctx.dataDir, input);
      return c.json({
        ok: true,
        token: record.token,
        expiresAt: record.expiresAt,
        summary: record.summary,
        canCommit: record.canCommit,
        result: record.preview,
        message: summarizeResult(record.preview),
      });
    } catch (error) {
      ctx.log.warn("preview rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });

  app.get("/api/preview/:token", (c) => {
    try {
      const record = getPreview(ctx.dataDir, c.req.param("token"));
      return c.json({
        ok: true,
        token: record.token,
        expiresAt: record.expiresAt,
        summary: record.summary,
        canCommit: record.canCommit,
        result: record.preview,
        message: summarizeResult(record.preview),
      });
    } catch (error) {
      const message = error.message || "预演读取失败";
      const status = message.includes("正在提交") ? 409 : message.includes("已经提交") || message.includes("已过期") ? 410 : 404;
      return c.json({ ok: false, error: message }, status);
    }
  });

  app.post("/api/commit", async (c) => {
    try {
      const body = await c.req.json();
      const result = await commitPreview(ctx.dataDir, String(body.token || ""));
      if (result.ok || result.primaryCommitted) invalidateAllSnapshots();
      return c.json({
        ...result,
        message: summarizeResult(result.primary),
        exportMessage: result.export ? summarizeResult(result.export) : null,
        syncMessage: result.sync ? summarizeResult(result.sync) : null,
      }, result.ok ? 200 : 409);
    } catch (error) {
      ctx.log.warn("commit rejected", error.message);
      return c.json({ ok: false, error: error.message }, 400);
    }
  });
}

// W11: 对取数结果缓存 30 秒，避免 AI 每句话都全量拉起 21 个本地子进程。
async function getAiSchedulingContext() {
  return withSnapshot("ai-context", () => buildAiSchedulingContext());
}

async function buildAiSchedulingContext() {
  const [dashboard, planning] = await Promise.all([getDashboard("horizon"), getPlanningData()]);
  return {
    currentTime: new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false }),
    localDate: dashboard.localDate,
    logicalDate: dashboard.localDate,
    dayBoundary: "04:00", 
    students: dashboard.students.filter((student) => student.status === "在读").map((student) => ({
      name: student.name,
      nickname: student.nickname || null,
      defaultDuration: student.default_duration,
    })),
    courses: dashboard.courses.map((course) => ({
      student: course.title,
      start: course.start_at,
      end: course.end_at,
      duration: course.duration,
      status: course.status,
    })),
    planningStudents: planning.students.map((student) => ({
      name: student.name,
      duration: student.duration,
      confirmed: student.confirmed,
      pendingWeekday: student.pendingWeekday,
      zone: student.zone,
      boundaryZones: student.boundaryZones,
      availability: student.availability,
      vacations: student.vacations,
      issues: student.issues,
    })),
    reservations: planning.reservations,
    pendingScheduleStudents: planning.pending,
    inactiveConfirmed: planning.inactiveConfirmed,
    reviews: planning.reviews,
    planningSummary: planning.summary,
    planningAudit: planning.audit,
    templateDiagnostics: planning.commute,
    pendingAffairs: dashboard.pending.map((item) => ({ id: item.id, title: item.title, status: item.status, version: item.version ?? null })),
  };
}

function buildAiSchedulingPrompt() {
  return `你是“课务台”的严格操作编译器。把用户自然语言转成一个可预演的结构化操作；你不直接写数据库，也不能编造学生、日期、课程、预留、事务或通勤信息。\n\n只输出一个 JSON 对象，不要 Markdown：\n信息不足时：{"status":"need_clarification","reply":"只追问一个最关键问题","options":["候选答案1","候选答案2","候选答案3"]}\n单个操作可执行时：{"status":"ready","reply":"用一句中文概括方案","operation":"操作名","input":{...}}\n多个相关变更（用户明确一句话要改多处，2–8 条）：{"status":"ready","reply":"概括整批方案","operations":[{"operation":"操作名","input":{...}}, ...]}\n\n允许的操作与 input：\n${buildAiOperationLines()}\n\n硬规则：\n- 调课只能 course_move/course_plan，禁止 cancel+add；明确取消某一节课才用 course_cancel。\n- 用户要改事务的时间、标题、优先级或备注时用 affair_update，禁止用取消+新建代替；retry 事务的候选日只能用 affair_retry_next/affair_retry_prev 推进或恢复，不能直接改时间。\n- “先留着、暂定、可能、预期、还没确认”必须用 reservation_add；明确确认上课才用 course_add。\n- 操作已有预留、事务或待复核课程时，只能使用 context 中真实存在的 ID；找不到就追问，不能编造。\n- “今天课程已上完”用 course_day_complete；不能自动把单节历史待确认课程判断为完成。\n- 用户给时间窗口时，在现有可用时间与课程空档中选择一个具体开始时间；无法可靠选择就追问。\n- 日期输出 YYYY-MM-DD，时间输出 HH:MM；“今天/明天”以 context.logicalDate 和 04:00 日界线为准，周几选择不早于 logicalDate 的最近日期。\n- 默认时长用学生 defaultDuration；不要擅自使用 force。\n- availability 是长期候选时间。只有用户明确说明某个具体日期和时间已经确定、或明确要求作为单次例外时，course_add/course_move 才可设置 overrideAvailability:true；它不修改长期资料。\n- reservation_confirm 已经代表具体时间被确认，不需要额外设置 overrideAvailability。\n- 任何冲突最终由底层 dry-run 判断；出游、重复课程和老师冲突继续作为硬保护。\n- 通勤只在排具体时间时询问，不作为落课硬锁；若 dry-run 返回 questions，必须如实提示用户确认。\n- 当前排课上下文会随用户消息一起提供；只能依据它做选择。\n- 追问必须带 options：2–4 个候选答案、每个不超过 12 个字，让用户点选而不是打字。\n- operations 仅当用户一句话确实包含多个变更时使用；每条分别满足各自的规则；拿不准就拆成多次或追问。\n- reply 必须使用“拟安排/建议/还需确认”，禁止说“已安排/已预留/已完成”，因为当前只生成预演。`;
}

function renderShell(c, ctx, surface) {
  const hanaCss = c.req.query("hana-css") || "";
  const theme = c.req.query("hana-theme") || "inherit";
  const token = c.req.query("token") || "";
  const assetBase = `/api/plugins/${encodeURIComponent(ctx.pluginId)}/assets`;
  const panelCss = appendAssetQuery(`${assetBase}/panel.css`, token);
  const panelJs = appendAssetQuery(`${assetBase}/panel.js`, token);
  const title = "课务台";

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  ${hanaCss ? `<link rel="stylesheet" href="${escapeAttr(hanaCss)}">` : ""}
  <link rel="stylesheet" href="${escapeAttr(panelCss)}">
</head>
<body data-hana-theme="${escapeAttr(theme)}" data-surface="${surface}">
  <div id="root" data-surface="${surface}"></div>
  <script>
    // 启动失败提示只能用 textContent 写入：错误消息可能携带接口返回文本，禁止拼 HTML。
    function showBootFailure(text) {
      var root = document.getElementById('root');
      if (!root || root.childNodes.length) return;
      var pre = document.createElement('pre');
      pre.style.padding = '20px';
      pre.style.whiteSpace = 'pre-wrap';
      pre.style.color = '#a75649';
      pre.textContent = text;
      root.appendChild(pre);
    }
    window.addEventListener('error', function (event) {
      showBootFailure('页面脚本错误：' + String(event.message || '未知错误'));
    });
    window.addEventListener('unhandledrejection', function (event) {
      showBootFailure('页面加载失败：' + String(event.reason || '未知错误'));
    });
  </script>
  <script type="module" src="${escapeAttr(panelJs)}"></script>
</body>
</html>`;
}

// Hana 0.450.0 的页面路由可以收到凭据，但 <link>/<script> 资产请求尚未稳定继承
// surface session cookie；短期页面 token 仅附加到同插件静态资源，XHR 仍统一走 hana.api.fetch。
function appendAssetQuery(url, token) {
  const query = new URLSearchParams({ v: PLUGIN_VERSION });
  if (token) query.set("token", token);
  return `${url}?${query.toString()}`;
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function escapeHtml(value) {
  return escapeAttr(value).replace(/>/g, "&gt;");
}
