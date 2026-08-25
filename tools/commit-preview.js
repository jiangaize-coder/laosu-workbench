import { commitPreview, summarizeResult } from "../lib/backend.js";

export const name = "commit_preview";
export const description = "提交一个已经通过的课务台预演令牌。令牌一次性、15 分钟有效；用于明确确认后的真实写入。";
export const parameters = {
  type: "object",
  properties: {
    token: { type: "string", description: "preview_change 返回的一次性令牌。" },
  },
  required: ["token"],
};
export const sessionPermission = {
  kind: "external_side_effect",
  describeSideEffect: (input) => ({
    kind: "external_side_effect",
    summary: `提交已预演的排课/事务变更并同步飞书日历；令牌 ${String(input?.token || "").slice(0, 8)}…`,
    ruleId: "laosu-workbench-commit-preview",
  }),
};

export async function execute(input = {}, toolCtx) {
  const result = await commitPreview(toolCtx.dataDir, String(input.token || ""));
  const primaryText = summarizeResult(result.primary);
  const exportText = result.export ? summarizeResult(result.export) : "无需单独导出";
  const syncText = result.sync ? summarizeResult(result.sync) : "无需同步";
  return {
    content: [{
      type: "text",
      text: `${result.summary}\n状态：${result.ok ? "成功" : "失败"}\n执行：${primaryText}\n导出：${exportText}\n同步：${syncText}`,
    }],
    details: {
      card: {
        type: "webview",
        route: "/page?tab=overview&scope=week",
        title: result.summary,
        description: result.ok ? "已执行并完成回读。" : "执行存在异常，请查看详情。",
      },
    },
  };
}
