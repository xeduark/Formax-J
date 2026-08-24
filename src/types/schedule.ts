export interface ScheduleSlot {
  time: string;
  location: string;
  sessionType: 'escuela_basica' | 'pista';
  statusText?: string;
  notes?: string;
}

export interface DaySchedule {
  dayName: string;
  subtitle: string;
  isSpecial?: boolean;
  slots: ScheduleSlot[];
}

export interface ScheduleData {
  badge?: string;
  subtitle?: string;
  note?: string;
  footerNote?: string;
  days: DaySchedule[];
}

export interface SlotCardProps {
  scheduleSlot: ScheduleSlot;
  isLast?: boolean;
}

// ✅ Props para componentes UI (exportadas para reuso seguro)
export interface SectionHeaderProps { badge?: string; title: string; subtitle?: string; }
export interface AlertNoteProps { message: string; variant?: 'warning' | 'info'; }
export interface DayCardProps { day: DaySchedule; }
export interface ScheduleLegendProps { items: Array<{ label: string; color: string; icon?: string }>; }
export interface FooterNoteProps { html: string; }