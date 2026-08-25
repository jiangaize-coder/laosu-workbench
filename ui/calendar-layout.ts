export type CalendarItemLike = {
  start_at?: string | null;
  end_at?: string | null;
  deadline_at?: string | null;
  window_start?: string | null;
  duration?: number | null;
  estimated_minutes?: number | null;
};

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function addDateDays(dateText: string, days: number) {
  if (!DATE_RE.test(dateText)) return dateText;
  const date = new Date(`${dateText}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function parseDateRange(range: string) {
  const matches = String(range || '').match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: matches[0] || '',
    end: matches[1] || matches[0] || '',
  };
}

function mondayOffset(dateText: string) {
  const day = new Date(`${dateText}T12:00:00Z`).getUTCDay();
  return day === 0 ? 6 : day - 1;
}

function dateList(start: string, count: number) {
  return Array.from({ length: count }, (_, index) => addDateDays(start, index));
}

export function buildWeekDates(range: string, fallbackDate: string) {
  const parsed = parseDateRange(range);
  const anchor = parsed.start || fallbackDate;
  const monday = addDateDays(anchor, -mondayOffset(anchor));
  return dateList(monday, 7);
}

export function buildWeekPageSlots(dates: string[], page: number, pageSize = 3): Array<string | null> {
  const safeSize = Math.max(1, Math.floor(pageSize));
  const safePage = Math.max(0, Math.floor(page));
  const pageDates = dates.slice(safePage * safeSize, safePage * safeSize + safeSize);
  return [...pageDates, ...Array(Math.max(0, safeSize - pageDates.length)).fill(null)];
}

export function buildMonthGridDates(range: string, fallbackDate: string) {
  const parsed = parseDateRange(range);
  const anchor = parsed.start || fallbackDate;
  const monthStart = DATE_RE.test(anchor) ? `${anchor.slice(0, 7)}-01` : fallbackDate;
  const nextMonth = new Date(`${monthStart}T12:00:00Z`);
  nextMonth.setUTCMonth(nextMonth.getUTCMonth() + 1, 1);
  const monthEndDate = new Date(nextMonth);
  monthEndDate.setUTCDate(monthEndDate.getUTCDate() - 1);
  const monthEnd = monthEndDate.toISOString().slice(0, 10);
  const gridStart = addDateDays(monthStart, -mondayOffset(monthStart));
  const endOffset = 6 - mondayOffset(monthEnd);
  const gridEnd = addDateDays(monthEnd, endOffset);
  const days = Math.round((new Date(`${gridEnd}T12:00:00Z`).getTime() - new Date(`${gridStart}T12:00:00Z`).getTime()) / 86_400_000) + 1;
  return dateList(gridStart, days);
}

export function itemDateKey(item: CalendarItemLike) {
  return (item.start_at || item.deadline_at || item.window_start || '').slice(0, 10);
}

function minutesOfDay(value?: string | null) {
  if (!value || value.length < 16) return null;
  const hour = Number(value.slice(11, 13));
  const minute = Number(value.slice(14, 16));
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  return hour * 60 + minute;
}

export function calendarHourBounds(items: CalendarItemLike[]) {
  const starts = items.map((item) => minutesOfDay(item.start_at || item.deadline_at)).filter((value): value is number => value !== null);
  const ends = items.map((item) => {
    const explicit = minutesOfDay(item.end_at);
    if (explicit !== null) return explicit;
    const start = minutesOfDay(item.start_at || item.deadline_at);
    return start === null ? null : start + Number(item.duration || item.estimated_minutes || 45);
  }).filter((value): value is number => value !== null);
  const earliest = starts.length ? Math.floor(Math.min(...starts) / 60) - 1 : 10;
  const latest = ends.length ? Math.ceil(Math.max(...ends) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, earliest)),
    endHour: Math.min(24, Math.max(22, latest)),
  };
}

export function eventGeometry(item: CalendarItemLike, startHour: number, endHour: number, hourHeight = 56) {
  const startMinutes = minutesOfDay(item.start_at || item.deadline_at);
  if (startMinutes === null) return null;
  const explicitEnd = minutesOfDay(item.end_at);
  const endMinutes = explicitEnd ?? startMinutes + Number(item.duration || item.estimated_minutes || 45);
  const visibleStart = Math.max(startHour * 60, startMinutes);
  const visibleEnd = Math.min(endHour * 60, Math.max(endMinutes, visibleStart + 30));
  return {
    top: ((visibleStart - startHour * 60) / 60) * hourHeight,
    height: Math.max(30, ((visibleEnd - visibleStart) / 60) * hourHeight),
  };
}

export function layoutOverlappingItems<T extends CalendarItemLike>(items: T[]) {
  const timed = items.map((item) => {
    const startValue = item.start_at || item.deadline_at;
    const start = startValue ? new Date(startValue).getTime() : Number.NaN;
    const explicitEnd = item.end_at ? new Date(item.end_at).getTime() : Number.NaN;
    const end = Number.isFinite(explicitEnd) ? explicitEnd : start + Number(item.duration || item.estimated_minutes || 45) * 60_000;
    return { item, start, end };
  }).filter((entry) => Number.isFinite(entry.start)).sort((a, b) => a.start - b.start || a.end - b.end);
  const laneEnds: number[] = [];
  const placements = timed.map((entry) => {
    let lane = laneEnds.findIndex((end) => end <= entry.start);
    if (lane < 0) lane = laneEnds.length;
    laneEnds[lane] = entry.end;
    return { ...entry, lane };
  });
  const laneCount = Math.max(1, laneEnds.length);
  return placements.map((entry) => ({ ...entry, laneCount }));
}
