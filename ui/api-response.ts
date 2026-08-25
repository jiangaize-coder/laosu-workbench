function readableError(value: unknown, fallback: string) {
  if (value && typeof value === 'object' && 'error' in value && typeof value.error === 'string' && value.error.trim()) {
    return value.error.trim();
  }
  return fallback;
}

export async function parseApiResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  let data: unknown = null;
  if (text.trim()) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(response.ok
        ? '插件接口返回了无法识别的数据'
        : `插件接口请求失败（HTTP ${response.status}）`);
    }
  }

  if (!response.ok) {
    throw new Error(readableError(data, `请求失败（HTTP ${response.status}）`));
  }
  if (!data || typeof data !== 'object') {
    throw new Error('插件接口没有返回有效数据');
  }
  return data as T;
}
