'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, LogOut } from 'lucide-react'
import { useTheme } from 'next-themes'
import { format } from 'date-fns'
import { createClient } from '@/lib/supabase/client'
import { logoutAction } from '@/app/auth/actions'

interface NavbarProps {
  onMenuClick?: () => void
  title?: string
}

export function Navbar({ title }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [streakDays, setStreakDays] = useState(4)
  const todayFormatted = format(new Date(), 'EEE, MMM d, yyyy').toUpperCase()

  useEffect(() => {
    setMounted(true)
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return
      supabase
        .from('analytics_logs')
        .select('streak_day')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .limit(1)
        .then(({ data }) => {
          if (data && data.length > 0 && data[0].streak_day) {
            setStreakDays(data[0].streak_day)
          }
        })
    })
  }, [])

  return (
    <header className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-5 pb-2 flex items-center justify-between gap-4">
      {/* Left: Brand Wordmark + Active Session Pill */}
      <div className="flex items-center gap-3.5">
        <Link href="/dashboard" className="focus:outline-none group">
          <span className="font-serif text-2xl sm:text-[28px] font-bold tracking-tight text-[#151413] dark:text-[#F2F2EE]">
            PrismOS
          </span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAE7DD] dark:bg-[#171717] border border-[#D5D1C5] dark:border-[#2C2C2C] text-[12px] font-medium text-[#151413] dark:text-[#D4D4D0]">
          <span className="h-2 w-2 rounded-full bg-[#1B3B2B] dark:bg-[#34D399] animate-pulse" />
          <span>Active Session</span>
        </div>

        {title && title !== 'Dashboard' && (
          <span className="hidden md:inline-block font-mono text-xs uppercase tracking-widest text-[#6E6B64] dark:text-[#888888] pl-2 border-l border-[#D5D1C5] dark:border-[#2C2C2C]">
            {title}
          </span>
        )}
      </div>

      {/* Right: Uppercase Monospace Date + Streak Pill + Theme Toggle + Sign Out */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        <span className="hidden sm:inline-block font-mono text-xs sm:text-[13px] tracking-wider text-[#2B2927] dark:text-[#CFCFCF]">
          {todayFormatted}
        </span>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA4316] text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#151413] dark:shadow-[2px_2px_0px_0px_#000000] border border-[#151413] dark:border-[#FF6B42]/40">
          <span role="img" aria-label="streak">🔥</span>
          <span>{streakDays}d streak</span>
        </div>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Light/Dark Mode"
            title="Toggle Light / Pitch-Black Dark Mode"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[#FAF9F5] dark:bg-[#141414] border-[1.5px] border-[#151413] dark:border-[#333333] text-[#151413] dark:text-[#F2F2EE] hover:bg-[#EAE7DD] dark:hover:bg-[#222222] transition-colors shadow-[2px_2px_0px_0px_#151413] dark:shadow-[2px_2px_0px_0px_#000000]"
          >
            {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
        )}

        <form action={logoutAction}>
          <button
            type="submit"
            title="Sign Out"
            aria-label="Sign Out"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[#FAF9F5] dark:bg-[#141414] border-[1.5px] border-[#151413] dark:border-[#333333] text-[#151413] dark:text-[#F2F2EE] hover:bg-[#EA4316] hover:text-white dark:hover:bg-[#EA4316] transition-colors shadow-[2px_2px_0px_0px_#151413] dark:shadow-[2px_2px_0px_0px_#000000]"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </header>
  )
}