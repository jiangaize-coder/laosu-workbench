import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const DEFAULT_LEASE_MS = 2 * 60 * 1000;
const DEFAULT_HEARTBEAT_MS = 30 * 1000;

export function canonicalPluginDataDir(dataDir) {
  const resolved = path.resolve(dataDir || path.join(process.env.HOME || "", ".hanako", "plugin-data", "laosu-workbench"));
  const parent = path.dirname(resolved);
  if (path.basename(resolved) === "laosu-workbench" && path.basename(parent) === "dev" && path.basename(path.dirname(parent)) === "plugin-data") {
    return path.join(path.dirname(parent), "laosu-workbench");
  }
  return resolved;
}

function processAlive(pid) {
  if (!Number.isInteger(pid) || pid < 1) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error?.code === "EPERM";
  }
}

function readOwner(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function canReclaim(owner, now, leaseMs) {
  if (!owner) return true;
  const heartbeatAt = Number(owner.heartbeatAt || owner.acquiredAt || 0);
  return !processAlive(Number(owner.pid)) || !heartbeatAt || now - heartbeatAt > leaseMs;
}

export function acquireBackgroundLease(dataDir, options = {}) {
  const now = options.now?.() ?? Date.now();
  const leaseMs = options.leaseMs ?? DEFAULT_LEASE_MS;
  const heartbeatMs = options.heartbeatMs ?? DEFAULT_HEARTBEAT_MS;
  const dir = canonicalPluginDataDir(dataDir);
  const file = options.file || path.join(dir, "background-owner.json");
  const token = crypto.randomUUID();
  fs.mkdirSync(path.dirname(file), { recursive: true });

  const tryCreate = () => {
    let handle;
    try {
      handle = fs.openSync(file, "wx", 0o600);
      const owner = { token, pid: process.pid, acquiredAt: now, heartbeatAt: now };
      fs.writeFileSync(handle, JSON.stringify(owner, null, 2), "utf8");
      return owner;
    } catch (error) {
      if (error?.code !== "EEXIST") throw error;
      return null;
    } finally {
      if (handle !== undefined) fs.closeSync(handle);
    }
  };

  let owner = tryCreate();
  if (!owner) {
    const existing = readOwner(file);
    if (canReclaim(existing, now, leaseMs)) {
      try {
        fs.rmSync(file, { force: true });
      } catch {
        // 下一个独占创建会给出最终结果。
      }
      owner = tryCreate();
    }
  }

  if (!owner) {
    return { acquired: false, file, owner: readOwner(file), stop() {} };
  }

  let stopped = false;
  const heartbeat = () => {
    if (stopped) return;
    const current = readOwner(file);
    if (current?.token !== token) {
      stopped = true;
      return;
    }
    const next = { ...current, heartbeatAt: options.now?.() ?? Date.now() };
    try {
      fs.writeFileSync(file, JSON.stringify(next, null, 2), { encoding: "utf8", mode: 0o600 });
    } catch {
      stopped = true;
    }
  };
  const timer = setInterval(heartbeat, heartbeatMs);
  timer.unref?.();

  return {
    acquired: true,
    file,
    owner,
    stop() {
      if (stopped) return;
      stopped = true;
      clearInterval(timer);
      const current = readOwner(file);
      if (current?.token === token) fs.rmSync(file, { force: true });
    },
  };
}
