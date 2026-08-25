export type RequestGate = {
  begin(): number;
  invalidate(): void;
  isCurrent(id: number): boolean;
};

export function createRequestGate(): RequestGate {
  let latest = 0;
  return {
    begin() {
      latest += 1;
      return latest;
    },
    invalidate() {
      latest += 1;
    },
    isCurrent(id: number) {
      return id === latest;
    },
  };
}
