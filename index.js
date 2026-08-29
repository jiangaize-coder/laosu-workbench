import { autoReconcileCalendarOnce, getAffairsMissingEnd, recoverInterruptedPreviews, resumePendingCalendarSync, startCalendarAutoReconcile, startDataRevisionWatch } from "./lib/backend.js";

export default class LaosuWorkbenchPlugin {
  /** @type {any} */
  ctx;
  /** @type {{ stop(): void } | null} */
  calendarReconciler = null;
  /** @type {{ stop(): void } | null} */
  revisionWatcher = null;

  async onload() {
    let recoveredPreviews = 0;
    try {
      recoveredPreviews = recoverInterruptedPreviews(this.ctx.dataDir);
    } catch (error) {
      this.ctx.log.warn("预演恢复扫描失败", error);
    }
    const resumedCalendarSync = resumePendingCalendarSync(this.ctx.dataDir);
    // 全自动：日历差异自愈（启动后 30s 首跑 + 每 30 分钟）；数据库文件变化即时感知。
    try {
      this.calendarReconciler = startCalendarAutoReconcile(this.ctx.dataDir);
      this.revisionWatcher = startDataRevisionWatch(() => {
        void autoReconcileCalendarOnce("data-change", this.ctx.dataDir);
        void getAffairsMissingEnd().catch(() => {});
      });
    } catch (error) {
      this.ctx.log.warn("自动对账启动失败", error);
    }
    this.ctx.log.info("课务台 loaded", { recoveredPreviews, resumedCalendarSync, version: this.ctx.pluginVersion ?? undefined });
  }

  async onunload() {
    this.calendarReconciler?.stop();
    this.revisionWatcher?.stop();
    this.ctx.log.info("课务台 unloaded");
  }
}
