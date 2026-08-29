import assert from 'node:assert/strict';
import test from 'node:test';
import { buildOperation, dayCourseKey, daySnapshotMatches } from '../lib/backend.js';

test('自由文本以“-”开头时在预演前就被拒绝', () => {
  assert.throws(
    () => buildOperation({ operation: 'course_move', student: '--override-availability', fromDate: '2026-09-01', fromTime: '10:00', toDate: '2026-09-02', toTime: '11:00' }),
    /学生不能以“-”开头/,
  );
  assert.throws(
    () => buildOperation({ operation: 'affair_create', affairKind: 'timed', title: '-内部测试', startDate: '2026-09-01', startTime: '10:00' }),
    /标题不能以“-”开头/,
  );
  assert.throws(
    () => buildOperation({ operation: 'course_cancel', student: '董同学', date: '2026-09-01', time: '10:00', reason: '-缺席' }),
    /取消原因不能以“-”开头/,
  );
  assert.throws(
    () => buildOperation({ operation: 'commute_set', fromStudent: '甲', toStudent: '乙', minutes: 10, transport: '-rail' }),
    /交通方式不能以“-”开头/,
  );
});

test('正常学生名与备注仍按原样传给底层', () => {
  const add = buildOperation({ operation: 'course_add', student: '叶梓程', date: '2026-09-01', time: '10:00', duration: 45, note: '备注：带教材' }, true);
  assert.equal(add.args[0], 'add');
  assert.equal(add.args[1], '叶梓程');
  assert.ok(add.args.includes('备注：带教材'));
  assert.ok(add.args.includes('--dry-run'));
  const cancel = buildOperation({ operation: 'course_cancel', student: '董同学', date: '2026-09-01', time: '10:00', reason: '家长请假' }, false);
  assert.deepEqual(cancel.args, ['cancel', '董同学', '2026-09-01', '--time', '10:00', '--reason', '家长请假']);
});

test('复核处理不再触发插件侧重复导出（底层 review 写入已自动导出）', () => {
  const spec = buildOperation({ operation: 'course_review_resolve', courseId: 5, resolution: 'done' }, false);
  assert.equal(spec.exportAfter, false);
  assert.deepEqual(spec.args, ['review', 'resolve', '5', 'done']);
});

test('当日快照：预演后新增或减少待上课程都会被拦截', () => {
  const base = [
    { start_at: '2026-09-01T10:00:00+08:00', end_at: '2026-09-01T10:45:00+08:00', student_name: '叶梓程' },
    { start_at: '2026-09-01T14:00:00+08:00', end_at: '2026-09-01T14:45:00+08:00', student_name: '董同学' },
  ];
  const snapshot = base.map(dayCourseKey);
  assert.equal(daySnapshotMatches(base, snapshot), true);
  assert.equal(
    daySnapshotMatches(
      [...base, { start_at: '2026-09-01T18:00:00+08:00', end_at: '2026-09-01T18:45:00+08:00', student_nickname: '新同学' }],
      snapshot,
    ),
    false,
  );
  assert.equal(daySnapshotMatches(base.slice(1), snapshot), false);
  assert.equal(daySnapshotMatches([], snapshot), false);
});

test('旧版本遗留的无快照记录放行（向后兼容）', () => {
  assert.equal(daySnapshotMatches([{ start_at: '2026-09-01T10:00:00+08:00' }], undefined), true);
  assert.equal(daySnapshotMatches([{ start_at: '2026-09-01T10:00:00+08:00' }], null), true);
});

test('affair_update 装配 update 命令且至少要求一个字段', () => {
  const update = buildOperation({ operation: 'affair_update', id: 'aff_abc123', title: '新标题', priority: 'high' }, true);
  assert.equal(update.kind, 'affairs');
  assert.deepEqual(update.args, ['update', 'aff_abc123', '--title', '新标题', '--priority', 'high', '--actor', 'hana-plugin', '--dry-run']);
  assert.throws(() => buildOperation({ operation: 'affair_update', id: 'aff_abc123' }), /至少要改一个字段/);
  assert.throws(() => buildOperation({ operation: 'affair_update', id: 'aff_abc123', followUp: 'weekly' }, true), /每日跟进仅支持/);
  assert.throws(() => buildOperation({ operation: 'affair_update', id: 'aff_abc123', title: '-标题' }, true), /标题不能以“-”开头/);
  const stop = buildOperation({ operation: 'affair_update', id: 'aff_abc123', followUp: 'none' }, false);
  assert.deepEqual(stop.args, ['update', 'aff_abc123', '--follow-up', 'none', '--actor', 'hana-plugin']);
});

test('affair_retry_prev 装配 retry-prev 命令', () => {
  const spec = buildOperation({ operation: 'affair_retry_prev', id: 'aff_abc123', expectedVersion: 3 }, false);
  assert.equal(spec.kind, 'affairs');
  assert.deepEqual(spec.args, ['retry-prev', 'aff_abc123', '--expected-version', '3', '--actor', 'hana-plugin']);
  assert.throws(() => buildOperation({ operation: 'affair_retry_prev', id: 'bad_id' }, true), /事务 ID 格式无效/);
});

test('affair_create 支持办成前每日跟进', () => {
  const spec = buildOperation({ operation: 'affair_create', affairKind: 'retry', title: '抢复查号', weekdays: 'mon,wed', startWeek: '2026-08-31', followUp: 'daily' }, true);
  assert.ok(spec.args.includes('--follow-up'));
  assert.equal(spec.args[spec.args.indexOf('--follow-up') + 1], 'daily');
  const plain = buildOperation({ operation: 'affair_create', affairKind: 'timed', title: '普通事务', startDate: '2026-09-01', startTime: '10:00' }, true);
  assert.ok(!plain.args.includes('--follow-up'));
});
