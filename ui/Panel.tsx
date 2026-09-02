import { Component, FormEvent, PointerEvent as ReactPointerEvent, type ErrorInfo, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { hana } from '@hana/plugin-sdk';
import { HanaThemeProvider } from '@hana/plugin-components';
import '@hana/plugin-components/styles.css';
import './panel.css';
import './design-system.css';
import { addDateDays, buildMonthGridDates, buildWeekDates, buildWeekPageSlots, calendarHourBounds, detectScheduleConflicts, eventGeometry, itemDateKey, layoutOverlappingItems, parseDateRange, visibleScheduleItems, type CalendarItemLike, type UnifiedScheduleItem } from './calendar-layout';
import { api } from './api-client';
import { createRequestGate } from './request-gate';

type Tab = 'overview' | 'planning' | 'affairs';
type PlanningSection = 'calendar' | 'trial' | 'students' | 'candidates';
type SuggestionCard = {
  id: string;
  entityId?: string;
  bucket: 'required' | 'suggestion';
  rank: number;
  tone: 'urgent' | 'warn' | 'info';
  title: string;
  detail: string;
  action: {
    kind: 'preview' | 'openDay' | 'navigate' | 'retryNext' | 'overdue' | 'backfill';
    label: string;
    operation?: string;
    input?: Record<string, unknown>;
    date?: string;
    tab?: string;
    section?: string;
    id?: string;
    version?: number;
    title?: string;
    student?: string;
    time?: string;
    cancelLabel?: string;
    ids?: string[];
  };
};
type Scope = 'week' | 'month';

type TimelineItem = {
  id: string;
  domain: 'course' | 'affair';
  title: string;
  start_at?: string | null;
  end_at?: string | null;
  deadline_at?: string | null;
  window_start?: string | null;
  window_end?: string | null;
  status: string;
  priority?: string;
  duration?: number;
  estimated_minutes?: number | null;
  note?: string;
  origin?: string | null;
  scope?: string | null;
  reservation_id?: string | null;
  version?: number;
  window_label?: string | null;
  next_prompt_at?: string | null;
  retry?: { current_candidate_date?: string; weekdays?: string[] };
};

type Student = {
  name: string;
  nickname?: string | null;
  status: string;
  default_duration: number;
};

type Dashboard = {
  ok: boolean;
  observedAt: string;
  localDate: string;
  scope: Scope;
  range: string;
  items: TimelineItem[];
  affairs: TimelineItem[];
  courses: TimelineItem[];
  pending: TimelineItem[];
  scheduleText: string;
  students: Student[];
  nextCourse?: TimelineItem | null;
  commuteAdvice?: {
    available: boolean;
    from?: string;
    to?: string;
    minutes?: number;
    gapMinutes?: number;
    leaveBy?: string;
    tight?: boolean;
    reason?: string;
  } | null;
  warnings: string[];
  health: {
    ok?: boolean;
    readOk?: boolean;
    reads?: Record<string, { ok: boolean; label: string; detail: string }>;
    database?: any;
    schedule_agent?: any;
    writer?: any;
    maintenance?: boolean;
  };
};

type AvailabilityWindow = { weekday: string; start_time: string; end_time: string };

type PlanningStudent = {
  name: string;
  sourceName: string;
  duration: number;
  confirmed: boolean;
  pendingWeekday: string | null;
  zone: string;
  boundaryZones: string[];
  availability: AvailabilityWindow[];
  hasReservation: boolean;
  vacations: Array<{ vacation_id: number; start_date: string; end_date: string; note: string }>;
  issues: string[];
};

type PlanningReservation = {
  reservation_id: string;
  student: string;
  reservation_date: string;
  weekday: string;
  start_time: string;
  end_time: string;
  duration: number;
  status: string;
  confirmed_course_id?: number | null;
  student_status?: string;
  zone?: string | null;
  note?: string | null;
  conflicts?: {
    formal_courses?: Array<{ student: string }>;
    soft_reservations?: Array<{ student: string }>;
  };
};

type PlanningTemplate = {
  template_id: number;
  student_id: string;
  student: string;
  student_status: string;
  weekday: string;
  start_time: string;
  end_time: string;
  duration: number;
  weekly_limit: number;
};

type PlanningReview = {
  course_id: number;
  student: string;
  date: string;
  weekday: string;
  start_time: string;
  end_time: string;
  duration: number;
  status: string;
  note: string;
};

type PlanningData = {
  ok: boolean;
  observedAt: string;
  localDate: string;
  weekMonday: string;
  range: string;
  contract: { version: number | null; schemaVersion: number | null };
  summary: {
    activeStudentCount: number;
    unzonedCount: number;
    missingAvailabilityCount: number;
    unconfirmedActiveCount: number;
    inactiveConfirmedCount: number;
    pendingCount: number;
    reservationCount: number;
    formalCourseCount: number;
    reviewCount: number;
    overdueCount: number;
    activeVacationCount: number;
    templateCount: number;
    availabilityWindowCount: number;
    reservationAvailabilityAdvisoryCount: number;
    reservationHardBlockerCount: number;
    templateAvailabilityAdvisoryCount: number;
  };
  students: PlanningStudent[];
  inactiveConfirmed: string[];
  pending: Array<{ student: string; weekday: string | null; label: string }>;
  confirmed: string[];
  reservations: PlanningReservation[];
  audit: {
    summary: Record<string, number>;
    reservation_availability_advisories: Array<{ reservation_id: string; student: string; date: string; start_time: string; end_time: string; effect: string }>;
    reservation_hard_blockers: Array<{ reservation_id: string; student: string; date: string; start_time: string; end_time: string; reasons: string[] }>;
    template_availability_advisories: Array<{ template_id: number; student: string; weekday: string; start_time: string; end_time: string; effect: string }>;
    inconsistent_weekly_limits: Array<{ student_id: string; weekly_limits: number[] }>;
    broken_confirmations: Array<{ reservation_id: string; student: string; confirmed_course_id?: number | null }>;
    policy: Record<string, string>;
  };
  templates: PlanningTemplate[];
  reviews: PlanningReview[];
  vacations: Array<{ vacation_id: number; student: string; start_date: string; end_date: string; note: string }>;
  zones: Array<{ zone: string; count: number; students: Array<{ student: string }> }>;
  availability: Array<{ student: string; weekday: string; windows: Array<{ start_time: string; end_time: string }> }>;
  commute: {
    routeCount: number;
    templateCount: number;
    ready: boolean;
    overlaps: Array<{ weekday: string; first: string; second: string; firstRange: string; secondRange: string }>;
    availabilityConflicts: Array<{ templateId: number; student: string; weekday: string; startTime: string; endTime: string }>;
    requiredRouteCount: number;
    missingRoutes: Array<{ weekday: string; from: string; to: string; gapStart: string; gapEnd: string }>;
  };
  sources: Array<{ label: string; ok: boolean; errorCode?: string | null; observedAt?: string | null; message?: string }>;
  warnings: string[];
  raw: Record<string, string>;
};

type TemplateCheck = {
  ok: boolean;
  passed: boolean;
  monday: string;
  errorCode?: string | null;
  output: string;
  affectedDates: string[];
  error?: string;
};

type PreviewResponse = {
  ok: boolean;
  token?: string;
  expiresAt?: number;
  summary?: string;
  canCommit?: boolean;
  message?: string;
  error?: string;
  result?: any;
  operation?: string;
  input?: Record<string, unknown>;
  committed?: boolean;
  batch?: boolean;
  batchItems?: Array<{ operation: string; token: string; summary: string; canCommit: boolean; message?: string; resultOk?: boolean }>;
};

type AiMessage = { role: 'user' | 'assistant'; text: string };

type AiInterpretResponse = {
  ok: boolean;
  status?: 'ready' | 'need_clarification';
  reply?: string;
  options?: string[];
  batch?: boolean;
  previews?: Array<{ operation: string; token: string; summary: string; canCommit: boolean; message: string }>;
  operation?: string;
  input?: Record<string, unknown>;
  preview?: {
    token: string;
    expiresAt: number;
    summary: string;
    canCommit: boolean;
    message: string;
    result?: any;
  };
  error?: string;
};

type AffairFeedback = {
  ok: boolean;
  text: string;
  buttonLabel?: string;
  undo?: { expectedVersion?: number };
};

type FocusTarget = { tab: Tab; id: string };
type ContextView =
  | { kind: 'item'; item: TimelineItem }
  | { kind: 'day'; date: string; items?: TimelineItem[] }
  | { kind: 'system' };
type InspectHandler = (item: TimelineItem, trigger?: HTMLElement | null) => void;
type OpenDayHandler = (date: string, trigger?: HTMLElement | null) => void;

type ActionPreset = {
  operation: string;
  [key: string]: any;
  student?: string;
  fromDate?: string;
  fromTime?: string;
  toDate?: string;
  toTime?: string;
  duration?: number;
  id?: string;
  expectedVersion?: number;
  week?: string;
};

const scopeLabels: Record<Scope, string> = {
  week: '周视图',
  month: '月视图',
};

const statusLabels: Record<string, string> = {
  completed: '已完成',
  cancelled: '已取消',
  scheduled: '已安排',
  pending_confirmation: '待确认',
  in_progress: '进行中',
  postponed: '已推迟',
  needs_reschedule: '待重排',
  '待上课': '待上课',
  '已完成': '已完成',
  '已取消': '已取消',
  '已调课': '已调课',
  '待确认': '待确认',
};

function assertDashboard(value: unknown): Dashboard {
  const data = value as Partial<Dashboard> | null;
  if (!data || !Array.isArray(data.items) || !Array.isArray(data.pending) || !Array.isArray(data.courses) || !Array.isArray(data.affairs) || !Array.isArray(data.students) || !Array.isArray(data.warnings)) {
    throw new Error('总览接口返回的数据结构不完整');
  }
  return data as Dashboard;
}

function assertPlanningData(value: unknown): PlanningData {
  const data = value as Partial<PlanningData> | null;
  const arrays = data ? [
    data.students, data.inactiveConfirmed, data.pending, data.confirmed, data.reservations,
    data.templates, data.reviews, data.vacations, data.zones, data.availability, data.sources, data.warnings,
  ] : [];
  if (!data || !data.summary || !data.audit || !data.commute || arrays.some((items) => !Array.isArray(items))) {
    throw new Error('筹备接口返回的数据结构不完整');
  }
  return data as PlanningData;
}

class WorkbenchErrorBoundary extends Component<{ children: ReactNode }, { error: string }> {
  state = { error: '' };

  static getDerivedStateFromError(error: unknown) {
    return { error: error instanceof Error ? error.message : '页面渲染异常' };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[laosu-workbench] render failed', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="workbench-shell" data-ui="workbench-shell" data-ui-id="workbench-error">
        <main className="main-area">
          <div className="notice error" role="alert">
            <strong>课务台页面异常</strong>
            <span>{this.state.error}</span>
            <button type="button" className="primary-button" onClick={() => window.location.reload()}>重新载入</button>
          </div>
        </main>
      </div>
    );
  }
}

function formatDate(value?: string | null, options?: Intl.DateTimeFormatOptions) {
  if (!value) return '未定';
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
    ...options,
  }).format(new Date(value));
}

function formatTime(value?: string | null) {
  if (!value) return '';
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(value));
}

function formatUpdated(value?: string | null) {
  if (!value) return '尚未更新';
  return `更新于 ${formatTime(value)}`;
}

function formatRange(value?: string | null) {
  if (!value) return '当前范围';
  const [start, end] = value.split('..');
  if (!start || !end || !/^\d{4}-\d{2}-\d{2}$/.test(start) || !/^\d{4}-\d{2}-\d{2}$/.test(end)) return value;
  const formatPart = (date: string) => new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai', month: 'long', day: 'numeric',
  }).format(new Date(`${date}T12:00:00+08:00`));
  return start === end ? formatPart(start) : `${formatPart(start)}—${formatPart(end)}`;
}

function formatCourseMinutes(value: number) {
  const minutes = Math.max(0, Math.round(Number(value) || 0));
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (!hours) return `${remainder} 分钟`;
  return remainder ? `${hours} 小时 ${remainder} 分钟` : `${hours} 小时`;
}

function itemDate(item: TimelineItem) {
  return item.start_at || item.deadline_at || null;
}

function statusTone(status: string) {
  if (['completed', '已完成'].includes(status)) return 'finished';
  if (['cancelled', '已取消', '已调课'].includes(status)) return 'muted';
  if (['failed', 'error', 'blocked', '异常', '失败'].includes(status)) return 'error';
  if (['pending_confirmation', '待确认', '待处理', 'needs_reschedule'].includes(status)) return 'warn';
  return 'active';
}

function courseOverdue(item: TimelineItem, today?: string) {
  if (!today || item.domain !== 'course') return false;
  const date = (item.start_at || '').slice(0, 10);
  return Boolean(date) && date < today && item.status === '待上课';
}

function itemStateClass(item: TimelineItem, today?: string) {
  if (courseOverdue(item, today)) return 'state-pending';
  const tone = statusTone(item.status);
  if (tone === 'finished') return 'state-finished';
  if (tone === 'muted') return 'state-neutral';
  if (tone === 'error') return 'state-error';
  if (tone === 'warn') return 'state-pending';
  return item.domain === 'course' ? 'state-confirmed' : 'state-pending';
}

function isTemporaryItem(item: TimelineItem) {
  return item.scope === 'one_off' || ['reservation', 'manual', 'move'].includes(item.origin || '');
}

// 秒开缓存：上一次数据存 sessionStorage，打开页面先瞬时显示，再后台全量重扫。
function readWorkbenchCache<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(`laosu-workbench.cache.${key}`);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeWorkbenchCache(key: string, data: unknown) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${key}`, JSON.stringify(data));
  } catch {
    // 缓存失败不影响业务。
  }
}

function Panel() {
  const params = new URLSearchParams(window.location.search);
  const requestedTab = params.get('tab') || 'overview';
  const requestedScope = (params.get('scope') as Scope) || 'week';
  const initialTab: Tab = 'overview';
  const initialScope = (['week', 'month'] as Scope[]).includes(requestedScope) ? requestedScope : 'week';
  const initialPreview = params.get('preview');
  const [tab, setTab] = useState<Tab>(initialTab);
  const [scope, setScope] = useState<Scope>(initialScope);
  const [manualViewScale, setManualViewScale] = useState<number | null>(() => {
    const stored = Number(window.localStorage.getItem('laosu-workbench.view-scale'));
    return [0.7, 0.8, 0.9, 1].includes(stored) ? stored : null;
  });
  const [autoViewScale, setAutoViewScale] = useState(1);
  const viewScale = manualViewScale ?? autoViewScale;
  const [actionOpen, setActionOpen] = useState(requestedTab === 'actions' || Boolean(initialPreview));
  const [contextView, setContextView] = useState<ContextView | null>(null);
  const contextOpen = contextView !== null;
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<PreviewResponse | null>(null);
  const [actionPreset, setActionPreset] = useState<ActionPreset | null>(null);
  const [aiDraft, setAiDraft] = useState({ text: '', nonce: 0 });
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState('');
  const [quickBusyId, setQuickBusyId] = useState<string | null>(null);
  const [affairFeedback, setAffairFeedback] = useState<Record<string, AffairFeedback>>({});
  const [dayCompleteBusy, setDayCompleteBusy] = useState(false);
  const [dayCompleteFeedback, setDayCompleteFeedback] = useState<AffairFeedback | null>(null);
  const [planningRevision, setPlanningRevision] = useState(0);
  const [planningSectionHint, setPlanningSectionHint] = useState<{ section: PlanningSection; nonce: number } | null>(null);

  function navigateWithSection(tab: Tab, section?: string) {
    if (section) setPlanningSectionHint({ section: section as PlanningSection, nonce: Date.now() });
    navigateTo(tab);
  }
  const [focusTarget, setFocusTarget] = useState<FocusTarget | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);
  const contextDrawerRef = useRef<HTMLElement | null>(null);
  const dashboardRequestGateRef = useRef(createRequestGate());
  const lastDashboardErrorRef = useRef('');
  const previewRequestGateRef = useRef(createRequestGate());
  const busyOperationsRef = useRef(new Set<symbol>());
  const lastPointerTargetRef = useRef<HTMLElement | null>(null);
  const drawerHistoryRef = useRef(false);
  const contextHistoryRef = useRef(false);
  const scrollPositionsRef = useRef<Record<Tab, number>>({
    overview: Number(window.sessionStorage.getItem('laosu-workbench.scroll.overview') || 0),
    planning: Number(window.sessionStorage.getItem('laosu-workbench.scroll.planning') || 0),
    affairs: Number(window.sessionStorage.getItem('laosu-workbench.scroll.affairs') || 0),
  });

  useEffect(() => {
    const updateAutoScale = () => {
      const width = window.innerWidth;
      setAutoViewScale(width < 680 ? 0.7 : width < 900 ? 0.8 : width < 1120 ? 0.9 : 1);
    };
    updateAutoScale();
    window.addEventListener('resize', updateAutoScale);
    return () => window.removeEventListener('resize', updateAutoScale);
  }, []);

  function setViewScale(value: number | null) {
    setManualViewScale(value);
    if (value === null) window.localStorage.removeItem('laosu-workbench.view-scale');
    else window.localStorage.setItem('laosu-workbench.view-scale', String(value));
  }

  function stepViewScale(direction: -1 | 1) {
    const steps = [0.7, 0.8, 0.9, 1];
    const current = steps.reduce((best, item) => Math.abs(item - viewScale) < Math.abs(best - viewScale) ? item : best, steps[0]);
    const index = steps.indexOf(current);
    setViewScale(steps[Math.max(0, Math.min(steps.length - 1, index + direction))]);
  }

  const loadDashboard = useCallback(async (nextScope: Scope = scope, options: { silent?: boolean; fresh?: boolean; preserveOnError?: boolean } = {}) => {
    const silent = options.silent === true;
    const requestId = dashboardRequestGateRef.current.begin();
    if (!silent) {
      setLoading(true);
      setError('');
    }
    try {
      const query = new URLSearchParams({ scope: nextScope });
      if (options.fresh) query.set('fresh', '1');
      const data = assertDashboard(await api<Dashboard>(`api/dashboard?${query.toString()}`));
      if (!dashboardRequestGateRef.current.isCurrent(requestId)) return null;
      setDashboard(data);
      writeWorkbenchCache(`dashboard.${nextScope}`, data);
      lastDashboardErrorRef.current = '';
      setError('');
      return true;
    } catch (err: any) {
      if (!dashboardRequestGateRef.current.isCurrent(requestId)) return null;
      const message = err.message || '读取失败';
      lastDashboardErrorRef.current = message;
      if (!silent && !options.preserveOnError) setError(message);
      return false;
    } finally {
      if (dashboardRequestGateRef.current.isCurrent(requestId) && !silent) setLoading(false);
    }
  }, [scope]);

  useEffect(() => {
    // 打开即真相：先瞬时显示上一次内容，再强制全量重扫（外部 AI 改动也能被带回）。
    const cached = readWorkbenchCache<Dashboard>(`dashboard.${initialScope}`);
    if (cached) {
      setDashboard(cached);
      setLoading(false);
    }
    void loadDashboard(initialScope, { fresh: true, silent: Boolean(cached) });
  }, []);

  useEffect(() => {
    const rememberPointerTarget = (event: PointerEvent) => {
      if (event.target instanceof HTMLElement && !drawerRef.current?.contains(event.target)) lastPointerTargetRef.current = event.target;
    };
    window.addEventListener('pointerdown', rememberPointerTarget, true);
    return () => window.removeEventListener('pointerdown', rememberPointerTarget, true);
  }, []);

  useEffect(() => {
    if (!initialPreview) return;
    setActionOpen(true);
    void api<PreviewResponse>(`api/preview/${encodeURIComponent(initialPreview)}`).then(setPreview).catch((err) => {
      setPreview({ ok: false, error: err.message });
    });
  }, [initialPreview]);

  useEffect(() => {
    if (!actionOpen) return;
    const drawer = drawerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (!drawerHistoryRef.current) {
      const url = new URL(window.location.href);
      url.searchParams.set('drawer', 'actions');
      window.history.pushState({ ...(window.history.state || {}), laosuActionDrawer: true }, '', url);
      drawerHistoryRef.current = true;
    }

    const focusTimer = window.setTimeout(() => {
      const target = actionPreset
        ? drawer?.querySelector<HTMLElement>('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])')
        : drawer?.querySelector<HTMLElement>('.ai-composer textarea');
      (target || drawer?.querySelector<HTMLElement>('.context-back'))?.focus({ preventScroll: true });
      if (actionPreset) drawer?.querySelector<HTMLElement>('.action-drawer-body')?.scrollTo({ top: 0 });
    }, 80);

    const getFocusable = () => Array.from(drawer?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
    ) || []).filter((element) => element.getClientRects().length > 0 && !element.closest('[hidden]'));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeActionDrawer();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!drawer?.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onPopState = () => {
      if (!drawerHistoryRef.current) return;
      drawerHistoryRef.current = false;
      setActionOpen(false);
      window.setTimeout(() => {
        const restoreTarget = document.querySelector<HTMLElement>('[data-drawer-return="true"]') || document.querySelector<HTMLElement>('.tab.active');
        restoreTarget?.focus({ preventScroll: true });
      }, 180);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('popstate', onPopState);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('popstate', onPopState);
      window.setTimeout(() => {
        const restoreTarget = document.querySelector<HTMLElement>('[data-drawer-return="true"]') || document.querySelector<HTMLElement>('.tab.active');
        restoreTarget?.focus({ preventScroll: true });
      }, 80);
    };
  }, [actionOpen]);

  useEffect(() => {
    if (!contextOpen) return;
    const drawer = contextDrawerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (!contextHistoryRef.current) {
      const url = new URL(window.location.href);
      url.searchParams.set('drawer', 'context');
      window.history.pushState({ ...(window.history.state || {}), laosuContextDrawer: true }, '', url);
      contextHistoryRef.current = true;
    }

    const focusTimer = window.setTimeout(() => drawer?.querySelector<HTMLElement>('.context-back')?.focus({ preventScroll: true }), 70);
    const getFocusable = () => Array.from(drawer?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
    ) || []).filter((element) => element.getClientRects().length > 0 && !element.closest('[hidden]'));
    const onKeyDown = (event: KeyboardEvent) => {
      if (new URL(window.location.href).searchParams.get('drawer') === 'actions') return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeContextDrawer();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!drawer?.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onPopState = () => {
      const activeDrawer = new URL(window.location.href).searchParams.get('drawer');
      if (activeDrawer === 'context' || activeDrawer === 'actions' || !contextHistoryRef.current) return;
      contextHistoryRef.current = false;
      setContextView(null);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('popstate', onPopState);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('popstate', onPopState);
      window.setTimeout(() => {
        const restoreTarget = document.querySelector<HTMLElement>('[data-context-return="true"]') || document.querySelector<HTMLElement>('.tab.active');
        restoreTarget?.focus({ preventScroll: true });
      }, 80);
    };
  }, [contextOpen]);

  useEffect(() => {
    window.localStorage.setItem('laosu-workbench.tab', tab);
    const saveScroll = () => {
      scrollPositionsRef.current[tab] = window.scrollY;
      window.sessionStorage.setItem(`laosu-workbench.scroll.${tab}`, String(window.scrollY));
    };
    window.addEventListener('pagehide', saveScroll);
    return () => window.removeEventListener('pagehide', saveScroll);
  }, [tab]);


  useEffect(() => {
    if (focusTarget?.tab === tab) return;
    const desiredTop = scrollPositionsRef.current[tab] || 0;
    let attempts = 0;
    let timer: number | undefined;
    let cancelled = false;
    const cancelRestore = () => { cancelled = true; };
    const restore = () => {
      if (cancelled) return;
      window.scrollTo({ top: desiredTop, behavior: 'auto' });
      attempts += 1;
      if (Math.abs(window.scrollY - desiredTop) > 3 && attempts < 15) timer = window.setTimeout(restore, 90);
    };
    const frame = window.requestAnimationFrame(restore);
    window.addEventListener('wheel', cancelRestore, { passive: true });
    window.addEventListener('touchstart', cancelRestore, { passive: true });
    window.addEventListener('keydown', cancelRestore);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      if (timer) window.clearTimeout(timer);
      window.removeEventListener('wheel', cancelRestore);
      window.removeEventListener('touchstart', cancelRestore);
      window.removeEventListener('keydown', cancelRestore);
    };
  }, [tab]);

  useEffect(() => {
    if (!focusTarget || focusTarget.tab !== tab) return;
    let attempts = 0;
    let retryTimer: number | undefined;
    let highlightTimer: number | undefined;
    let highlightedElement: HTMLElement | undefined;
    const findTarget = () => {
      const element = Array.from(document.querySelectorAll<HTMLElement>('[data-item-id]')).find((candidate) => candidate.dataset.itemId === focusTarget.id);
      if (!element && attempts < 20) {
        attempts += 1;
        retryTimer = window.setTimeout(findTarget, 60);
        return;
      }
      if (!element) {
        setFocusTarget(null);
        return;
      }
      highlightedElement = element;
      element.classList.add('target-highlight');
      element.setAttribute('tabindex', '-1');
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.focus({ preventScroll: true });
      highlightTimer = window.setTimeout(() => {
        element.classList.remove('target-highlight');
        element.removeAttribute('tabindex');
        setFocusTarget(null);
      }, 2400);
    };
    const startTimer = window.setTimeout(findTarget, 50);
    return () => {
      window.clearTimeout(startTimer);
      if (retryTimer) window.clearTimeout(retryTimer);
      if (highlightTimer) window.clearTimeout(highlightTimer);
      highlightedElement?.classList.remove('target-highlight');
      highlightedElement?.removeAttribute('tabindex');
    };
  }, [focusTarget, tab, dashboard?.observedAt]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 4800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  // 外部改动自动感知：轮询两个本地库的 mtime 版本号，变化即静默全量重扫。
  const dataRevisionRef = useRef<number | null>(null);
  useEffect(() => {
    const timer = window.setInterval(async () => {
      if (document.hidden) return;
      try {
        const res = await api<{ ok: boolean; revision: number }>('api/data-revision');
        if (!res?.ok || typeof res.revision !== 'number') return;
        if (dataRevisionRef.current === null) {
          dataRevisionRef.current = res.revision;
          return;
        }
        if (res.revision !== dataRevisionRef.current) {
          dataRevisionRef.current = res.revision;
          void refreshCurrent({ silent: true });
        }
      } catch {
        // 轮询失败静默忽略。
      }
    }, 15_000);
    return () => window.clearInterval(timer);
  }, [scope]);

  const activePending = useMemo(
    () => (dashboard?.pending ?? []).filter((item) => !['completed', 'cancelled'].includes(item.status)),
    [dashboard],
  );

  async function changeScope(next: Scope) {
    const url = new URL(window.location.href);
    url.searchParams.set('scope', next);
    window.history.replaceState(window.history.state, '', url);
    setScope(next);
    const cached = readWorkbenchCache<Dashboard>(`dashboard.${next}`);
    if (cached) {
      setDashboard(cached);
      setLoading(false);
      void loadDashboard(next, { fresh: true, silent: true });
      return;
    }
    await loadDashboard(next);
  }

  function rememberScroll(sourceTab: Tab = tab) {
    scrollPositionsRef.current[sourceTab] = window.scrollY;
    window.sessionStorage.setItem(`laosu-workbench.scroll.${sourceTab}`, String(window.scrollY));
  }

  function navigateTo(nextTab: Tab, targetId?: string) {
    rememberScroll();
    const url = new URL(window.location.href);
    url.searchParams.set('tab', nextTab);
    window.history.replaceState(window.history.state, '', url);
    setFocusTarget(targetId ? { tab: nextTab, id: targetId } : null);
    setTab(nextTab);
  }

  function rememberDrawerTrigger(fallback?: HTMLElement | null) {
    document.querySelector<HTMLElement>('[data-drawer-return="true"]')?.removeAttribute('data-drawer-return');
    const active = document.activeElement;
    const activeTarget = active instanceof HTMLElement && active !== document.body && !drawerRef.current?.contains(active) ? active : null;
    const target = activeTarget || fallback || lastPointerTargetRef.current || document.querySelector<HTMLElement>('.tab.active');
    target?.setAttribute('data-drawer-return', 'true');
  }

  function rememberContextTrigger(fallback?: HTMLElement | null) {
    document.querySelector<HTMLElement>('[data-context-return="true"]')?.removeAttribute('data-context-return');
    const active = document.activeElement;
    const activeTarget = active instanceof HTMLElement && active !== document.body && !contextDrawerRef.current?.contains(active) ? active : null;
    const target = fallback || activeTarget || lastPointerTargetRef.current || document.querySelector<HTMLElement>('.tab.active');
    target?.setAttribute('data-context-return', 'true');
  }

  function openItemDetail(item: TimelineItem, trigger?: HTMLElement | null) {
    rememberContextTrigger(trigger);
    setContextView({ kind: 'item', item });
  }

  function openDayDetail(date: string, trigger?: HTMLElement | null, items?: TimelineItem[]) {
    rememberContextTrigger(trigger);
    setContextView({ kind: 'day', date, items });
  }

  function openSystem(trigger?: HTMLElement | null) {
    rememberContextTrigger(trigger);
    setContextView({ kind: 'system' });
  }

  function beginBusyOperation() {
    const key = Symbol('workbench-operation');
    busyOperationsRef.current.add(key);
    setBusy(true);
    return key;
  }

  function endBusyOperation(key: symbol) {
    busyOperationsRef.current.delete(key);
    setBusy(busyOperationsRef.current.size > 0);
  }

  function clearPreview() {
    previewRequestGateRef.current.invalidate();
    setPreview(null);
  }

  function acceptPreview(nextPreview: PreviewResponse) {
    previewRequestGateRef.current.invalidate();
    setPreview(nextPreview);
  }

  function openAi() {
    rememberDrawerTrigger(document.querySelector<HTMLElement>('.ai-action-button'));
    setActionPreset(null);
    setAiDraft({ text: '', nonce: Date.now() });
    clearPreview();
    setActionOpen(true);
  }

  function openAiWithDraft(draft: string) {
    rememberDrawerTrigger();
    setActionPreset(null);
    setAiDraft({ text: draft, nonce: Date.now() });
    clearPreview();
    setActionOpen(true);
  }

  function openAction(preset: ActionPreset) {
    rememberDrawerTrigger();
    setActionPreset(preset);
    clearPreview();
    setActionOpen(true);
  }

  function closeActionDrawer() {
    if (drawerHistoryRef.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    drawerHistoryRef.current = false;
    setActionOpen(false);
  }

  function closeContextDrawer() {
    if (contextHistoryRef.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    contextHistoryRef.current = false;
    setContextView(null);
  }

  // 一键决策：预演+提交+回读在后台完成，前台只点一下。
  async function handleQuick(action: 'courseCancel' | 'affairComplete', item: TimelineItem) {
    if (quickBusyId) return;
    setQuickBusyId(item.id);
    try {
      const data = action === 'courseCancel'
        ? await api<any>('api/courses/cancel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ student: item.title, date: item.start_at?.slice(0, 10), time: item.start_at?.slice(11, 16), reason: '没上' }),
        })
        : await api<any>('api/affairs/complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: item.id, expectedVersion: item.version }),
        });
      if (!data.ok) throw new Error(data.error || '处理未完成');
      if (action === 'affairComplete') {
        setAffairFeedback((current) => ({ ...current, [item.id]: { ok: true, text: data.message || '已完成', buttonLabel: '已完成' } }));
        setToast(`${item.title} 已完成`);
      } else {
        setToast(`${item.title} ${item.start_at?.slice(5, 16) ?? ''} 已记录没上`);
      }
      await loadDashboard(scope);
    } catch (err: any) {
      if (action === 'affairComplete') {
        setAffairFeedback((current) => ({ ...current, [item.id]: { ok: false, text: `处理失败：${err.message || '未知错误'}` } }));
      }
      setToast(`处理失败：${err.message || '未知错误'}`);
    } finally {
      setQuickBusyId(null);
    }
  }

  async function refreshCurrent(options: { silent?: boolean } = {}) {
    const silent = options.silent === true;
    if (!silent) setToast('正在刷新数据…');
    // fresh=1 失效服务端快照，重新读取排课与事务脚本。
    const ok = await loadDashboard(scope, { ...options, fresh: !silent, preserveOnError: !silent });
    if (ok === true) {
      setAffairFeedback({});
      setDayCompleteFeedback(null);
      setPlanningRevision((current) => current + 1);
      if (!silent) setToast('本地课程与事务数据已刷新');
    } else if (ok === false && !silent) {
      setToast(`刷新未完成，已保留当前数据：${lastDashboardErrorRef.current || '读取失败'}`);
    }
  }

  async function submitPreview(input: Record<string, unknown>) {
    const requestId = previewRequestGateRef.current.begin();
    const busyKey = beginBusyOperation();
    setPreview(null);
    try {
      const data = await api<PreviewResponse>('api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      if (!previewRequestGateRef.current.isCurrent(requestId)) return;
      setPreview({ ...data, operation: String(input.operation || ''), input });
    } catch (err: any) {
      if (previewRequestGateRef.current.isCurrent(requestId)) setPreview({ ok: false, error: err.message });
    } finally {
      endBusyOperation(busyKey);
    }
  }

  async function handleDayComplete(date: string) {
    if (dayCompleteBusy) return;
    setDayCompleteBusy(true);
    setDayCompleteFeedback({ ok: true, text: '已收到“全部上完”，正在后台预演并汇总今日课程…', buttonLabel: '处理中…' });
    try {
      const data = await api<any>('api/courses/day-complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date }),
      });
      if (!data.ok) throw new Error(data.error || '全部上完的处理未完成');
      setDayCompleteFeedback({ ok: true, text: data.message || '今日课程已全部记录', buttonLabel: '已全部记录' });
      await loadDashboard(scope);
    } catch (err: any) {
      const message = err.message || '全部上完的处理失败';
      setDayCompleteFeedback({ ok: false, text: `处理失败：${message}`, buttonLabel: '重试全部上完' });
    } finally {
      setDayCompleteBusy(false);
    }
  }

  async function handleAffairRetry(item: TimelineItem) {
    if (quickBusyId) return;
    setQuickBusyId(item.id);
    setAffairFeedback((current) => ({ ...current, [item.id]: { ok: true, text: '已收到“没约上”，正在后台预演并安排下一次…', buttonLabel: '处理中…' } }));
    try {
      const data = await api<any>('api/affairs/retry-next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, expectedVersion: item.version }),
      });
      if (!data.ok) throw new Error(data.error || '没约上的处理未完成');
      const candidateDate = data.outcome?.candidateDate as string | undefined;
      const buttonLabel = candidateDate ? `已安排 ${candidateDate.slice(5)}` : '已处理';
      setAffairFeedback((current) => ({ ...current, [item.id]: {
        ok: true,
        text: data.message || '已推进到下一次尝试',
        buttonLabel,
        undo: data.outcome ? { expectedVersion: data.outcome.version } : undefined,
      } }));
      await loadDashboard(scope);
    } catch (err: any) {
      const message = err.message || '没约上的处理失败';
      setAffairFeedback((current) => ({ ...current, [item.id]: { ok: false, text: `处理失败：${message}`, buttonLabel: '重试' } }));
    } finally {
      setQuickBusyId(null);
    }
  }

  async function handleAffairRetryPrev(item: TimelineItem) {
    if (quickBusyId) return;
    const undo = affairFeedback[item.id]?.undo;
    setQuickBusyId(item.id);
    setAffairFeedback((current) => ({ ...current, [item.id]: { ok: true, text: '正在恢复上一候选日…', buttonLabel: '处理中…' } }));
    try {
      const data = await api<any>('api/affairs/retry-prev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, expectedVersion: undo?.expectedVersion ?? item.version }),
      });
      if (!data.ok) throw new Error(data.error || '恢复上一候选日未完成');
      const candidateDate = data.outcome?.candidateDate as string | undefined;
      setAffairFeedback((current) => ({ ...current, [item.id]: {
        ok: true,
        text: data.message || '已恢复到上一候选日',
        buttonLabel: candidateDate ? `回到 ${candidateDate.slice(5)}` : '已恢复',
      } }));
      await loadDashboard(scope);
    } catch (err: any) {
      const message = err.message || '恢复上一候选日失败';
      setAffairFeedback((current) => ({ ...current, [item.id]: { ok: false, text: `恢复失败：${message}`, buttonLabel: '重试' } }));
    } finally {
      setQuickBusyId(null);
    }
  }

  async function commit() {
    if (!preview?.token || !preview.canCommit) return;
    const requestId = previewRequestGateRef.current.begin();
    const busyKey = beginBusyOperation();
    const operation = preview.operation || actionPreset?.operation;
    try {
      const data = await api<any>('api/commit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: preview.token }),
      });
      const completedPreview: PreviewResponse = { ok: data.ok, summary: data.summary, message: `${data.message || ''}${data.exportMessage ? `\n导出：${data.exportMessage}` : ''}${data.syncMessage ? `\n日历：${data.syncMessage}` : ''}`, result: data, operation, input: preview.input, committed: Boolean(data.ok) };
      await loadDashboard(scope);
      setPlanningRevision((current) => current + 1);
      if (previewRequestGateRef.current.isCurrent(requestId)) setPreview(completedPreview);
    } catch (err: any) {
      if (previewRequestGateRef.current.isCurrent(requestId)) setPreview({ ok: false, error: err.message });
    } finally {
      endBusyOperation(busyKey);
    }
  }

  async function commitBatch() {
    const items = preview?.batchItems ?? [];
    if (!items.length) return;
    const requestId = previewRequestGateRef.current.begin();
    const busyKey = beginBusyOperation();
    const results = new Map<string, { ok: boolean; message: string }>();
    try {
      for (const item of items) {
        if (!item.canCommit) {
          results.set(item.token, { ok: false, message: '预演未通过，已跳过' });
          continue;
        }
        try {
          const data = await api<any>('api/commit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: item.token }),
          });
          results.set(item.token, { ok: Boolean(data.ok), message: data.message || (data.ok ? '已执行' : '执行失败') });
          if (!data.ok) break;
        } catch (err: any) {
          results.set(item.token, { ok: false, message: err.message || '提交失败' });
          break;
        }
      }
      await loadDashboard(scope);
      setPlanningRevision((current) => current + 1);
      if (previewRequestGateRef.current.isCurrent(requestId) && preview) {
        setPreview({
          ...preview,
          ok: items.every((item) => results.get(item.token)?.ok === true),
          committed: true,
          message: items.map((item) => {
            const result = results.get(item.token);
            return `${result?.ok ? '✓' : result ? '✗' : '·'} ${item.summary}：${result?.message || '未执行'}`;
          }).join('\n'),
          batchItems: items.map((item) => {
            const result = results.get(item.token);
            return { ...item, canCommit: false, resultOk: result?.ok ?? false, message: result?.message || '未执行' };
          }),
        });
      }
    } finally {
      endBusyOperation(busyKey);
    }
  }

  return (
    <HanaThemeProvider mode="inherit" className="workbench-theme">
      <div className="workbench-shell" data-ui="workbench-shell" data-ui-id="workbench-main">
        <header className="topbar" data-ui="topbar">
          <nav className="tabbar" aria-label="日程视图" data-ui="primary-navigation">
            {(Object.keys(scopeLabels) as Scope[]).map((item) => (
              <button type="button" key={item} className={scope === item ? 'tab active' : 'tab'} data-ui-role="nav-item" data-ui-id={`nav-${item}`} aria-current={scope === item ? 'page' : undefined} disabled={loading} onClick={() => void changeScope(item)}>
                {scopeLabels[item]}
              </button>
            ))}
          </nav>
          <div className="top-actions" data-ui="top-actions">
            <div className="view-scale-control" role="group" aria-label="页面缩放">
              <button type="button" onClick={() => stepViewScale(-1)} disabled={viewScale <= 0.7} aria-label="缩小页面">−</button>
              <button type="button" className={manualViewScale === null ? 'auto active' : 'auto'} onClick={() => setViewScale(null)} aria-label={`当前缩放 ${Math.round(viewScale * 100)}%，点击恢复自动适配`}>{manualViewScale === null ? `自动 ${Math.round(viewScale * 100)}%` : `${Math.round(viewScale * 100)}%`}</button>
              <button type="button" onClick={() => stepViewScale(1)} disabled={viewScale >= 1} aria-label="放大页面">＋</button>
            </div>
            <button type="button" className={actionOpen ? 'ai-action-button active' : 'ai-action-button'} data-ui-role="button" data-ui-variant="secondary" data-ui-id="open-ai" onClick={openAi} aria-expanded={actionOpen}>✦ AI 操作</button>
            <span className="updated-at">{formatUpdated(dashboard?.observedAt)}</span>
            <button type="button" className={`${dashboard?.health?.ok ? 'health good' : 'health bad'} health-button${contextView?.kind === 'system' ? ' active' : ''}`} data-ui-role="button" data-ui-variant="secondary" data-ui-id="open-system-status" onClick={(event) => openSystem(event.currentTarget)} aria-expanded={contextView?.kind === 'system'}>
              <i />{dashboard?.health?.ok ? '系统正常' : '需要检查'}
            </button>
            <button type="button" className="ghost-button refresh-local-button" data-ui-role="button" data-ui-variant="secondary" data-ui-id="refresh-workbench" onClick={() => void refreshCurrent()} aria-label="刷新本地数据" disabled={loading}><span aria-hidden="true">↻</span><span className="refresh-local-label">刷新本地数据</span></button>
          </div>
        </header>

        <main className="main-area scalable-main" style={{ zoom: viewScale, width: `${100 / viewScale}%` }}>
          {toast && <div className="toast" role="status">{toast}</div>}
          {error && <Notice tone="error" title="读取失败" text={error} />}
          {dashboard?.warnings?.length ? <Notice tone="warn" title="有警告" text={dashboard.warnings.join('；')} /> : null}
          {loading && !dashboard ? <LoadingState /> : null}
          <div className={loading && dashboard ? 'view-content scope-loading' : 'view-content'} aria-busy={loading && Boolean(dashboard)} inert={loading && Boolean(dashboard)}>
            {dashboard && tab === 'overview' && (
              <Overview dashboard={dashboard} onInspect={openItemDetail} onOpenDay={openDayDetail} />
            )}
            {tab === 'planning' && <PlanningView onAction={openAction} onAskAi={openAiWithDraft} refreshKey={planningRevision} sectionHint={planningSectionHint} scheduleText={dashboard?.scheduleText} onDataChanged={refreshCurrent} />}
            {tab === 'affairs' && <AffairsView onQuick={handleQuick} onAskAi={openAiWithDraft} onPrepare={openAction} onInspect={openItemDetail} onRetry={handleAffairRetry} onRetryPrev={handleAffairRetryPrev} retryingId={quickBusyId} feedback={affairFeedback} refreshKey={planningRevision} observedAt={dashboard?.observedAt ?? ''} onOpenDay={(date, items, trigger) => openDayDetail(date, trigger, items)} localDate={dashboard?.localDate} />}
          </div>
        </main>

        <div className="context-drawer-backdrop" hidden={!contextOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) closeContextDrawer(); }}>
          <aside ref={contextDrawerRef} className="context-drawer" data-ui="drawer" data-ui-id="context-drawer" role="dialog" aria-modal="true" aria-label="详情">
            <header className="context-drawer-head">
              <button type="button" className="context-back" onClick={closeContextDrawer} aria-label="返回原位置">←</button>
              <div>
                <p className="eyebrow">{contextView?.kind === 'system' ? '运行状态' : contextView?.kind === 'day' ? '当日安排' : '条目详情'}</p>
                <h2>{contextView?.kind === 'system' ? '系统状态' : contextView?.kind === 'day' ? formatDate(`${contextView.date}T12:00:00+08:00`, { month: 'long', day: 'numeric', weekday: 'long' }) : contextView?.item.title}</h2>
                <span>返回后会停在原来的页面和位置。</span>
              </div>
            </header>
            <div className="context-drawer-body">
              {contextView && dashboard && <ContextDrawerContent view={contextView} dashboard={dashboard} />}
            </div>
          </aside>
        </div>

        <div className="action-drawer-backdrop" hidden={!actionOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) closeActionDrawer(); }}>
          <aside ref={drawerRef} className="action-drawer" data-ui="drawer" data-ui-id="ai-drawer" role="dialog" aria-modal="true" aria-label="AI 操作">
            <header className="action-drawer-head">
              <button type="button" className="context-back" onClick={closeActionDrawer} aria-label="返回原位置">←</button>
              <div><p className="eyebrow">AI 操作</p><h2>说一句，先预演再提交。</h2><span>返回后仍留在原页面，执行结果会即时回读。</span></div>
            </header>
            <div className="action-drawer-body">
              <ActionsView
                pending={activePending}
                students={dashboard?.students ?? []}
                preset={actionPreset}
                aiDraft={aiDraft}
                preview={preview}
                busy={busy}
                onPreview={submitPreview}
                onAiPreview={acceptPreview}
                onCommit={commit}
                onCommitBatch={commitBatch}
                onClear={clearPreview}
                onClose={closeActionDrawer}
              />
            </div>
          </aside>
        </div>
      </div>
    </HanaThemeProvider>
  );
}

function Overview({ dashboard, onInspect, onOpenDay }: {
  dashboard: Dashboard;
  onInspect: InspectHandler;
  onOpenDay: OpenDayHandler;
}) {
  const unifiedItems = useMemo<UnifiedScheduleItem[]>(() => {
    const map = new Map<string, UnifiedScheduleItem>();
    dashboard.courses.forEach((item) => map.set(item.id, { ...item, domain: 'course' } as UnifiedScheduleItem));
    dashboard.affairs.forEach((item) => map.set(item.id, { ...item, domain: 'affair' } as UnifiedScheduleItem));
    return visibleScheduleItems([...map.values()]).sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')));
  }, [dashboard.courses, dashboard.affairs]);
  const courseItems = unifiedItems.filter((item) => item.domain === 'course');
  const countedCourses = courseItems.filter((course) => !['已取消', '已调课', 'cancelled'].includes(course.status));
  const completedCourses = countedCourses.filter((course) => ['已完成', 'completed'].includes(course.status));
  const totalMinutes = countedCourses.reduce((sum, course) => sum + Number(course.duration || 0), 0);
  const completedMinutes = completedCourses.reduce((sum, course) => sum + Number(course.duration || 0), 0);
  const conflicts = useMemo(() => detectScheduleConflicts(unifiedItems), [unifiedItems]);
  const activeAffairsMissingEnd = unifiedItems.filter((item) => item.domain === 'affair'
    && item.start_at && !item.end_at && !['completed', 'cancelled', '已完成', '已取消'].includes(item.status));

  return (
    <div className="view-stack read-only-schedule">
      <div className="panel wide calendar-panel">
        <PanelHeading title={dashboard.scope === 'week' ? '周课表' : '月课表'} meta={formatRange(dashboard.range)} />
        {dashboard.scope === 'month' && <section className="month-course-summary" aria-label="本月课时统计">
          <div><span>排定课程</span><strong>{countedCourses.length} 节</strong></div>
          <div><span>总课时</span><strong>{formatCourseMinutes(totalMinutes)}</strong></div>
          <div><span>已完成</span><strong>{completedCourses.length} 节 · {formatCourseMinutes(completedMinutes)}</strong></div>
        </section>}
        {(conflicts.length > 0 || activeAffairsMissingEnd.length > 0) && <section className={conflicts.length ? 'schedule-conflict-alert error' : 'schedule-conflict-alert warn'} aria-label="日程冲突检查">
          <div><strong>{conflicts.length ? `${conflicts.length} 处时间冲突` : '冲突检查不完整'}</strong><span>刷新后按本地课程与事务数据即时核对</span></div>
          {conflicts.slice(0, 4).map((conflict) => <p key={conflict.id}>
            {conflict.kind === 'course-course' ? '课程重叠' : conflict.kind === 'course-affair' ? '课程／事务冲突' : '事务重叠'}：
            {conflict.left.title} ↔ {conflict.right.title} · {formatDate(conflict.start, { month: 'numeric', day: 'numeric' })} {formatTime(conflict.start)}–{formatTime(conflict.end)}
          </p>)}
          {activeAffairsMissingEnd.length > 0 && <p>{activeAffairsMissingEnd.length} 个进行中事务缺结束时间，无法完整判断重叠。</p>}
        </section>}
        <div className="calendar-legend" aria-label="状态颜色图例">
          <span className="confirmed"><i />课程</span>
          <span className="pending"><i />事务／待确认</span>
          <span className="finished"><i />已完成</span>
          <span className="muted"><i />已取消</span>
          <span className="temporary"><i />临时</span>
        </div>
        {dashboard.scope === 'week'
          ? <WeekCalendar items={unifiedItems} range={dashboard.range} localDate={dashboard.localDate} onInspect={onInspect} />
          : <MonthCalendar items={unifiedItems} range={dashboard.range} localDate={dashboard.localDate} onOpenDay={onOpenDay} />}
      </div>
    </div>
  );
}

function SuggestionCards({ observedAt, pending, onInspect, onPrepare, onOpenDay, onNavigate, onQuick, onAskAi, onRetry, onRetryPrev, retryingId, affairFeedback, onDataChanged }: {
  observedAt: string;
  pending: TimelineItem[];
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onOpenDay: (date: string, trigger?: HTMLElement | null) => void;
  onNavigate: (tab: Tab, section?: string) => void;
  onQuick: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi: (draft: string) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  onRetryPrev?: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  affairFeedback: Record<string, AffairFeedback>;
  onDataChanged?: (options?: { silent?: boolean }) => Promise<unknown>;
}) {
  const [data, setData] = useState<{ cards: SuggestionCard[] } | null>(() => readWorkbenchCache<{ cards: SuggestionCard[] }>('suggestions'));
  const [dismissed, setDismissed] = useState<string[]>(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem('laosu-workbench.suggestions.dismissed') || '[]') as string[];
    } catch {
      return [];
    }
  });
  const load = useCallback((fresh: boolean) => {
    void api<{ cards: SuggestionCard[] }>(`api/suggestions${fresh ? '?fresh=1' : ''}`).then((res) => {
      if (!res?.cards) return;
      setData(res);
      writeWorkbenchCache('suggestions', res);
    }).catch(() => {});
  }, []);
  useEffect(() => { void load(true); }, [load]);
  useEffect(() => {
    if (observedAt) void load(false);
  }, [observedAt, load]);

  function dismiss(id: string) {
    setDismissed((current) => {
      const next = current.includes(id) ? current : [...current, id];
      try {
        window.sessionStorage.setItem('laosu-workbench.suggestions.dismissed', JSON.stringify(next));
      } catch {
        // 存储失败仅影响收起记忆。
      }
      return next;
    });
  }

  const [busyId, setBusyId] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, { ok: boolean; text: string }>>({});

  // 点了就办：执行在后台完成（预演+提交+回读），成功即收起并回扫数据。
  async function runCard(card: SuggestionCard, resolution?: 'done' | 'cancelled') {
    if (busyId) return;
    const id = card.id;
    setBusyId(id);
    setResults((current) => ({ ...current, [id]: { ok: true, text: '正在处理…' } }));
    try {
      let data: any;
      if (card.action.kind === 'overdue' && resolution === 'done') {
        data = await api<any>('api/courses/overdue-complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ student: card.action.student, date: card.action.date }),
        });
      } else if (card.action.kind === 'overdue') {
        data = await api<any>('api/courses/cancel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ student: card.action.student, date: card.action.date, time: card.action.time, reason: '没上' }),
        });
      } else if (card.action.operation === 'calendar_sync') {
        data = await api<any>('api/calendar/sync-quick', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(card.action.input ?? {}),
        });
      } else if (card.action.operation === 'quarantine_overdue') {
        data = await api<any>('api/courses/quarantine-quick', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}),
        });
      } else {
        throw new Error('该建议不支持一键执行');
      }
      if (!data.ok) throw new Error(data.error || '处理未完成');
      setResults((current) => ({ ...current, [id]: { ok: true, text: data.message || '已处理' } }));
      dismiss(id);
      void load(true);
      void onDataChanged?.({ silent: true });
    } catch (err: any) {
      setResults((current) => ({ ...current, [id]: { ok: false, text: `处理失败：${err.message || '未知错误'}` } }));
    } finally {
      setBusyId(null);
    }
  }

  async function runBackfill(card: SuggestionCard) {
    if (busyId) return;
    const id = card.id;
    setBusyId(id);
    setResults((current) => ({ ...current, [id]: { ok: true, text: '正在补齐…' } }));
    try {
      const data = await api<any>('api/affairs/backfill-end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: card.action.ids ?? [] }),
      });
      if (!data.ok) throw new Error(data.error || '补齐未完成');
      setResults((current) => ({ ...current, [id]: { ok: true, text: data.message || '已补齐' } }));
      dismiss(id);
      void load(true);
      void onDataChanged?.({ silent: true });
    } catch (err: any) {
      setResults((current) => ({ ...current, [id]: { ok: false, text: `补齐失败：${err.message || '未知错误'}` } }));
    } finally {
      setBusyId(null);
    }
  }

  const allCards = data?.cards ?? [];
  const requiredCards = allCards.filter((card) => card.bucket === 'required');
  const requiredEntityIds = new Set(requiredCards.map((card) => card.entityId).filter(Boolean));
  const pendingItems = pending.filter((item) => !requiredEntityIds.has(item.id));
  const suggestionCards = allCards.filter((card) => card.bucket === 'suggestion' && !dismissed.includes(card.id));
  const requiredCount = pendingItems.length + requiredCards.length;

  function renderCard(card: SuggestionCard, dismissible: boolean) {
    const toneValue = card.bucket === 'required'
      ? card.tone === 'urgent' ? '待处理' : '待确认'
      : '建议';
    return (
      <div className={`quick-pending-item contextual-action-host actionable action-open ${card.bucket}`} key={card.id}>
        <div className="quick-pending-main">
          <strong>{card.title}</strong>
          <span>{card.detail}</span>
          {results[card.id] && <InlineResult ok={results[card.id].ok} text={results[card.id].text} />}
        </div>
        <div className="quick-pending-actions"><Status value={toneValue} /></div>
        <div className="quick-pending-inline-action">
          {card.action.kind === 'overdue' && <>
            <button type="button" className="primary" disabled={busyId === card.id} onClick={() => void runCard(card, 'done')}>{busyId === card.id ? '处理中…' : card.action.label}</button>
            <button type="button" className="secondary" disabled={Boolean(busyId)} onClick={() => void runCard(card, 'cancelled')}>{card.action.cancelLabel || '没上'}</button>
          </>}
          {card.action.kind === 'backfill' && <button type="button" className="primary" disabled={Boolean(busyId)} onClick={() => void runBackfill(card)}>{busyId === card.id ? '处理中…' : card.action.label}</button>}
          {card.action.kind === 'preview' && <button type="button" className="primary" disabled={Boolean(busyId)} onClick={() => {
            const operation = card.action.operation;
            if (operation === 'calendar_sync' || operation === 'quarantine_overdue') {
              void runCard(card);
              return;
            }
            onPrepare({ operation: operation ?? '', ...(card.action.input ?? {}) });
          }}>{busyId === card.id ? '处理中…' : card.action.label}</button>}
          {card.action.kind === 'retryNext' && <button type="button" className="secondary" disabled={Boolean(busyId)} onClick={() => {
            const item: TimelineItem = { id: card.action.id ?? '', version: card.action.version, retry: {}, domain: 'affair', title: card.action.title ?? card.title, status: 'pending_confirmation' };
            void onRetry(item);
          }}>{card.action.label}</button>}
          {card.action.kind === 'openDay' && <button type="button" className="secondary" disabled={Boolean(busyId)} onClick={(event) => onOpenDay(card.action.date ?? '', event.currentTarget)}>{card.action.label}</button>}
          {card.action.kind === 'navigate' && <button type="button" className="secondary" disabled={Boolean(busyId)} onClick={() => onNavigate((card.action.tab ?? 'planning') as Tab, card.action.section)}>{card.action.label}</button>}
          {dismissible && <button type="button" className="quiet-danger" onClick={() => dismiss(card.id)}>收起</button>}
        </div>
      </div>
    );
  }

  if (!requiredCount && !suggestionCards.length) return null;
  if (!requiredCount) {
    return <section className="panel suggestion-action-panel" aria-label="建议处理">
      <PanelHeading title="建议处理" meta={`${suggestionCards.length} 项`} />
      <div>{suggestionCards.map((card) => renderCard(card, true))}</div>
    </section>;
  }
  return (
    <section className="panel pending-action-panel action-center" aria-label="待处理">
      <PanelHeading title="待处理" meta={`${requiredCount} 项`} />
      <div>
        {requiredCards.map((card) => renderCard(card, false))}
        {pendingItems.map((item) => <QuickPendingItem key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onQuick={onQuick} onAskAi={onAskAi} onRetry={onRetry} onRetryPrev={onRetryPrev} retryingId={retryingId} feedback={affairFeedback[item.id]} />)}
      </div>
      {suggestionCards.length > 0 && <details className="action-suggestions">
        <summary><strong>系统建议</strong><span>{suggestionCards.length} 项可选优化</span></summary>
        <div>{suggestionCards.map((card) => renderCard(card, true))}</div>
      </details>}
    </section>
  );
}

function ItemActionButtons({ item, onQuick, onAskAi, onRetry, retryingId, feedback, compact = false }: {
  item: TimelineItem;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onRetry?: (item: TimelineItem) => Promise<void>;
  retryingId?: string | null;
  feedback?: AffairFeedback;
  compact?: boolean;
}) {
  const finished = ['completed', 'cancelled', '已完成', '已取消', '已调课'].includes(item.status);
  if (finished) return null;
  const date = item.start_at?.slice(0, 10);
  const time = item.start_at?.slice(11, 16);
  // 交互铁律：一到两步的事按钮点一下（内部预演+提交+回读），两步以上的事交给 AI。
  if (item.domain === 'course') {
    if (!date || !time) return null;
    return <div className={`item-action-buttons${compact ? ' compact' : ''}`} data-ui="item-actions" onClick={(event) => event.stopPropagation()}>
      {onAskAi && <button type="button" className="secondary" data-ui-role="button" data-ui-variant="secondary" data-ui-action="course-move" onClick={() => onAskAi(`把${item.title} ${date} ${time} 的这节课调一下时间`)}>调时间</button>}
      {onQuick && <button type="button" className="danger" data-ui-role="button" data-ui-variant="danger" data-ui-action="course-cancel" onClick={() => onQuick('courseCancel', item)}>本次不上</button>}
    </div>;
  }
  const retrying = retryingId === item.id;
  return <div className={`item-action-buttons${compact ? ' compact' : ''}`} data-ui="item-actions" onClick={(event) => event.stopPropagation()}>
    <button type="button" className="primary" data-ui-role="button" data-ui-variant="primary" data-ui-action="affair-complete" disabled={Boolean(retryingId) || feedback?.ok} onClick={() => onQuick?.('affairComplete', item)}>{feedback?.ok ? '已完成' : '完成'}</button>
    {item.retry && onRetry
      ? <button type="button" className="secondary" data-ui-role="button" data-ui-variant="secondary" data-ui-action="affair-retry" disabled={Boolean(retryingId) || Boolean(feedback?.ok)} aria-busy={retrying} onClick={() => void onRetry(item)}>{retrying ? '处理中…' : feedback?.buttonLabel || '没约上'}</button>
      : null}
  </div>;
}

function maximumLaneCount(items: CalendarItemLike[]) {
  return layoutOverlappingItems(items)[0]?.laneCount || 1;
}

// 周视图列数随容器宽度连续自适应：时间轴 52px，每天保底 150px，1–7 天。
// 单日聚焦时固定 1 列；未量测到宽度前按 7 天渲染，避免首帧闪跳。
const WEEK_AXIS_WIDTH = 52;
const DAY_MIN_WIDTH = 150;

function useAdaptiveVisibleDays(scrollRef: React.RefObject<HTMLDivElement | null>, focused: boolean) {
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const element = scrollRef.current;
    if (!element || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width && Number.isFinite(width)) setContainerWidth(width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [scrollRef]);
  if (focused) return { visibleDays: 1, paginated: false };
  if (!containerWidth) return { visibleDays: 7, paginated: false };
  const fits = Math.floor((containerWidth - WEEK_AXIS_WIDTH) / DAY_MIN_WIDTH);
  const visibleDays = Math.max(1, Math.min(7, fits));
  return { visibleDays, paginated: visibleDays < 7 };
}

function useHorizontalDrag() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest('button, article, a, input, select, textarea')) return;
    const element = ref.current;
    if (!element || element.scrollWidth <= element.clientWidth) return;
    drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: element.scrollLeft };
    element.setPointerCapture(event.pointerId);
    element.classList.add('dragging');
  }, []);

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    const state = drag.current;
    if (!element || !state || state.pointerId !== event.pointerId) return;
    element.scrollLeft = state.scrollLeft - (event.clientX - state.startX);
  }, []);

  const finish = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    const state = drag.current;
    if (!element || !state || state.pointerId !== event.pointerId) return;
    if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
    element.classList.remove('dragging');
    drag.current = null;
  }, []);

  return { ref, onPointerDown, onPointerMove, onPointerUp: finish, onPointerCancel: finish };
}

function WeekCalendar({ items, range, localDate, onInspect }: {
  items: TimelineItem[];
  range: string;
  localDate: string;
  onInspect: InspectHandler;
}) {
  const dates = useMemo(() => buildWeekDates(range, localDate), [range, localDate]);
  const dragScroll = useHorizontalDrag();
  const visibleDateSlots = dates;

  // 画布留痕规则：只保留上过课（已完成·石板色）；过去的已取消/已调课不再回到画布，
  // 过期未标记课程由 itemStateClass(…, localDate) 转为琥珀“过期”提示。
  const byDate = useMemo(() => {
    const map = new Map<string, TimelineItem[]>();
    items.forEach((item) => {
      const date = itemDateKey(item);
      if (!date) return;
      if (date < localDate && ['已取消', '已调课', 'cancelled'].includes(item.status)) return;
      map.set(date, [...(map.get(date) || []), item]);
    });
    map.forEach((dayItems, date) => map.set(date, [...dayItems].sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')))));
    return map;
  }, [items, localDate]);
const placementsByDate = useMemo(() => {
  const map = new Map<string, Array<{ item: TimelineItem; lane: number; laneCount: number }>>();
  for (const date of dates) {
    const items = (byDate.get(date) || []).filter((item) => item.start_at || item.deadline_at);
    map.set(date, layoutOverlappingItems(items));
  }
  return map;
}, [byDate, dates]);

  const gridTemplate = '36px repeat(7, minmax(0, 1fr))';
  const timedItems = items.filter((item) => item.start_at || item.deadline_at);
  const { startHour, endHour } = calendarHourBounds(timedItems);
  const hourHeight = 60;
  const calendarHeight = (endHour - startHour) * hourHeight;
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);

  return (
      <div className="week-calendar-scroll draggable-week-scroll" role="region" tabIndex={0} aria-label="七列周时间视图" {...dragScroll}>
      <div className="week-calendar-canvas" style={{ minWidth: 0 }}>
        <div className="week-calendar-header" style={{ gridTemplateColumns: gridTemplate }}>
          <div className="week-corner">时间</div>
          {visibleDateSlots.map((date) => <div key={date} className={date === localDate ? 'week-day-header today' : 'week-day-header'}>
            <span>{formatDate(`${date}T12:00:00+08:00`, { weekday: 'short' })}</span>
            <strong>{Number(date.slice(8, 10))}</strong>
            <small>{byDate.get(date)?.length || 0} 项</small>
          </div>)}
        </div>
        <div className="week-calendar-body" style={{ gridTemplateColumns: gridTemplate }}>
          <div className="week-time-axis" style={{ height: calendarHeight }}>
            {hours.map((hour) => <span key={hour} style={{ top: (hour - startHour) * hourHeight }}>{String(hour).padStart(2, '0')}:00</span>)}
          </div>
          {visibleDateSlots.map((date) => {
            const placements = placementsByDate.get(date) || [];
            return <div className={date === localDate ? 'week-day-track today' : 'week-day-track'} key={date} style={{ height: calendarHeight }}>
              {placements.map(({ item, lane, laneCount }) => {
                const geometry = eventGeometry(item, startHour, endHour, hourHeight);
                if (!geometry) return null;
                const width = 100 / laneCount;
                const timeValue = item.start_at || item.deadline_at;
                const overdue = courseOverdue(item, localDate);
                return <article
                  key={item.id}
                  className={`week-time-block ${item.domain} ${itemStateClass(item, localDate)}${isTemporaryItem(item) ? ' temporary' : ''}`}
                  style={{ top: geometry.top, height: geometry.height, left: `calc(${lane * width}% + 4px)`, width: `calc(${width}% - 8px)` }}
                  tabIndex={0}
                  role="button"
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest('button')) return;
                    onInspect(item, event.currentTarget);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      onInspect(item, event.currentTarget);
                    }
                  }}
                  data-item-id={item.id}
                  aria-label={`${formatTime(timeValue)} ${item.title}${overdue ? '（已过期待标记）' : ''}，${item.domain === 'course' ? `${item.duration || '—'} 分钟课程` : '事务'}，打开详情`}
                >
                  <strong>{formatTime(timeValue)} · {item.title}{overdue ? '（过期）' : ''}</strong>
                  <span>{item.domain === 'course' ? `${item.duration || '—'} 分钟 · 课程` : item.estimated_minutes ? `${item.estimated_minutes} 分钟 · 事务` : '事务'}</span>
                </article>;
              })}
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

function MonthCalendar({ items, range, localDate, onOpenDay }: {
  items: TimelineItem[];
  range: string;
  localDate: string;
  onOpenDay: OpenDayHandler;
}) {
  const dates = useMemo(() => buildMonthGridDates(range, localDate), [range, localDate]);
  const month = ((range.match(/\d{4}-\d{2}-\d{2}/) || [localDate])[0]).slice(0, 7);
  const byDate = useMemo(() => {
    const map = new Map<string, TimelineItem[]>();
    items.forEach((item) => {
      const date = itemDateKey(item);
      if (!date) return;
      if (date < localDate && ['已取消', '已调课', 'cancelled'].includes(item.status)) return;
      map.set(date, [...(map.get(date) || []), item]);
    });
    map.forEach((dayItems, date) => map.set(date, [...dayItems].sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')))));
    return map;
  }, [items, localDate]);
  const weekdays = ['一', '二', '三', '四', '五', '六', '日'];

  return (
    <div className="month-calendar-scroll" role="region" tabIndex={0} aria-label="月历视图">
      <div className="month-calendar">
        <div className="month-weekdays">{weekdays.map((day) => <span key={day}>周{day}</span>)}</div>
        <div className="month-grid">
          {dates.map((date) => {
            const dayItems = byDate.get(date) || [];
            const classes = ['month-cell'];
            if (!date.startsWith(month)) classes.push('outside');
            if (date === localDate) classes.push('today');
            return <button type="button" className={classes.join(' ')} key={date} onClick={(event) => onOpenDay(date, event.currentTarget)}>
              <header><strong>{Number(date.slice(8, 10))}</strong><span>{dayItems.length ? `${dayItems.length} 项` : ''}</span></header>
              <div className="month-item-list">
                {dayItems.slice(0, 3).map((item) => <span key={item.id} className={`month-item ${item.domain} ${itemStateClass(item, localDate)}${isTemporaryItem(item) ? ' temporary' : ''}`}>
                  <i />{formatTime(itemDate(item)) || '待定'} · {item.title}{courseOverdue(item, localDate) ? '（过期）' : ''}
                </span>)}
                {dayItems.length > 3 && <span className="month-more">＋{dayItems.length - 3} 项</span>}
              </div>
            </button>;
          })}
        </div>
      </div>
    </div>
  );
}

type CockpitData = {
  ok: boolean;
  monday: string;
  localDate: string;
  days: Array<{
    date: string;
    weekday: string;
    courses: Array<{ title: string; start: string; end: string; duration: number | null; status: string; reservationId: string | null }>;
    reservations: Array<{ id: string; student: string; start: string; end: string; status: string; zone: string }>;
    gaps: Array<{ start: number; end: number; minutes: number }>;
    courseCount: number;
    reservationCount: number;
    gapMinutes: number;
  }>;
  students: Array<{ name: string; zone: string; group: string }>;
  diagnostics: { unassigned: string[]; totalMinutes: number; courseCount: number; reservationCount: number; dayGaps: Array<{ date: string; weekday: string; gapMinutes: number }> };
  warnings: string[];
};

function minutesToText(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return String(hours).padStart(2, '0') + ':' + String(mins).padStart(2, '0');
}

function CockpitView({ onAction, onAskAi, refreshKey = 0 }: { onAction: (preset: ActionPreset) => void; onAskAi: (draft: string) => void; refreshKey?: number }) {
  const [data, setData] = useState<CockpitData | null>(() => readWorkbenchCache<CockpitData>('cockpit'));
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState('');
  const load = useCallback(async (silent = false, fresh = false) => {
    if (!silent) setLoading(true);
    try {
      const result = await api<CockpitData>('api/cockpit' + (fresh ? '?fresh=1' : ''));
      setData(result);
      writeWorkbenchCache('cockpit', result);
      setError('');
      return true;
    } catch (err: any) {
      setError(err?.message || '读取失败');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { void load(!data); }, [load]);
  useEffect(() => {
    if (refreshKey > 0) void load(true, true);
  }, [refreshKey]);
  const groups = useMemo(() => {
    const map = new Map<string, CockpitData['students']>();
    for (const student of data?.students ?? []) {
      if (!map.has(student.group)) map.set(student.group, []);
      map.get(student.group)!.push(student);
    }
    const order = ['本周已排', '已预留', '未排'];
    return order.map((key) => ({ label: key, items: map.get(key) ?? [] }));
  }, [data]);
  if (loading && !data) return <div className="view-stack"><p className="muted-note">正在装载驾驶舱…</p></div>;
  if (error && !data) return <div className="view-stack"><Check label="驾驶舱读取" ok={false} detail={error} /></div>;
  const today = data?.localDate ?? '';
  return (
    <div className="view-stack cockpit-view">
      <PageTitle eyebrow="排课驾驶舱" title="一周试排" description="左选学生，中看空档与课程，右看诊断。点空档直接开预留。" />
      <div className="cockpit-toolbar">
        <span className="muted-note">{data?.monday} 当周 · 今天 {today}</span>
        <button type="button" className="ghost-button" onClick={() => void load(true)}>刷新</button>
        <button type="button" className="ghost-button" onClick={() => onAskAi('')}>AI 排课</button>
      </div>
      <div className="cockpit-layout">
        <aside className="cockpit-left panel">
          <PanelHeading title="候选学生" />
          {groups.map((group) => (
            <section key={group.label} className="cockpit-group">
              <p className="cockpit-group-label">{group.label} · {group.items.length}</p>
              {group.items.length === 0 ? <p className="muted-note">（无）</p> : group.items.map((student) => (
                <div key={student.name} className="cockpit-student">
                  <span>{student.name}</span>
                  <span className="cockpit-zone">{student.zone}</span>
                </div>
              ))}
            </section>
          ))}
        </aside>
        <section className="cockpit-canvas">
          {data?.days.map((day) => (
            <div key={day.date} className={'cockpit-day' + (day.date === today ? ' cockpit-day-today' : '')}>
              <div className="cockpit-day-head"><strong>{day.weekday}</strong><span className="muted-note">{day.date.slice(5)}</span></div>
              <div className="cockpit-day-body">
                {day.courses.map((course, index) => (
                  <div key={'c' + index} className="cockpit-card cockpit-card-course" role="group">
                    <button type="button" className="cockpit-card-main" title="点击调整这节课" onClick={() => onAction({ operation: 'course_move', student: course.title, fromDate: day.date, fromTime: String(course.start).slice(11, 16) })}>
                      <span>{course.title}</span>
                      <span className="cockpit-card-time">{String(course.start).slice(11, 16)}–{String(course.end).slice(11, 16)}</span>
                    </button>
                    <button type="button" className="cockpit-card-ai" data-ui-role="button" data-ui-variant="secondary" data-ui-action="course-move" title="用一句话交给 AI 调时间" onClick={() => onAskAi('把' + course.title + ' ' + day.date + ' ' + String(course.start).slice(11, 16) + ' 的这节课调一下时间')}>调时间</button>
                  </div>
                ))}
                {day.reservations.map((reservation, index) => (
                  <button key={'r' + index} type="button" className="cockpit-card cockpit-card-reservation" onClick={() => onAction({ operation: 'reservation_update', id: reservation.id, student: reservation.student, date: day.date, time: String(reservation.start).slice(11, 16) })}>
                    <span>{reservation.student} · 预留</span>
                    <span className="cockpit-card-time">{String(reservation.start).slice(11, 16)}–{String(reservation.end).slice(11, 16)}</span>
                  </button>
                ))}
                {day.gaps.map((gap, index) => (
                  <button key={'g' + index} type="button" className="cockpit-gap" title={'空档 ' + gap.minutes + ' 分钟，点击预留'} onClick={() => onAction({ operation: 'reservation_add', date: day.date, time: minutesToText(gap.start) })}>
                    {minutesToText(gap.start)}–{minutesToText(gap.end)} 空档
                  </button>
                ))}
                {day.courses.length === 0 && day.reservations.length === 0 && <p className="muted-note">无课</p>}
              </div>
            </div>
          ))}
        </section>
        <aside className="cockpit-right panel">
          <PanelHeading title="实时诊断" />
          <Metric label="本周课程" value={data?.diagnostics.courseCount ?? 0} hint={'共 ' + (data?.diagnostics.totalMinutes ?? 0) + ' 分钟'} tone="sage" />
          <Metric label="有效预留" value={data?.diagnostics.reservationCount ?? 0} hint="待确认/已确认" tone="amber" />
          <section className="cockpit-group">
            <p className="cockpit-group-label">每日空档</p>
            {data?.diagnostics.dayGaps.map((day) => (
              <div key={day.date} className="cockpit-student"><span>{day.weekday}</span><span className="cockpit-zone">{day.gapMinutes} 分钟</span></div>
            ))}
          </section>
          <section className="cockpit-group">
            <p className="cockpit-group-label">尚未排入 · {data?.diagnostics.unassigned.length ?? 0}</p>
            {data?.diagnostics.unassigned.length ? data?.diagnostics.unassigned.map((name) => <div key={name} className="cockpit-student cockpit-unassigned"><span>{name}</span></div>) : <p className="muted-note">本周在读学生都已排或已预留</p>}
          </section>
          {(data?.warnings ?? []).map((warning, index) => <Check key={index} label="读取警告" ok={false} detail={warning} />)}
        </aside>
      </div>
    </div>
  );
}

function PlanningView({ onAction, onAskAi, refreshKey, sectionHint, scheduleText, onDataChanged }: { onAction: (preset: ActionPreset) => void; onAskAi: (draft: string) => void; refreshKey: number; sectionHint?: { section: PlanningSection; nonce: number } | null; scheduleText?: string; onDataChanged: (options?: { silent?: boolean }) => Promise<unknown> }) {
  const [planning, setPlanning] = useState<PlanningData | null>(() => readWorkbenchCache<PlanningData>('planning'));
  const [planningError, setPlanningError] = useState('');
  const [planningSection, setPlanningSection] = useState<PlanningSection>('calendar');
  const [studentFilter, setStudentFilter] = useState<'issues' | 'all' | 'availability' | 'zone' | 'pending'>('issues');
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [templateCheck, setTemplateCheck] = useState<TemplateCheck | null>(null);
  const [checkingTemplate, setCheckingTemplate] = useState(false);
  const [confirmingReservationId, setConfirmingReservationId] = useState<string | null>(null);
  const [reservationFeedback, setReservationFeedback] = useState<Record<string, { ok: boolean; text: string }>>({});

  useEffect(() => {
    if (sectionHint?.section) setPlanningSection(sectionHint.section);
  }, [sectionHint?.nonce]);

  useEffect(() => {
    let cancelled = false;
    void api<PlanningData>(`api/planning${refreshKey > 0 ? '?fresh=1' : ''}`).then((data) => {
      if (cancelled) return;
      const validated = assertPlanningData(data);
      setPlanning(validated);
      writeWorkbenchCache('planning', validated);
      setPlanningError('');
      setTemplateCheck(null);
    }).catch((error) => {
      if (!cancelled) setPlanningError(error.message || '筹备数据读取失败');
    });
    return () => { cancelled = true; };
  }, [refreshKey]);

  useEffect(() => {
    const latest = Object.entries(reservationFeedback).at(-1);
    if (!latest || !latest[1].ok || confirmingReservationId === latest[0]) return;
    const timer = window.setTimeout(() => {
      setReservationFeedback((current) => {
        const next = { ...current };
        delete next[latest[0]];
        return next;
      });
    }, 4500);
    return () => window.clearTimeout(timer);
  }, [confirmingReservationId, reservationFeedback]);

  async function runTemplateCheck() {
    if (!planning || checkingTemplate) return;
    setCheckingTemplate(true);
    setTemplateCheck(null);
    try {
      setTemplateCheck(await api<TemplateCheck>(`api/planning/template-check?monday=${encodeURIComponent(planning.weekMonday)}`));
    } catch (error: any) {
      setTemplateCheck({ ok: false, passed: false, monday: planning.weekMonday, output: '', affectedDates: [], error: error.message });
    } finally {
      setCheckingTemplate(false);
    }
  }

  async function cancelReservation(reservationId: string) {
    if (confirmingReservationId) return;
    setConfirmingReservationId(reservationId);
    setReservationFeedback((current) => ({ ...current, [reservationId]: { ok: true, text: '正在取消预留…' } }));
    try {
      const data = await api<any>('api/reservations/cancel-quick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reservationId }),
      });
      if (!data.ok) throw new Error(data.error || '取消预留未完成');
      setPlanning((current) => current ? {
        ...current,
        reservations: current.reservations.map((reservation) => reservation.reservation_id === reservationId
          ? { ...reservation, status: '已取消' }
          : reservation),
      } : current);
      setReservationFeedback((current) => ({ ...current, [reservationId]: { ok: true, text: data.message || '已取消预留' } }));
      void onDataChanged({ silent: true });
    } catch (error: any) {
      setReservationFeedback((current) => ({ ...current, [reservationId]: { ok: false, text: `取消失败：${error.message || '未知错误'}` } }));
    } finally {
      setConfirmingReservationId(null);
    }
  }

  async function confirmReservation(reservationId: string) {
    if (confirmingReservationId) return;
    setConfirmingReservationId(reservationId);
    setReservationFeedback((current) => ({ ...current, [reservationId]: { ok: true, text: '正在复核冲突并确认落课…' } }));
    try {
      const data = await api<any>('api/reservations/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reservationId }),
      });
      if (!data.ok) throw new Error(data.error || '预留确认失败');
      setPlanning((current) => current ? {
        ...current,
        summary: { ...current.summary, formalCourseCount: current.summary.formalCourseCount + 1 },
        reservations: current.reservations.map((reservation) => reservation.reservation_id === reservationId
          ? { ...reservation, status: '已确认' }
          : reservation),
        audit: {
          ...current.audit,
          reservation_hard_blockers: current.audit.reservation_hard_blockers.filter((item) => item.reservation_id !== reservationId),
        },
      } : current);
      setReservationFeedback((current) => ({ ...current, [reservationId]: { ok: true, text: data.message || '已确认落课' } }));
      void onDataChanged({ silent: true });
    } catch (error: any) {
      setReservationFeedback((current) => ({ ...current, [reservationId]: { ok: false, text: `确认失败：${error.message || '未知错误'}` } }));
      void onDataChanged({ silent: true });
    } finally {
      setConfirmingReservationId(null);
    }
  }

  if (planningError) return <Notice tone="error" title="筹备数据读取失败" text={planningError} />;
  if (!planning) return <LoadingState />;

  const summary = planning.summary;
  const coreReadyCount = planning.students.filter((student) => student.confirmed && student.zone !== '未分区' && (student.availability.length > 0 || student.hasReservation)).length;
  const readinessPercent = summary.activeStudentCount ? Math.round((coreReadyCount / summary.activeStudentCount) * 100) : 100;
  const templateIssueCount = planning.commute.overlaps.length;
  const reservationBlockers = new Map(planning.audit.reservation_hard_blockers.map((item) => [item.reservation_id, item.reasons]));
  const filteredStudents = planning.students.filter((student) => {
    if (studentFilter === 'all') return true;
    if (studentFilter === 'availability') return !student.availability.length && !student.hasReservation;
    if (studentFilter === 'zone') return student.zone === '未分区';
    if (studentFilter === 'pending') return Boolean(student.pendingWeekday) || !student.confirmed;
    return student.issues.length > 0;
  });
  const visibleStudents = showAllStudents ? filteredStudents : filteredStudents.slice(0, 10);
  const failedSources = planning.sources.filter((source) => !source.ok);

  return (
    <div className="view-stack planning-workspace">
      <PageTitle eyebrow="规划层" title="开学筹备与课程预留" description="从资料缺口开始，经过预演和预留，再确认进入正式课表。" />
      {failedSources.length > 0 && <Notice tone="warn" title={`${failedSources.length} 项筹备数据读取异常`} text={failedSources.map((source) => `${source.label}：${source.message || '读取失败'}`).join('；')} />}
      {summary.reservationHardBlockerCount > 0 && <Notice tone="warn" title={`${summary.reservationHardBlockerCount} 条预留存在确认硬阻塞`} text={planning.audit.reservation_hard_blockers.map((item) => `${item.student} ${item.date}：${item.reasons.join('、')}`).join('；')} />}

      <WorkbenchNav
        label="筹备页内部导航"
        value={planningSection}
        onChange={(next) => setPlanningSection(next as typeof planningSection)}
        items={[
          { id: 'calendar', label: '周视图', count: planning.reservations.length + planning.templates.length },
          { id: 'trial', label: '试排' },
          { id: 'students', label: '学生与准备度', count: summary.unzonedCount + summary.missingAvailabilityCount + summary.unconfirmedActiveCount + planning.students.filter((student) => student.issues.length).length },
          { id: 'candidates', label: '预留与复核', count: templateIssueCount + summary.reservationCount + summary.reviewCount + summary.overdueCount + failedSources.length },
        ]}
      />

      <PlanningWeekView planning={planning} hidden={planningSection !== 'calendar'} onConfirmReservation={confirmReservation} onCancelReservation={cancelReservation} onAction={onAction} confirmingReservationId={confirmingReservationId} reservationFeedback={reservationFeedback} />

      <div hidden={planningSection !== 'trial'}>
        <PageTitle eyebrow="排课驾驶舱" title="一周试排" description="左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" />
        <CockpitView onAction={onAction} onAskAi={onAskAi} refreshKey={refreshKey} />
      </div>

      <section className="planning-stage-grid" aria-label="筹备进度" hidden={planningSection !== 'students'}>
        <div className="planning-stage primary">
          <span>01 · 资料准备</span><strong>{coreReadyCount}/{summary.activeStudentCount}</strong><small>{readinessPercent}% 学生资料可用于排课</small>
          <div className="readiness-bar"><i style={{ width: `${readinessPercent}%` }} /></div>
        </div>
        <div className={templateIssueCount ? 'planning-stage warn' : 'planning-stage ready'}>
          <span>02 · 模板体检</span><strong>{templateIssueCount}</strong><small>{templateIssueCount ? '项静态风险待处理' : '静态检查通过'}</small>
        </div>
        <div className="planning-stage">
          <span>03 · 课程预留</span><strong>{summary.reservationCount}</strong><small>确认后才进入正式课程</small>
        </div>
        <div className="planning-stage">
          <span>04 · 正式落课</span><strong>{summary.formalCourseCount}</strong><small>{summary.reviewCount + summary.overdueCount ? `${summary.reviewCount + summary.overdueCount} 项待复核` : '当前无复核积压'}</small>
        </div>
      </section>

      <section className="planning-overview-grid" hidden={planningSection !== 'students'}>
        <div className="panel planning-overview-card">
          <div><p className="eyebrow">当前优先级</p><h3>先把学生资料补到可排</h3><span>{summary.activeStudentCount - coreReadyCount} 人仍有关键资料缺口。contract {planning.contract.version ?? '—'} · schema {planning.contract.schemaVersion ?? '—'} · {formatRange(planning.range)}</span></div>
          <div className="planning-overview-actions">
            <button type="button" onClick={() => { setStudentFilter('availability'); setPlanningSection('students'); }}>缺候选时间 {summary.missingAvailabilityCount}</button>
            <button type="button" onClick={() => { setStudentFilter('zone'); setPlanningSection('students'); }}>未分区 {summary.unzonedCount}</button>
            <button type="button" onClick={() => { setStudentFilter('pending'); setPlanningSection('students'); }}>待确认 {summary.unconfirmedActiveCount + summary.pendingCount}</button>
          </div>
        </div>
        <div className="panel planning-overview-card">
          <div><p className="eyebrow">下一道关口</p><h3>{templateIssueCount ? '候选生成前还有时间重叠' : '可以进入候选预演'}</h3><span>{templateIssueCount} 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。</span></div>
          <div className="planning-overview-actions">
            <button type="button" onClick={() => setPlanningSection('candidates')}>查看候选与预留</button>
            {(summary.reviewCount + summary.overdueCount + failedSources.length) > 0 && <button type="button" onClick={() => setPlanningSection('candidates')}>处理复核与异常</button>}
          </div>
        </div>
      </section>

      <section className="panel planning-student-panel" hidden={planningSection !== 'students'}>
        <div className="planning-panel-head">
          <div><p className="eyebrow">先处理这些</p><h3>学生筹备队列</h3><span>默认只展示存在缺口或约束的学生。</span></div>
          <div className="planning-filter" role="group" aria-label="筛选学生">
            {([
              ['issues', '待处理'], ['availability', '缺候选时间'], ['zone', '未分区'], ['pending', '待确认'], ['all', '全部'],
            ] as const).map(([value, label]) => <button type="button" key={value} className={studentFilter === value ? 'selected' : ''} onClick={() => { setStudentFilter(value); setShowAllStudents(false); }}>{label}</button>)}
          </div>
        </div>
        {filteredStudents.length ? <div className="planning-student-list">
          {visibleStudents.map((student) => {
            const availabilitySummary = student.availability.length
              ? student.availability.map((window) => `${window.weekday} ${window.start_time}-${window.end_time}`).join('；')
              : '尚未记录';
            return <article className="planning-student-row" key={student.sourceName}>
              <div className="planning-student-name"><strong>{student.name}</strong><span>{student.duration} 分钟</span></div>
              <div className="planning-student-cell"><small>沟通</small><span className={student.confirmed ? 'state-good' : 'state-warn'}>{student.pendingWeekday ? `${student.pendingWeekday}待定` : student.confirmed ? '已确认' : '未确认'}</span></div>
              <div className="planning-student-cell"><small>片区</small><span className={student.zone === '未分区' ? 'state-warn' : ''}>{student.zone}</span></div>
              <div className="planning-student-cell availability-cell"><small>长期候选时间</small><span className={!student.availability.length && !student.hasReservation ? 'state-warn' : ''} title={availabilitySummary}>{student.availability.length ? availabilitySummary : student.hasReservation ? '已有单日预留' : availabilitySummary}</span></div>
              <div className="planning-student-cell"><small>约束</small><span>{student.vacations.length ? student.vacations.map((item) => `至 ${item.end_date.slice(5)}`).join('、') : '—'}</span></div>
              <div className="planning-row-actions">
                {student.zone === '未分区' && <button type="button" onClick={() => onAction({ operation: 'zone_set', student: student.name })}>设片区</button>}
                {!student.availability.length && !student.hasReservation && <button type="button" onClick={() => onAction({ operation: 'availability_set', student: student.name, weekday: student.pendingWeekday || undefined })}>补候选时间</button>}
                <button type="button" onClick={() => onAction({ operation: 'reservation_add', student: student.name, duration: student.duration, zone: student.zone === '未分区' ? '' : student.zone })}>预留</button>
              </div>
            </article>;
          })}
          {filteredStudents.length > 10 && <button type="button" className="planning-expand-button" onClick={() => setShowAllStudents((current) => !current)}>{showAllStudents ? '收起学生列表' : `再看 ${filteredStudents.length - 10} 人`}</button>}
        </div> : <Empty title="这个筛选下没有缺口" text="学生资料已经满足当前筛选条件。" compact />}
        {planning.inactiveConfirmed.length > 0 && <div className="planning-inline-warning"><strong>确认名单异常</strong><span>非在读学生仍在确认名单：{planning.inactiveConfirmed.join('、')}</span></div>}
      </section>

      <section className="planning-student-context" hidden={planningSection !== 'students'}>
        <div className="panel planning-context-card"><strong>待定名单</strong><span>{planning.pending.map((item) => item.label).join('、') || '无'}</span></div>
        <div className="panel planning-context-card"><strong>范围内出游</strong><span>{planning.vacations.map((item) => `${item.student} ${item.start_date.slice(5)}—${item.end_date.slice(5)}`).join('；') || '无'}</span></div>
        <div className="panel planning-context-card"><strong>片区覆盖</strong><span>{planning.zones.map((group) => `${group.zone} ${group.count}人`).join('；') || '无'}</span></div>
      </section>

      <section className="planning-two-column" hidden={planningSection !== 'candidates'}>
        <div className="panel planning-reservations-panel">
          <PanelHeading title="课程预留" meta={`${planning.reservations.length} 条`} action="新增预留…" onAction={() => onAction({ operation: 'reservation_add' })} />
          {planning.reservations.length ? <div className="reservation-card-list">{planning.reservations.map((reservation) => {
            const conflictCount = (reservation.conflicts?.formal_courses?.length || 0) + (reservation.conflicts?.soft_reservations?.length || 0);
            const hardBlockers = reservationBlockers.get(reservation.reservation_id) || [];
            const blockerId = `reservation-blocker-${reservation.reservation_id}`;
            const displayStatus = reservation.status === '已确认' ? '已落课' : reservation.status === '预期' ? '待落课' : reservation.status;
            const reservationTone = hardBlockers.length ? 'blocked' : reservation.status === '已确认' ? 'landed' : 'expected';
            return <article className={`reservation-card ${reservationTone}`} key={reservation.reservation_id}>
              <div className="reservation-date"><strong>{reservation.reservation_date.slice(5)}</strong><span>{reservation.weekday}</span></div>
              <div className="reservation-main"><strong>{reservation.student}</strong><span>{reservation.start_time}-{reservation.end_time} · {reservation.duration} 分钟{reservation.zone ? ` · ${reservation.zone}` : ''}</span><small id={blockerId}>{displayStatus}{conflictCount ? ` · ${conflictCount} 项软冲突` : ''}{hardBlockers.length ? ` · 硬约束：${hardBlockers.join('、')}` : ''}{reservation.note ? ` · ${reservation.note}` : ''}</small></div>
              <div className="reservation-actions">
                {reservation.status === '预期' ? <>
                  <button type="button" data-ui-role="button" data-ui-variant="secondary" data-ui-action="reservation-update" onClick={() => onAction({ operation: 'reservation_update', reservationId: reservation.reservation_id, date: reservation.reservation_date, time: reservation.start_time, duration: reservation.duration, zone: reservation.zone || '', note: reservation.note || '' })}>调时间</button>
                  <button type="button" className="primary" disabled={hardBlockers.length > 0} aria-describedby={hardBlockers.length ? blockerId : undefined} onClick={() => onAction({ operation: 'reservation_confirm', reservationId: reservation.reservation_id })}>{hardBlockers.length ? '暂不可落课' : '确认落课'}</button>
                  <button type="button" className="quiet-danger" onClick={() => onAction({ operation: 'reservation_cancel', reservationId: reservation.reservation_id })}>取消预留</button>
                </> : <span className="reservation-state-chip confirmed">✓ {displayStatus}</span>}
              </div>
            </article>;
          })}</div> : <Empty title="当前没有预留" text="未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。" compact />}
        </div>

        <div className="panel template-health-panel">
          <div className="planning-panel-head compact">
            <div><p className="eyebrow">候选前检查</p><h3>固定模板体检</h3><span>{summary.templateCount} 条模板 · 通勤只作排时间提示</span></div>
            <button type="button" className="row-action-button" disabled={checkingTemplate} onClick={() => void runTemplateCheck()}>{checkingTemplate ? '正在预演…' : '预演本周模板'}</button>
          </div>
          <div className="template-issue-list">
            <TemplateIssue label="时间重叠" count={planning.commute.overlaps.length} tone="danger" details={planning.commute.overlaps.slice(0, 3).map((item) => `${item.weekday} ${item.first} ${item.firstRange} / ${item.second} ${item.secondRange}`)} />
            <TemplateIssue label="长期候选时间差异" count={planning.commute.availabilityConflicts.length} tone="neutral" details={planning.commute.availabilityConflicts.slice(0, 3).map((item) => `${item.student} ${item.weekday} ${item.startTime}-${item.endTime}（仅提示）`)} />
            <TemplateIssue label="排时间时再问通勤" count={planning.commute.missingRoutes.length} tone="neutral" details={planning.commute.missingRoutes.slice(0, 3).map((item) => `${item.weekday} ${item.from} → ${item.to}`)} />
          </div>
          {planning.commute.missingRoutes.slice(0, 2).map((route) => <button type="button" className="route-fix-button" key={`${route.weekday}-${route.from}-${route.to}`} onClick={() => onAction({ operation: 'commute_set', fromStudent: route.from, toStudent: route.to })}>补录 {route.from} → {route.to}</button>)}
          {templateCheck && <div className={templateCheck.passed ? 'template-check-result pass' : 'template-check-result fail'}><strong>{templateCheck.passed ? '模板预演通过' : '模板预演未通过'}</strong><pre>{templateCheck.error || templateCheck.output || '没有返回详情'}</pre></div>}
        </div>
      </section>

      {planningSection === 'candidates' && (planning.reviews.length > 0 || summary.overdueCount > 0) && <section className="panel review-queue-panel">
        <PanelHeading title="历史课程复核" meta={`${planning.reviews.length} 节待确认 · ${summary.overdueCount} 节过期待转入`} action={summary.overdueCount ? `处理 ${summary.overdueCount} 节过期课` : undefined} onAction={summary.overdueCount ? () => onAction({ operation: 'quarantine_overdue' }) : undefined} />
        <div className="review-card-list">{planning.reviews.map((course) => <article className="review-card" key={course.course_id}>
          <div><strong>{course.student}</strong><span>{course.date} · {course.start_time}-{course.end_time}</span></div>
          <div><button type="button" onClick={() => onAction({ operation: 'course_review_resolve', courseId: course.course_id, resolution: 'done' })}>确认已完成</button><button type="button" onClick={() => onAction({ operation: 'course_review_resolve', courseId: course.course_id, resolution: 'cancelled' })}>确认没上</button></div>
        </article>)}</div>
      </section>}

      {planningSection === 'candidates' && planning.reviews.length === 0 && summary.overdueCount === 0 && <section className="panel"><Empty title="当前没有待复核课程" text="过期课程和人工复核队列均已清空。" compact /></section>}

      <section className="planning-detail-grid" hidden={planningSection !== 'candidates'}>
        <details className="raw-details panel">
          <summary>复核口径与运行状态</summary>
          <div className="planning-detail-content">
            <p><strong>过期待转入：</strong>{summary.overdueCount} 节</p>
            <p><strong>人工待复核：</strong>{summary.reviewCount} 节</p>
            <p><strong>读取异常：</strong>{failedSources.length} 项</p>
            <p>过期课只会先转入“待确认”，必须再由人工判断已完成或没上。</p>
          </div>
        </details>
        <details className="raw-details panel">
          <summary>数据来源与底层证据</summary>
          <div className="source-status-list">{planning.sources.map((source) => <span key={source.label} className={source.ok ? 'ok' : 'bad'}><i />{source.label}</span>)}</div>
          <pre>{Object.values(planning.raw).filter(Boolean).join('\n\n')}{scheduleText ? `\n\n── 底层课表文本 ──\n${scheduleText}` : ''}</pre>
        </details>
      </section>
    </div>
  );
}

type PlanningWeekEntry = {
  id: string;
  kind: 'reservation' | 'template';
  reservationId?: string;
  reservationStatus?: string;
  confirmedCourseId?: number | null;
  blockerText?: string;
  student: string;
  date: string;
  weekday: string;
  start_time: string;
  end_time: string;
  duration: number;
  studentState: string;
  stateClass: 'confirmed' | 'pending' | 'unconfirmed' | 'paused' | 'landed' | 'expected' | 'blocked';
  zone?: string | null;
  note?: string | null;
  start_at: string;
  end_at: string;
};

function PlanningWeekView({ planning, hidden, onConfirmReservation, onCancelReservation, onAction, confirmingReservationId, reservationFeedback }: {
  planning: PlanningData;
  hidden: boolean;
  onConfirmReservation: (reservationId: string) => Promise<void>;
  onCancelReservation: (reservationId: string) => Promise<void>;
  onAction: (preset: ActionPreset) => void;
  confirmingReservationId: string | null;
  reservationFeedback: Record<string, { ok: boolean; text: string }>;
}) {
  const [mode, setMode] = useState<'reservation' | 'template'>('reservation');
  const [openedEntryId, setOpenedEntryId] = useState<string | null>(null);
  const dragScroll = useHorizontalDrag();
  const [weekMonday, setWeekMonday] = useState(planning.weekMonday);
  const [dayPage, setDayPage] = useState(0);
  const [focusDate, setFocusDate] = useState<string | null>(null);
  const weekdays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const dates = useMemo(() => buildWeekDates(`${weekMonday}..${weekMonday}`, weekMonday), [weekMonday]);
  const { visibleDays, paginated } = useAdaptiveVisibleDays(dragScroll.ref, Boolean(focusDate));
  const pageCount = Math.max(1, Math.ceil(7 / Math.max(1, visibleDays)));
  const visibleDateSlots = useMemo<Array<string | null>>(
    () => (focusDate ? [focusDate] : paginated ? buildWeekPageSlots(dates, dayPage, visibleDays) : dates),
    [dates, dayPage, focusDate, paginated, visibleDays],
  );

  useEffect(() => {
    setWeekMonday(planning.weekMonday);
  }, [planning.weekMonday]);

  useEffect(() => {
    setDayPage(0);
    setFocusDate(null);
    setOpenedEntryId(null);
  }, [weekMonday, mode]);
  const range = useMemo(() => parseDateRange(planning.range), [planning.range]);
  const firstMonday = useMemo(() => buildWeekDates(planning.range, planning.localDate)[0], [planning.range, planning.localDate]);
  const canPrevious = weekMonday > firstMonday;
  const canNext = Boolean(range.end && addDateDays(weekMonday, 7) <= range.end);
  const studentMap = useMemo(() => new Map(planning.students.map((student) => [student.name, student])), [planning.students]);
  const pendingMap = useMemo(() => new Map(planning.pending.map((item) => [item.student, item])), [planning.pending]);
  const reservationBlockerMap = useMemo(() => new Map(
    planning.audit.reservation_hard_blockers.map((item) => [item.reservation_id, item.reasons.join('、')]),
  ), [planning.audit.reservation_hard_blockers]);

  const entries = useMemo<PlanningWeekEntry[]>(() => {
    const stateFor = (student: string, studentStatus = '在读') => {
      if (studentStatus !== '在读') return { studentState: '已暂停', stateClass: 'paused' as const };
      if (pendingMap.has(student)) return { studentState: '待定', stateClass: 'pending' as const };
      if (studentMap.get(student)?.confirmed) return { studentState: '已确认', stateClass: 'confirmed' as const };
      return { studentState: '未确认', stateClass: 'unconfirmed' as const };
    };
    const toEntry = (base: Omit<PlanningWeekEntry, 'start_at' | 'end_at'>): PlanningWeekEntry => ({
      ...base,
      start_at: `${base.date}T${base.start_time}:00+08:00`,
      end_at: `${base.date}T${base.end_time}:00+08:00`,
    });
    if (mode === 'reservation') {
      return planning.reservations
        .filter((reservation) => reservation.reservation_date >= dates[0] && reservation.reservation_date <= dates[6] && reservation.status !== '已取消')
        .map((reservation) => {
          const blockerText = reservationBlockerMap.get(reservation.reservation_id);
          const inactive = (reservation.student_status || '在读') !== '在读';
          const landed = reservation.status === '已确认';
          return toEntry({
            id: reservation.reservation_id,
            kind: 'reservation',
            reservationId: reservation.reservation_id,
            reservationStatus: reservation.status,
            confirmedCourseId: reservation.confirmed_course_id,
            blockerText,
            student: reservation.student,
            date: reservation.reservation_date,
            weekday: reservation.weekday,
            start_time: reservation.start_time,
            end_time: reservation.end_time,
            duration: reservation.duration,
            studentState: inactive ? '已暂停' : landed ? '已落课' : blockerText ? '有硬约束' : '待落课',
            stateClass: inactive ? 'paused' : landed ? 'landed' : blockerText ? 'blocked' : 'expected',
            zone: reservation.zone,
            note: reservation.note,
          });
        });
    }
    return planning.templates.flatMap((template) => {
      const dayIndex = weekdays.indexOf(template.weekday);
      if (dayIndex < 0) return [];
      const date = dates[dayIndex];
      const state = stateFor(template.student, template.student_status);
      return [toEntry({
        id: `template-${template.template_id}`,
        kind: 'template',
        student: template.student,
        date,
        weekday: template.weekday,
        start_time: template.start_time,
        end_time: template.end_time,
        duration: template.duration,
        studentState: state.studentState,
        stateClass: state.stateClass,
      })];
    });
  }, [dates, mode, pendingMap, planning.reservations, planning.templates, reservationBlockerMap, studentMap]);

  useEffect(() => {
    if (openedEntryId && !entries.some((entry) => entry.id === openedEntryId && entry.kind === 'reservation')) {
      setOpenedEntryId(null);
    }
  }, [entries, openedEntryId]);
  useEffect(() => {
    if (!focusDate) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFocusDate(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [focusDate]);
  useEffect(() => {
    if (!openedEntryId) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenedEntryId(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [openedEntryId]);
  const anyReservationBusy = Boolean(confirmingReservationId);

  const byDate = useMemo(() => {
    const map = new Map<string, PlanningWeekEntry[]>();
    entries.forEach((entry) => map.set(entry.date, [...(map.get(entry.date) || []), entry]));
    return map;
  }, [entries]);
  const laneCountsByDate = useMemo(() => new Map(dates.map((date) => [date, maximumLaneCount(byDate.get(date) || [])])), [byDate, dates]);

const placementsByDate = useMemo(() => {
  const map = new Map<string, Array<{ item: any; lane: number; laneCount: number }>>();
  for (const date of dates) {
    map.set(date, layoutOverlappingItems(byDate.get(date) || []));
  }
  return map;
}, [byDate, dates]);

  const visibleLaneWeights = visibleDateSlots.map((date) => date ? laneCountsByDate.get(date) || 1 : 1);
  const visibleLaneUnits = visibleLaneWeights.reduce((sum, count) => sum + count, 0);
  const gridTemplate = `52px ${visibleLaneWeights.map((count) => `minmax(0, ${count}fr)`).join(' ')}`;
  const visibleEntries = visibleDateSlots.length >= 7 ? entries : entries.filter((entry) => visibleDateSlots.includes(entry.date));
  const { startHour, endHour } = calendarHourBounds(visibleEntries);
  const hourHeight = focusDate ? 92 : visibleDays >= 6 ? 64 : visibleDays >= 4 ? 72 : 84;
  const calendarHeight = (endHour - startHour) * hourHeight;
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);
  const weekTitle = `${formatDate(`${dates[0]}T12:00:00+08:00`, { month: 'long', day: 'numeric' })}—${formatDate(`${dates[6]}T12:00:00+08:00`, { month: 'long', day: 'numeric' })}`;

  return <section className={`panel planning-week-panel ${mode}-mode`} hidden={hidden} aria-label="筹备周视图">
    <div className="planning-week-toolbar">
      <div>
        <p className="eyebrow">排课周期</p>
        <h3>{mode === 'reservation' ? '临时预留周视图' : '正式固定周视图'}</h3>
        <span>{mode === 'reservation' ? '鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。' : '按固定模板展开本周基线，同时标出学生沟通状态。'}</span>
      </div>
      <div className="planning-week-controls">
        <div className="planning-week-mode" role="group" aria-label="周视图层级">
          <button type="button" className={mode === 'reservation' ? 'selected' : ''} aria-pressed={mode === 'reservation'} onClick={() => setMode('reservation')}>临时预留 <strong>{planning.reservations.length}</strong></button>
          <button type="button" className={mode === 'template' ? 'selected' : ''} aria-pressed={mode === 'template'} onClick={() => setMode('template')}>正式固定 <strong>{planning.templates.length}</strong></button>
        </div>
        <div className="planning-week-nav" role="group" aria-label="切换周">
          <button type="button" aria-label="上一周" disabled={!canPrevious} onClick={() => setWeekMonday((current) => addDateDays(current, -7))}>‹</button>
          <strong>{weekTitle}</strong>
          <button type="button" aria-label="下一周" disabled={!canNext} onClick={() => setWeekMonday((current) => addDateDays(current, 7))}>›</button>
        </div>
        {focusDate ? <div className="planning-day-page-nav" role="group" aria-label="单日聚焦视图">
          <button type="button" onClick={() => setFocusDate(null)}>‹ 返回整周</button>
          <strong>{formatDate(`${focusDate}T12:00:00+08:00`, { month: 'long', day: 'numeric', weekday: 'long' })} · 单日视图</strong>
          <span aria-hidden="true" />
        </div> : paginated && <div className="planning-day-page-nav" role="group" aria-label="切换本页日期">
          <button type="button" disabled={dayPage === 0} onClick={() => setDayPage((current) => Math.max(0, current - 1))}>‹ 上一页</button>
          <strong>第 {dayPage + 1}/{pageCount} 页 · 每页 {visibleDays} 天</strong>
          <button type="button" disabled={dayPage >= pageCount - 1} onClick={() => setDayPage((current) => Math.min(pageCount - 1, current + 1))}>下一页 ›</button>
        </div>}
      </div>
    </div>
    <div className="planning-week-legend">
      {mode === 'reservation' ? <>
        <span><i className="reservation" />临时预留</span><span><i className="expected" />待落课</span><span><i className="landed" />已落课</span><span><i className="blocked" />有硬约束</span>
        <small>移入哪张卡，就原地处理哪张卡；触屏轻点，Esc 关闭</small>
      </> : <>
        <span><i className="template" />正式固定</span><span><i className="confirmed" />已确认</span><span><i className="pending" />待定</span><span><i className="unconfirmed" />未确认</span>
      </>}
    </div>
    {entries.length ? <div className="planning-week-scroll draggable-week-scroll" role="region" tabIndex={0} aria-label="筹备周视图，点击日期标题聚焦到单日" {...dragScroll}>
      <div className="planning-week-canvas" style={{ minWidth: 0 }}>
        <div className="planning-week-header" style={{ gridTemplateColumns: gridTemplate }}>
          <div className="planning-week-corner">时间</div>
          {visibleDateSlots.map((date, slotIndex) => date ? <button type="button" key={date} className={date === planning.localDate ? 'planning-week-day-header today' : 'planning-week-day-header'} onClick={() => setFocusDate(date)} aria-label={`聚焦到 ${formatDate(`${date}T12:00:00+08:00`, { month: 'long', day: 'numeric', weekday: 'long' })} 的单日视图`}>
            <span>{weekdays[dates.indexOf(date)]}</span><strong>{Number(date.slice(8, 10))}</strong><small>{byDate.get(date)?.length || 0} 项</small>
          </button> : <div className="planning-week-day-header empty-slot" key={`empty-${slotIndex}`} aria-hidden="true" />)}
        </div>
        <div className="planning-week-body" style={{ gridTemplateColumns: gridTemplate }} onPointerDown={(event) => { if (!(event.target as HTMLElement).closest('.planning-week-block')) setOpenedEntryId(null); }}>
          <div className="planning-week-axis" style={{ height: calendarHeight }}>{hours.map((hour) => <span key={hour} style={{ top: (hour - startHour) * hourHeight }}>{String(hour).padStart(2, '0')}:00</span>)}</div>
          {visibleDateSlots.map((date, slotIndex) => {
            if (!date) return <div className="planning-week-track empty-slot" key={`empty-${slotIndex}`} style={{ height: calendarHeight }} aria-hidden="true" />;
            const placements = placementsByDate.get(date) || [];
            return <div className={date === planning.localDate ? 'planning-week-track today' : 'planning-week-track'} key={date} style={{ height: calendarHeight }}>
              {placements.map(({ item, lane, laneCount }) => {
                const geometry = eventGeometry(item, startHour, endHour, hourHeight);
                if (!geometry) return null;
                const width = 100 / laneCount;
                const isExpected = item.kind === 'reservation' && item.reservationStatus === '预期';
                const isLanded = item.kind === 'reservation' && item.reservationStatus === '已确认';
                const canAct = Boolean(item.reservationId && (isExpected || isLanded));
                const isBusy = Boolean(isExpected && confirmingReservationId === item.reservationId);
                const actionOpen = Boolean(canAct && (openedEntryId === item.id || isBusy));
                const feedback = item.reservationId ? reservationFeedback[item.reservationId] : undefined;
                const confirmDisabled = Boolean(anyReservationBusy || item.blockerText || item.stateClass === 'paused');
                return <article
                  className={`planning-week-block ${item.kind} ${item.stateClass}${canAct ? ' actionable' : ''}${actionOpen ? ' action-open' : ''}`}
                  key={item.id}
                  tabIndex={canAct ? 0 : undefined}
                  role={canAct ? 'button' : undefined}
                  aria-expanded={canAct ? actionOpen : undefined}
                  aria-label={`${item.start_time}-${item.end_time} ${item.student}，${item.studentState}${item.zone ? `，${item.zone}` : ''}${isExpected ? '；移入或点击后可调整时间、确认落课' : isLanded ? '；移入或点击后可调整时间、处理本次不上' : ''}`}
                  onClick={(event) => {
                    if (canAct && !(event.target as HTMLElement).closest('button')) {
                      setOpenedEntryId((current) => current === item.id ? null : item.id);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (!canAct) return;
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setOpenedEntryId((current) => current === item.id ? null : item.id);
                    } else if (event.key === 'Escape') {
                      event.preventDefault();
                      setOpenedEntryId(null);
                    }
                  }}
                  style={{ top: geometry.top, height: geometry.height, left: `calc(${lane * width}% + 4px)`, width: `calc(${width}% - 8px)` }}
                >
                  <strong>{item.start_time} · {item.student}</strong>
                  <span>{item.duration} 分钟 · {item.studentState}{item.zone ? ` · ${item.zone}` : ''}</span>
                  {canAct && <div className="planning-week-inline-action" onClick={(event) => event.stopPropagation()}>
                    <div className="planning-week-inline-buttons">
                      {isExpected ? <>
                        <button type="button" className="secondary" disabled={anyReservationBusy} onClick={() => {
                          setOpenedEntryId(null);
                          onAction({ operation: 'reservation_update', reservationId: item.reservationId, date: item.date, time: item.start_time, duration: item.duration, zone: item.zone || '', note: item.note || '' });
                        }}>调时间</button>
                        <button type="button" className="primary" disabled={confirmDisabled} aria-busy={isBusy} onClick={() => {
                          const pending = onConfirmReservation(item.reservationId!);
                          if (pending && typeof pending.then === "function") {
                            void pending.finally(() => setOpenedEntryId(null));
                          }
                        }}>{isBusy ? '确认中…' : anyReservationBusy ? '处理中…' : item.stateClass === 'paused' ? '学生已暂停' : item.blockerText ? '暂不能确认' : '确认落课'}</button>
                      </> : <>
                        <button type="button" className="secondary" data-ui-role="button" data-ui-variant="secondary" data-ui-action="course-move" onClick={() => onAction({ operation: 'course_move', student: item.student, fromDate: item.date, fromTime: item.start_time, toDate: item.date, toTime: item.start_time, duration: item.duration })}>调时间</button>
                        <button type="button" className="danger" onClick={() => onAction({ operation: 'course_cancel', student: item.student, date: item.date, time: item.start_time })}>本次不上</button>
                        <button type="button" className="quiet-danger" disabled={anyReservationBusy} onClick={() => { const pendingCancel = onCancelReservation(item.reservationId!); if (pendingCancel && typeof pendingCancel.then === 'function') void pendingCancel.finally(() => setOpenedEntryId(null)); }}>取消预留</button>
                      </>}
                    </div>
                    {(item.blockerText || feedback) && <InlineResult ok={Boolean(feedback?.ok)} text={feedback?.text || item.blockerText || ''} />}
                  </div>}
                </article>;
              })}
            </div>;
          })}
        </div>
      </div>
    </div> : <Empty title={mode === 'reservation' ? '这一周没有临时预留' : '这一周没有正式固定课'} text={mode === 'reservation' ? '可以从学生资料或 AI 操作中新增预留。' : '正式固定课来自固定模板，确认后再生成正式课程。'} compact />}
  </section>;
}

function TemplateIssue({ label, count, tone, details }: { label: string; count: number; tone: string; details: string[] }) {
  return <div className={`template-issue ${tone}`}><div><span>{label}</span><strong>{count}</strong></div>{details.length > 0 && <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div>;
}


const WEEK_LABEL: Record<string, string> = { mon: '周一', tue: '周二', wed: '周三', thu: '周四', fri: '周五', sat: '周六', sun: '周日' };

function AffairCard({ item, onInspect, onPrepare, onQuick, onAskAi, onRetry, onRetryPrev, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  onRetryPrev?: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const closed = ['completed', 'cancelled', '已完成', '已取消'].includes(item.status);
  const retrying = retryingId === item.id;
  const kind = item.retry ? 'retry' : item.start_at ? 'timed' : item.deadline_at ? 'deadline' : 'fuzzy';
  const now = Date.now();
  const deadlineTs = item.deadline_at ? new Date(item.deadline_at).getTime() : null;
  const daysLeft = deadlineTs != null ? Math.ceil((deadlineTs - now) / 86_400_000) : null;
  const retryNext = item.retry?.current_candidate_date || null;
  return (
    <article
      className={`affair-card ${kind}${closed ? ' closed' : ''}`}
      data-item-id={item.id}
      tabIndex={0}
      role="button"
      onClick={(event) => { if (!(event.target as HTMLElement).closest('button')) onInspect(item, event.currentTarget); }}
      onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); onInspect(item, event.currentTarget); } }}
    >
      <div className="affair-card-when">
        {kind === 'timed' && item.start_at && <>
          <strong>{formatTime(item.start_at)}</strong>
          <span>{formatDate(item.start_at, { month: 'numeric', day: 'numeric', weekday: 'short' })}</span>
        </>}
        {kind === 'deadline' && item.deadline_at && <>
          <strong>{formatDate(item.deadline_at, { month: 'numeric', day: 'numeric' })}</strong>
          <span>截止{daysLeft != null && !closed ? ` · ${daysLeft >= 0 ? `剩 ${daysLeft} 天` : `已过 ${-daysLeft} 天`}` : ''}</span>
        </>}
        {kind === 'fuzzy' && <>
          <strong className="fuzzy-mark">~</strong>
          <span>{item.window_label || '窗口未定'}</span>
        </>}
        {kind === 'retry' && <>
          <strong className="retry-mark">约</strong>
          <span>{retryNext ? `下次 ${retryNext.slice(5)}` : '等待候选'}</span>
        </>}
      </div>
      <div className="affair-card-main">
        <strong className="affair-card-title">{item.title}</strong>
        <span className="affair-card-meta">
          <Status value={item.status} />
          {item.note ? <em>{item.note}</em> : null}
          {item.next_prompt_at ? <em>{`提醒 ${formatDate(item.next_prompt_at, { month: 'numeric', day: 'numeric' })} ${formatTime(item.next_prompt_at)}`}</em> : null}
        </span>
        {kind === 'retry' && item.retry?.weekdays?.length ? <span className="affair-candidates">
          {(item.retry.weekdays as string[]).map((day) => <i key={day}>{WEEK_LABEL[day] || day}</i>)}
        </span> : null}
        {feedback ? <InlineResult ok={feedback.ok} text={feedback.text} /> : null}
        {feedback?.undo && onRetryPrev ? <button type="button" className="affair-do secondary" disabled={Boolean(retryingId)} onClick={() => void onRetryPrev(item)}>撤销推进</button> : null}
      </div>
      <div className="affair-card-actions">
        {!closed && <>
          <button type="button" className="affair-do primary" disabled={Boolean(retryingId) || feedback?.ok} onClick={() => onQuick?.('affairComplete', item)}>{feedback?.ok ? '已完成' : '完成'}</button>
          {item.retry && onRetry
            ? <button type="button" className="affair-do secondary" disabled={Boolean(retryingId) || Boolean(feedback?.ok)} aria-busy={retrying} onClick={() => void onRetry(item)}>{retrying ? '处理中…' : feedback?.buttonLabel || '没约上'}</button>
            : onAskAi
              ? <button type="button" className="affair-do secondary" data-ui-role="button" data-ui-variant="secondary" data-ui-action="affair-adjust" onClick={() => onAskAi(`把「${item.title}」（${item.id}）调整一下`)}>调时间</button>
              : <button type="button" className="affair-do quiet" onClick={() => onPrepare({ operation: 'affair_cancel', id: item.id, expectedVersion: item.version })}>取消</button>}
        </>}
      </div>
    </article>
  );
}

function AffairsView({ onPrepare, onQuick, onAskAi, onInspect, onRetry, onRetryPrev, retryingId, feedback, refreshKey, observedAt, onOpenDay, localDate }: {
  onPrepare: (preset: ActionPreset) => void;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onInspect: InspectHandler;
  onRetry: (item: TimelineItem) => Promise<void>;
  onRetryPrev?: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback: Record<string, AffairFeedback>;
  refreshKey: number;
  observedAt: string;
  onOpenDay: (date: string, items: TimelineItem[], trigger?: HTMLElement | null) => void;
  localDate?: string;
}) {
  const [affairsFilter, setAffairsFilter] = useState<'pending' | 'scheduled' | 'closed'>('pending');
  const [affairsView, setAffairsView] = useState<'list' | 'calendar'>('list');
  // 固定本月视图（含已完成/已取消留痕），与总览的时间范围解耦：这个月做了什么一眼可见。
  const [state, setState] = useState<{ affairs: TimelineItem[]; pending: TimelineItem[]; month: string } | null>(() => readWorkbenchCache<{ affairs: TimelineItem[]; pending: TimelineItem[]; month: string }>('affairs-month'));
  const [error, setError] = useState('');
  const load = useCallback((fresh: boolean) => {
    void api<any>('api/affairs-month' + (fresh ? '?fresh=1' : '')).then((res) => {
      if (!res || !Array.isArray(res.affairs) || !Array.isArray(res.pending)) return;
      const next = {
        affairs: (res.affairs as TimelineItem[]).map((item) => ({ ...item, domain: 'affair' as const })),
        pending: (res.pending as TimelineItem[]).map((item) => ({ ...item, domain: 'affair' as const })),
        month: String(res.month || ''),
      };
      setState(next);
      writeWorkbenchCache('affairs-month', next);
      setError('');
    }).catch(() => {});
  }, []);
  useEffect(() => { void load(!state); }, [load]);
  useEffect(() => {
    if (refreshKey > 0) void load(true);
  }, [refreshKey]);
  useEffect(() => {
    if (observedAt && state) void load(false);
  }, [observedAt, load]);

  const pending = state?.pending ?? [];
  const affairs = state?.affairs ?? [];
  const closedStatuses = new Set(['completed', 'cancelled', '已完成', '已取消']);
  const scheduledAffairs = affairs
    .filter((item) => !closedStatuses.has(item.status))
    .sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')));
  const closedAffairs = affairs
    .filter((item) => closedStatuses.has(item.status))
    .sort((a, b) => String(itemDate(b) || '').localeCompare(String(itemDate(a) || '')));
  const doneCount = closedAffairs.filter((item) => !['cancelled', '已取消'].includes(item.status)).length;
  const monthRange = state?.month ? `${state.month}-01..${state.month}-01` : '';
  const lists = { pending, scheduled: scheduledAffairs, closed: closedAffairs };
  const visible = lists[affairsFilter];
  const emptyCopy = {
    pending: { title: '没有待处理事务', text: '当前队列没有积压。' },
    scheduled: { title: '暂无已安排事务', text: '本月没有进行中的事务。' },
    closed: { title: '暂无完成记录', text: '结束后的事务会归档到这里。' },
  }[affairsFilter];

  function handleDayOpen(date: string, trigger?: HTMLElement | null) {
    const dayItems = affairs.filter((item) => itemDateKey(item) === date);
    onOpenDay(date, dayItems, trigger);
  }

  return (
    <div className="view-stack">
      <PageTitle eyebrow={`事务 · 本月 ${state?.month?.slice(5) || ''}`} title="办事队列" description={`这个月办了 ${doneCount} 件、取消 ${closedAffairs.length - doneCount} 件，进行中 ${scheduledAffairs.length} 件。点日历上的任何一天，看那天的安排。`} />
      {error && <Notice tone="error" title="事务数据读取失败" text={error} />}
      {!state && <LoadingState />}
      {state && <>
        <div className="affairs-toolbar">
          <WorkbenchNav
            label="事务状态"
            value={affairsFilter}
            onChange={(next) => setAffairsFilter(next as typeof affairsFilter)}
            items={[
              { id: 'pending', label: '待处理', count: pending.length },
              { id: 'scheduled', label: '已安排', count: scheduledAffairs.length },
              { id: 'closed', label: '已完成·已取消', count: closedAffairs.length },
            ]}
          />
          <WorkbenchNav
            label="视图切换"
            value={affairsView}
            onChange={(next) => setAffairsView(next as typeof affairsView)}
            items={[{ id: 'list', label: '列表' }, { id: 'calendar', label: '日历' }]}
          />
        </div>

        {affairsView === 'calendar'
          ? <MonthCalendar items={affairs} range={monthRange} localDate={localDate ?? state.month + '-01'} onOpenDay={handleDayOpen} />
          : (
            <div>
              {visible.length ? visible.map((item) => <AffairCard key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onQuick={onQuick} onAskAi={onAskAi} onRetry={onRetry} onRetryPrev={onRetryPrev} retryingId={retryingId} feedback={feedback[item.id]} />) : <Empty title={emptyCopy.title} text={emptyCopy.text} />}
            </div>
          )}
      </>}
    </div>
  );
}

function ActionsView({ pending, students, preset, aiDraft, preview, busy, onPreview, onAiPreview, onCommit, onCommitBatch, onClear, onClose }: {
  pending: TimelineItem[];
  students: Student[];
  preset: ActionPreset | null;
  aiDraft: { text: string; nonce: number };
  preview: PreviewResponse | null;
  busy: boolean;
  onPreview: (input: Record<string, unknown>) => Promise<void>;
  onAiPreview: (preview: PreviewResponse) => void;
  onCommit: () => Promise<void>;
  onCommitBatch: () => Promise<void>;
  onClear: () => void;
  onClose: () => void;
}) {
  const [kind, setKind] = useState(preset?.operation || 'course_move');
  const [affairKind, setAffairKind] = useState(preset?.affairKind || 'timed');
  const [courseAddStudent, setCourseAddStudent] = useState(preset?.student || '');
  const [courseAddDuration, setCourseAddDuration] = useState<number | string>(preset?.duration || '');
  const [planMoves, setPlanMoves] = useState<ActionPreset[]>([
    { operation: 'course_move' },
    { operation: 'course_move' },
  ]);

  useEffect(() => {
    if (preset?.operation) setKind(preset.operation);
    if (preset?.affairKind) setAffairKind(preset.affairKind);
    if (preset?.student) setCourseAddStudent(preset.student);
    if (preset?.duration) setCourseAddDuration(preset.duration);
  }, [preset]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const input: Record<string, unknown> = { operation: kind };
    for (const [key, value] of form.entries()) {
      if (key !== 'operation' && String(value).trim()) input[key] = value;
    }
    if (input.duration) input.duration = Number(input.duration);
    if (input.minutes !== undefined) input.minutes = Number(input.minutes);
    if (input.expectedVersion) input.expectedVersion = Number(input.expectedVersion);
    if (kind === 'course_plan') {
      input.moves = planMoves.map((move) => ({ ...move, duration: move.duration ? Number(move.duration) : undefined }));
    }
    void onPreview(input);
  }

  function updatePlanMove(index: number, field: string, value: string | number) {
    setPlanMoves((current) => current.map((move, moveIndex) => moveIndex === index ? { ...move, [field]: value } : move));
  }

  return (
    <div className={preset ? 'view-stack action-stack preset-open' : 'view-stack action-stack'}>
      <AiActionWorkspace initialDraft={aiDraft} preview={preview} busy={busy} onPreview={onAiPreview} onCommit={onCommit} onCommitBatch={onCommitBatch} onClear={onClear} onClose={onClose} />
      <details className="manual-operations" open={Boolean(preset)}>
        <summary><strong>精确表单</strong><span>需要手动指定字段时再打开</span></summary>
        <section className="action-layout">
        <form className="panel operation-form" onSubmit={submit} key={JSON.stringify(preset || { operation: kind })}>
          <label className="field full">
            <span>操作类型</span>
            <select name="operation" value={kind} onChange={(event) => { setKind(event.target.value); onClear(); }}>
              <option value="course_move">调课</option>
              <option value="course_add">新建课程</option>
              <option value="course_cancel">取消课程</option>
              <option value="reservation_add">预留课程（未确认）</option>
              <option value="reservation_update">修改课程预留</option>
              <option value="reservation_confirm">确认预留为正式课</option>
              <option value="reservation_cancel">取消课程预留</option>
              <option value="zone_set">设置学生片区</option>
              <option value="availability_set">设置可用时间</option>
              <option value="availability_clear">清空某日可用时间</option>
              <option value="commute_set">记录学生间通勤</option>
              <option value="quarantine_overdue">过期课程转人工复核</option>
              <option value="course_review_resolve">复核历史课程</option>
              <option value="course_day_complete">完成当日课程</option>
              <option value="course_plan">多项调课计划</option>
              <option value="affair_create">新建事务</option>
              <option value="affair_update">修改事务</option>
              <option value="affair_complete">完成事务</option>
              <option value="affair_retry_next">推进重试日期</option>
              <option value="affair_retry_prev">恢复上一候选日</option>
              <option value="affair_cancel">取消事务</option>
              <option value="calendar_sync">同步飞书日历</option>
            </select>
          </label>

          {kind === 'course_move' && <>
            <Field name="student" label="学生" placeholder="例如：叶梓程" defaultValue={preset?.student} required />
            <Field name="duration" label="新时长（可选）" type="number" placeholder="分钟" defaultValue={preset?.duration} />
            <Field name="fromDate" label="原日期" type="date" defaultValue={preset?.fromDate} required />
            <Field name="fromTime" label="原时间" type="time" defaultValue={preset?.fromTime} required />
            <Field name="toDate" label="新日期" type="date" defaultValue={preset?.toDate} required />
            <Field name="toTime" label="新时间" type="time" defaultValue={preset?.toTime} required />
            <label className="exception-toggle full"><input name="overrideAvailability" type="checkbox" value="true" defaultChecked={Boolean(preset?.overrideAvailability)} /><span><strong>这是已明确的单次时间</strong><small>只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。</small></span></label>
          </>}

          {kind === 'course_cancel' && <>
            <Field name="student" label="学生" placeholder="例如：董同学" defaultValue={preset?.student} required />
            <Field name="date" label="课程日期" type="date" defaultValue={preset?.date} required />
            <Field name="time" label="课程时间" type="time" defaultValue={preset?.time} required />
            <Field name="reason" label="取消原因（可选）" defaultValue={preset?.reason} />
          </>}

          {kind === 'course_add' && <>
            <label className="field full">
              <span>学生</span>
              <select
                name="student"
                required
                value={courseAddStudent}
                onChange={(event) => {
                  const student = students.find((item) => item.name === event.target.value);
                  setCourseAddStudent(event.target.value);
                  if (student) setCourseAddDuration(student.default_duration);
                }}
              >
                <option value="" disabled>选择在读学生</option>
                {students.filter((item) => item.status === '在读').map((item) => <option key={item.name} value={item.name}>{item.name} · {item.default_duration} 分钟</option>)}
              </select>
            </label>
            <Field name="date" label="日期" type="date" defaultValue={preset?.date} required />
            <Field name="time" label="时间" type="time" defaultValue={preset?.time} required />
            <label className="field">
              <span>时长</span>
              <input name="duration" type="number" min="1" max="480" value={courseAddDuration} onChange={(event) => setCourseAddDuration(event.target.value)} required />
            </label>
            <Field name="note" label="备注（可选）" defaultValue={preset?.note} />
            <label className="exception-toggle full"><input name="overrideAvailability" type="checkbox" value="true" defaultChecked={Boolean(preset?.overrideAvailability)} /><span><strong>这是已明确的单次时间</strong><small>只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。</small></span></label>
          </>}

          {kind === 'reservation_add' && <>
            <label className="field full">
              <span>学生</span>
              <select
                name="student"
                required
                value={courseAddStudent}
                onChange={(event) => {
                  const student = students.find((item) => item.name === event.target.value);
                  setCourseAddStudent(event.target.value);
                  if (student) setCourseAddDuration(student.default_duration);
                }}
              >
                <option value="" disabled>选择在读学生</option>
                {students.filter((item) => item.status === '在读').map((item) => <option key={item.name} value={item.name}>{item.name} · {item.default_duration} 分钟</option>)}
              </select>
            </label>
            <Field name="date" label="预留日期" type="date" defaultValue={preset?.date} required />
            <Field name="time" label="预留时间" type="time" defaultValue={preset?.time} required />
            <label className="field">
              <span>时长</span>
              <input name="duration" type="number" min="1" max="480" value={courseAddDuration} onChange={(event) => setCourseAddDuration(event.target.value)} />
            </label>
            <Field name="zone" label="片区（可选）" defaultValue={preset?.zone} />
            <Field name="note" label="备注（可选）" defaultValue={preset?.note} />
            <div className="field-note full">预留不会进入正式课程事件；确认后才转成正式课。</div>
          </>}

          {kind === 'reservation_update' && <>
            <Field name="reservationId" label="预留ID" placeholder="res_…" defaultValue={preset?.reservationId || preset?.id} required />
            <Field name="date" label="预留日期" type="date" defaultValue={preset?.date} required />
            <Field name="time" label="预留时间" type="time" defaultValue={preset?.time} required />
            <Field name="duration" label="时长" type="number" defaultValue={preset?.duration} required />
            <Field name="zone" label="片区（可选）" defaultValue={preset?.zone} />
            <Field name="note" label="备注（可选）" defaultValue={preset?.note} />
          </>}

          {['reservation_confirm', 'reservation_cancel'].includes(kind) && <>
            <Field name="reservationId" label="预留ID" placeholder="res_…" defaultValue={preset?.reservationId || preset?.id} required />
            <div className="field-note full">确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。</div>
          </>}

          {kind === 'zone_set' && <>
            <Field name="student" label="学生" defaultValue={preset?.student} required />
            <Field name="zone" label="片区" placeholder="例如：城西" defaultValue={preset?.zone === '未分区' ? '' : preset?.zone} required />
            <Field name="boundaryZones" label="相邻片区（可选）" placeholder="多个片区用顿号分隔" defaultValue={preset?.boundaryZones} />
            <div className="field-note full">先预演，确认后写入学生片区；不会自动改动课程。</div>
          </>}

          {kind === 'availability_set' && <>
            <Field name="student" label="学生" defaultValue={preset?.student} required />
            <label className="field">
              <span>星期</span>
              <select name="weekday" defaultValue={preset?.weekday || ''} required>
                <option value="" disabled>选择星期</option>
                {['周一','周二','周三','周四','周五','周六','周日'].map((day) => <option key={day} value={day}>{day}</option>)}
              </select>
            </label>
            <Field name="windows" label="可用时间" placeholder="14:00-16:00、19:00-21:00" defaultValue={preset?.windows} required />
            <div className="field-note full">同一星期的原有窗口会被这次设置整体替换。</div>
          </>}

          {kind === 'availability_clear' && <>
            <Field name="student" label="学生" defaultValue={preset?.student} required />
            <label className="field">
              <span>星期</span>
              <select name="weekday" defaultValue={preset?.weekday || ''} required>
                <option value="" disabled>选择星期</option>
                {['周一','周二','周三','周四','周五','周六','周日'].map((day) => <option key={day} value={day}>{day}</option>)}
              </select>
            </label>
          </>}

          {kind === 'commute_set' && <>
            <Field name="fromStudent" label="出发学生" defaultValue={preset?.fromStudent} required />
            <Field name="toStudent" label="到达学生" defaultValue={preset?.toStudent} required />
            <Field name="minutes" label="通勤分钟" type="number" defaultValue={preset?.minutes} required />
            <Field name="transport" label="交通方式" defaultValue={preset?.transport || 'driving'} required />
            <Field name="note" label="备注（可选）" defaultValue={preset?.note} />
            <div className="field-note full">通勤是有方向的；反向路线需要单独记录。</div>
          </>}

          {kind === 'quarantine_overdue' && <div className="field-note full">只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。</div>}

          {kind === 'course_review_resolve' && <>
            <Field name="courseId" label="课程ID" type="number" defaultValue={preset?.courseId || preset?.id} required />
            <label className="field">
              <span>复核结果</span>
              <select name="resolution" defaultValue={preset?.resolution || 'done'}>
                <option value="done">已完成</option>
                <option value="cancelled">未上课 / 取消</option>
              </select>
            </label>
          </>}

          {kind === 'course_day_complete' && <>
            <Field name="date" label="完成日期" type="date" defaultValue={preset?.date} required />
            <div className="field-note full">预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。</div>
          </>}

          {kind === 'course_plan' && <div className="plan-builder full">
            <div className="plan-builder-head">
              <div><strong>批量调课</strong><span>所有操作会顺序预演并原子提交</span></div>
              <button type="button" className="row-action-button" onClick={() => setPlanMoves((current) => [...current, { operation: 'course_move' }])}>添加一项</button>
            </div>
            {planMoves.map((move, index) => (
              <div className="plan-move-row" key={index}>
                <span className="plan-index">{index + 1}</span>
                <select value={move.student || ''} onChange={(event) => {
                  const student = students.find((item) => item.name === event.target.value);
                  updatePlanMove(index, 'student', event.target.value);
                  if (student) updatePlanMove(index, 'duration', student.default_duration);
                }} required>
                  <option value="" disabled>学生</option>
                  {students.filter((item) => item.status === '在读').map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
                </select>
                <input type="date" value={move.fromDate || ''} onChange={(event) => updatePlanMove(index, 'fromDate', event.target.value)} required />
                <input type="time" value={move.fromTime || ''} onChange={(event) => updatePlanMove(index, 'fromTime', event.target.value)} required />
                <span className="plan-arrow">→</span>
                <input type="date" value={move.toDate || ''} onChange={(event) => updatePlanMove(index, 'toDate', event.target.value)} required />
                <input type="time" value={move.toTime || ''} onChange={(event) => updatePlanMove(index, 'toTime', event.target.value)} required />
                <input className="duration-input" type="number" min="1" max="480" value={move.duration || ''} onChange={(event) => updatePlanMove(index, 'duration', event.target.value)} placeholder="分钟" />
                <button type="button" className="plan-remove" disabled={planMoves.length <= 2} onClick={() => setPlanMoves((current) => current.filter((_, moveIndex) => moveIndex !== index))}>×</button>
              </div>
            ))}
          </div>}

          {kind === 'affair_create' && <>
            <Field name="title" label="事务标题" defaultValue={preset?.title} required />
            <label className="field">
              <span>类型</span>
              <select name="affairKind" value={affairKind} onChange={(event) => setAffairKind(event.target.value)}>
                <option value="timed">定时活动</option>
                <option value="deadline">限期任务</option>
                <option value="fuzzy">时间窗口</option>
                <option value="retry">预约重试</option>
              </select>
            </label>
            {affairKind === 'timed' && <>
              <Field name="startDate" label="开始日期" type="date" required />
              <Field name="startTime" label="开始时间" type="time" required />
              <Field name="duration" label="预计时长（可选）" type="number" placeholder="分钟" />
            </>}
            {affairKind === 'deadline' && <>
              <Field name="deadlineDate" label="截止日期" type="date" required />
              <Field name="deadlineTime" label="截止时间" type="time" required />
            </>}
            {affairKind === 'fuzzy' && <>
              <Field name="windowStart" label="窗口开始" type="date" required />
              <Field name="windowEnd" label="窗口结束（可选）" type="date" />
            </>}
            {affairKind === 'retry' && <>
              <Field name="candidateDates" label="候选日期（逗号分隔）" placeholder="2026-08-24,2026-08-26" />
              <Field name="weekdays" label="或按星期" placeholder="mon,wed" />
              <Field name="startWeek" label="起始周日期" type="date" />
              <Field name="remindAt" label="提醒时间" type="time" defaultValue="19:30" />
            </>}
            <label className="field">
              <span>优先级</span>
              <select name="priority" defaultValue="normal">
                <option value="low">低</option>
                <option value="normal">普通</option>
                <option value="high">高</option>
                <option value="urgent">紧急</option>
              </select>
            </label>
            <label className="exception-toggle full"><input name="followUp" type="checkbox" value="daily" /><span><strong>办成前每日跟进</strong><small>每天按提醒时间推送，直到约上或完成；约上（已排期）后自动静默。</small></span></label>
          </>}

          {kind === 'affair_update' && <>
            <label className="field full">
              <span>事务</span>
              <select name="id" required defaultValue={preset?.id || ''}>
                <option value="" disabled>选择待处理事务</option>
                {pending.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.id}</option>)}
              </select>
            </label>
            <Field name="title" label="新标题（可选）" defaultValue={preset?.title} />
            <Field name="startDate" label="新开始日期（可选）" type="date" />
            <Field name="startTime" label="新开始时间（可选）" type="time" />
            <label className="field">
              <span>优先级（可选）</span>
              <select name="priority" defaultValue="">
                <option value="">不变</option>
                <option value="low">低</option>
                <option value="normal">普通</option>
                <option value="high">高</option>
                <option value="urgent">紧急</option>
              </select>
            </label>
            <Field name="note" label="新备注（可选）" />
            <label className="field full">
              <span>每日跟进</span>
              <select name="followUp" defaultValue="">
                <option value="">不变</option>
                <option value="daily">办成前每日跟进</option>
                <option value="none">停止跟进</option>
              </select>
            </label>
            <div className="field-note full">修改会校验与其他事务和课程的冲突；至少填写一个要改的字段。retry 事务的候选日请用“推进重试日期”，不要在这里改时间。</div>
          </>}

          {kind === 'affair_retry_prev' && <>
            <label className="field full">
              <span>事务</span>
              <select name="id" required defaultValue={preset?.id || ''}>
                <option value="" disabled>选择待处理事务</option>
                {pending.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.id}</option>)}
              </select>
            </label>
            <Field name="expectedVersion" label="当前版本（可选）" type="number" placeholder="用于并发保护" defaultValue={preset?.expectedVersion} />
            <div className="field-note full">撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。</div>
          </>}

          {['affair_complete', 'affair_retry_next', 'affair_cancel'].includes(kind) && <>
            <label className="field full">
              <span>事务</span>
              <select name="id" required defaultValue={preset?.id || ''}>
                <option value="" disabled>选择待处理事务</option>
                {pending.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.id}</option>)}
              </select>
            </label>
            {kind === 'affair_retry_next' && <Field name="expectedVersion" label="当前版本（可选）" type="number" placeholder="用于并发保护" defaultValue={preset?.expectedVersion} />}
          </>}

          {kind === 'calendar_sync' && <Field name="week" label="所在周日期（可选）" type="date" defaultValue={preset?.week} />}

          <div className="form-note full">
            <strong>安全边界</strong>
            <span>调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。</span>
          </div>
          <button className="primary-button full" type="submit" disabled={busy}>{busy ? '正在处理…' : '生成预演'}</button>
        </form>

        <div className="panel preview-panel">
          <PanelHeading title="执行预览" meta={preview?.token ? `令牌 ${preview.token.slice(0, 8)}…` : '等待操作'} />
          {!preview && <Empty title="尚未预演" text="填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" />}
          {preview && (
            <div className="preview-body">
              <div className={preview.canCommit ? 'preview-status pass' : preview.ok ? 'preview-status neutral' : 'preview-status fail'}>
                <i />
                <div>
                  <strong>{preview.canCommit ? '预演通过' : preview.ok ? '执行结果' : '预演未通过'}</strong>
                  <span>{preview.summary || preview.error || '无摘要'}</span>
                </div>
              </div>
              <pre>{preview.message || preview.error || JSON.stringify(preview.result, null, 2)}</pre>
              {preview.result && <details className="evidence-details"><summary>查看执行证据</summary><pre>{JSON.stringify(preview.result, null, 2)}</pre></details>}
              {preview.canCommit && (
                <div className="commit-box">
                  <p>提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。</p>
                  <button type="button" className="danger-button" onClick={() => void onCommit()} disabled={busy}>{busy ? '正在提交…' : '确认执行此预演'}</button>
                </div>
              )}
              <ActionOutcomeActions preview={preview} onClose={onClose} />
            </div>
          )}
        </div>
        </section>
      </details>
    </div>
  );
}


const OPERATION_LABEL: Record<string, string> = {
  course_add: '新建课程', course_move: '调课', course_cancel: '取消课程', course_plan: '批量调整', course_day_complete: '今日课程收口',
  reservation_add: '预留课程', reservation_update: '修改预留', reservation_confirm: '确认落课', reservation_cancel: '取消预留',
  zone_set: '设置片区', availability_set: '设置可用时间', availability_clear: '清空可用时间', commute_set: '登记通勤',
  quarantine_overdue: '清理过期课', course_review_resolve: '复核处理',
  affair_create: '新建事务', affair_complete: '完成事务', affair_retry_next: '没约上·推进', affair_cancel: '取消事务',
};

const FIELD_LABEL: Record<string, string> = {
  student: '学生', name: '姓名', date: '日期', time: '时间', duration: '时长(分)', note: '备注', reason: '原因',
  fromDate: '原日期', fromTime: '原时间', toDate: '新日期', toTime: '新时间', id: 'ID', title: '标题',
  affairKind: '事务类型', startDate: '开始日期', deadlineDate: '截止日期', windowStart: '窗口起点', windowEnd: '窗口终点',
  candidateDates: '候选日期', weekdays: '星期', startWeek: '起始周', remindAt: '提醒时刻', reservationId: '预留', expectedVersion: '版本',
};

function PreviewSummary({ preview, busy, onCommit, onCommitBatch, onClose }: {
  preview: PreviewResponse;
  busy: boolean;
  onCommit: () => Promise<void>;
  onCommitBatch?: () => Promise<void>;
  onClose: () => void;
}) {
  const operation = preview.operation || '';
  const input = (preview.input as Record<string, unknown> | undefined) || {};
  const rows = Object.entries(input).filter(([key, value]) => value != null && value !== '' && !key.startsWith('_'));
  const affected = (preview.result as any)?.affected_dates as string[] | undefined;
  const batchItems = preview.batchItems ?? [];
  if (batchItems.length) {
    return (
      <div className="preview-body">
        <div className={preview.committed ? (preview.ok ? 'preview-status pass' : 'preview-status fail') : 'preview-status pass'}>
          <i />
          <div>
            <strong>{preview.committed ? (preview.ok ? '批量执行完成' : '批量执行有失败') : `批量方案 · ${batchItems.length} 项`}</strong>
            <span>{preview.summary || preview.message}</span>
          </div>
        </div>
        <div className="batch-list">
          {batchItems.map((item, index) => {
            const flag = preview.committed
              ? { text: item.resultOk ? '已执行' : '失败', cls: item.resultOk ? 'ok' : 'error' }
              : { text: item.canCommit ? '可执行' : '未通过', cls: item.canCommit ? 'ok' : 'muted' };
            return <div key={item.token} className="batch-item">
              <span className="batch-index">{index + 1}</span>
              <div className="batch-main">
                <strong>{OPERATION_LABEL[item.operation] || item.operation}</strong>
                <span>{item.summary}</span>
                {item.message && <small>{item.message}</small>}
              </div>
              <span className={`batch-flag ${flag.cls}`}>{flag.text}</span>
            </div>;
          })}
        </div>
        <div className="action-outcome-actions">
          {!preview.committed && <button type="button" className="primary-button" disabled={busy || !batchItems.some((item) => item.canCommit)} onClick={() => void (onCommitBatch?.() ?? Promise.resolve())}>{busy ? '正在提交…' : `全部执行（${batchItems.filter((item) => item.canCommit).length} 项）`}</button>}
          {preview.committed && <button type="button" className="primary-button" onClick={onClose}>完成并返回</button>}
        </div>
      </div>
    );
  }
  return (
    <div className="preview-body">
      <div className={preview.canCommit ? 'preview-status pass' : preview.ok ? 'preview-status neutral' : 'preview-status fail'}>
        <i /><div><strong>{preview.canCommit ? '方案预演通过' : preview.ok ? '执行结果' : '方案未通过'}</strong><span>{preview.summary || preview.error}</span></div>
      </div>
      <div className="preview-summary">
        {operation && <span className="preview-op-badge">{OPERATION_LABEL[operation] || operation}</span>}
        {rows.length > 0 && <dl className="preview-fields">
          {rows.map(([key, value]) => <div key={key}><dt>{FIELD_LABEL[key] || key}</dt><dd>{String(value)}</dd></div>)}
        </dl>}
        {affected && affected.length > 0 && <div className="preview-affected">受影响日期：{affected.map((date) => <span key={date}>{date.slice(5)}</span>)}</div>}
      </div>
      {preview.message && preview.message !== preview.summary && <pre className="preview-message">{preview.message}</pre>}
      {preview.result && <details className="evidence-details"><summary>查看执行证据</summary><pre>{JSON.stringify(preview.result, null, 2)}</pre></details>}
      <div className="action-outcome-actions">
        {preview.canCommit && <button type="button" className="primary-button" onClick={() => void onCommit()} disabled={busy}>{busy ? '正在提交…' : '确认执行此方案'}</button>}
        <ActionOutcomeActions preview={preview} onClose={onClose} />
      </div>
    </div>
  );
}

function AiActionWorkspace({ initialDraft, preview, busy, onPreview, onCommit, onCommitBatch, onClear, onClose }: {
  initialDraft: { text: string; nonce: number };
  preview: PreviewResponse | null;
  busy: boolean;
  onPreview: (preview: PreviewResponse) => void;
  onCommit: () => Promise<void>;
  onCommitBatch: () => Promise<void>;
  onClear: () => void;
  onClose: () => void;
}) {
  const greeting: AiMessage = { role: 'assistant', text: '直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。' };
  const examples = [
    '把董同学周日的课调到下周四晚上七点',
    '给叶梓程下周三下午预留一节 45 分钟的课',
    '取消董同学周日 13:40 的课，家长请假',
    '周三晚上八点提醒我抢补牙复查号',
  ];
  const [messages, setMessages] = useState<AiMessage[]>([greeting]);
  const [draft, setDraft] = useState('');
  const [thinking, setThinking] = useState(false);
  const [aiError, setAiError] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const speechSupported = typeof window !== 'undefined' && Boolean((window as any).webkitSpeechRecognition || (window as any).SpeechRecognition);

  function toggleMic() {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SR) return;
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }
    const recognition = new SR();
    recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results as ArrayLike<any>).map((result: any) => result[0].transcript).join('').trim();
      if (transcript) setDraft((current) => (current ? `${current} ` : '') + transcript);
    };
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }
  const aiRequestGateRef = useRef(createRequestGate());

  useEffect(() => () => aiRequestGateRef.current.invalidate(), []);

  useEffect(() => {
    if (!initialDraft.nonce) return;
    aiRequestGateRef.current.invalidate();
    setThinking(false);
    setDraft(initialDraft.text);
  }, [initialDraft.nonce, initialDraft.text]);

  function resetConversation() {
    aiRequestGateRef.current.invalidate();
    setThinking(false);
    setMessages([greeting]);
    setDraft('');
    setAiError('');
    setOptions([]);
    onClear();
  }

  async function sendMessage(explicit?: string) {
    const message = (explicit ?? draft).trim();
    if (!message || thinking) return;
    const requestId = aiRequestGateRef.current.begin();
    const history = messages.slice(-10);
    setMessages((current) => [...current, { role: 'user', text: message }]);
    setDraft('');
    setOptions([]);
    setThinking(true);
    setAiError('');
    onClear();
    try {
      const data = await api<AiInterpretResponse>('api/ai/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
      });
      if (!aiRequestGateRef.current.isCurrent(requestId)) return;
      if (!data.ok) throw new Error(data.error || 'AI 没有生成方案');
      setOptions(data.status === 'need_clarification' ? (data.options ?? []) : []);
      setMessages((current) => [...current, { role: 'assistant', text: data.reply || '方案已经生成，请检查右侧预演。' }]);
      if (data.status === 'ready' && data.batch && data.previews?.length) {
        onPreview({
          ok: true,
          batch: true,
          summary: data.reply,
          message: data.reply,
          batchItems: data.previews.map((item) => ({ operation: item.operation, token: item.token, summary: item.summary, canCommit: item.canCommit, message: item.message })),
        });
      } else if (data.status === 'ready' && data.preview) {
        onPreview({
          ok: true,
          token: data.preview.token,
          expiresAt: data.preview.expiresAt,
          summary: data.preview.summary,
          canCommit: data.preview.canCommit,
          message: data.preview.message,
          result: data.preview.result,
          operation: data.operation,
          input: data.input,
        });
      }
    } catch (error: any) {
      if (!aiRequestGateRef.current.isCurrent(requestId)) return;
      const messageText = error.message || 'AI 操作失败';
      setAiError(messageText);
      setMessages((current) => [...current, { role: 'assistant', text: `这次没有生成预演：${messageText}` }]);
    } finally {
      if (aiRequestGateRef.current.isCurrent(requestId)) setThinking(false);
    }
  }

  return (
    <section className="panel ai-workspace" aria-label="AI 操作台">
      <header className="ai-workspace-head">
        <div><p className="eyebrow">自然语言操作台</p><h2>说一句就行。</h2><span>排课、调课、取消、预留和事务都可以直接说。</span></div>
        <button className="row-action-button" type="button" onClick={resetConversation} disabled={thinking}>清空对话</button>
      </header>
      <div className="ai-example-row" aria-label="操作示例">
        {examples.map((example) => <button key={example} type="button" onClick={() => setDraft(example)}>{example}</button>)}
      </div>
      <div className="ai-workspace-grid">
        <div className="ai-conversation-column">
          <div className="ai-thread embedded" aria-live="polite">
            {messages.map((message, index) => <div key={index} className={`ai-bubble ${message.role}`}>{message.text}</div>)}
            {thinking && <div className="ai-bubble assistant thinking">正在读取课表、预留、可用时间和通勤信息…</div>}
          </div>
          {aiError && <Notice tone="error" title="没有生成方案" text={aiError} />}
          {options.length > 0 && <div className="ai-option-row" role="group" aria-label="快捷回答">
            {options.map((option) => <button key={option} type="button" onClick={() => { void sendMessage(option); }}>{option}</button>)}
          </div>}
          <div className="ai-composer workspace-composer">
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  void sendMessage();
                }
              }}
              placeholder="例如：把董同学这周日的课调到下周四晚上七点"
              rows={3}
            />
            {speechSupported && <button type="button" className={listening ? 'ai-mic listening' : 'ai-mic'} onClick={toggleMic} aria-label={listening ? '停止语音输入' : '语音输入'} title="语音输入">{listening ? '● 录音中' : '🎙'}</button>}
            <button type="button" className="primary-button" onClick={() => void sendMessage()} disabled={!draft.trim() || thinking}>{thinking ? '正在规划…' : '让 AI 处理'}</button>
          </div>
          <p className="ai-footnote">Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。</p>
        </div>
        <div className="ai-result-column">
          <PanelHeading title="AI 预演" meta={preview?.token ? `令牌 ${preview.token.slice(0, 8)}…` : '等待指令'} />
          {!preview && <Empty title="等你说一句" text="我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" />}
          {preview && <PreviewSummary preview={preview} busy={busy} onCommit={onCommit} onCommitBatch={onCommitBatch} onClose={onClose} />}
        </div>
      </div>
    </section>
  );
}

function ContextDrawerContent({ view, dashboard }: { view: ContextView; dashboard: Dashboard }) {
  if (view.kind === 'system') return <SystemView dashboard={dashboard} embedded readOnly />;
  const items = view.kind === 'day'
    ? (view.items
      ? [...view.items].sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')))
      : dashboard.items.filter((item) => itemDateKey(item) === view.date).sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || ''))))
    : [view.item];
  if (!items.length) return <Empty title="当天没有安排" text="当前时间范围内没有课程或事务。" />;
  return <div className={view.kind === 'day' ? 'context-item-list context-day-list' : 'context-item-list'}>
    {items.map((item) => <ContextItemCard key={item.id} item={item} />)}
  </div>;
}

function ContextItemCard({ item }: { item: TimelineItem }) {
  const date = itemDate(item);
  return <section className={`context-item-card ${itemStateClass(item)}${isTemporaryItem(item) ? ' temporary' : ''}`} data-item-id={item.id}>
    <header>
      <div><span className={`context-domain ${item.domain}`}>{item.domain === 'course' ? '课程' : '事务'}</span><time>{date ? `${formatDate(date, { month: 'long', day: 'numeric', weekday: 'short' })} ${formatTime(date)}` : '时间待定'}</time></div>
      <Status value={item.status} />
    </header>
    <h3>{item.title}</h3>
    <p>{item.domain === 'course' ? `${item.duration || '—'} 分钟 · ${item.note || '常规课程'}` : item.note || item.window_label || '暂无补充说明'}</p>
  </section>;
}

function VersionPanel() {
  const [state, setState] = useState<{ loading: boolean; data?: { ok?: boolean; versions?: { source?: string | null; installed?: string | null; installsRecord?: string | null; dev?: string | null }; devShadowing?: boolean; note?: string }; error?: string }>({ loading: true });
  const load = useCallback(() => {
    setState({ loading: true });
    api<{ ok?: boolean; versions?: { source?: string | null; installed?: string | null; installsRecord?: string | null; dev?: string | null }; devShadowing?: boolean; note?: string }>('/api/versions')
      .then((data) => setState({ loading: false, data }))
      .catch((error: Error) => setState({ loading: false, error: error.message }));
  }, []);
  useEffect(() => { load(); }, [load]);
  const v = state.data?.versions;
  return (
    <div className="panel wide system-list">
      <PanelHeading title="版本与运行态" />
      {state.loading ? <p className="muted-note">正在读取版本…</p> : state.error ? <Check label="版本读取" ok={false} detail={state.error} /> : (
        <>
          <div className="version-row"><span>源码版本</span><code>{v?.source ?? '—'}</code></div>
          <div className="version-row"><span>正式安装版</span><code>{v?.installed ?? '—'}</code></div>
          <div className="version-row"><span>安装记录</span><code>{v?.installsRecord ?? '—'}</code></div>
          <div className="version-row"><span>开发槽</span><code>{v?.dev ?? '—'}</code></div>
          <Check label="运行态" ok={!state.data?.devShadowing} detail={state.data?.note || ''} />
        </>
      )}
    </div>
  );
}

function CalendarHealthPanel({ onSync, readOnly = false }: { onSync?: () => void; readOnly?: boolean }) {
  const [state, setState] = useState<{ loading: boolean; data?: { ok?: boolean; inSync?: boolean; diff?: { calendarEvents?: number; managedEvents?: number; desiredEvents?: number; toCreate?: { summary?: string; start?: string }[]; toUpdate?: { summary?: string; start?: string }[]; toDelete?: { summary?: string; start?: string }[] }; output?: string }; error?: string }>({ loading: true });
  const load = useCallback(() => {
    setState({ loading: true });
    api<{ ok?: boolean; inSync?: boolean; diff?: { calendarEvents?: number; managedEvents?: number; desiredEvents?: number; toCreate?: { summary?: string; start?: string }[]; toUpdate?: { summary?: string; start?: string }[]; toDelete?: { summary?: string; start?: string }[] }; output?: string }>('/api/calendar-health')
      .then((data) => setState({ loading: false, data }))
      .catch((error: Error) => setState({ loading: false, error: error.message }));
  }, []);
  useEffect(() => { load(); }, [load]);
  const diff = state.data?.diff;
  const deletes = diff?.toDelete ?? [];
  const inSync = state.data?.inSync === true;
  return (
    <div className="panel wide system-list">
      <PanelHeading title="飞书日历对账" />
      {state.loading ? <p className="muted-note">正在盘点日历差异…</p> : state.error ? <Check label="日历盘点" ok={false} detail={state.error} /> : (
        <>
          <Check label="对账结果" ok={inSync} detail={inSync ? '日历与数据库一致，无残留' : '存在差异，见下方清单'} />
          <div className="calendar-diff-summary">
            <span>日历事件 {diff?.calendarEvents ?? '—'}</span>
            <span>托管 {diff?.managedEvents ?? '—'}</span>
            <span>期望 {diff?.desiredEvents ?? '—'}</span>
            <span>待建 {diff?.toCreate?.length ?? 0}</span>
            <span>待更新 {diff?.toUpdate?.length ?? 0}</span>
            <span className={deletes.length ? 'diff-badge-danger' : ''}>待删除 {deletes.length}</span>
          </div>
          {deletes.length > 0 && (
            <div className="calendar-diff-list">
              {deletes.slice(0, 8).map((item, index) => (
                <div key={index} className="calendar-diff-row"><span>{item.summary}</span><span className="muted-note">{String(item.start || '').slice(0, 16)}</span></div>
              ))}
              {deletes.length > 8 && <p className="muted-note">另有 {deletes.length - 8} 条待删除…</p>}
            </div>
          )}
          <div className="row-actions">
            <button type="button" className="ghost-button" onClick={load}>重新盘点</button>
            {!readOnly && !inSync && onSync && <button type="button" className="primary-button" onClick={onSync}>打开同步操作</button>}
          </div>
        </>
      )}
    </div>
  );
}

function SystemView({ dashboard, onSync, embedded = false, readOnly = false }: { dashboard: Dashboard; onSync?: () => void; embedded?: boolean; readOnly?: boolean }) {
  const verification = dashboard.health?.database?.verification;
  return (
    <div className={embedded ? 'view-stack system-embedded' : 'view-stack'}>
      {!embedded && <PageTitle eyebrow="系统" title="运行状态" description="检查事务数据库、排课入口和写入锁状态。" />}
      <section className="metrics-grid system-metrics">
        <Metric label="数据库完整性" value={verification?.integrity === 'ok' ? '正常' : '异常'} hint={`Schema ${verification?.schema_version ?? '—'}`} tone="sage" />
        <Metric label="活动事务" value={verification?.counts?.active ?? '—'} hint={`总数 ${verification?.counts?.affairs ?? '—'}`} tone="amber" />
        <Metric label="排课 Agent" value={dashboard.health?.schedule_agent?.exists ? '就绪' : '缺失'} hint="schedule.py agent" tone="blue" />
        <Metric label="写入锁" value={dashboard.health?.writer?.active ? '占用中' : '空闲'} hint={dashboard.health?.writer?.owner || '无'} tone="ink" />
      </section>
      <section className="content-grid">
        <div className="panel wide system-list">
          <PanelHeading title="读取链路" />
          {dashboard.health?.reads && <div className="system-read-health">{Object.values(dashboard.health.reads).map((item) => <Check key={item.label} label={item.label} ok={item.ok} detail={item.detail} />)}</div>}
          <PanelHeading title="契约检查" />
          <Check label="事务数据库" ok={dashboard.health?.database?.verification?.ok} detail={dashboard.health?.database?.path} />
          <Check label="排课入口" ok={dashboard.health?.schedule_agent?.exists} detail={dashboard.health?.schedule_agent?.path} />
          <Check label="维护模式" ok={!dashboard.health?.maintenance} detail={dashboard.health?.maintenance ? '已开启' : '未开启'} />
          <Check label="写入锁" ok={!dashboard.health?.writer?.active} detail={dashboard.health?.writer?.active ? `由 ${dashboard.health.writer.owner} 占用` : '当前空闲'} />
        </div>
        {!readOnly && onSync && <div className="panel action-panel">
          <p className="eyebrow">飞书看板</p>
          <h3>同步前会先预演。</h3>
          <p>正式同步固定使用 <code>--prune</code>，清理已不存在的受管事件。</p>
          <button type="button" className="primary-button" onClick={onSync}>打开同步操作</button>
        </div>}
      </section>
      <CalendarHealthPanel onSync={onSync} readOnly={readOnly} />
      <VersionPanel />
    </div>
  );
}

function NextCourseBanner({ course, advice, onOpen, onQuick, onAskAi }: { course: TimelineItem | null; advice: Dashboard['commuteAdvice']; onOpen: (trigger: HTMLElement) => void; onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void; onAskAi?: (draft: string) => void }) {
  if (!course) return null;
  return (
    <section
      className={`next-course-banner next-course-open contextual-action-host ${itemStateClass(course)}${isTemporaryItem(course) ? ' temporary' : ''} actionable`}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        onOpen(event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen(event.currentTarget); }
      }}
    >
      <div className="next-course-time">
        <span>{formatDate(course.start_at, { month: 'numeric', day: 'numeric', weekday: 'short' })}</span>
        <strong>{formatTime(course.start_at)}</strong>
      </div>
      <div className="next-course-main">
        <p className="eyebrow">下一节课{isTemporaryItem(course) && <span className="temporary-badge">临时</span>}</p>
        <h3>{course.title}</h3>
        <span>{course.duration || '—'} 分钟 · {course.note || '常规课程'}</span>
      </div>
      <div className={advice?.tight ? 'commute-chip tight' : 'commute-chip'}>
        {advice?.available ? <>
          <strong>{advice.minutes} 分钟通勤</strong>
          <span>{advice.tight ? `间隔仅 ${advice.gapMinutes} 分钟` : `最晚 ${formatTime(advice.leaveBy)} 出发`}</span>
        </> : <>
          <strong>出发时间待定</strong>
          <span>{advice?.reason || '暂无通勤信息'}</span>
        </>}
      </div>
      <span className="next-course-cue">查看详情 →</span>
      <div className="next-course-inline-action"><ItemActionButtons item={course} onQuick={onQuick} onAskAi={onAskAi} /></div>
    </section>
  );
}

function ActionOutcomeActions({ preview, onClose }: {
  preview: PreviewResponse;
  onClose: () => void;
}) {
  if (!preview.committed || !preview.ok) return null;
  return <div className="action-outcome-actions">
    <button type="button" className="primary-button" onClick={onClose}>完成并返回</button>
  </div>;
}

function WorkbenchNav({ label, items, value, onChange, busy }: {
  label: string;
  items: Array<{ id: string; label: string; count?: number }>;
  value: string;
  onChange: (id: string) => void;
  busy?: boolean;
}) {
  return <nav className="workbench-nav" aria-label={label} data-ui="segmented-navigation">
    {items.map((item) => (
      <button
        type="button"
        key={item.id}
        className={value === item.id ? 'selected' : ''}
        data-ui-role="nav-item"
        data-ui-id={`secondary-nav-${item.id}`}
        aria-label={`${item.label}${item.count ? `，${item.count} 项` : ''}`}
        aria-pressed={value === item.id}
        disabled={busy}
        onClick={() => onChange(item.id)}
      ><span>{item.label}</span>{item.count ? <strong>{item.count}</strong> : null}</button>
    ))}
  </nav>;
}

function InlineResult({ ok, text }: { ok: boolean; text: string }) {
  return <small className={`inline-result ${ok ? 'ok' : 'error'}`}>{text}</small>;
}

function Metric({ label, value, hint, tone }: { label: string; value: string | number; hint: string; tone: string }) {
  return <div className={`metric-card ${tone}`}><span>{label}</span><strong>{value}</strong><small>{hint}</small></div>;
}

function TimelineRow({ item, onInspect, onPrepare, onQuick, onAskAi, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect?: InspectHandler;
  onPrepare?: (preset: ActionPreset) => void;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onRetry?: (item: TimelineItem) => Promise<void>;
  retryingId?: string | null;
  feedback?: AffairFeedback;
}) {
  const finished = ['completed', 'cancelled', '已完成', '已取消', '已调课'].includes(item.status);
  const actionable = Boolean(onPrepare) && !finished;
  return (
    <div
      className={`${onInspect ? 'timeline-row inspectable' : 'timeline-row'} contextual-action-host ${itemStateClass(item)}${isTemporaryItem(item) ? ' temporary' : ''}${actionable ? ' actionable' : ''}`}
      data-item-id={item.id}
      role={onInspect ? 'button' : undefined}
      tabIndex={onInspect ? 0 : undefined}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        onInspect?.(item, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if ((event.key === 'Enter' || event.key === ' ') && onInspect) { event.preventDefault(); onInspect(item, event.currentTarget); }
      }}
    >
      <div className={`domain-dot ${item.domain}`} />
      <time>{formatTime(itemDate(item)) || '待定'}</time>
      <div className="row-main">
        <strong>{item.title}</strong>
        <span>{item.domain === 'course' ? `${item.duration || '—'} 分钟` : item.note || item.window_label || '事务'}</span>
        {feedback && <InlineResult ok={feedback.ok} text={feedback.text} />}
      </div>
      <div className="timeline-actions"><Status value={item.status} /></div>
      {actionable && (onPrepare || onQuick || onAskAi) && <div className="row-inline-action"><ItemActionButtons item={item} onQuick={onQuick} onAskAi={onAskAi} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>}
    </div>
  );
}

function AffairRow({ item, onInspect, onPrepare, onQuick, onAskAi, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const finished = ['completed', 'cancelled', '已完成', '已取消'].includes(item.status);
  return (
    <div
      className={`affair-row contextual-action-host ${itemStateClass(item)}${finished ? '' : ' actionable'}`}
      data-item-id={item.id}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        onInspect(item, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onInspect(item, event.currentTarget); }
      }}
    >
      <div className="affair-icon">事</div>
      <div className="row-main">
        <strong>{item.title}</strong>
        <span>{item.window_label || (item.next_prompt_at ? `下次提醒 ${formatDate(item.next_prompt_at)} ${formatTime(item.next_prompt_at)}` : item.id)}</span>
        <code>{item.id}</code>
      </div>
      <div className="affair-meta">
        <Status value={item.status} />
        {feedback && <InlineResult ok={feedback.ok} text={feedback.text} />}
      </div>
      {!finished && <div className="affair-row-inline-action"><ItemActionButtons item={item} onQuick={onQuick} onAskAi={onAskAi} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>}
    </div>
  );
}

function QuickPendingItem({ item, onInspect, onPrepare, onQuick, onAskAi, onRetry, onRetryPrev, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  onRetryPrev?: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  return <div
    className={`quick-pending-item contextual-action-host ${itemStateClass(item)} actionable`}
    data-item-id={item.id}
    role="button"
    tabIndex={0}
    onClick={(event) => {
      if ((event.target as HTMLElement).closest('button')) return;
      onInspect(item, event.currentTarget);
    }}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onInspect(item, event.currentTarget); }
    }}
  >
    <div className="quick-pending-main">
      <strong>{item.title}</strong>
      <span>{item.window_label || (item.next_prompt_at ? `下次提醒 ${formatDate(item.next_prompt_at)} ${formatTime(item.next_prompt_at)}` : '待处理')}</span>
      {feedback && <InlineResult ok={feedback.ok} text={feedback.text} />}
      {feedback?.undo && onRetryPrev ? <button type="button" className="row-action-button" disabled={Boolean(retryingId)} onClick={() => void onRetryPrev(item)}>撤销推进</button> : null}
    </div>
    <div className="quick-pending-actions"><Status value={item.status} /></div>
    <div className="quick-pending-inline-action"><ItemActionButtons item={item} onQuick={onQuick} onAskAi={onAskAi} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>
  </div>;
}

function CompactItem({ item, onInspect, onPrepare, onQuick, onAskAi, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onQuick?: (action: 'courseCancel' | 'affairComplete', item: TimelineItem) => void;
  onAskAi?: (draft: string) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const finished = ['completed', 'cancelled', '已完成', '已取消'].includes(item.status);
  return (
    <div
      className={`compact-item inspectable contextual-action-host ${itemStateClass(item)}${finished ? '' : ' actionable'}`}
      data-item-id={item.id}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        onInspect(item, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onInspect(item, event.currentTarget); }
      }}
    >
      <div>
        <strong>{item.title}</strong>
        <span>{item.window_label || formatDate(itemDate(item))}</span>
        {feedback && <InlineResult ok={feedback.ok} text={feedback.text} />}
      </div>
      <Status value={item.status} />
      {!finished && <div className="compact-inline-action"><ItemActionButtons item={item} onQuick={onQuick} onAskAi={onAskAi} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>}
    </div>
  );
}

function Status({ value }: { value: string }) {
  return <span className={`status ${statusTone(value)}`} data-ui="status-badge" data-ui-state={statusTone(value)}>{statusLabels[value] || value}</span>;
}

function PanelHeading({ title, meta, action, onAction, actionDisabled }: {
  title: string;
  meta?: string;
  action?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
}) {
  return (
    <div className="panel-heading" data-ui="section-heading">
      <div><h3>{title}</h3>{meta && <span>{meta}</span>}</div>
      {action && <button type="button" data-ui-role="button" data-ui-variant="secondary" onClick={onAction} disabled={actionDisabled}>{action}</button>}
    </div>
  );
}

function PageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="page-title" data-ui="page-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></header>;
}

function Field({ name, label, type = 'text', placeholder, defaultValue, required = false }: { name: string; label: string; type?: string; placeholder?: string; defaultValue?: string | number; required?: boolean }) {
  return <label className="field"><span>{label}</span><input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} required={required} /></label>;
}

function Check({ label, ok, detail }: { label: string; ok: boolean; detail: string }) {
  return <div className="check-row"><span className={ok ? 'check ok' : 'check no'}>{ok ? '✓' : '!'}</span><div><strong>{label}</strong><small>{detail}</small></div></div>;
}

function Empty({ title, text, compact = false }: { title: string; text: string; compact?: boolean }) {
  return <div className={compact ? 'empty compact' : 'empty'} data-ui="empty-state"><strong>{title}</strong><span>{text}</span></div>;
}

function Notice({ tone, title, text }: { tone: string; title: string; text: string }) {
  return <div className={`notice ${tone}`} data-ui="notice" data-ui-state={tone} role={tone === 'error' ? 'alert' : 'status'}><strong>{title}</strong><span>{text}</span></div>;
}

function LoadingState() {
  return (
    <div className="skeleton-layout" role="status" aria-label="正在加载排课与事务数据…">
      <div className="skeleton-card skeleton-banner" />
      <div className="skeleton-metrics">
        <div className="skeleton-card" /><div className="skeleton-card" /><div className="skeleton-card" /><div className="skeleton-card" />
      </div>
      <div className="skeleton-lines">
        <div className="skeleton-card skeleton-row" /><div className="skeleton-card skeleton-row" /><div className="skeleton-card skeleton-row" /><div className="skeleton-card skeleton-row" />
      </div>
    </div>
  );
}

hana.ready();
hana.ui.resize({ height: window.innerHeight || 900 });

const root = document.getElementById('root');
if (root) createRoot(root).render(<WorkbenchErrorBoundary><Panel /></WorkbenchErrorBoundary>);
