import { hana } from '@hana/plugin-sdk';
import { parseApiResponse } from './api-response';
import { fetchPluginApiWithRetry } from './request-retry';

export { parseApiResponse } from './api-response';

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetchPluginApiWithRetry((requestPath, requestInit) => hana.api.fetch(requestPath, requestInit), path, init);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error || '未知错误');
    throw new Error(`页面会话请求失败：${detail}`);
  }
  return parseApiResponse<T>(response);
}
