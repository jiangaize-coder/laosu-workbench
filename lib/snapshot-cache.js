export function createSnapshotCache(ttlMs = 30_000) {
  const entries = new Map();
  let epoch = 0;

  async function get(key, fetcher, options = {}) {
    const fresh = options.fresh === true;
    const startedEpoch = epoch;
    const hit = entries.get(key);
    if (!fresh && hit?.value !== undefined && hit.expiresAt > Date.now() && hit.epoch === startedEpoch) {
      return hit.value;
    }
    if (!fresh && hit?.promise && hit.epoch === startedEpoch) return hit.promise;

    const promise = Promise.resolve().then(fetcher);
    entries.set(key, { promise, epoch: startedEpoch, expiresAt: 0 });
    try {
      const value = await promise;
      if (epoch === startedEpoch) {
        entries.set(key, { value, epoch: startedEpoch, expiresAt: Date.now() + ttlMs });
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
