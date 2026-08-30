import assert from 'node:assert/strict';
import test from 'node:test';
import { buildSuggestionCards, filterMissingEndAffairs } from '../lib/backend.js';

const base = { events: [], reviews: [], pending: [], calendar: null, conflicts: [], missingEnd: [], localDate: '2026-08-29' };

test('过期未标记课程属于待处理：已上/没上直接决策', () => {
  const cards = buildSuggestionCards({ ...base, events: [
    { course_id: 412, start_at: '2026-08-28T14:30:00+08:00', title: '丁佳木', student_name: '丁佳木', status: '待上课' },
    { course_id: 399, start_at: '2026-08-28T16:00:00+08:00', title: '祝一诺', student_name: '祝一诺', status: '待上课' },
  ] });
  const card = cards.find((item) => item.id === 'overdue-412');
  assert.equal(card?.bucket, 'required');
  assert.equal(card?.tone, 'urgent');
  assert.equal(card?.action.kind, 'overdue');
  assert.equal(card?.action.student, '丁佳木');
  assert.equal(card?.action.date, '2026-08-28');
  assert.equal(card?.action.time, '14:30');
  assert.equal(card?.action.label, '已上');
  assert.equal(card?.action.cancelLabel, '没上');
});

test('待复核课程属于待处理，不得归到建议', () => {
  const cards = buildSuggestionCards({ ...base, reviews: [{ course_id: 1 }, { course_id: 2 }] });
  const card = cards.find((item) => item.id === 'review-queue');
  assert.equal(card?.bucket, 'required');
  assert.equal(card?.action.kind, 'navigate');
});

test('事务 pending 已在主队列展示，不复制到建议卡', () => {
  const cards = buildSuggestionCards({ ...base, pending: [
    { id: 'aff_x', title: '补牙复查', version: 15, deadline_at: '2026-08-28T12:00:00+08:00', retry: { current_candidate_date: '2026-08-29' } },
  ] });
  assert.equal(cards.length, 0);
});

test('日历差异属于可选系统建议，完全同步则不出现', () => {
  const withDiff = buildSuggestionCards({ ...base, calendar: { ok: true, inSync: false, diff: { toDelete: [{}], toCreate: [] } } });
  const card = withDiff.find((item) => item.id === 'calendar-diff');
  assert.equal(card?.bucket, 'suggestion');
  const clean = buildSuggestionCards({ ...base, calendar: { ok: true, inSync: true, diff: { toDelete: [], toCreate: [] } } });
  assert.ok(!clean.some((item) => item.id === 'calendar-diff'));
});

test('明日课表是信息，不占用处理队列', () => {
  const cards = buildSuggestionCards({ ...base, events: [{ start_at: '2026-08-30T10:00:00+08:00', title: '叶梓程', status: '待上课' }] });
  assert.equal(cards.length, 0);
});

test('事务与课程真实冲突属于待处理', () => {
  const cards = buildSuggestionCards({
    ...base,
    conflicts: [{
      id: 'aff_abc',
      title: '出发去补牙复查',
      start_at: '2026-08-31T13:20:00+08:00',
      conflicts: { affairs: [], courses: [{ title: '丁佳木', start_at: '2026-08-31T14:00:00+08:00' }], warnings: [] },
    }],
  });
  const card = cards.find((item) => item.id === 'conflict-aff_abc');
  assert.equal(card?.bucket, 'required');
  assert.equal(card?.entityId, 'aff_abc');
  assert.equal(card?.tone, 'urgent');
  assert.match(card?.detail ?? '', /课程 丁佳木 14:00/);
  assert.equal(card?.action.kind, 'openDay');
});

test('仅缺结束时间的警告不伪装成冲突卡', () => {
  const cards = buildSuggestionCards({
    ...base,
    conflicts: [{
      id: 'aff_warn',
      title: '出发去补牙复查',
      start_at: '2026-08-31T13:20:00+08:00',
      conflicts: { affairs: [], courses: [], warnings: ['结束时间未知，仅检查开始时刻'] },
    }],
  });
  assert.ok(!cards.some((item) => item.id === 'conflict-aff_warn'));
});

test('缺结束时间只筛仍在推进的事务，历史完成和取消不再误报', () => {
  const items = filterMissingEndAffairs([
    { id: 'done', kind: 'timed', title: '拍艺术照', status: 'completed', start_at: '2026-08-01T13:00:00+08:00', end_at: null },
    { id: 'cancelled', kind: 'timed', title: '拉伸', status: 'cancelled', start_at: '2026-08-16T19:00:00+08:00', end_at: null },
    { id: 'active', kind: 'timed', title: '去医院', status: 'scheduled', start_at: '2026-08-31T12:00:00+08:00', end_at: null },
    { id: 'complete', kind: 'timed', title: '游泳', status: 'scheduled', start_at: '2026-08-31T18:00:00+08:00', end_at: '2026-08-31T19:00:00+08:00' },
  ]);
  assert.deepEqual(items.map((item) => item.id), ['active']);
});

test('待处理始终排在建议前，同类按 rank 排序', () => {
  const cards = buildSuggestionCards({
    ...base,
    reviews: [{ course_id: 1 }],
    calendar: { ok: true, inSync: false, diff: { toDelete: [], toCreate: [{}] } },
    conflicts: [{ id: 'x', title: '冲突事务', start_at: '2026-08-31T10:00:00+08:00', conflicts: { courses: [{ title: '课程A', start_at: '2026-08-31T10:00:00+08:00' }], affairs: [] } }],
  });
  assert.deepEqual(cards.map((item) => item.id), ['conflict-x', 'review-queue', 'calendar-diff']);
  assert.deepEqual(cards.map((item) => item.bucket), ['required', 'required', 'suggestion']);
});
