import fs from "node:fs";
import { commitPreview, createPreview, getDashboard, getPlanningData, getPreview, previewTemplateWeek, summarizeResult } from "../lib/backend.js";
import { getPluginRequestContext, parseModelJson, sampleText } from "../lib/hana-model.js";
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
      return c.json(await withSnapshot(`dashboard:${scope}`, () => getDashboard(scope), { fresh }));
    } catch (error) {
      ctx.log.error("dashboard failed", error);
      return c.json({ ok: false, error: error.message }, 500);
    }
  });

  app.get("/api/planning", async (c) => {
    try {
      return c.json(await withSnapshot("planning", () => getPlanningData()));
    } catch (error) {
      ctx.log.error("planning dashboard failed", error);
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
        return c.json({ ok: true, status: "need_clarification", reply: String(plan.reply || "还缺少一些排课信息。") });
      }
      const allowed = new Set([
        "course_add", "course_move", "course_cancel", "course_plan", "course_day_complete",
        "reservation_add", "reservation_update", "reservation_confirm", "reservation_cancel",
        "zone_set", "availability_set", "availability_clear", "commute_set", "quarantine_overdue", "course_review_resolve",
        "affair_create", "affair_complete", "affair_retry_next", "affair_cancel", "calendar_sync",
      ]);
      if (plan.status !== "ready" || !allowed.has(plan.operation) || !plan.input || typeof plan.input !== "object") {
        throw new Error("AI 没有生成可执行的操作方案");
      }
      const record = await createPreview(ctx.dataDir, { ...plan.input, operation: plan.operation });
      return c.json({
        ok: true,
        status: "ready",
        reply: String(plan.reply || record.summary),
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
      if (result.ok) invalidateAllSnapshots();
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
      if (result.ok) invalidateAllSnapshots();
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
      if (result.ok) invalidateAllSnapshots();
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
      if (result.ok) invalidateAllSnapshots();
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
      if (result.ok) invalidateAllSnapshots();
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
  return `你是“课务台”的严格操作编译器。把用户自然语言转成一个可预演的结构化操作；你不直接写数据库，也不能编造学生、日期、课程、预留、事务或通勤信息。\n\n只输出一个 JSON 对象，不要 Markdown：\n信息不足时：{"status":"need_clarification","reply":"只追问一个最关键问题"}\n可以执行时：{"status":"ready","reply":"用一句中文概括方案","operation":"操作名","input":{...}}\n\n允许的操作与 input：\n1. course_add: {student,date,time,duration,note?,overrideAvailability?}\n2. course_move: {student,fromDate,fromTime,toDate,toTime,duration?,overrideAvailability?}\n3. course_cancel: {student,date,time,reason?}\n4. course_plan: {title?,moves:[{student,fromDate,fromTime,toDate,toTime,duration?}, ...]}，仅用于两项及以上调课\n5. course_day_complete: {date}\n6. reservation_add: {student,date,time,duration?,zone?,note?}\n7. reservation_update: {reservationId,date,time,duration?,zone?,note?}\n8. reservation_confirm: {reservationId}\n9. reservation_cancel: {reservationId}\n10. zone_set: {student,zone,boundaryZones?}\n11. availability_set: {student,weekday,windows:"HH:MM-HH:MM、HH:MM-HH:MM"}\n12. availability_clear: {student,weekday}\n13. commute_set: {fromStudent,toStudent,minutes,transport?,note?}\n14. quarantine_overdue: {}\n15. course_review_resolve: {courseId,resolution:"done"|"cancelled"}\n16. affair_create: {affairKind,title,startDate?,startTime?,duration?,deadlineDate?,deadlineTime?,windowStart?,windowEnd?,candidateDates?,weekdays?,startWeek?,remindAt?,priority?}\n17. affair_complete / affair_retry_next / affair_cancel: {id,expectedVersion?}\n18. calendar_sync: {week?}\n\n硬规则：\n- 调课只能 course_move/course_plan，禁止 cancel+add；明确取消某一节课才用 course_cancel。\n- “先留着、暂定、可能、预期、还没确认”必须用 reservation_add；明确确认上课才用 course_add。\n- 操作已有预留、事务或待复核课程时，只能使用 context 中真实存在的 ID；找不到就追问，不能编造。\n- “今天课程已上完”用 course_day_complete；不能自动把单节历史待确认课程判断为完成。\n- 用户给时间窗口时，在现有可用时间与课程空档中选择一个具体开始时间；无法可靠选择就追问。\n- 日期输出 YYYY-MM-DD，时间输出 HH:MM；“今天/明天”以 context.logicalDate 和 04:00 日界线为准，周几选择不早于 logicalDate 的最近日期。\n- 默认时长用学生 defaultDuration；不要擅自使用 force。\n- availability 是长期候选时间。只有用户明确说明某个具体日期和时间已经确定、或明确要求作为单次例外时，course_add/course_move 才可设置 overrideAvailability:true；它不修改长期资料。\n- reservation_confirm 已经代表具体时间被确认，不需要额外设置 overrideAvailability。\n- 任何冲突最终由底层 dry-run 判断；单次时间例外仍不能绕过出游、重复课程、老师冲突和通勤。\n- 当前排课上下文会随用户消息一起提供；只能依据它做选择。\n- reply 必须使用“拟安排/建议/还需确认”，禁止说“已安排/已预留/已完成”，因为当前只生成预演。`;
}

function renderShell(c, ctx, surface) {
  const hanaCss = c.req.query("hana-css") || "";
  const theme = c.req.query("hana-theme") || "inherit";
  const assetBase = `/api/plugins/${encodeURIComponent(ctx.pluginId)}/assets`;
  const panelCss = appendAssetVersion(`${assetBase}/panel.css`);
  const panelJs = appendAssetVersion(`${assetBase}/panel.js`);
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
    window.addEventListener('error', function (event) {
      var root = document.getElementById('root');
      if (root && !root.innerHTML) root.innerHTML = '<pre style="padding:20px;white-space:pre-wrap;color:#a75649">页面脚本错误：' + String(event.message || '未知错误') + '</pre>';
    });
    window.addEventListener('unhandledrejection', function (event) {
      var root = document.getElementById('root');
      if (root && !root.innerHTML) root.innerHTML = '<pre style="padding:20px;white-space:pre-wrap;color:#a75649">页面加载失败：' + String(event.reason || '未知错误') + '</pre>';
    });
  </script>
  <script type="module" src="${escapeAttr(panelJs)}"></script>
</body>
</html>`;
}

// 资产鉴权由 Hana 的 HttpOnly surface session cookie 负责；URL 只携带缓存版本。
function appendAssetVersion(url) {
  return `${url}?v=${encodeURIComponent(PLUGIN_VERSION)}`;
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
