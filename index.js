import { recoverInterruptedPreviews, resumePendingCalendarSync } from "./lib/backend.js";

export default class LaosuWorkbenchPlugin {
  /** @type {any} */
  ctx;

  async onload() {
    let recoveredPreviews = 0;
    try {
      recoveredPreviews = recoverInterruptedPreviews(this.ctx.dataDir);
    } catch (error) {
      this.ctx.log.warn("预演恢复扫描失败", error);
    }
    const resumedCalendarSync = resumePendingCalendarSync(this.ctx.dataDir);
    this.ctx.log.info("课务台 loaded", { recoveredPreviews, resumedCalendarSync });
  }

  async onunload() {
    this.ctx.log.info("课务台 unloaded");
  }
}
