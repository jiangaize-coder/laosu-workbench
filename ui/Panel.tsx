import { Component, FormEvent, PointerEvent as ReactPointerEvent, type ErrorInfo, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
function useCloseOnOutside<T extends HTMLElement>(open: boolean, onClose: () => void) {
  const ref = useRef<T | null>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!open) return;
    const handler = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (ref.current && target && !ref.current.contains(target)) closeRef.current();
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);
  return ref;
}

import { hana } from '@hana/plugin-sdk';
import { HanaThemeProvider } from '@hana/plugin-components';
import '@hana/plugin-components/styles.css';
import './panel.css';
import { addDateDays, buildMonthGridDates, buildWeekDates, buildWeekPageSlots, calendarHourBounds, eventGeometry, itemDateKey, layoutOverlappingItems, parseDateRange, type CalendarItemLike } from './calendar-layout';
import { api } from './api-client';
import { createRequestGate } from './request-gate';

type Tab = 'overview' | 'cockpit' | 'planning' | 'affairs';
type Scope = 'today' | 'week' | 'month' | 'horizon';

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
};

type AiMessage = { role: 'user' | 'assistant'; text: string };

type AiInterpretResponse = {
  ok: boolean;
  status?: 'ready' | 'need_clarification';
  reply?: string;
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
};

type FocusTarget = { tab: Tab; id: string };
type ContextView =
  | { kind: 'item'; item: TimelineItem }
  | { kind: 'day'; date: string }
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

const tabs: Array<{ id: Tab; label: string }> = [
  { id: 'overview', label: '总览' },
  { id: 'cockpit', label: '驾驶舱' },
  { id: 'planning', label: '筹备' },
  { id: 'affairs', label: '事务' },
];

const scopeLabels: Record<Scope, string> = {
  today: '今天',
  week: '本周',
  month: '本月',
  horizon: '未来',
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
      <div className="workbench-shell">
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

function itemDate(item: TimelineItem) {
  return item.start_at || item.deadline_at || null;
}

function statusTone(status: string) {
  if (['completed', '已完成'].includes(status)) return 'done';
  if (['cancelled', '已取消', '已调课'].includes(status)) return 'muted';
  if (['failed', 'error', 'blocked', '异常', '失败'].includes(status)) return 'error';
  if (['pending_confirmation', '待确认', 'needs_reschedule'].includes(status)) return 'warn';
  return 'active';
}

function itemStateClass(item: TimelineItem) {
  const tone = statusTone(item.status);
  if (tone === 'done') return 'state-confirmed';
  if (tone === 'muted') return 'state-neutral';
  if (tone === 'error') return 'state-error';
  if (tone === 'warn') return 'state-pending';
  return item.domain === 'course' ? 'state-confirmed' : 'state-pending';
}

function isTemporaryItem(item: TimelineItem) {
  return item.scope === 'one_off' || ['reservation', 'manual', 'move'].includes(item.origin || '');
}

function Panel() {
  const params = new URLSearchParams(window.location.search);
  const storedTab = window.localStorage.getItem('laosu-workbench.tab');
  const storedScope = window.localStorage.getItem('laosu-workbench.scope') as Scope | null;
  const requestedTab = params.get('tab') || storedTab || 'overview';
  const requestedScope = (params.get('scope') as Scope) || storedScope || 'week';
  const initialTab = (tabs.map((item) => item.id) as string[]).includes(requestedTab) ? requestedTab as Tab : 'overview';
  const initialScope = (['today', 'week', 'month', 'horizon'] as Scope[]).includes(requestedScope) ? requestedScope : 'week';
  const initialPreview = params.get('preview');
  const [tab, setTab] = useState<Tab>(initialTab);
  const [scope, setScope] = useState<Scope>(initialScope);
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
  const [focusTarget, setFocusTarget] = useState<FocusTarget | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);
  const contextDrawerRef = useRef<HTMLElement | null>(null);
  const dashboardRequestGateRef = useRef(createRequestGate());
  const previewRequestGateRef = useRef(createRequestGate());
  const busyOperationsRef = useRef(new Set<symbol>());
  const lastPointerTargetRef = useRef<HTMLElement | null>(null);
  const drawerHistoryRef = useRef(false);
  const contextHistoryRef = useRef(false);
  const scrollPositionsRef = useRef<Record<Tab, number>>({
    overview: Number(window.sessionStorage.getItem('laosu-workbench.scroll.overview') || 0),
    cockpit: Number(window.sessionStorage.getItem('laosu-workbench.scroll.cockpit') || 0),
    planning: Number(window.sessionStorage.getItem('laosu-workbench.scroll.planning') || 0),
    affairs: Number(window.sessionStorage.getItem('laosu-workbench.scroll.affairs') || 0),
  });

  const loadDashboard = useCallback(async (nextScope: Scope = scope, options: { silent?: boolean; fresh?: boolean } = {}) => {
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
      return true;
    } catch (err: any) {
      if (!dashboardRequestGateRef.current.isCurrent(requestId)) return null;
      if (!silent) setError(err.message || '读取失败');
      return false;
    } finally {
      if (dashboardRequestGateRef.current.isCurrent(requestId) && !silent) setLoading(false);
    }
  }, [scope]);

  useEffect(() => {
    void loadDashboard(initialScope);
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
    window.localStorage.setItem('laosu-workbench.scope', scope);
  }, [scope]);

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

  const activePending = useMemo(
    () => (dashboard?.pending ?? []).filter((item) => !['completed', 'cancelled'].includes(item.status)),
    [dashboard],
  );

  const upcoming = useMemo(() => {
    const now = Date.now();
    return (dashboard?.items ?? [])
      .filter((item) => itemDate(item) && new Date(itemDate(item) as string).getTime() >= now && !['completed', 'cancelled', '已完成', '已取消'].includes(item.status))
      .sort((a, b) => new Date(itemDate(a) as string).getTime() - new Date(itemDate(b) as string).getTime())[0] ?? null;
  }, [dashboard]);

  async function changeScope(next: Scope) {
    const url = new URL(window.location.href);
    url.searchParams.set('scope', next);
    window.history.replaceState(window.history.state, '', url);
    setScope(next);
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

  function openDayDetail(date: string, trigger?: HTMLElement | null) {
    rememberContextTrigger(trigger);
    setContextView({ kind: 'day', date });
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

  async function refreshCurrent(options: { silent?: boolean } = {}) {
    const silent = options.silent === true;
    if (!silent) setToast('正在刷新数据…');
    const ok = await loadDashboard(scope, { ...options, fresh: !silent });
    if (ok === true) {
      setAffairFeedback({});
      setDayCompleteFeedback(null);
      setPlanningRevision((current) => current + 1);
      if (!silent) setToast('课表、筹备和事务数据已刷新');
    } else if (ok === false && !silent) {
      setToast('刷新失败，请查看页面错误');
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
      setAffairFeedback((current) => ({ ...current, [item.id]: { ok: true, text: data.message || '已推进到下一次尝试', buttonLabel } }));
      await loadDashboard(scope);
    } catch (err: any) {
      const message = err.message || '没约上的处理失败';
      setAffairFeedback((current) => ({ ...current, [item.id]: { ok: false, text: `处理失败：${message}`, buttonLabel: '重试' } }));
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

  return (
    <HanaThemeProvider mode="inherit" className="workbench-theme">
      <div className="workbench-shell">
        <header className="topbar">
          <nav className="tabbar" aria-label="工作台导航">
            {tabs.map((item) => (
              <button type="button" key={item.id} className={tab === item.id ? 'tab active' : 'tab'} onClick={() => navigateTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="top-actions">
            <button type="button" className={actionOpen ? 'ai-action-button active' : 'ai-action-button'} onClick={openAi} aria-expanded={actionOpen}>✦ AI 操作</button>
            <span className="updated-at">{formatUpdated(dashboard?.observedAt)}</span>
            <button type="button" className={`${dashboard?.health?.ok ? 'health good' : 'health bad'} health-button${contextView?.kind === 'system' ? ' active' : ''}`} onClick={(event) => openSystem(event.currentTarget)} aria-expanded={contextView?.kind === 'system'}>
              <i />{dashboard?.health?.ok ? '系统正常' : '需要检查'}
            </button>
            <button type="button" className="icon-button" onClick={() => void refreshCurrent()} aria-label="刷新" disabled={loading}>↻</button>
          </div>
        </header>

        <main className="main-area">
          {toast && <div className="toast" role="status">{toast}</div>}
          {error && <Notice tone="error" title="读取失败" text={error} />}
          {dashboard?.warnings?.length ? <Notice tone="warn" title="有警告" text={dashboard.warnings.join('；')} /> : null}
          {loading && !dashboard ? <LoadingState /> : null}
          {dashboard && tab !== 'planning' && <section className="global-scope-bar" aria-label="时间范围" aria-busy={loading}>
            <div className="scope-context">
              <span>{loading ? '正在更新时间' : '时间范围'}</span>
              <strong>{formatRange(dashboard.range)}</strong>
            </div>
            <div className="scope-switch">
              {(Object.keys(scopeLabels) as Scope[]).map((item) => (
                <button type="button" key={item} className={scope === item ? 'selected' : ''} disabled={loading} onClick={() => void changeScope(item)}>{scopeLabels[item]}</button>
              ))}
            </div>
          </section>}
          <div className={loading && dashboard ? 'view-content scope-loading' : 'view-content'} aria-busy={loading && Boolean(dashboard)} inert={loading && Boolean(dashboard)}>
            {dashboard && tab === 'overview' && (
              <Overview dashboard={dashboard} pending={activePending} upcoming={upcoming} onInspect={openItemDetail} onOpenDay={openDayDetail} onPrepare={openAction} onRetry={handleAffairRetry} retryingId={quickBusyId} affairFeedback={affairFeedback} onDayComplete={handleDayComplete} dayBusy={dayCompleteBusy} dayFeedback={dayCompleteFeedback} />
            )}
            {tab === 'cockpit' && <CockpitView onAction={openAction} onAskAi={openAiWithDraft} />}
            {tab === 'planning' && <PlanningView onAction={openAction} onAskAi={openAiWithDraft} refreshKey={planningRevision} scheduleText={dashboard?.scheduleText} onDataChanged={refreshCurrent} />}
            {dashboard && tab === 'affairs' && <AffairsView pending={activePending} affairs={dashboard.affairs} onPrepare={openAction} onInspect={openItemDetail} onRetry={handleAffairRetry} retryingId={quickBusyId} feedback={affairFeedback} />}
          </div>
        </main>

        <div className="context-drawer-backdrop" hidden={!contextOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) closeContextDrawer(); }}>
          <aside ref={contextDrawerRef} className="context-drawer" role="dialog" aria-modal="true" aria-label="详情">
            <header className="context-drawer-head">
              <button type="button" className="context-back" onClick={closeContextDrawer} aria-label="返回原位置">←</button>
              <div>
                <p className="eyebrow">{contextView?.kind === 'system' ? '运行状态' : contextView?.kind === 'day' ? '当日安排' : '条目详情'}</p>
                <h2>{contextView?.kind === 'system' ? '系统状态' : contextView?.kind === 'day' ? formatDate(`${contextView.date}T12:00:00+08:00`, { month: 'long', day: 'numeric', weekday: 'long' }) : contextView?.item.title}</h2>
                <span>返回后会停在原来的页面和位置。</span>
              </div>
            </header>
            <div className="context-drawer-body">
              {contextView && dashboard && <ContextDrawerContent
                view={contextView}
                dashboard={dashboard}
                onPrepare={openAction}
                onRetry={handleAffairRetry}
                retryingId={quickBusyId}
                affairFeedback={affairFeedback}
                onSync={() => openAction({ operation: 'calendar_sync' })}
              />}
            </div>
          </aside>
        </div>

        <div className="action-drawer-backdrop" hidden={!actionOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) closeActionDrawer(); }}>
          <aside ref={drawerRef} className="action-drawer" role="dialog" aria-modal="true" aria-label="AI 操作">
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

function Overview({ dashboard, pending, upcoming, onInspect, onOpenDay, onPrepare, onRetry, retryingId, affairFeedback, onDayComplete, dayBusy, dayFeedback }: {
  dashboard: Dashboard;
  pending: TimelineItem[];
  upcoming: TimelineItem | null;
  onInspect: InspectHandler;
  onOpenDay: OpenDayHandler;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  affairFeedback: Record<string, AffairFeedback>;
  onDayComplete: (date: string) => Promise<void>;
  dayBusy: boolean;
  dayFeedback: AffairFeedback | null;
}) {
  const combinedItems = useMemo(() => {
    const map = new Map<string, TimelineItem>();
    dashboard.items.forEach((item) => map.set(item.id, item));
    dashboard.affairs.forEach((item) => map.set(item.id, { ...item, domain: 'affair' }));
    dashboard.courses.forEach((item) => map.set(item.id, { ...item, domain: 'course' }));
    return Array.from(map.values()).sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')));
  }, [dashboard.items, dashboard.affairs, dashboard.courses]);
  const groups = useMemo(() => {
    const map = new Map<string, TimelineItem[]>();
    combinedItems.forEach((item) => {
      const key = itemDate(item)?.slice(0, 10) || '未定日期';
      map.set(key, [...(map.get(key) || []), item]);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [combinedItems]);
  const todayCourses = dashboard.courses.filter((course) => course.start_at?.slice(0, 10) === dashboard.localDate && course.status !== '已取消');
  const pendingToday = todayCourses.filter((course) => course.status === '待上课');
  const finalEnd = todayCourses.map((course) => course.end_at).filter(Boolean).sort().at(-1) || null;
  const dayEnded = Boolean(finalEnd && Date.now() >= new Date(finalEnd).getTime());
  const dayButtonLabel = dayBusy ? '处理中…' : dayFeedback?.buttonLabel || (pendingToday.length ? '全部上完' : '已全部记录');
  const dayButtonDisabled = dayBusy || Boolean(dayFeedback?.ok) || !pendingToday.length || !dayEnded;
  const headline = ({
    today: '把今天安排清楚。',
    week: '把今天和这周，放在一张桌面上。',
    month: '把这个月的课程和事务放在一张桌面上。',
    horizon: '把未来安排放在一张桌面上。',
  } as Record<Scope, string>)[dashboard.scope];

  return (
    <div className="view-stack">
      <section className="hero-row">
        <div>
          <p className="eyebrow">{dashboard.localDate} · {scopeLabels[dashboard.scope]}</p>
          <h2>{headline}</h2>
          <p className="subtle">数据来自排课与事务系统实时回读。</p>
        </div>
      </section>

      <NextCourseBanner course={dashboard.nextCourse || null} advice={dashboard.commuteAdvice || null} onOpen={(trigger) => dashboard.nextCourse && onInspect(dashboard.nextCourse, trigger)} onPrepare={onPrepare} />

      <section className="metrics-grid">
        <Metric label="课程" value={dashboard.courses.length} hint={formatRange(dashboard.range)} tone="sage" />
        <Metric label="待办" value={pending.length} hint={pending[0]?.title || '没有积压'} tone="amber" />
        <Metric label="下一项" value={upcoming ? formatTime(itemDate(upcoming)) || '待定' : '无'} hint={upcoming?.title || '当前范围内已清空'} tone="blue" />
        <Metric label="系统" value={dashboard.health?.ok ? '正常' : '异常'} hint={`活动事务 ${dashboard.health?.database?.verification?.counts?.active ?? '—'}`} tone="ink" />
      </section>

      {dashboard.scope === 'today' && todayCourses.length > 0 && <section className="day-complete-bar">
        <div>
          <p className="eyebrow">今日收课</p>
          <strong>{pendingToday.length ? `还有 ${pendingToday.length} 节待记录` : '今日课程已全部记录'}</strong>
          <span>{pendingToday.length && !dayEnded ? `最后一节 ${formatTime(finalEnd)} 结束后可操作` : '提交后会写入本地课表并同步日历'}</span>
          {dayFeedback && <small className={dayFeedback.ok ? 'day-action-inline ok' : 'day-action-inline error'}>{dayFeedback.text}</small>}
        </div>
        <button
          type="button"
          className="primary-button"
          disabled={dayButtonDisabled}
          onClick={() => void onDayComplete(dashboard.localDate)}
        >{dayButtonLabel}</button>
      </section>}

      <section className="content-grid">
        <div className={dashboard.scope === 'week' || dashboard.scope === 'month' ? 'panel wide calendar-panel' : 'panel wide'}>
          <PanelHeading
            title={dashboard.scope === 'week' ? '周视图' : dashboard.scope === 'month' ? '月视图' : '时间轴'}
            meta={formatRange(dashboard.range)}
          />
          {(dashboard.scope === 'week' || dashboard.scope === 'month') && <div className="calendar-legend" aria-label="状态颜色图例">
            <span className="confirmed"><i />已确认／已完成</span>
            <span className="pending"><i />待确认／待处理</span>
            <span className="error"><i />错误／硬阻塞</span>
            <span className="temporary"><i />临时身份</span>
            <small>状态用绿黄红；蓝色只标记临时来源</small>
          </div>}
          {dashboard.scope === 'week'
            ? <WeekCalendar items={combinedItems} range={dashboard.range} localDate={dashboard.localDate} onInspect={onInspect} onOpenDay={onOpenDay} onPrepare={onPrepare} onRetry={onRetry} retryingId={retryingId} affairFeedback={affairFeedback} />
            : dashboard.scope === 'month'
              ? <MonthCalendar items={combinedItems} range={dashboard.range} localDate={dashboard.localDate} onOpenDay={onOpenDay} />
              : groups.length ? groups.map(([date, items]) => (
                <div className="day-group" key={date}>
                  <div className="day-label">
                    <strong>{date === '未定日期' ? date : formatDate(`${date}T12:00:00+08:00`, { month: 'long', day: 'numeric', weekday: 'short' })}</strong>
                    <span>{items.length} 项</span>
                  </div>
                  <div className="timeline-list">
                    {items.map((item) => <TimelineRow key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onRetry={onRetry} retryingId={retryingId} feedback={affairFeedback[item.id]} />)}
                  </div>
                </div>
              )) : <Empty title="这个范围没有安排" text="可以切换时间范围，或用 AI 操作创建和调整。" />}
        </div>

        <aside className="side-stack overview-side">
          <div className="panel pending-action-panel">
            <PanelHeading title="待处理" meta={`${pending.length} 项`} />
            {pending.length ? pending.slice(0, 4).map((item) => <QuickPendingItem key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onRetry={onRetry} retryingId={retryingId} feedback={affairFeedback[item.id]} />) : <Empty title="没有待处理事务" text="当前队列是干净的。" compact />}
          </div>
        </aside>
      </section>
    </div>
  );
}

function ItemActionButtons({ item, onPrepare, onRetry, retryingId, feedback, compact = false }: {
  item: TimelineItem;
  onPrepare: (preset: ActionPreset) => void;
  onRetry?: (item: TimelineItem) => Promise<void>;
  retryingId?: string | null;
  feedback?: AffairFeedback;
  compact?: boolean;
}) {
  const finished = ['completed', 'cancelled', '已完成', '已取消', '已调课'].includes(item.status);
  if (finished) return null;
  const date = item.start_at?.slice(0, 10);
  const time = item.start_at?.slice(11, 16);
  if (item.domain === 'course') {
    if (!date || !time) return null;
    return <div className={`item-action-buttons${compact ? ' compact' : ''}`} onClick={(event) => event.stopPropagation()}>
      <button type="button" className="secondary" onClick={() => onPrepare({ operation: 'course_move', student: item.title, fromDate: date, fromTime: time, toDate: date, toTime: time, duration: item.duration })}>调整时间</button>
      <button type="button" className="danger" onClick={() => onPrepare({ operation: 'course_cancel', student: item.title, date, time })}>本次不上</button>
    </div>;
  }
  const retrying = retryingId === item.id;
  return <div className={`item-action-buttons${compact ? ' compact' : ''}`} onClick={(event) => event.stopPropagation()}>
    <button type="button" className="primary" onClick={() => onPrepare({ operation: 'affair_complete', id: item.id, expectedVersion: item.version })}>完成</button>
    {item.retry && onRetry
      ? <button type="button" className="secondary" disabled={Boolean(retryingId) || Boolean(feedback?.ok)} aria-busy={retrying} onClick={() => void onRetry(item)}>{retrying ? '处理中…' : feedback?.buttonLabel || '没约上'}</button>
      : <button type="button" className="danger" onClick={() => onPrepare({ operation: 'affair_cancel', id: item.id, expectedVersion: item.version })}>取消</button>}
  </div>;
}

function maximumLaneCount(items: CalendarItemLike[]) {
  return layoutOverlappingItems(items)[0]?.laneCount || 1;
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

function WeekCalendar({ items, range, localDate, onInspect, onOpenDay, onPrepare, onRetry, retryingId, affairFeedback }: {
  items: TimelineItem[];
  range: string;
  localDate: string;
  onInspect: InspectHandler;
  onOpenDay: OpenDayHandler;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  affairFeedback: Record<string, AffairFeedback>;
}) {
  const dates = useMemo(() => buildWeekDates(range, localDate), [range, localDate]);
  const dragScroll = useHorizontalDrag();
  const [compactDays, setCompactDays] = useState(() => window.matchMedia('(max-width: 900px)').matches);
  const [dayPage, setDayPage] = useState(0);
  const [openedItemId, setOpenedItemId] = useState<string | null>(null);
  const visibleDateSlots = useMemo<Array<string | null>>(() => compactDays ? buildWeekPageSlots(dates, dayPage, 3) : dates, [compactDays, dates, dayPage]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    const update = () => setCompactDays(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    setDayPage(0);
    setOpenedItemId(null);
  }, [range]);

  useEffect(() => {
    if (!openedItemId) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenedItemId(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [openedItemId]);

  const byDate = useMemo(() => {
    const map = new Map<string, TimelineItem[]>();
    items.forEach((item) => {
      const date = itemDateKey(item);
      if (date) map.set(date, [...(map.get(date) || []), item]);
    });
    map.forEach((dayItems, date) => map.set(date, [...dayItems].sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')))));
    return map;
  }, [items]);
  const laneCountsByDate = useMemo(() => new Map(dates.map((date) => [date, maximumLaneCount((byDate.get(date) || []).filter((item) => item.start_at || item.deadline_at))])), [byDate, dates]);

const placementsByDate = useMemo(() => {
  const map = new Map<string, Array<{ item: TimelineItem; lane: number; laneCount: number }>>();
  for (const date of dates) {
    const items = (byDate.get(date) || []).filter((item) => item.start_at || item.deadline_at);
    map.set(date, layoutOverlappingItems(items));
  }
  return map;
}, [byDate, dates]);

  const visibleLaneWeights = visibleDateSlots.map((date) => date ? laneCountsByDate.get(date) || 1 : 1);
  const visibleLaneUnits = visibleLaneWeights.reduce((sum, count) => sum + count, 0);
  const gridTemplate = `52px ${visibleLaneWeights.map((count) => `minmax(0, ${count}fr)`).join(' ')}`;
  const canvasMinWidth = compactDays ? `calc(100% * ${visibleLaneUnits / visibleDateSlots.length})` : `${Math.ceil(1080 * visibleLaneUnits / visibleDateSlots.length)}px`;
  const timedItems = items.filter((item) => item.start_at || item.deadline_at);
  const visibleTimedItems = compactDays ? timedItems.filter((item) => visibleDateSlots.includes(itemDateKey(item))) : timedItems;
  const { startHour, endHour } = calendarHourBounds(visibleTimedItems);
  const hourHeight = compactDays ? 76 : 64;
  const calendarHeight = (endHour - startHour) * hourHeight;
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);

  return (
    <>
      {compactDays && <div className="planning-day-page-nav overview-week-page-nav" role="group" aria-label="切换本周日期页">
        <button type="button" disabled={dayPage === 0} onClick={() => setDayPage((current) => Math.max(0, current - 1))}>‹ 上一页</button>
        <strong>第 {dayPage + 1}/3 页 · 每页 3 天</strong>
        <button type="button" disabled={dayPage === 2} onClick={() => setDayPage((current) => Math.min(2, current + 1))}>下一页 ›</button>
      </div>}
      <div className="week-calendar-scroll draggable-week-scroll" role="region" tabIndex={0} aria-label="一周时间视图，可使用方向键或触控横向浏览" {...dragScroll}>
      <div className={compactDays ? 'week-calendar-canvas compact-page' : 'week-calendar-canvas'} style={{ minWidth: canvasMinWidth }}>
        <div className="week-calendar-header" style={{ gridTemplateColumns: gridTemplate }}>
          <div className="week-corner">时间</div>
          {visibleDateSlots.map((date, slotIndex) => date ? <button type="button" key={date} className={date === localDate ? 'week-day-header today' : 'week-day-header'} onClick={(event) => onOpenDay(date, event.currentTarget)}>
            <span>{formatDate(`${date}T12:00:00+08:00`, { weekday: 'short' })}</span>
            <strong>{Number(date.slice(8, 10))}</strong>
            <small>{byDate.get(date)?.length || 0} 项</small>
          </button> : <div className="week-day-header empty-slot" key={`empty-${slotIndex}`} aria-hidden="true" />)}
        </div>
        <div className="week-calendar-body" style={{ gridTemplateColumns: gridTemplate }} onPointerDown={(event) => { if (!(event.target as HTMLElement).closest('.week-time-block')) setOpenedItemId(null); }}>
          <div className="week-time-axis" style={{ height: calendarHeight }}>
            {hours.map((hour) => <span key={hour} style={{ top: (hour - startHour) * hourHeight }}>{String(hour).padStart(2, '0')}:00</span>)}
          </div>
          {visibleDateSlots.map((date, slotIndex) => {
            if (!date) return <div className="week-day-track empty-slot" key={`empty-${slotIndex}`} style={{ height: calendarHeight }} aria-hidden="true" />;
            const placements = placementsByDate.get(date) || [];
            return <div className={date === localDate ? 'week-day-track today' : 'week-day-track'} key={date} style={{ height: calendarHeight }}>
              {placements.map(({ item, lane, laneCount }) => {
                const geometry = eventGeometry(item, startHour, endHour, hourHeight);
                if (!geometry) return null;
                const width = 100 / laneCount;
                const timeValue = item.start_at || item.deadline_at;
                const finished = ['completed', 'cancelled', '已完成', '已取消', '已调课'].includes(item.status);
                const actionable = !finished && (item.domain === 'affair' || Boolean(item.start_at));
                const actionOpen = actionable && openedItemId === item.id;
                return <article
                  key={item.id}
                  className={`week-time-block contextual-action-host ${item.domain} ${itemStateClass(item)}${isTemporaryItem(item) ? ' temporary' : ''}${actionable ? ' actionable' : ''}${actionOpen ? ' action-open' : ''}`}
                  style={{ top: geometry.top, height: geometry.height, left: `calc(${lane * width}% + 4px)`, width: `calc(${width}% - 8px)` }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={actionable ? actionOpen : undefined}
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest('button')) return;
                    if (actionable && window.matchMedia('(hover: none)').matches) {
                      setOpenedItemId((current) => current === item.id ? null : item.id);
                    } else {
                      onInspect(item, event.currentTarget);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      onInspect(item, event.currentTarget);
                    } else if (event.key === ' ') {
                      event.preventDefault();
                      if (actionable) setOpenedItemId((current) => current === item.id ? null : item.id);
                    } else if (event.key === 'Escape') {
                      setOpenedItemId(null);
                    }
                  }}
                  data-item-id={item.id}
                  aria-label={`${formatTime(timeValue)} ${item.title}，${item.domain === 'course' ? `${item.duration || '—'} 分钟课程` : '事务'}${actionable ? '；移入后可直接操作，Enter 打开详情' : '，打开详情'}`}
                >
                  <strong>{formatTime(timeValue)} · {item.title}</strong>
                  <span>{item.domain === 'course' ? `${item.duration || '—'} 分钟` : item.estimated_minutes ? `${item.estimated_minutes} 分钟 · 事务` : '事务'}</span>
                  {actionable && <div className="week-card-inline-action"><ItemActionButtons item={item} onPrepare={(preset) => { setOpenedItemId(null); onPrepare(preset); }} onRetry={onRetry} retryingId={retryingId} feedback={affairFeedback[item.id]} compact /></div>}
                </article>;
              })}
            </div>;
          })}
        </div>
      </div>
    </div>
    </>
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
      if (date) map.set(date, [...(map.get(date) || []), item]);
    });
    map.forEach((dayItems, date) => map.set(date, [...dayItems].sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')))));
    return map;
  }, [items]);
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
                {dayItems.slice(0, 3).map((item) => <span key={item.id} className={`month-item ${item.domain} ${itemStateClass(item)}${isTemporaryItem(item) ? ' temporary' : ''}`}>
                  <i />{formatTime(itemDate(item)) || '待定'} · {item.title}
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

function CockpitView({ onAction, onAskAi }: { onAction: (preset: ActionPreset) => void; onAskAi: (draft: string) => void }) {
  const [data, setData] = useState<CockpitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const load = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const result = await api<CockpitData>('api/cockpit');
      setData(result);
      setError('');
      return true;
    } catch (err: any) {
      setError(err?.message || '读取失败');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { void load(); }, [load]);
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
                    <button type="button" className="cockpit-card-ai" title="用一句话交给 AI 调时间" onClick={() => onAskAi('把' + course.title + ' ' + day.date + ' ' + String(course.start).slice(11, 16) + ' 的这节课调一下时间')}>AI</button>
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

function PlanningView({ onAction, onAskAi, refreshKey, scheduleText, onDataChanged }: { onAction: (preset: ActionPreset) => void; onAskAi: (draft: string) => void; refreshKey: number; scheduleText?: string; onDataChanged: (options?: { silent?: boolean }) => Promise<unknown> }) {
  const [planning, setPlanning] = useState<PlanningData | null>(null);
  const [planningError, setPlanningError] = useState('');
  const [planningSection, setPlanningSection] = useState<'calendar' | 'readiness' | 'students' | 'candidates' | 'review'>('calendar');
  const [studentFilter, setStudentFilter] = useState<'issues' | 'all' | 'availability' | 'zone' | 'pending'>('issues');
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [templateCheck, setTemplateCheck] = useState<TemplateCheck | null>(null);
  const [checkingTemplate, setCheckingTemplate] = useState(false);
  const [confirmingReservationId, setConfirmingReservationId] = useState<string | null>(null);
  const [reservationFeedback, setReservationFeedback] = useState<Record<string, { ok: boolean; text: string }>>({});

  useEffect(() => {
    let cancelled = false;
    void api<PlanningData>('api/planning').then((data) => {
      if (cancelled) return;
      setPlanning(assertPlanningData(data));
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

      <nav className="planning-subnav" aria-label="筹备页内部导航">
        {([
          ['calendar', '周视图', planning.reservations.length + planning.templates.length],
          ['readiness', '准备度', summary.unzonedCount + summary.missingAvailabilityCount + summary.unconfirmedActiveCount],
          ['students', '学生资料', planning.students.filter((student) => student.issues.length).length],
          ['candidates', '候选与预留', templateIssueCount + summary.reservationCount],
          ['review', '复核与证据', summary.reviewCount + summary.overdueCount + failedSources.length],
        ] as const).map(([value, label, count]) => <button type="button" key={value} className={planningSection === value ? 'selected' : ''} aria-label={`${label}${count > 0 ? `，${count} 项` : ''}`} aria-pressed={planningSection === value} onClick={() => setPlanningSection(value)}><span>{label}</span>{count > 0 && <strong>{count}</strong>}</button>)}
      </nav>

      <PlanningWeekView planning={planning} hidden={planningSection !== 'calendar'} onConfirmReservation={confirmReservation} onAction={onAction} confirmingReservationId={confirmingReservationId} reservationFeedback={reservationFeedback} />

      <section className="planning-stage-grid" aria-label="筹备进度" hidden={planningSection !== 'readiness'}>
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

      <section className="planning-summary-strip" hidden={planningSection !== 'readiness'}>
        <span><i className="dot amber" />未分区 <strong>{summary.unzonedCount}</strong></span>
        <span><i className="dot blue" />缺候选时间 <strong>{summary.missingAvailabilityCount}</strong></span>
        <span><i className="dot ink" />未确认在读 <strong>{summary.unconfirmedActiveCount}</strong></span>
        <span><i className="dot sage" />待定名单 <strong>{summary.pendingCount}</strong></span>
        <span><i className="dot rose" />出游约束 <strong>{summary.activeVacationCount}</strong></span>
        <span className="planning-contract">contract {planning.contract.version ?? '—'} · schema {planning.contract.schemaVersion ?? '—'} · {formatRange(planning.range)}</span>
      </section>

      <section className="planning-overview-grid" hidden={planningSection !== 'readiness'}>
        <div className="panel planning-overview-card">
          <div><p className="eyebrow">当前优先级</p><h3>先把学生资料补到可排</h3><span>{summary.activeStudentCount - coreReadyCount} 人仍有关键资料缺口。</span></div>
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
            {(summary.reviewCount + summary.overdueCount + failedSources.length) > 0 && <button type="button" onClick={() => setPlanningSection('review')}>处理复核与异常</button>}
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
                  <button type="button" onClick={() => onAction({ operation: 'reservation_update', reservationId: reservation.reservation_id, date: reservation.reservation_date, time: reservation.start_time, duration: reservation.duration, zone: reservation.zone || '', note: reservation.note || '' })}>调整时间</button>
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

      {planningSection === 'review' && (planning.reviews.length > 0 || summary.overdueCount > 0) && <section className="panel review-queue-panel">
        <PanelHeading title="历史课程复核" meta={`${planning.reviews.length} 节待确认 · ${summary.overdueCount} 节过期待转入`} action={summary.overdueCount ? `处理 ${summary.overdueCount} 节过期课` : undefined} onAction={summary.overdueCount ? () => onAction({ operation: 'quarantine_overdue' }) : undefined} />
        <div className="review-card-list">{planning.reviews.map((course) => <article className="review-card" key={course.course_id}>
          <div><strong>{course.student}</strong><span>{course.date} · {course.start_time}-{course.end_time}</span></div>
          <div><button type="button" onClick={() => onAction({ operation: 'course_review_resolve', courseId: course.course_id, resolution: 'done' })}>确认已完成</button><button type="button" onClick={() => onAction({ operation: 'course_review_resolve', courseId: course.course_id, resolution: 'cancelled' })}>确认没上</button></div>
        </article>)}</div>
      </section>}

      {planningSection === 'review' && planning.reviews.length === 0 && summary.overdueCount === 0 && <section className="panel"><Empty title="当前没有待复核课程" text="过期课程和人工复核队列均已清空。" compact /></section>}

      <section className="planning-detail-grid" hidden={planningSection !== 'review'}>
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

function PlanningWeekView({ planning, hidden, onConfirmReservation, onAction, confirmingReservationId, reservationFeedback }: {
  planning: PlanningData;
  hidden: boolean;
  onConfirmReservation: (reservationId: string) => Promise<void>;
  onAction: (preset: ActionPreset) => void;
  confirmingReservationId: string | null;
  reservationFeedback: Record<string, { ok: boolean; text: string }>;
}) {
  const [mode, setMode] = useState<'reservation' | 'template'>('reservation');
  const [openedEntryId, setOpenedEntryId] = useState<string | null>(null);
  const dragScroll = useHorizontalDrag();
  const [weekMonday, setWeekMonday] = useState(planning.weekMonday);
  const [compactDays, setCompactDays] = useState(() => window.matchMedia('(max-width: 900px)').matches);
  const [dayPage, setDayPage] = useState(0);
  const weekdays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const dates = useMemo(() => buildWeekDates(`${weekMonday}..${weekMonday}`, weekMonday), [weekMonday]);
  const dayPageCount = 3;
  const visibleDateSlots = useMemo<Array<string | null>>(() => compactDays ? buildWeekPageSlots(dates, dayPage, 3) : dates, [compactDays, dates, dayPage]);

  useEffect(() => {
    setWeekMonday(planning.weekMonday);
  }, [planning.weekMonday]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    const update = () => setCompactDays(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    setDayPage(0);
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
  const canvasMinWidth = compactDays ? `calc(100% * ${visibleLaneUnits / visibleDateSlots.length})` : `${Math.ceil(1080 * visibleLaneUnits / visibleDateSlots.length)}px`;
  const visibleEntries = compactDays ? entries.filter((entry) => visibleDateSlots.includes(entry.date)) : entries;
  const { startHour, endHour } = calendarHourBounds(visibleEntries);
  const hourHeight = compactDays ? 76 : 64;
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
        {compactDays && <div className="planning-day-page-nav" role="group" aria-label="切换本周日期页">
          <button type="button" disabled={dayPage === 0} onClick={() => setDayPage((current) => Math.max(0, current - 1))}>‹ 上一页</button>
          <strong>第 {dayPage + 1}/{dayPageCount} 页 · 每页 3 天</strong>
          <button type="button" disabled={dayPage === dayPageCount - 1} onClick={() => setDayPage((current) => Math.min(dayPageCount - 1, current + 1))}>下一页 ›</button>
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
    {entries.length ? <div className="planning-week-scroll draggable-week-scroll" role="region" tabIndex={0} aria-label="筹备周视图，可使用方向键或触控横向浏览" {...dragScroll}>
      <div className={compactDays ? 'planning-week-canvas compact-page' : 'planning-week-canvas'} style={{ minWidth: canvasMinWidth }}>
        <div className="planning-week-header" style={{ gridTemplateColumns: gridTemplate }}>
          <div className="planning-week-corner">时间</div>
          {visibleDateSlots.map((date, slotIndex) => date ? <div className={date === planning.localDate ? 'planning-week-day-header today' : 'planning-week-day-header'} key={date}>
            <span>{weekdays[dates.indexOf(date)]}</span><strong>{Number(date.slice(8, 10))}</strong><small>{byDate.get(date)?.length || 0} 项</small>
          </div> : <div className="planning-week-day-header empty-slot" key={`empty-${slotIndex}`} aria-hidden="true" />)}
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
                        }}>调整时间</button>
                        <button type="button" className="primary" disabled={confirmDisabled} aria-busy={isBusy} onClick={() => {
                          const pending = onConfirmReservation(item.reservationId!);
                          if (pending && typeof pending.then === "function") {
                            void pending.finally(() => setOpenedEntryId(null));
                          }
                        }}>{isBusy ? '确认中…' : anyReservationBusy ? '处理中…' : item.stateClass === 'paused' ? '学生已暂停' : item.blockerText ? '暂不能确认' : '确认落课'}</button>
                      </> : <>
                        <button type="button" className="secondary" onClick={() => onAction({ operation: 'course_move', student: item.student, fromDate: item.date, fromTime: item.start_time, toDate: item.date, toTime: item.start_time, duration: item.duration })}>调整时间</button>
                        <button type="button" className="danger" onClick={() => onAction({ operation: 'course_cancel', student: item.student, date: item.date, time: item.start_time })}>本次不上</button>
                      </>}
                    </div>
                    {(item.blockerText || feedback) && <small className={feedback?.ok ? 'ok' : 'error'}>{feedback?.text || item.blockerText}</small>}
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

function AffairCard({ item, onInspect, onPrepare, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
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
          <span>截止{daysLeft != null && !closed ? ` · 剩 ${daysLeft} 天` : ''}</span>
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
        {feedback ? <small className={feedback.ok ? 'affair-feedback ok' : 'affair-feedback error'}>{feedback.text}</small> : null}
      </div>
      <div className="affair-card-actions">
        {!closed && <>
          <button type="button" className="affair-do primary" onClick={() => onPrepare({ operation: 'affair_complete', id: item.id, expectedVersion: item.version })}>完成</button>
          {item.retry && onRetry
            ? <button type="button" className="affair-do secondary" disabled={Boolean(retryingId) || Boolean(feedback?.ok)} aria-busy={retrying} onClick={() => void onRetry(item)}>{retrying ? '处理中…' : feedback?.buttonLabel || '没约上'}</button>
            : <button type="button" className="affair-do quiet" onClick={() => onPrepare({ operation: 'affair_cancel', id: item.id, expectedVersion: item.version })}>取消</button>}
        </>}
      </div>
    </article>
  );
}

function AffairsView({ pending, affairs, onPrepare, onInspect, onRetry, retryingId, feedback }: {
  pending: TimelineItem[];
  affairs: TimelineItem[];
  onPrepare: (preset: ActionPreset) => void;
  onInspect: InspectHandler;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback: Record<string, AffairFeedback>;
}) {
  const closedStatuses = new Set(['completed', 'cancelled', '已完成', '已取消']);
  const scheduledAffairs = affairs
    .filter((item) => !closedStatuses.has(item.status))
    .sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')));
  const closedAffairs = affairs
    .filter((item) => closedStatuses.has(item.status))
    .sort((a, b) => String(itemDate(b) || '').localeCompare(String(itemDate(a) || '')));

  return (
    <div className="view-stack">
      <PageTitle eyebrow="事务" title="办事队列" description="待确认、重试和当前时间范围内的事务集中展示。" />
      <section className="content-grid affairs-grid">
        <div className="panel wide">
          <PanelHeading title="待处理" meta={`${pending.length} 项`} />
          {pending.length ? pending.map((item) => <AffairCard key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onRetry={onRetry} retryingId={retryingId} feedback={feedback[item.id]} />) : <Empty title="没有待处理事务" text="当前队列没有积压。" />}
        </div>
        <div className="panel affair-record-panel">
          <section className="affair-record-group scheduled">
            <PanelHeading title="已安排" meta={`${scheduledAffairs.length} 项`} />
            {scheduledAffairs.length ? scheduledAffairs.map((item) => <AffairCard key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onRetry={onRetry} retryingId={retryingId} feedback={feedback[item.id]} />) : <Empty title="暂无已安排事务" text="当前时间范围内没有进行中的事务。" compact />}
          </section>
          <section className="affair-record-group completed">
            <PanelHeading title="已完成／已取消" meta={`${closedAffairs.length} 项`} />
            {closedAffairs.length ? closedAffairs.map((item) => <AffairCard key={item.id} item={item} onInspect={onInspect} onPrepare={onPrepare} onRetry={onRetry} retryingId={retryingId} feedback={feedback[item.id]} />) : <Empty title="暂无完成记录" text="结束后的事务会归档到这里。" compact />}
          </section>
        </div>
      </section>
    </div>
  );
}

function ActionsView({ pending, students, preset, aiDraft, preview, busy, onPreview, onAiPreview, onCommit, onClear, onClose }: {
  pending: TimelineItem[];
  students: Student[];
  preset: ActionPreset | null;
  aiDraft: { text: string; nonce: number };
  preview: PreviewResponse | null;
  busy: boolean;
  onPreview: (input: Record<string, unknown>) => Promise<void>;
  onAiPreview: (preview: PreviewResponse) => void;
  onCommit: () => Promise<void>;
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
      <AiActionWorkspace initialDraft={aiDraft} preview={preview} busy={busy} onPreview={onAiPreview} onCommit={onCommit} onClear={onClear} onClose={onClose} />
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
              <option value="affair_complete">完成事务</option>
              <option value="affair_retry_next">推进重试日期</option>
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

function PreviewSummary({ preview, busy, onCommit, onClose }: {
  preview: PreviewResponse;
  busy: boolean;
  onCommit: () => Promise<void>;
  onClose: () => void;
}) {
  const operation = preview.operation || '';
  const input = (preview.input as Record<string, unknown> | undefined) || {};
  const rows = Object.entries(input).filter(([key, value]) => value != null && value !== '' && !key.startsWith('_'));
  const affected = (preview.result as any)?.affected_dates as string[] | undefined;
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

function AiActionWorkspace({ initialDraft, preview, busy, onPreview, onCommit, onClear, onClose }: {
  initialDraft: { text: string; nonce: number };
  preview: PreviewResponse | null;
  busy: boolean;
  onPreview: (preview: PreviewResponse) => void;
  onCommit: () => Promise<void>;
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
    onClear();
  }

  async function sendMessage() {
    const message = draft.trim();
    if (!message || thinking) return;
    const requestId = aiRequestGateRef.current.begin();
    const history = messages.slice(-10);
    setMessages((current) => [...current, { role: 'user', text: message }]);
    setDraft('');
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
      setMessages((current) => [...current, { role: 'assistant', text: data.reply || '方案已经生成，请检查右侧预演。' }]);
      if (data.status === 'ready' && data.preview) {
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
            <button type="button" className="primary-button" onClick={() => void sendMessage()} disabled={!draft.trim() || thinking}>{thinking ? '正在规划…' : '让 AI 处理'}</button>
          </div>
          <p className="ai-footnote">Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。</p>
        </div>
        <div className="ai-result-column">
          <PanelHeading title="AI 预演" meta={preview?.token ? `令牌 ${preview.token.slice(0, 8)}…` : '等待指令'} />
          {!preview && <Empty title="等你说一句" text="我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" />}
          {preview && <PreviewSummary preview={preview} busy={busy} onCommit={onCommit} onClose={onClose} />}
        </div>
      </div>
    </section>
  );
}

function ContextDrawerContent({ view, dashboard, onPrepare, onRetry, retryingId, affairFeedback, onSync }: {
  view: ContextView;
  dashboard: Dashboard;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  affairFeedback: Record<string, AffairFeedback>;
  onSync: () => void;
}) {
  if (view.kind === 'system') return <SystemView dashboard={dashboard} onSync={onSync} embedded />;
  const items = view.kind === 'day'
    ? dashboard.items.filter((item) => itemDateKey(item) === view.date).sort((a, b) => String(itemDate(a) || '').localeCompare(String(itemDate(b) || '')))
    : [view.item];
  if (!items.length) return <Empty title="当天没有安排" text="当前时间范围内没有课程或事务。" />;
  return <div className="context-item-list">
    {items.map((item) => <ContextItemCard
      key={item.id}
      item={item}
      onPrepare={onPrepare}
      onRetry={onRetry}
      retryingId={retryingId}
      feedback={item.domain === 'affair' ? affairFeedback[item.id] : undefined}
    />)}
  </div>;
}

function ContextItemCard({ item, onPrepare, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const date = itemDate(item);
  const finished = ['completed', 'cancelled', '已完成', '已取消'].includes(item.status);
  return <section className={`context-item-card ${itemStateClass(item)}${isTemporaryItem(item) ? ' temporary' : ''}`} data-item-id={item.id}>
    <header>
      <div><span className={`context-domain ${item.domain}`}>{item.domain === 'course' ? '课程' : '事务'}</span><time>{date ? `${formatDate(date, { month: 'long', day: 'numeric', weekday: 'short' })} ${formatTime(date)}` : '时间待定'}</time></div>
      <Status value={item.status} />
    </header>
    <h3>{item.title}</h3>
    <p>{item.domain === 'course' ? `${item.duration || '—'} 分钟 · ${item.note || '常规课程'}` : item.note || item.window_label || '暂无补充说明'}</p>
    {feedback && <small className={feedback.ok ? 'context-feedback ok' : 'context-feedback error'}>{feedback.text}</small>}
    {!finished && <div className="context-item-actions">
      {item.domain === 'course' ? <>
        <button type="button" className="primary-button" onClick={() => onPrepare({ operation: 'course_move', student: item.title, fromDate: item.start_at?.slice(0, 10), fromTime: item.start_at?.slice(11, 16), toDate: item.start_at?.slice(0, 10), toTime: item.start_at?.slice(11, 16), duration: item.duration })}>调整时间…</button>
        <button type="button" className="row-action-button quiet-danger" onClick={() => onPrepare({ operation: 'course_cancel', student: item.title, date: item.start_at?.slice(0, 10), time: item.start_at?.slice(11, 16) })}>本次不上…</button>
      </> : <>
        <button type="button" className="primary-button" onClick={() => onPrepare({ operation: 'affair_complete', id: item.id, expectedVersion: item.version })}>完成…</button>
        {item.retry
          ? <button type="button" className={feedback?.ok ? 'row-action-button quick-success' : 'row-action-button'} disabled={Boolean(retryingId) || Boolean(feedback?.ok)} onClick={() => void onRetry(item)}>{retryingId === item.id ? '处理中…' : feedback?.buttonLabel || '没约上'}</button>
          : <button type="button" className="row-action-button quiet-danger" onClick={() => onPrepare({ operation: 'affair_cancel', id: item.id, expectedVersion: item.version })}>取消…</button>}
      </>}
    </div>}
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

function CalendarHealthPanel({ onSync }: { onSync: () => void }) {
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
            {!inSync && <button type="button" className="primary-button" onClick={onSync}>打开同步操作</button>}
          </div>
        </>
      )}
    </div>
  );
}

function SystemView({ dashboard, onSync, embedded = false }: { dashboard: Dashboard; onSync: () => void; embedded?: boolean }) {
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
        <div className="panel action-panel">
          <p className="eyebrow">飞书看板</p>
          <h3>同步前会先预演。</h3>
          <p>正式同步固定使用 <code>--prune</code>，清理已不存在的受管事件。</p>
          <button type="button" className="primary-button" onClick={onSync}>打开同步操作</button>
        </div>
      </section>
      <CalendarHealthPanel onSync={onSync} />
      <VersionPanel />
    </div>
  );
}

function NextCourseBanner({ course, advice, onOpen, onPrepare }: { course: TimelineItem | null; advice: Dashboard['commuteAdvice']; onOpen: (trigger: HTMLElement) => void; onPrepare: (preset: ActionPreset) => void }) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const closeRef = useCloseOnOutside<HTMLElement>(actionsOpen, () => setActionsOpen(false));
  if (!course) {
    return <section className="next-course-banner empty-next"><div><p className="eyebrow">下一节课</p><h3>未来范围内没有课程</h3></div></section>;
  }
  return (
    <section
      ref={closeRef}
      className={`next-course-banner next-course-open contextual-action-host ${itemStateClass(course)}${isTemporaryItem(course) ? ' temporary' : ''} actionable${actionsOpen ? ' action-open' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={actionsOpen}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        if (window.matchMedia('(hover: none)').matches) setActionsOpen((current) => !current);
        else onOpen(event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') { event.preventDefault(); onOpen(event.currentTarget); }
        else if (event.key === ' ') { event.preventDefault(); setActionsOpen((current) => !current); }
        else if (event.key === 'Escape') setActionsOpen(false);
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
      <div className="next-course-inline-action"><ItemActionButtons item={course} onPrepare={(preset) => { setActionsOpen(false); onPrepare(preset); }} /></div>
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

function Metric({ label, value, hint, tone }: { label: string; value: string | number; hint: string; tone: string }) {
  return <div className={`metric-card ${tone}`}><span>{label}</span><strong>{value}</strong><small>{hint}</small></div>;
}

function TimelineRow({ item, onInspect, onPrepare, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect?: InspectHandler;
  onPrepare?: (preset: ActionPreset) => void;
  onRetry?: (item: TimelineItem) => Promise<void>;
  retryingId?: string | null;
  feedback?: AffairFeedback;
}) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const finished = ['completed', 'cancelled', '已完成', '已取消', '已调课'].includes(item.status);
  const closeRef = useCloseOnOutside<HTMLDivElement>(actionsOpen, () => setActionsOpen(false));
  const actionable = Boolean(onPrepare) && !finished;
  return (
    <div
      ref={closeRef}
      className={`${onInspect ? 'timeline-row inspectable' : 'timeline-row'} contextual-action-host ${itemStateClass(item)}${isTemporaryItem(item) ? ' temporary' : ''}${actionable ? ' actionable' : ''}${actionsOpen ? ' action-open' : ''}`}
      data-item-id={item.id}
      role={onInspect ? 'button' : undefined}
      tabIndex={onInspect ? 0 : undefined}
      aria-expanded={actionable ? actionsOpen : undefined}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        if (actionable && window.matchMedia('(hover: none)').matches) setActionsOpen((current) => !current);
        else onInspect?.(item, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onInspect) { event.preventDefault(); onInspect(item, event.currentTarget); }
        else if (event.key === ' ' && actionable) { event.preventDefault(); setActionsOpen((current) => !current); }
        else if (event.key === 'Escape') setActionsOpen(false);
      }}
    >
      <div className={`domain-dot ${item.domain}`} />
      <time>{formatTime(itemDate(item)) || '待定'}</time>
      <div className="row-main">
        <strong>{item.title}</strong>
        <span>{item.domain === 'course' ? `${item.duration || '—'} 分钟` : item.note || item.window_label || '事务'}</span>
        {feedback && <small className={feedback.ok ? 'course-feedback ok' : 'course-feedback error'}>{feedback.text}</small>}
      </div>
      <div className="timeline-actions"><Status value={item.status} /></div>
      {actionable && onPrepare && <div className="row-inline-action"><ItemActionButtons item={item} onPrepare={(preset) => { setActionsOpen(false); onPrepare(preset); }} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>}
    </div>
  );
}

function AffairRow({ item, onInspect, onPrepare, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const closeRef = useCloseOnOutside<HTMLDivElement>(actionsOpen, () => setActionsOpen(false));
  const finished = ['completed', 'cancelled', '已完成', '已取消'].includes(item.status);
  return (
    <div
      ref={closeRef}
      className={`affair-row contextual-action-host ${itemStateClass(item)}${finished ? '' : ' actionable'}${actionsOpen ? ' action-open' : ''}`}
      data-item-id={item.id}
      role="button"
      tabIndex={0}
      aria-expanded={finished ? undefined : actionsOpen}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        if (!finished && window.matchMedia('(hover: none)').matches) setActionsOpen((current) => !current);
        else onInspect(item, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') { event.preventDefault(); onInspect(item, event.currentTarget); }
        else if (event.key === ' ' && !finished) { event.preventDefault(); setActionsOpen((current) => !current); }
        else if (event.key === 'Escape') setActionsOpen(false);
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
        {feedback && <small className={feedback.ok ? 'affair-feedback ok' : 'affair-feedback error'}>{feedback.text}</small>}
      </div>
      {!finished && <div className="affair-row-inline-action"><ItemActionButtons item={item} onPrepare={(preset) => { setActionsOpen(false); onPrepare(preset); }} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>}
    </div>
  );
}

function QuickPendingItem({ item, onInspect, onPrepare, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const closeRef = useCloseOnOutside<HTMLDivElement>(actionsOpen, () => setActionsOpen(false));
  return <div
    ref={closeRef}
    className={`quick-pending-item contextual-action-host ${itemStateClass(item)} actionable${actionsOpen ? ' action-open' : ''}`}
    data-item-id={item.id}
    role="button"
    tabIndex={0}
    aria-expanded={actionsOpen}
    onClick={(event) => {
      if ((event.target as HTMLElement).closest('button')) return;
      if (window.matchMedia('(hover: none)').matches) setActionsOpen((current) => !current);
      else onInspect(item, event.currentTarget);
    }}
    onKeyDown={(event) => {
      if (event.key === 'Enter') { event.preventDefault(); onInspect(item, event.currentTarget); }
      else if (event.key === ' ') { event.preventDefault(); setActionsOpen((current) => !current); }
      else if (event.key === 'Escape') setActionsOpen(false);
    }}
  >
    <div className="quick-pending-main">
      <strong>{item.title}</strong>
      <span>{item.window_label || (item.next_prompt_at ? `下次提醒 ${formatDate(item.next_prompt_at)} ${formatTime(item.next_prompt_at)}` : '待处理')}</span>
      {feedback && <small className={feedback.ok ? 'affair-feedback ok' : 'affair-feedback error'}>{feedback.text}</small>}
    </div>
    <div className="quick-pending-actions"><Status value={item.status} /></div>
    <div className="quick-pending-inline-action"><ItemActionButtons item={item} onPrepare={(preset) => { setActionsOpen(false); onPrepare(preset); }} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>
  </div>;
}

function CompactItem({ item, onInspect, onPrepare, onRetry, retryingId, feedback }: {
  item: TimelineItem;
  onInspect: InspectHandler;
  onPrepare: (preset: ActionPreset) => void;
  onRetry: (item: TimelineItem) => Promise<void>;
  retryingId: string | null;
  feedback?: AffairFeedback;
}) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const closeRef = useCloseOnOutside<HTMLDivElement>(actionsOpen, () => setActionsOpen(false));
  const finished = ['completed', 'cancelled', '已完成', '已取消'].includes(item.status);
  return (
    <div
      ref={closeRef}
      className={`compact-item inspectable contextual-action-host ${itemStateClass(item)}${finished ? '' : ' actionable'}${actionsOpen ? ' action-open' : ''}`}
      data-item-id={item.id}
      role="button"
      tabIndex={0}
      aria-expanded={finished ? undefined : actionsOpen}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        if (!finished && window.matchMedia('(hover: none)').matches) setActionsOpen((current) => !current);
        else onInspect(item, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') { event.preventDefault(); onInspect(item, event.currentTarget); }
        else if (event.key === ' ' && !finished) { event.preventDefault(); setActionsOpen((current) => !current); }
        else if (event.key === 'Escape') setActionsOpen(false);
      }}
    >
      <div>
        <strong>{item.title}</strong>
        <span>{item.window_label || formatDate(itemDate(item))}</span>
        {feedback && <small className={feedback.ok ? 'affair-feedback ok' : 'affair-feedback error'}>{feedback.text}</small>}
      </div>
      <Status value={item.status} />
      {!finished && <div className="compact-inline-action"><ItemActionButtons item={item} onPrepare={(preset) => { setActionsOpen(false); onPrepare(preset); }} onRetry={onRetry} retryingId={retryingId} feedback={feedback} /></div>}
    </div>
  );
}

function Status({ value }: { value: string }) {
  return <span className={`status ${statusTone(value)}`}>{statusLabels[value] || value}</span>;
}

function PanelHeading({ title, meta, action, onAction, actionDisabled }: {
  title: string;
  meta?: string;
  action?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
}) {
  return (
    <div className="panel-heading">
      <div><h3>{title}</h3>{meta && <span>{meta}</span>}</div>
      {action && <button type="button" onClick={onAction} disabled={actionDisabled}>{action}</button>}
    </div>
  );
}

function PageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="page-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></header>;
}

function Field({ name, label, type = 'text', placeholder, defaultValue, required = false }: { name: string; label: string; type?: string; placeholder?: string; defaultValue?: string | number; required?: boolean }) {
  return <label className="field"><span>{label}</span><input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} required={required} /></label>;
}

function Check({ label, ok, detail }: { label: string; ok: boolean; detail: string }) {
  return <div className="check-row"><span className={ok ? 'check ok' : 'check no'}>{ok ? '✓' : '!'}</span><div><strong>{label}</strong><small>{detail}</small></div></div>;
}

function Empty({ title, text, compact = false }: { title: string; text: string; compact?: boolean }) {
  return <div className={compact ? 'empty compact' : 'empty'}><strong>{title}</strong><span>{text}</span></div>;
}

function Notice({ tone, title, text }: { tone: string; title: string; text: string }) {
  return <div className={`notice ${tone}`} role={tone === 'error' ? 'alert' : 'status'}><strong>{title}</strong><span>{text}</span></div>;
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
