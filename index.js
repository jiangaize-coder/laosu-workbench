import { autoReconcileCalendarOnce, getAffairsMissingEnd, pruneStalePreviews, recoverInterruptedPreviews, resumePendingCalendarSync, startCalendarAutoReconcile, startDataRevisionWatch } from "./lib/backend.js";
import { acquireBackgroundLease } from "./lib/background-lease.js";

export default class LaosuWorkbenchPlugin {
  /** @type {any} */
  ctx;
  /** @type {{ stop(): void } | null} */
  calendarReconciler = null;
  /** @type {{ stop(): void } | null} */
  revisionWatcher = null;
  /** @type {{ acquired: boolean, stop(): void } | null} */
  backgroundLease = null;
  /** @type {NodeJS.Timeout | null} */
  backgroundRetry = null;

  startBackgroundWorkers() {
    if (this.backgroundLease?.acquired) return { acquired: true, resumedCalendarSync: false };
    const lease = acquireBackgroundLease(this.ctx.dataDir);
    if (!lease.acquired) return { acquired: false, resumedCalendarSync: false };
    this.backgroundLease = lease;
    const resumedCalendarSync = resumePendingCalendarSync(this.ctx.dataDir);
    this.calendarReconciler = startCalendarAutoReconcile(this.ctx.dataDir);
    this.revisionWatcher = startDataRevisionWatch(() => {
      void autoReconcileCalendarOnce("data-change", this.ctx.dataDir);
      void getAffairsMissingEnd().catch(() => {});
    });
    if (this.backgroundRetry) {
      clearInterval(this.backgroundRetry);
      this.backgroundRetry = null;
    }
    this.ctx.log.info("课务台后台任务租约已取得", { leaseFile: lease.file, resumedCalendarSync });
    return { acquired: true, resumedCalendarSync };
  }

  async onload() {
    let recoveredPreviews = 0;
    try {
      recoveredPreviews = recoverInterruptedPreviews(this.ctx.dataDir);
      pruneStalePreviews(this.ctx.dataDir);
    } catch (error) {
      this.ctx.log.warn("预演恢复扫描失败", error);
    }
    let background = { acquired: false, resumedCalendarSync: false };
    try {
      background = this.startBackgroundWorkers();
      if (!background.acquired) {
        this.backgroundRetry = setInterval(() => {
          try {
            this.startBackgroundWorkers();
          } catch (error) {
            this.ctx.log.warn("后台任务租约重试失败", error);
          }
        }, 60_000);
        this.backgroundRetry.unref?.();
      }
    } catch (error) {
      this.ctx.log.warn("自动对账启动失败", error);
    }
    this.ctx.log.info("课务台 loaded", {
      recoveredPreviews,
      backgroundOwner: background.acquired,
      resumedCalendarSync: background.resumedCalendarSync,
      version: this.ctx.pluginVersion ?? undefined,
    });
  }

  async onunload() {
    if (this.backgroundRetry) clearInterval(this.backgroundRetry);
    this.calendarReconciler?.stop();
    this.revisionWatcher?.stop();
    this.backgroundLease?.stop();
    this.ctx.log.info("课务台 unloaded");
  }
}
