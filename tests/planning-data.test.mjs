import test from 'node:test';
import assert from 'node:assert/strict';
import { buildOperation, buildPlanningStudents, buildTemplateDiagnostics } from '../lib/backend.js';

test('planning students merge readiness, pending and vacation constraints', () => {
  const students = buildPlanningStudents(
    [
      { name: '甲', nickname: null, status: '在读', default_duration: 50 },
      { name: '乙', nickname: null, status: '在读', default_duration: 60 },
      { name: '丙', nickname: null, status: '暂停', default_duration: 45 },
    ],
    {
      zones: [{ zone: '城西', students: [{ student: '甲', zone: '城西', boundary_zones: ['城北'], availability: [{ weekday: '周二', start_time: '14:00', end_time: '16:00' }] }] }],
    },
    { entries: [{ student: '乙', weekday: '周日', label: '乙(周日·待定)' }] },
    { students: ['甲'] },
    { vacations: [{ vacation_id: 1, student: '甲', start_date: '2026-08-25', end_date: '2026-08-28', note: '出游' }] },
    '2026-08-24',
    '2026-11-07',
  );
  assert.equal(students.length, 2);
  assert.equal(students[0].name, '乙');
  assert.deepEqual(students[0].issues, ['未确认', '未分区', '缺候选时间', '待定·周日']);
  assert.equal(students[1].zone, '城西');
  assert.deepEqual(students[1].issues, ['出游中/即将出游']);
});

test('a concrete reservation satisfies timing readiness without rewriting long-term availability', () => {
  const students = buildPlanningStudents(
    [{ name: '甲', nickname: null, status: '在读', default_duration: 50 }],
    { zones: [{ zone: '城西', students: [{ student: '甲', zone: '城西', boundary_zones: [], availability: [] }] }] },
    { entries: [] },
    { students: ['甲'] },
    { vacations: [] },
    '2026-08-24',
    '2026-11-07',
    { reservations: [{ student: '甲', status: '预期' }] },
  );
  assert.equal(students[0].hasReservation, true);
  assert.deepEqual(students[0].issues, []);
});

test('planning metadata and reservation operations keep dry-run flags', () => {
  assert.deepEqual(
    buildOperation({ operation: 'course_move', student: '甲', fromDate: '2026-08-25', fromTime: '14:00', toDate: '2026-08-26', toTime: '15:00', overrideAvailability: true }, true).args,
    ['move', '甲', '2026-08-25', '14:00', '2026-08-26', '15:00', '--override-availability', '--dry-run'],
  );
  assert.deepEqual(
    buildOperation({ operation: 'course_add', student: '甲', date: '2026-08-25', time: '14:00', duration: 50, overrideAvailability: true }, true).args,
    ['add', '甲', '2026-08-25', '14:00', '50', '--override-availability', '--dry-run'],
  );
  assert.deepEqual(
    buildOperation({ operation: 'reservation_update', reservationId: 'res_0123456789abcdef', date: '2026-08-25', time: '14:00', duration: 50, zone: '城西' }, true).args,
    ['reservation', 'update', 'res_0123456789abcdef', '2026-08-25', '14:00', '50', '--zone', '城西', '--dry-run'],
  );
  assert.deepEqual(
    buildOperation({ operation: 'zone_set', student: '甲', zone: '城西', boundaryZones: '城北、城中' }, true).args,
    ['zone', 'set', '甲', '城西', '城北,城中', '--dry-run'],
  );
  assert.deepEqual(
    buildOperation({ operation: 'availability_set', student: '甲', weekday: '周二', windows: '14:00-16:00、19:00-20:00' }, true).args,
    ['availability', 'set', '甲', '周二', '14:00-16:00', '19:00-20:00', '--dry-run'],
  );
  assert.equal(buildOperation({ operation: 'commute_set', fromStudent: '甲', toStudent: '乙', minutes: 25 }, true).args.at(-1), '--dry-run');
});

test('template diagnostics identify overlap, availability and directional commute gaps', () => {
  const planningStudents = [
    { name: '甲', availability: [{ weekday: '周二', start_time: '14:00', end_time: '16:00' }] },
    { name: '乙', availability: [{ weekday: '周二', start_time: '16:00', end_time: '18:00' }] },
    { name: '丙', availability: [{ weekday: '周二', start_time: '18:00', end_time: '19:00' }] },
  ];
  const diagnostics = buildTemplateDiagnostics([
    { template_id: 1, student: '甲', student_status: '在读', weekday: '周二', start_time: '14:00', end_time: '15:00' },
    { template_id: 2, student: '乙', student_status: '在读', weekday: '周二', start_time: '14:30', end_time: '15:30' },
    { template_id: 3, student: '丙', student_status: '在读', weekday: '周二', start_time: '18:00', end_time: '19:00' },
  ], planningStudents, { routes: [] });
  assert.equal(diagnostics.overlaps.length, 1);
  assert.equal(diagnostics.availabilityConflicts.length, 1);
  assert.deepEqual(diagnostics.missingRoutes.map((item) => `${item.from}->${item.to}`), ['乙->丙']);
  assert.equal(diagnostics.ready, false);
});

test('template availability differences are advisory rather than a hard readiness failure', () => {
  const diagnostics = buildTemplateDiagnostics([
    { template_id: 1, student: '甲', student_status: '在读', weekday: '周二', start_time: '14:00', end_time: '15:00' },
  ], [{ name: '甲', availability: [] }], { routes: [] });
  assert.equal(diagnostics.availabilityConflicts.length, 1);
  assert.equal(diagnostics.ready, true);
});
