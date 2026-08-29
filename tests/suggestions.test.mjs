import assert from 'node:assert/strict';
import test from 'node:test';
import { buildSuggestionCards } from '../lib/backend.js';

const base = { events: [], reviews: [], pending: [], calendar: null, localDate: '2026-08-29' };

test('过期未标记课程逐节成卡：已上/没上直接决策（老苏即人工）', () => {
  const cards = buildSuggestionCards({ ...base, events: [
    { course_id: 412, start_at: '2026-08-28T14:30:00+08:00', title: '丁佳木', student_name: '丁佳木', status: '待上课' },
    { course_id: 399, start_at: '2026-08-28T16:00:00+08:00', title: '祝一诺', student_name: '祝一诺', status: '待上课' },
  ] });
  const card = cards.find((item) => item.id === 'overdue-412');
  assert.equal(card?.tone, 'urgent');
  assert.equal(card?.action.kind, 'overdue');
  assert.equal(card?.action.student, '丁佳木');
  assert.equal(card?.action.date, '2026-08-28');
  assert.equal(card?.action.time, '14:30');
  assert.equal(card?.action.label, '已上');
  assert.equal(card?.action.cancelLabel, '没上');
  assert.ok(cards.every((item) => item.action.kind === 'overdue'));
});

test('当天到期的预约触发一键推进卡（没约上语义）', () => {
  const cards = buildSuggestionCards({ ...base, pending: [{ id: 'aff_x', title: '补牙复查', version: 15, retry: { current_candidate_date: '2026-08-29' } }] });
  const card = cards.find((item) => item.id === 'retry-followup-aff_x');
  assert.equal(card?.action.kind, 'retryNext');
  assert.equal(card?.action.id, 'aff_x');
  assert.equal(card?.action.version, 15);
});

test('日历有差异触发同步卡，完全同步则不触发', () => {
  const withDiff = buildSuggestionCards({ ...base, calendar: { ok: true, inSync: false, diff: { toDelete: [{}], toCreate: [] } } });
  assert.ok(withDiff.some((item) => item.id === 'calendar-diff'));
  const clean = buildSuggestionCards({ ...base, calendar: { ok: true, inSync: true, diff: { toDelete: [], toCreate: [] } } });
  assert.ok(!clean.some((item) => item.id === 'calendar-diff'));
});

test('明天课表生成速览卡；数据干净时为空列表', () => {
  const cards = buildSuggestionCards({ ...base, events: [{ start_at: '2026-08-30T10:00:00+08:00', title: '叶梓程', status: '待上课' }] });
  const card = cards.find((item) => item.id === 'tomorrow-brief');
  assert.equal(card?.tone, 'info');
  assert.equal(buildSuggestionCards(base).length, 0);
});

test('事务与课程冲突成卡，点开当天看全貌', () => {
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
  assert.equal(card?.tone, 'urgent');
  assert.match(card?.detail ?? '', /课程 丁佳木 14:00/);
  assert.equal(card?.action.kind, 'openDay');
  assert.equal(card?.action.date, '2026-08-31');
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
