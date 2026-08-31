import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const panel = readFileSync(new URL('../ui/Panel.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../ui/panel.css', import.meta.url), 'utf8');
const backend = readFileSync(new URL('../lib/backend.js', import.meta.url), 'utf8');
const routes = readFileSync(new URL('../routes/ui.js', import.meta.url), 'utf8');

test('pending planning cards expose both actions directly on hover or focus', () => {
  assert.match(panel, /\{canAct && <div className="planning-week-inline-action"/);
  assert.match(panel, />调时间<\/button>/);
  assert.match(panel, /'确认落课'/);
  assert.match(css, /planning-week-block\.actionable:hover \.planning-week-inline-action/);
  assert.match(css, /planning-week-block\.actionable:focus-within \.planning-week-inline-action/);
  assert.doesNotMatch(panel, /planning-week-selection/);
  assert.doesNotMatch(css, /planning-week-selection/);
});

test('landed cards switch to formal-course actions without an empty layer', () => {
  assert.match(panel, /const isLanded = item\.kind === 'reservation' && item\.reservationStatus === '已确认'/);
  assert.match(panel, /operation: 'course_move'/);
  assert.match(panel, /operation: 'course_cancel'/);
  assert.match(panel, />本次不上<\/button>/);
  assert.match(panel, /feedback\?\.text \|\| item\.blockerText/);
  assert.match(panel, /aria-describedby=\{hardBlockers\.length \? blockerId : undefined\}/);
  assert.doesNotMatch(panel, /disabled=\{hardBlockers\.length > 0\} title=/);
});

test('primary week and month schedule is read-only while AI keeps operation capability', () => {
  assert.match(panel, /function Overview\(\{ dashboard, onInspect, onOpenDay \}/);
  assert.match(panel, /function WeekCalendar\(\{ items, range, localDate, onInspect \}/);
  assert.match(panel, /function ContextItemCard\(\{ item \}: \{ item: TimelineItem \}\)/);
  assert.match(panel, /<WeekCalendar items=\{unifiedItems\}/);
  assert.match(panel, /<MonthCalendar items=\{unifiedItems\}/);
  assert.match(panel, /AI 操作/);
  const weekView = panel.slice(panel.indexOf('function WeekCalendar'), panel.indexOf('function MonthCalendar'));
  assert.doesNotMatch(weekView, /ItemActionButtons|onQuick|onPrepare|onAskAi/);
  const contextCard = panel.slice(panel.indexOf('function ContextItemCard'), panel.indexOf('function VersionPanel'));
  assert.doesNotMatch(contextCard, /本次不上|调时间|取消…|affairComplete/);
});

test('week and month remain seven columns with auto and manual page scaling', () => {
  assert.match(panel, /width < 680 \? 0\.7 : width < 900 \? 0\.8 : width < 1120 \? 0\.9 : 1/);
  assert.match(panel, /className="view-scale-control" role="group" aria-label="页面缩放"/);
  assert.match(panel, /aria-label="缩小页面"/);
  assert.match(panel, /aria-label="放大页面"/);
  assert.match(panel, /className="main-area scalable-main" style=\{\{ zoom: viewScale, width: `\$\{100 \/ viewScale\}%` \}\}/);
  const weekView = panel.slice(panel.indexOf('function WeekCalendar'), panel.indexOf('function MonthCalendar'));
  assert.match(weekView, /const visibleDateSlots = dates/);
  assert.match(weekView, /const gridTemplate = '36px repeat\(7, minmax\(0, 1fr\)\)'/);
  assert.doesNotMatch(weekView, /useAdaptiveVisibleDays|dayPage|paginated|focusDate/);
  assert.match(css, /\.month-grid \{ grid-template-columns: repeat\(7, minmax\(0, 1fr\)\); gap: 4px; \}/);
  assert.match(css, /overflow-x: hidden/);
  assert.doesNotMatch(css, /min-width: 820px|min-width: 760px/);
  assert.match(css, /@container \(max-width: 720px\)/);
  assert.match(css, /@media \(max-width: 960px\)[\s\S]*grid-template-rows: auto auto/);
  assert.match(css, /top-actions button \{ min-width: 0; white-space: nowrap; \}/);
  assert.match(panel, /className="refresh-local-label">刷新本地数据<\/span>/);
});

test('month day drawer fits about eight to nine compact people cards without changing month cells', () => {
  assert.match(panel, /view\.kind === 'day' \? 'context-item-list context-day-list'/);
  assert.match(panel, /dayItems\.slice\(0, 3\)/);
  assert.match(css, /\.context-day-list \{ gap: 5px; \}/);
  assert.match(css, /\.context-day-list \.context-item-card \{ min-height: 48px; padding: 7px 10px;/);
  assert.match(css, /\.context-day-list \.context-item-card p \{ display: none; \}/);
  assert.match(css, /\.context-day-list \.context-item-card h3[^}]*white-space: nowrap;/);
});

test('refreshing content is inert and custom buttons prevent Space from scrolling', () => {
  assert.match(panel, /inert=\{loading && Boolean\(dashboard\)\}/);
  const customButtons = panel.match(/\srole="button"/g) || [];
  const preventedActivations = panel.match(/event\.preventDefault\(\);/g) || [];
  assert.ok(customButtons.length >= 4);
  assert.ok(preventedActivations.length >= customButtons.length);
});

test('every button declares its submit behavior explicitly', () => {
  const buttons = [...panel.matchAll(/<button\b([^>]*)>/g)];
  assert.ok(buttons.length > 50);
  assert.deepEqual(buttons.filter((match) => !/\btype=/.test(match[1])), []);
});

test('overview and planning share one semantic color system', () => {
  assert.match(css, /--wb-state-confirmed: #5f956f/);
  assert.match(css, /--wb-state-pending: #c08a48/);
  assert.match(css, /--wb-state-error: #b96b59/);
  assert.match(css, /--wb-kind-temporary: #668ca8/);
  assert.match(panel, /function itemStateClass/);
  assert.match(panel, /function isTemporaryItem/);
  assert.match(panel, /<i \/>课程/);
  assert.match(panel, /<i \/>事务／待确认/);
  assert.match(panel, /<i \/>已完成/);
  assert.match(panel, /function courseOverdue/);
  assert.match(panel, /schedule-conflict-alert/);
  assert.match(css, /--wb-state-finished: #6e8290/);
  assert.match(css, /week-time-block\.state-finished/);
  assert.match(css, /calendar-legend \.finished i/);
});

test('temporary identity remains independent from confirmed pending and error states', () => {
  assert.match(panel, /itemStateClass\(item\).*isTemporaryItem\(item\)/s);
  assert.match(css, /week-time-block\.temporary::after/);
  assert.match(css, /month-item\.temporary i/);
  assert.match(css, /timeline-row\.temporary \.domain-dot/);
  assert.match(css, /planning-week-block\.reservation::after/);
  assert.match(css, /planning-week-block\.expected \{ --card-state: var\(--wb-state-pending\)/);
  assert.match(css, /planning-week-block\.landed \{ --card-state: var\(--wb-state-confirmed\)/);
  assert.match(css, /planning-week-block\.blocked \{ --card-state: var\(--wb-state-error\)/);
});

test('state cards use borderless color blocks rather than leading status bars', () => {
  for (const selector of ['week-time-block', 'planning-week-block', 'reservation-card', 'context-item-card', 'next-course-banner.state-confirmed']) {
    const rule = css.match(new RegExp(`\\.${selector.replaceAll('.', '\\.')}\\s*\\{([^}]*)\\}`));
    assert.ok(rule, `${selector} rule should exist`);
    assert.doesNotMatch(rule[1], /border-left/);
  }
});

test('dashboard health exposes every read chain instead of only transaction health', () => {
  assert.match(panel, /health: \{/);
  assert.match(panel, /Object\.values\(dashboard\.health\.reads\)/);
  assert.match(css, /system-read-health/);
});

test('preview commits retain failed state and remove only successful tokens', () => {
  assert.match(backend, /status: "pending"/);
  assert.match(backend, /status: "committing"/);
  assert.match(backend, /status: result\.ok \? "committed" : "failed"/);
  assert.match(backend, /if \(result\.ok\) fs\.rmSync/);
  assert.match(backend, /lastError: error\.message/);
  assert.match(backend, /allowCommitting: true/);
  assert.match(backend, /status: "committing" \}\);/);
});

test('calendar sync is serialized, durable and detached from the commit response', () => {
  assert.match(backend, /runCalendarSyncQueued/);
  assert.match(backend, /queueCalendarSyncAfterCommit/);
  assert.match(backend, /calendar-sync-status\.json/);
  assert.match(backend, /resumePendingCalendarSync/);
  assert.match(backend, /SYNC_ALREADY_RUNNING/);
  assert.match(backend, /const ok = primaryVerified && \(!exported \|\| exported\.ok\);/);
  assert.match(routes, /飞书日历正在后台同步/);
});

test('reservation actions update locally and refresh all data without blocking the button', () => {
  assert.match(panel, /setPlanning\(\(current\) => current \? \{/);
  assert.match(panel, /status: '已确认'/);
  assert.match(panel, /void onDataChanged\(\{ silent: true \}\)/);
  assert.match(panel, /if \(!silent\) \{\s*setLoading\(true\)/);
});

test('overview opens as a two-page unified schedule with week first', () => {
  assert.match(panel, /type Scope = 'week' \| 'month'/);
  assert.match(panel, /week: '周视图',[\s\S]*month: '月视图'/);
  assert.match(panel, /const requestedScope = \(params\.get\('scope'\) as Scope\) \|\| 'week'/);
  assert.doesNotMatch(panel, /storedScope/);
  assert.match(panel, /<nav className="tabbar" aria-label="日程视图"/);
  assert.match(panel, /data-ui-id=\{`nav-\$\{item\}`\}/);
  assert.doesNotMatch(panel, /label: '筹备'|label: '事务'/);
  assert.match(panel, /dashboard\.courses\.forEach/);
  assert.match(panel, /dashboard\.affairs\.forEach/);
  assert.match(panel, /visibleScheduleItems/);
  assert.match(panel, /detectScheduleConflicts\(unifiedItems\)/);
  assert.match(panel, /month-course-summary/);
  assert.match(panel, /刷新本地数据/);
  assert.doesNotMatch(panel.slice(panel.indexOf('function Overview'), panel.indexOf('function SuggestionCards')), /NextCourseBanner|SuggestionCards|pending-action-panel/);
});

test('affair records separate scheduled work from completed history', () => {
  assert.match(panel, /const scheduledAffairs = affairs/);
  assert.match(panel, /const closedAffairs = affairs/);
  // 三状态按键（待处理/已安排/已完成·已取消）+ 列表/日历双视图
  assert.match(panel, /\{ id: 'pending', label: '待处理', count: pending\.length \}/);
  assert.match(panel, /\{ id: 'scheduled', label: '已安排', count: scheduledAffairs\.length \}/);
  assert.match(panel, /\{ id: 'closed', label: '已完成·已取消', count: closedAffairs\.length \}/);
  assert.match(panel, /MonthCalendar items=\{affairs\}/);
  assert.match(panel, /onOpenDay=\{handleDayOpen\}/);
  assert.match(css, /affair-record-group\.completed \.compact-item/);
});
