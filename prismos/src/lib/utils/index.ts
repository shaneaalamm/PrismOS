import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow, differenceInDays } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date | null, fmt = 'MMM d, yyyy'): string {
  if (!date) return 'N/A'
  return format(new Date(date), fmt)
}

export function timeAgo(date: string | Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export function daysUntil(date: string | Date | null): number | null {
  if (!date) return null
  return differenceInDays(new Date(date), new Date())
}

export function minutesToHours(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'urgent':
    case 'high':
      return 'bg-[#EA4316] text-white border border-[#151413] dark:border-[#FF6B42]/40 font-mono'
    case 'medium':
      return 'bg-[#1B3B2B] text-white border border-[#151413] dark:border-[#2D6A4F] font-mono'
    case 'low':
      return 'bg-[#2E2E2E] text-white border border-[#151413] dark:border-[#444444] font-mono'
    default:
      return 'text-muted-foreground bg-muted border-border font-mono'
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'completed':
      return 'bg-[#1B3B2B] text-white font-mono'
    case 'active':
    case 'in_progress':
      return 'bg-[#EA4316] text-white font-mono'
    case 'missed':
      return 'bg-[#EA4316]/20 text-[#EA4316] border border-[#EA4316]/40 font-mono'
    case 'pending':
      return 'bg-[#EAE7DD] text-[#151413] dark:bg-[#1E1E1E] dark:text-[#D4D4D0] font-mono'
    default:
      return 'text-muted-foreground bg-muted font-mono'
  }
}

export function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    dsa: 'bg-[#1B3B2B] text-white font-mono',
    backend: 'bg-[#151413] text-white dark:bg-[#262626] font-mono',
    ai_ml: 'bg-[#EA4316] text-white font-mono',
    project: 'bg-[#1B3B2B] text-white font-mono',
    internship: 'bg-[#EA4316] text-white font-mono',
    placement: 'bg-[#EA4316] text-white font-mono',
    system_design: 'bg-[#151413] text-white dark:bg-[#262626] font-mono',
  }
  return map[category] || 'text-muted-foreground bg-muted font-mono'
}

export function generateInitials(name: string | null): string {
  if (!name) return 'U'
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function calculateProgress(items: { done: boolean }[]): number {
  if (!items.length) return 0
  return Math.round((items.filter(i => i.done).length / items.length) * 100)
}
