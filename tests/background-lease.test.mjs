import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { acquireBackgroundLease, canonicalPluginDataDir } from "../lib/background-lease.js";

test("formal and dev data dirs share one canonical background owner", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "laosu-lease-path-"));
  const formal = path.join(root, "plugin-data", "laosu-workbench");
  const dev = path.join(root, "plugin-data", "dev", "laosu-workbench");
  assert.equal(canonicalPluginDataDir(dev), formal);
  assert.equal(canonicalPluginDataDir(formal), formal);
  fs.rmSync(root, { recursive: true, force: true });
});

test("only one slot acquires background lease and standby can take over", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "laosu-lease-owner-"));
  const formal = path.join(root, "plugin-data", "laosu-workbench");
  const dev = path.join(root, "plugin-data", "dev", "laosu-workbench");
  const first = acquireBackgroundLease(formal, { heartbeatMs: 60_000 });
  const second = acquireBackgroundLease(dev, { heartbeatMs: 60_000 });
  assert.equal(first.acquired, true);
  assert.equal(second.acquired, false);
  first.stop();
  const takeover = acquireBackgroundLease(dev, { heartbeatMs: 60_000 });
  assert.equal(takeover.acquired, true);
  takeover.stop();
  fs.rmSync(root, { recursive: true, force: true });
});

test("dead stale owner is reclaimed", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "laosu-lease-stale-"));
  const file = path.join(root, "background-owner.json");
  fs.writeFileSync(file, JSON.stringify({ token: "dead", pid: 99999999, heartbeatAt: 1 }));
  const lease = acquireBackgroundLease(root, { file, heartbeatMs: 60_000 });
  assert.equal(lease.acquired, true);
  assert.notEqual(lease.owner.token, "dead");
  lease.stop();
  fs.rmSync(root, { recursive: true, force: true });
});
