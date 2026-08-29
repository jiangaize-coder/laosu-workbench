#!/usr/bin/env node
// 一条命令发版：校验 → 打包备份 → 双槽部署 → git 自动提交 → 重启 Hana → 确认插件加载。
// 用法：node scripts/release.mjs
import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const home = os.homedir();
const run = (cmd, options = {}) => execSync(cmd, { cwd: root, stdio: "inherit", ...options });
const version = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8")).version;
const zipPath = path.join(home, "Desktop", `课务台-v${version}.zip`);

console.log(`== 课务台发版 v${version} ==`);

// 1) 校验
run("npm run release:verify");

// 2) 打包 + 桌面备份
fs.rmSync(zipPath, { force: true });
run(`zip -rq "${zipPath}" . -x ".git/*" -x "node_modules/*" -x "*.DS_Store"`);

// 3) 双槽部署（保护正式槽 node_modules）
for (const slot of ["plugins", "plugins-dev"]) {
  const target = path.join(home, ".hanako", slot, "laosu-workbench");
  run(`rsync -a --delete --exclude .git --exclude node_modules ./ "${target}/"`);
}

// 4) 桌面旧包清理（非当前版本移入废纸篓）
try {
  execSync(
    `osascript -e 'tell application "Finder" to delete (every item of desktop whose name begins with "课务台-v" and name is not "课务台-v${version}.zip")'`,
    { stdio: "ignore" },
  );
} catch {
  // 废纸篓不可达时跳过（不影响发版）。
}

// 5) git 自动提交（本地仓库、不推送）
function commitRepo(repoRoot, message) {
  try {
    const changes = execSync("git status --porcelain", { cwd: repoRoot, encoding: "utf8" }).trim();
    if (!changes) {
      console.log(`${repoRoot} 无改动，跳过提交`);
      return;
    }
    execSync("git add -A", { cwd: repoRoot });
    execSync(`git commit -m ${JSON.stringify(message)}`, { cwd: repoRoot, stdio: "ignore" });
    console.log(`已提交：${repoRoot}`);
  } catch (error) {
    console.log(`提交跳过（${repoRoot}）：${error.message}`);
  }
}
commitRepo(root, `release: 课务台 v${version}`);
commitRepo(
  "/Users/laosu/Shared/Hana主动式事务系统",
  `feat: 课务台 v${version} 配套——follow_up 每日跟进/scan follow_ups/agent prune/schema5 迁移/proactive follow_up 服务`,
);

// 6) 重启 Hana
try {
  execSync(`osascript -e 'tell application "HanaAgent" to quit'`, { stdio: "ignore" });
} catch {
  // 未运行时忽略。
}
for (let i = 0; i < 20; i++) {
  try {
    execSync("pgrep -f HanaAgent.app", { stdio: "pipe" });
    execSync("sleep 1");
  } catch {
    break;
  }
}
try {
  execSync("pkill -TERM -f HanaAgent.app", { stdio: "ignore" });
  execSync("sleep 2");
} catch {
  // 已退出。
}
run("open -a HanaAgent");

// 7) 确认插件加载
const logsDir = path.join(home, ".hanako", "logs");
let loaded = false;
for (let i = 0; i < 25; i++) {
  execSync("sleep 2");
  try {
    const logs = fs
      .readdirSync(logsDir)
      .filter((name) => /^\d{4}-\d{2}-\d{2}_/.test(name) && name.endsWith(".log"))
      .sort()
      .reverse();
    if (logs.length && fs.readFileSync(path.join(logsDir, logs[0]), "utf8").includes('plugin "laosu-workbench" loaded')) {
      loaded = true;
      break;
    }
  } catch {
    // 日志未就绪时继续等。
  }
}
console.log(loaded ? `v${version} 插件已加载，发版完成` : `警告：未探测到插件加载，请打开 Hana 检查`);
process.exit(loaded ? 0 : 1);
