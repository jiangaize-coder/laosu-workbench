// 操作注册表：AI 提示词、路由白名单、Agent 工具枚举的唯一来源。
// 新增能力只需在这里加一条定义，三处自动跟上——这就是后续扩展的插口。
export const OPERATIONS = [
  { id: "course_add", label: "新建课程", ai: "course_add: {student,date,time,duration,note?,overrideAvailability?}" },
  { id: "course_move", label: "调课", ai: "course_move: {student,fromDate,fromTime,toDate,toTime,duration?,overrideAvailability?}" },
  { id: "course_cancel", label: "取消课程", ai: "course_cancel: {student,date,time,reason?}" },
  { id: "course_plan", label: "批量调课", ai: "course_plan: {title?,moves:[{student,fromDate,fromTime,toDate,toTime,duration?}, ...]}，仅用于两项及以上调课" },
  { id: "course_day_complete", label: "完成当日课程", ai: "course_day_complete: {date}" },
  { id: "reservation_add", label: "预留课程", ai: "reservation_add: {student,date,time,duration?,zone?,note?}" },
  { id: "reservation_update", label: "修改预留", ai: "reservation_update: {reservationId,date,time,duration?,zone?,note?}" },
  { id: "reservation_confirm", label: "确认预留", ai: "reservation_confirm: {reservationId}" },
  { id: "reservation_cancel", label: "取消预留", ai: "reservation_cancel: {reservationId}" },
  { id: "zone_set", label: "设置片区", ai: "zone_set: {student,zone,boundaryZones?}" },
  { id: "availability_set", label: "设置可用时间", ai: "availability_set: {student,weekday,windows:\"HH:MM-HH:MM、HH:MM-HH:MM\"}" },
  { id: "availability_clear", label: "清空可用时间", ai: "availability_clear: {student,weekday}" },
  { id: "commute_set", label: "登记通勤", ai: "commute_set: {fromStudent,toStudent,minutes,transport?,note?}" },
  { id: "quarantine_overdue", label: "清理过期课", ai: "quarantine_overdue: {}" },
  { id: "course_review_resolve", label: "复核处理", ai: "course_review_resolve: {courseId,resolution:\"done\"|\"cancelled\"}" },
  { id: "affair_create", label: "新建事务", ai: "affair_create: {affairKind,title,startDate?,startTime?,duration?,deadlineDate?,deadlineTime?,windowStart?,windowEnd?,candidateDates?,weekdays?,startWeek?,remindAt?,priority?,followUp?}，followUp:\"daily\" 表示办成前每日跟进" },
  { id: "affair_update", label: "修改事务", ai: "affair_update: {id,title?,startDate?,startTime?,priority?,note?,followUp?}——修改事务的时间/标题/优先级/备注/每日跟进，至少给一个要改的字段；改时间要同时给 startDate 和 startTime" },
  { id: "affair_complete", label: "完成事务", ai: "affair_complete: {id,expectedVersion?}" },
  { id: "affair_retry_next", label: "推进重试日期", ai: "affair_retry_next: {id,expectedVersion?}" },
  { id: "affair_retry_prev", label: "恢复上一候选日", ai: "affair_retry_prev: {id,expectedVersion?}" },
  { id: "affair_cancel", label: "取消事务", ai: "affair_cancel: {id,expectedVersion?}" },
  { id: "calendar_sync", label: "同步飞书日历", ai: "calendar_sync: {week?}" },
];

export const OPERATION_IDS = OPERATIONS.map((item) => item.id);

export function buildAiOperationLines() {
  return OPERATIONS.map((item, index) => `${index + 1}. ${item.ai}`).join("\n");
}

export const OPERATION_LABELS = Object.fromEntries(OPERATIONS.map((item) => [item.id, item.label]));
