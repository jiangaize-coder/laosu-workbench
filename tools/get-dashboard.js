import { getDashboard } from "../lib/backend.js";

export const name = "get_dashboard";
export const description = "读取老苏当前课表、事务、待办和系统健康状态，并返回工作台入口。";
export const parameters = {
  type: "object",
  properties: {
    scope: {
      type: "string",
      enum: ["today", "week", "month", "horizon"],
      description: "查看范围，默认 week。",
    },
  },
};
export const sessionPermission = { readOnly: true };

export async function execute(input = {}) {
  const dashboard = await getDashboard(input.scope || "week");
  const activeAffairs = dashboard.pending.filter((item) => !["completed", "cancelled"].includes(item.status));
  const lines = [
    `范围：${dashboard.range || dashboard.scope}`,
    `课程：${dashboard.courses.length}`,
    `时间轴事务：${dashboard.affairs.length}`,
    `待处理事务：${activeAffairs.length}`,
    `下一节课：${dashboard.nextCourse ? `${dashboard.nextCourse.title} ${dashboard.nextCourse.start_at}` : "无"}`,
    `系统：${dashboard.health?.ok ? "正常" : "异常"}`,
  ];
  if (dashboard.warnings.length) lines.push(`警告：${dashboard.warnings.join("；")}`);
  return {
    content: [{ type: "text", text: lines.join("\n") }],
    details: {
      card: {
        type: "webview",
        route: `/page?tab=overview&scope=${encodeURIComponent(dashboard.scope)}`,
        title: "课务台",
        description: lines.join("；"),
      },
    },
  };
}
