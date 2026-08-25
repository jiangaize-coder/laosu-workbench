export type OnboardingSummary = {
  unzoned: number;
  reservationCount: number;
  formalCourseCount: number;
  concentratedDays: string[];
  missingAvailability: string[];
  guidance: string;
};

export type ZoneGroup = {
  name: string;
  count: number;
  students: string[];
};

export type AvailabilityGroup = {
  day: string;
  entries: Array<{ student: string; windows: string }>;
};

export function textLines(text = '') {
  return text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

export function parseOnboarding(text = ''): OnboardingSummary {
  const concentratedDays = text.match(/可集中日：([^\n]+)/)?.[1]?.split('；')[0].split('、').filter(Boolean) || [];
  const missingAvailability = text.match(/缺可用时间：([^\n]+)/)?.[1]?.split('、').filter((item) => item && item !== '无') || [];
  return {
    unzoned: Number(text.match(/未分区：(\d+)人/)?.[1] || 0),
    reservationCount: Number(text.match(/预留：(\d+)\s*条/)?.[1] || 0),
    formalCourseCount: Number(text.match(/正式课程：(\d+)\s*节/)?.[1] || 0),
    concentratedDays,
    missingAvailability,
    guidance: textLines(text).at(-1) || '',
  };
}

export function parseZoneGroups(text = ''): ZoneGroup[] {
  return textLines(text).map((line) => {
    const match = line.match(/^(.+?)[（(](\d+)人[）)][:：]\s*(.*)$/);
    return match ? { name: match[1], count: Number(match[2]), students: match[3].split('、').filter(Boolean) } : null;
  }).filter((group): group is ZoneGroup => Boolean(group));
}

export function parseAvailabilityGroups(text = ''): AvailabilityGroup[] {
  const groups = new Map<string, Array<{ student: string; windows: string }>>();
  textLines(text).forEach((line) => {
    const match = line.match(/^(周[一二三四五六日])\s+([^:：]+)[:：]\s*(.+)$/);
    if (!match) return;
    groups.set(match[1], [...(groups.get(match[1]) || []), { student: match[2], windows: match[3] }]);
  });
  return Array.from(groups.entries()).map(([day, entries]) => ({ day, entries }));
}
