import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  color: 'violet' | 'blue' | 'emerald' | 'amber' | 'rose' | 'cyan'
  trend?: { value: number; label: string; positive?: boolean }
  className?: string
  onClick?: () => void
}

export function StatCard({ title, value, subtitle, icon: Icon, trend, className, onClick }: StatCardProps) {
  return (
    <div
      className={cn(
        'telemetry-card p-4 flex flex-col justify-between h-full transition-transform hover:-translate-y-0.5',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5A5751] dark:text-[#9E9E9E]">
          {title}
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded border border-[#151413] dark:border-[#333333] bg-[#EAE7DD] dark:bg-[#1C1C1C] text-[#151413] dark:text-[#F2F2EE]">
          <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
        </div>
      </div>

      <div>
        <p className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#151413] dark:text-[#F2F2EE] tabular-nums">
          {value}
        </p>
        {subtitle && (
          <p className="font-mono text-[11px] text-[#6E6B64] dark:text-[#888888] mt-1">
            {subtitle}
          </p>
        )}
        {trend && (
          <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#1B3B2B] text-white font-mono text-[10px] font-bold">
            <span>{trend.positive !== false ? '+' : '-'}{Math.abs(trend.value)}</span>
            <span>{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  )
}