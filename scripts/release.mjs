#!/usr/bin/env node
// 课务台发版：校验 → 备份正式槽 → 打包 → 部署正式槽 → 本地提交。
// Hana 热载与开发槽清理由 Agent 的 plugin_dev 工具完成；脚本不控制 GUI，也不再双槽部署。
import { execFileSync, execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const home = os.homedir();
const desktop = path.join(home, "Desktop");
const formalSlot = path.join(home, ".hanako", "plugins", "laosu-workbench");
const backupDir = path.join(home, "Desktop", "OH-WorkSpace", "交付", "备份");
const run = (cmd, options = {}) => execSync(cmd, { cwd: root, stdio: "inherit", ...options });
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
const version = manifest.version;
const zipPath = path.join(desktop, `课务台-v${version}.zip`);

function stamp() {
  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Shanghai",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}${value.month}${value.day}-${value.hour}${value.minute}${value.second}`;
}

function readVersion(dir) {
  try {
    return JSON.parse(fs.readFileSync(path.join(dir, "manifest.json"), "utf8")).version || "unknown";
  } catch {
    return "unknown";
  }
}

function uniqueTrashPath(file) {
  const trash = path.join(home, ".Trash");
  fs.mkdirSync(trash, { recursive: true });
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  let target = path.join(trash, path.basename(file));
  let index = 2;
  while (fs.existsSync(target)) {
    target = path.join(trash, `${base}-${index}${ext}`);
    index += 1;
  }
  return target;
}

console.log(`== 课务台发版 v${version} ==`);

// 1) 校验
run("npm run release:verify");

// 2) 更新前完整备份当前正式槽
fs.mkdirSync(backupDir, { recursive: true });
if (fs.existsSync(path.join(formalSlot, "manifest.json"))) {
  const installedVersion = readVersion(formalSlot);
  const backupPath = path.join(backupDir, `课务台-v${installedVersion}-发版前-${stamp()}.zip`);
  execFileSync("zip", ["-rq", backupPath, ".", "-x", "node_modules/*", "*.DS_Store"], { cwd: formalSlot, stdio: "inherit" });
  execFileSync("unzip", ["-tq", backupPath], { stdio: "inherit" });
  console.log(`正式槽已备份：${backupPath}`);
}

// 3) 生成桌面最新交付包
fs.rmSync(zipPath, { force: true });
execFileSync("zip", ["-rq", zipPath, ".", "-x", ".git/*", "node_modules/*", "*.DS_Store", "coverage/*"], { cwd: root, stdio: "inherit" });
execFileSync("unzip", ["-tq", zipPath], { stdio: "inherit" });

// 4) 只部署正式槽；开发槽由 Agent 热载工具临时管理
fs.mkdirSync(formalSlot, { recursive: true });
execFileSync("rsync", ["-a", "--delete", "--exclude", ".git", "--exclude", "node_modules", `${root}/`, `${formalSlot}/`], { stdio: "inherit" });

// 5) 桌面旧版交付包移入废纸篓，只保留当前版本
for (const name of fs.readdirSync(desktop)) {
  if (!name.startsWith("课务台-v") || !name.endsWith(".zip") || name === path.basename(zipPath)) continue;
  fs.renameSync(path.join(desktop, name), uniqueTrashPath(path.join(desktop, name)));
}

// 6) 只提交课务台仓库；配套系统各自在自己的验证后独立提交
const changes = execSync("git status --porcelain", { cwd: root, encoding: "utf8" }).trim();
if (changes) {
  execSync("git add -A", { cwd: root });
  execSync(`git commit -m ${JSON.stringify(`release: 课务台 v${version}`)}`, { cwd: root, stdio: "inherit" });
} else {
  console.log("课务台仓库无改动，跳过提交");
}

console.log(`正式槽已部署：v${version}`);
console.log(`桌面交付包：${zipPath}`);
console.log("下一步：用 plugin_dev 热载验证；验收后卸载开发槽，使正式槽成为唯一运行版本。");
