import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseAvailabilityGroups,
  parseOnboarding,
  parseZoneGroups,
  textLines,
} from '../ui/planning-parser.ts';

const onboarding = `开学排课采集预览｜2026-08-23..2026-11-06
未分区：26人；可集中日：周二、周四、周五、周日
预留：2 条；正式课程：5 节
缺可用时间：Jaden、徐慕白、测试看看
先补齐可用时间和片区，再生成候选方案。`;

test('parseOnboarding extracts counts, days and missing students', () => {
  assert.deepEqual(parseOnboarding(onboarding), {
    unzoned: 26,
    reservationCount: 2,
    formalCourseCount: 5,
    concentratedDays: ['周二', '周四', '周五', '周日'],
    missingAvailability: ['Jaden', '徐慕白', '测试看看'],
    guidance: '先补齐可用时间和片区，再生成候选方案。',
  });
});

test('parseOnboarding treats 无 as an empty missing list', () => {
  assert.deepEqual(parseOnboarding('缺可用时间：无').missingAvailability, []);
});

test('parseZoneGroups accepts Chinese and ASCII punctuation', () => {
  assert.deepEqual(parseZoneGroups('片区分组：\n未分区（2人）：甲、乙\n浦东(1人): 丙'), [
    { name: '未分区', count: 2, students: ['甲', '乙'] },
    { name: '浦东', count: 1, students: ['丙'] },
  ]);
});

test('parseAvailabilityGroups groups rows by weekday and keeps multiple windows', () => {
  assert.deepEqual(parseAvailabilityGroups('每周可用时间\n 周一 大宝: 14:50-15:35\n周一 董同学：13:00-17:00、19:00-21:00\n周二 丁佳木: 16:40-17:40'), [
    { day: '周一', entries: [
      { student: '大宝', windows: '14:50-15:35' },
      { student: '董同学', windows: '13:00-17:00、19:00-21:00' },
    ] },
    { day: '周二', entries: [{ student: '丁佳木', windows: '16:40-17:40' }] },
  ]);
});

test('malformed lines are ignored and raw line splitting stays available', () => {
  assert.deepEqual(parseZoneGroups('无法识别的文本'), []);
  assert.deepEqual(parseAvailabilityGroups('无法识别的文本'), []);
  assert.deepEqual(textLines(' A \n\n B '), ['A', 'B']);
});
