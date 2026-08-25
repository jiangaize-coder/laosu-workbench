export function createRerunQueue(worker) {
  let requestedGeneration = 0;
  let completedGeneration = 0;
  let inFlight = null;
  let latestArgs = [];

  function run(...args) {
    requestedGeneration += 1;
    latestArgs = args;
    if (inFlight) return inFlight;

    inFlight = (async () => {
      let result;
      while (completedGeneration < requestedGeneration) {
        const targetGeneration = requestedGeneration;
        const argsForRun = latestArgs;
        result = await worker(...argsForRun);
        completedGeneration = targetGeneration;
      }
      return result;
    })().finally(() => {
      inFlight = null;
    });
    return inFlight;
  }

  return {
    run,
    get pendingGeneration() { return requestedGeneration - completedGeneration; },
  };
}
