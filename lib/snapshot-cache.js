export function createSnapshotCache(ttlMs = 30_000) {
  const entries = new Map();
  let epoch = 0;
  let requestSeq = 0;

  async function get(key, fetcher, options = {}) {
    const fresh = options.fresh === true;
    const startedEpoch = epoch;
    const hit = entries.get(key);
    if (!fresh && hit?.value !== undefined && hit.expiresAt > Date.now() && hit.epoch === startedEpoch) {
      return hit.value;
    }
    if (!fresh && hit?.promise && hit.epoch === startedEpoch) return hit.promise;

    // 每次实际取数带独立序号；只有仍是该键最新一次取数时才回写，
    // 防止并发下先发出但后完成的旧结果覆盖新结果（epoch 只防失效，不防并发）。
    const requestId = ++requestSeq;
    const promise = Promise.resolve().then(fetcher);
    entries.set(key, { promise, epoch: startedEpoch, requestId, expiresAt: 0 });
    try {
      const value = await promise;
      const current = entries.get(key);
      if (epoch === startedEpoch && current?.requestId === requestId) {
        entries.set(key, { value, epoch: startedEpoch, requestId, expiresAt: Date.now() + ttlMs });
      }
      return value;
    } catch (error) {
      const current = entries.get(key);
      if (current?.promise === promise) entries.delete(key);
      throw error;
    }
  }

  function invalidate() {
    epoch += 1;
    entries.clear();
  }

  return {
    get,
    invalidate,
    get epoch() { return epoch; },
  };
}
