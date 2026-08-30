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

test('overview and affair cards share contextual two-action mappings', () => {
  assert.match(panel, /function ItemActionButtons/);
  assert.match(panel, /item\.domain === 'course'/);
  // 交互铁律：决策类一键（本次不上/完成/没约上），需要输入的走表单（调整时间），取消走详情
  assert.match(panel, /onQuick\('courseCancel', item\)/);
  assert.match(panel, /onQuick\?\.\('affairComplete', item\)/);
  assert.match(panel, />本次不上<\/button>/);
  assert.match(panel, /'没约上'/);
  assert.match(panel, /的这节课调一下时间/);
  assert.match(panel, /week-card-inline-action/);
  assert.match(panel, /affair-row-inline-action/);
  assert.match(panel, /quick-pending-inline-action/);
  assert.match(panel, /compact-inline-action/);
  assert.match(css, /contextual-action-host\.actionable:hover/);
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
  assert.match(panel, /已确认/);
  assert.match(panel, /待确认／待处理/);
  assert.match(panel, /已完成·留痕/);
  assert.match(panel, /function courseOverdue/);
  assert.match(panel, /过期未标记的课程以琥珀/);
  assert.match(panel, /错误／硬阻塞/);
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

test('overview separates required work from optional suggestions without duplicate hiding', () => {
  assert.match(panel, /const requiredCards = allCards\.filter\(\(card\) => card\.bucket === 'required'\)/);
  assert.match(panel, /const suggestionCards = allCards\.filter\(\(card\) => card\.bucket === 'suggestion'/);
  assert.match(panel, /const pendingItems = pending\.filter\(\(item\) => !requiredEntityIds\.has\(item\.id\)\)/);
  assert.match(panel, /const requiredCount = pendingItems\.length \+ requiredCards\.length/);
  assert.match(panel, /requiredCards\.map\(\(card\) => renderCard\(card, false\)\)/);
  assert.match(panel, /suggestionCards\.map\(\(card\) => renderCard\(card, true\)\)/);
  assert.doesNotMatch(panel, /pending\.slice\(0, 4\)/);
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
