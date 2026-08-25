import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(root, file));
const json = (file) => JSON.parse(read(file).toString('utf8'));
const manifest = json('manifest.json');
const pkg = json('package.json');
const lock = json('package-lock.json');
const readme = read('README.md').toString('utf8');

const failures = [];
if (manifest.version !== pkg.version) failures.push('manifest.json 与 package.json 版本不一致');
if (lock.version !== pkg.version || lock.packages?.['']?.version !== pkg.version) failures.push('package-lock.json 版本不一致');
if (!readme.includes(`当前版本：v${pkg.version}`)) failures.push('README 当前版本不一致');
for (const file of ['assets/panel.js', 'assets/panel.css', 'index.js', 'lib/backend.js', 'routes/ui.js']) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`缺少发布文件：${file}`);
}
const routes = read('routes/ui.js').toString('utf8');
if (/query\.set\(["']token["']/.test(routes)) failures.push('静态资源 URL 仍携带 token');
if (/0\.5\.37/.test(routes)) failures.push('仍存在幽灵缓存版本 0.5.37');

if (failures.length) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}

const critical = ['manifest.json', 'package.json', 'package-lock.json', 'index.js', 'lib/backend.js', 'routes/ui.js', 'assets/panel.js', 'assets/panel.css'];
const hashes = Object.fromEntries(critical.map((file) => [file, crypto.createHash('sha256').update(read(file)).digest('hex')]));
console.log(JSON.stringify({ ok: true, version: pkg.version, hashes }, null, 2));
