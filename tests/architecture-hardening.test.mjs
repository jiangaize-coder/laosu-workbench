import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { parseApiResponse } from '../ui/api-response.ts';
import { createRequestGate } from '../ui/request-gate.ts';
import { createSnapshotCache } from '../lib/snapshot-cache.js';
import { createRerunQueue } from '../lib/rerun-queue.js';
import { appendAudit, logicalDateParts, pruneStalePreviews, recoverInterruptedPreviews } from '../lib/backend.js';

const projectRoot = path.resolve(import.meta.dirname, '..');

test('API 非 2xx 即使带 error 字段也会抛可读错误', async () => {
  const response = new Response(JSON.stringify({ ok: false, error: '底层脚本不可用' }), {
    status: 500,
    headers: { 'content-type': 'application/json' },
  });
  await assert.rejects(() => parseApiResponse(response), /底层脚本不可用/);
});

test('API 非 JSON 错误响应不会暴露 JSON SyntaxError', async () => {
  const response = new Response('<html>forbidden</html>', { status: 403 });
  await assert.rejects(() => parseApiResponse(response), /HTTP 403/);
});

test('请求门只接受最新请求', () => {
  const gate = createRequestGate();
  const first = gate.begin();
  const second = gate.begin();
  assert.equal(gate.isCurrent(first), false);
  assert.equal(gate.isCurrent(second), true);
  gate.invalidate();
  assert.equal(gate.isCurrent(second), false);
});

test('快照缓存合并并发读取', async () => {
  const cache = createSnapshotCache(30_000);
  let calls = 0;
  let release;
  const fetcher = async () => {
    calls += 1;
    await new Promise((resolve) => { release = resolve; });
    return { value: calls };
  };
  const first = cache.get('dashboard', fetcher);
  const second = cache.get('dashboard', fetcher);
  await Promise.resolve();
  release();
  assert.deepEqual(await first, { value: 1 });
  assert.deepEqual(await second, { value: 1 });
  assert.equal(calls, 1);
});

test('快照失效后旧 in-flight 结果不会写回', async () => {
  const cache = createSnapshotCache(30_000);
  let release;
  const stale = cache.get('dashboard', async () => {
    await new Promise((resolve) => { release = resolve; });
    return 'old';
  });
  await Promise.resolve();
  cache.invalidate();
  release();
  assert.equal(await stale, 'old');
  let freshCalls = 0;
  const fresh = await cache.get('dashboard', async () => {
    freshCalls += 1;
    return 'new';
  });
  assert.equal(fresh, 'new');
  assert.equal(freshCalls, 1);
});

test('同步队列首次失败时仍消费运行中追加的请求', async () => {
  let calls = 0;
  let release;
  const queue = createRerunQueue(async () => {
    calls += 1;
    if (calls === 1) await new Promise((resolve) => { release = resolve; });
    return { ok: calls > 1 };
  });
  const first = queue.run();
  await Promise.resolve();
  const second = queue.run();
  release();
  assert.equal(first, second);
  assert.deepEqual(await first, { ok: true });
  assert.equal(calls, 2);
});

test('启动恢复 committing 预演并保留核对记录', () => {
  const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'laosu-workbench-preview-'));
  const dir = path.join(dataDir, 'previews');
  fs.mkdirSync(dir, { recursive: true });
  const token = '12345678-1234-1234-1234-123456789abc';
  const file = path.join(dir, `${token}.json`);
  fs.writeFileSync(file, JSON.stringify({
    token,
    status: 'committing',
    canCommit: true,
    createdAt: Date.now() - 60_000,
    expiresAt: Date.now() - 1,
    input: { operation: 'course_move' },
  }));
  assert.equal(recoverInterruptedPreviews(dataDir), 1);
  const recovered = JSON.parse(fs.readFileSync(file, 'utf8'));
  assert.equal(recovered.status, 'failed');
  assert.equal(recovered.canCommit, false);
  assert.equal(recovered.interrupted, true);
  pruneStalePreviews(dataDir);
  assert.equal(fs.existsSync(file), true);
  fs.rmSync(dataDir, { recursive: true, force: true });
});

test('审计目录不可写时不改变业务控制流', () => {
  const fileInsteadOfDir = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'laosu-workbench-audit-')), 'data-file');
  fs.writeFileSync(fileInsteadOfDir, 'occupied');
  assert.equal(appendAudit(fileInsteadOfDir, 'commit', { ok: true }), false);
  fs.rmSync(path.dirname(fileInsteadOfDir), { recursive: true, force: true });
});

test('04:00 日界线在上海时区统一生效', () => {
  assert.equal(logicalDateParts(new Date('2026-08-25T19:59:59Z')), '2026-08-25');
  assert.equal(logicalDateParts(new Date('2026-08-25T20:00:00Z')), '2026-08-26');
});

test('版本来源一致且 token 只用于同插件静态资源兼容', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(projectRoot, 'manifest.json'), 'utf8'));
  const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
  const readme = fs.readFileSync(path.join(projectRoot, 'README.md'), 'utf8');
  const routes = fs.readFileSync(path.join(projectRoot, 'routes/ui.js'), 'utf8');
  const apiClient = fs.readFileSync(path.join(projectRoot, 'ui/api-client.ts'), 'utf8');
  assert.equal(manifest.version, pkg.version);
  assert.match(readme, new RegExp(`当前版本：v${manifest.version.replaceAll('.', '\\.')}`));
  assert.match(routes, /manifest\.json/);
  assert.match(routes, /if \(token\) query\.set\("token", token\)/);
  assert.doesNotMatch(apiClient, /token|pluginFallbackUrl|window\.fetch/);
  assert.doesNotMatch(routes, /0\.5\.37/);
});
