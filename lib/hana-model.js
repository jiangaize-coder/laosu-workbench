export function getPluginRequestContext(c) {
  if (!c || typeof c.get !== "function") {
    throw new Error("AI 请求缺少插件路由上下文");
  }
  const requestContext = c.get("pluginRequestContext");
  if (!requestContext?.bus || typeof requestContext.bus.request !== "function") {
    throw new Error("当前页面没有可用的 Hana 模型会话，请刷新工作台后重试");
  }
  return requestContext;
}

export function sampleText(ctx, input, options = {}) {
  return ctx.bus.request("model:sample-text", {
    ...input,
    ...(ctx.pluginId ? { pluginId: ctx.pluginId } : {}),
  }, options);
}

export function parseModelJson(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) throw new Error("AI 没有返回内容");
  const unfenced = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const start = unfenced.indexOf("{");
  const end = unfenced.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("AI 返回的内容不是有效操作方案");
  try {
    return JSON.parse(unfenced.slice(start, end + 1));
  } catch {
    throw new Error("AI 返回的操作方案无法解析，请换一种说法");
  }
}
