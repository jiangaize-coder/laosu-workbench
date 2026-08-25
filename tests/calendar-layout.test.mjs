import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addDateDays,
  buildMonthGridDates,
  buildWeekDates,
  buildWeekPageSlots,
  calendarHourBounds,
  eventGeometry,
  itemDateKey,
  layoutOverlappingItems,
  parseDateRange,
} from '../ui/calendar-layout.ts';

test('parseDateRange accepts dashboard range text', () => {
  assert.deepEqual(parseDateRange('2026-08-17..2026-08-23'), { start: '2026-08-17', end: '2026-08-23' });
});

test('week dates always span Monday through Sunday', () => {
  assert.deepEqual(buildWeekDates('2026-08-19..2026-08-25', '2026-08-19'), [
    '2026-08-17', '2026-08-18', '2026-08-19', '2026-08-20', '2026-08-21', '2026-08-22', '2026-08-23',
  ]);
});

test('narrow week pagination keeps three stable columns', () => {
  const dates = buildWeekDates('2026-08-24..2026-08-30', '2026-08-24');
  assert.deepEqual(buildWeekPageSlots(dates, 0), ['2026-08-24', '2026-08-25', '2026-08-26']);
  assert.deepEqual(buildWeekPageSlots(dates, 1), ['2026-08-27', '2026-08-28', '2026-08-29']);
  assert.deepEqual(buildWeekPageSlots(dates, 2), ['2026-08-30', null, null]);
});

test('month grid includes full surrounding weeks', () => {
  const dates = buildMonthGridDates('2026-08-01..2026-08-31', '2026-08-23');
  assert.equal(dates[0], '2026-07-27');
  assert.equal(dates.at(-1), '2026-09-06');
  assert.equal(dates.length, 42);
});

test('date arithmetic crosses month boundaries safely', () => {
  assert.equal(addDateDays('2026-08-31', 1), '2026-09-01');
});

test('calendar bounds retain the normal 10:00–22:00 frame', () => {
  assert.deepEqual(calendarHourBounds([{ start_at: '2026-08-23T13:40:00+08:00', end_at: '2026-08-23T15:00:00+08:00' }]), { startHour: 10, endHour: 22 });
});

test('event geometry follows course or affair time and duration', () => {
  assert.deepEqual(eventGeometry({ start_at: '2026-08-23T13:30:00+08:00', duration: 60 }, 10, 22), { top: 196, height: 56 });
  assert.deepEqual(eventGeometry({ deadline_at: '2026-08-23T19:00:00+08:00', estimated_minutes: 30 }, 10, 22), { top: 504, height: 30 });
  assert.equal(itemDateKey({ window_start: '2026-08-24' }), '2026-08-24');
});

test('course and affair overlaps share lanes in one time grid', () => {
  const placements = layoutOverlappingItems([
    { id: 'course', start_at: '2026-08-26T19:00:00+08:00', end_at: '2026-08-26T20:00:00+08:00' },
    { id: 'affair', start_at: '2026-08-26T19:30:00+08:00', estimated_minutes: 30 },
    { id: 'later', deadline_at: '2026-08-26T20:00:00+08:00', estimated_minutes: 30 },
  ]);
  assert.deepEqual(placements.map(({ item, lane, laneCount }) => ({ id: item.id, lane, laneCount })), [
    { id: 'course', lane: 0, laneCount: 2 },
    { id: 'affair', lane: 1, laneCount: 2 },
    { id: 'later', lane: 0, laneCount: 2 },
  ]);
});
