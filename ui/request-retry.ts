const RETRYABLE_READ_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);

function isSafeRead(init?: RequestInit) {
  const method = String(init?.method || 'GET').toUpperCase();
  return method === 'GET';
}

export async function fetchPluginApiWithRetry(
  fetcher: (path: string, init?: RequestInit) => Promise<Response>,
  path: string,
  init?: RequestInit,
  options: { attempts?: number; delayMs?: number } = {},
): Promise<Response> {
  const maxAttempts = isSafeRead(init) ? Math.max(1, options.attempts ?? 2) : 1;
  const delayMs = Math.max(0, options.delayMs ?? 160);
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetcher(path, init);
      if (attempt === maxAttempts || !RETRYABLE_READ_STATUSES.has(response.status)) return response;
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts) throw error;
    }
    if (delayMs) await new Promise((resolve) => globalThis.setTimeout(resolve, delayMs));
  }

  throw lastError instanceof Error ? lastError : new Error('插件读取请求失败');
}
