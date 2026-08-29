import { createPreview, summarizeResult } from "../lib/backend.js";
import { OPERATION_IDS } from "../lib/operations.js";

export const name = "preview_change";
export const description = "预演课程、预留、学生片区、可用时间、通勤、复核、事务或日历同步变更；只生成预览，不提交真实变更。";
export const parameters = {
  type: "object",
  properties: {
    operation: {
      type: "string",
      enum: OPERATION_IDS,
    },
    student: { type: "string" },
    fromDate: { type: "string" },
    fromTime: { type: "string" },
    toDate: { type: "string" },
    toTime: { type: "string" },
    duration: { type: "integer" },
    overrideAvailability: { type: "boolean", description: "仅当用户明确确认具体单次时间时为 true；不修改长期候选时间" },
    date: { type: "string" },
    time: { type: "string" },
    note: { type: "string" },
    reason: { type: "string" },
    zone: { type: "string" },
    boundaryZones: { type: "string" },
    windows: { type: "string" },
    weekday: { type: "string" },
    fromStudent: { type: "string" },
    toStudent: { type: "string" },
    minutes: { type: "integer" },
    transport: { type: "string" },
    reservationId: { type: "string" },
    courseId: { type: "integer" },
    resolution: { type: "string", enum: ["done", "cancelled"] },
    affairKind: { type: "string", enum: ["timed", "deadline", "fuzzy", "retry"] },
    title: { type: "string" },
    startDate: { type: "string" },
    startTime: { type: "string" },
    deadlineDate: { type: "string" },
    deadlineTime: { type: "string" },
    windowStart: { type: "string" },
    windowEnd: { type: "string" },
    endDate: { type: "string" },
    endTime: { type: "string" },
    followUp: { type: "string", description: "办成前每日跟进：daily 开启，none 关闭" },
    candidateDates: { type: "string" },
    weekdays: { type: "string" },
    startWeek: { type: "string" },
    remindAt: { type: "string" },
    priority: { type: "string" },
    moves: { type: "array", items: { type: "object" } },
    id: { type: "string" },
    expectedVersion: { type: "integer" },
    week: { type: "string" },
  },
  required: ["operation"],
};
export const sessionPermission = {
  kind: "plugin_output",
  describeSideEffect: (input) => ({
    kind: "plugin_output",
    summary: "预演排课/事务变更并写入插件私有数据（不提交真实变更）。",
    ruleId: "laosu-workbench-preview-change",
  }),
};

export async function execute(input = {}, toolCtx) {
  const record = await createPreview(toolCtx.dataDir, input);
  const message = summarizeResult(record.preview);
  return {
    content: [{
      type: "text",
      text: `${record.summary}\n预演：${record.canCommit ? "通过" : "未通过"}\n令牌：${record.token}\n${message}`,
    }],
    details: {
      card: {
        type: "webview",
        route: `/page?tab=actions&preview=${record.token}`,
        title: record.summary,
        description: record.canCommit ? "预演通过，等待明确提交。" : `预演未通过：${message}`,
      },
    },
  };
}
