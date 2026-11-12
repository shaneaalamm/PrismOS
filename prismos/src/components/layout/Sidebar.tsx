'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { getProfile } from '@/lib/db'

const dockItems = [
  { href: '/dashboard',    label: 'Dashboard' },
  { href: '/resume',       label: 'Resume' },
  { href: '/studies',      label: 'Studies' },
  { href: '/tasks',        label: 'Tasks' },
  { href: '/roadmap',      label: 'Roadmap' },
  { href: '/analytics',    label: 'Analytics' },
  { href: '/ai-predictor', label: 'XAI Predictor' },
  { href: '/settings',     label: 'Settings' },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  isMobile?: boolean
}

export function Sidebar(_props: SidebarProps) {
  const pathname = usePathname()
  const [profileName, setProfileName] = useState<string>('Shane')

  useEffect(() => {
    getProfile().then(data => {
      if (data?.full_name) {
        setProfileName(data.full_name)
      }
    })
  }, [])

  return (
    <>
      {/* ── FLOATING BOTTOM PILL NAVIGATION DOCK (All 8 Buttons) ── */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[96vw]">
        <nav
          aria-label="Primary Bottom Navigation"
          className="flex items-center overflow-x-auto no-scrollbar rounded-full bg-[#FAF9F5]/95 dark:bg-[#121212]/95 backdrop-blur-md border-2 border-[#151413] dark:border-[#383838] px-3 sm:px-5 py-2 shadow-[0_4px_0_0_#151413] dark:shadow-[0_4px_0_0_#000000]"
        >
          {dockItems.map(({ href, label }, index) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <div key={href} className="flex items-center shrink-0">
                <Link
                  href={href}
                  className={cn(
                    'flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-mono text-xs sm:text-[13px] tracking-tight transition-colors whitespace-nowrap',
                    active
                      ? 'font-bold text-[#151413] dark:text-[#FFFFFF]'
                      : 'font-medium text-[#5A5751] dark:text-[#9E9E9E] hover:text-[#151413] dark:hover:text-[#F2F2EE]'
                  )}
                >
                  {active && (
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-[#1B3B2B] dark:bg-[#34D399] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{label}</span>
                </Link>
                {index < dockItems.length - 1 && (
                  <span
                    className="h-3.5 w-[1px] bg-[#D0CCC0] dark:bg-[#2E2E2E] mx-0.5 sm:mx-1 shrink-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </nav>
      </div>

      {/* ── BOTTOM-RIGHT STUDENT SIGNATURE BLOCK ── */}
      <Link
        href="/settings"
        className="fixed bottom-4 right-6 z-40 hidden xl:flex flex-col items-end text-right group focus:outline-none"
      >
        <span className="text-sm font-bold tracking-tight text-[#151413] dark:text-[#F2F2EE] group-hover:text-[#EA4316] transition-colors">
          {profileName}
        </span>
        <span className="text-[11px] text-[#6E6B64] dark:text-[#888888]">
          Student signature
        </span>
      </Link>
    </>
  )
}