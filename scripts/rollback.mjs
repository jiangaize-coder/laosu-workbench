#!/usr/bin/env node
// 课务台回滚工具（阶段7，2026-08-26）：从交付备份目录恢复上一版插件。
// 用法：node scripts/rollback.mjs <备份目录> [--dry-run]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";

const [backupDirArg, flag] = process.argv.slice(2);
const dryRun = flag === "--dry-run";
if (!backupDirArg) {
  console.error("用法: node scripts/rollback.mjs <备份目录> [--dry-run]");
  process.exit(2);
}
const backupDir = path.resolve(backupDirArg);
if (!fs.existsSync(backupDir)) {
  console.error("备份目录不存在:", backupDir);
  process.exit(2);
}
const zips = fs.readdirSync(backupDir).filter((name) => name.startsWith("课务台") && name.endsWith(".zip")).sort();
if (zips.length === 0) {
  console.error("备份目录里没有课务台 ZIP");
  process.exit(2);
}
const zip = path.join(backupDir, zips[zips.length - 1]);
const home = os.homedir();
const targets = [path.join(home, ".hanako", "plugins", "laosu-workbench"), path.join(home, ".hanako", "plugins-dev", "laosu-workbench")];
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "workbench-rollback-"));
try {
  execSync(`ditto -x -k "${zip}" "${tmp}"`, { stdio: "inherit" });
  console.log(`回滚包：${zip}`);
  for (const target of targets) {
    if (!fs.existsSync(target)) continue;
    if (dryRun) {
      console.log(`[dry-run] 将恢复 ${target}`);
      continue;
    }
    execSync(`rsync -a --delete --exclude node_modules --exclude .git --exclude '*.zip' "${tmp}/" "${target}/"`, { stdio: "inherit" });
    console.log(`已恢复 ${target}`);
  }
  console.log(dryRun ? "（dry-run 完成，未做任何修改）" : "回滚完成；在 Hana 中刷新课务台页面生效。");
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
