'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

interface AppShellProps {
  children: React.ReactNode
  title?: string
}

export function AppShell({ children, title }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F0] dark:bg-[#050505] text-[#151413] dark:text-[#F2F2EE] transition-colors duration-200">
      {/* Top Editorial Telemetry Header */}
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} title={title} />

      {/* Main Workspace Canvas (full width, bottom padded for floating dock) */}
      <main id="main-content" className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-3 pb-28">
        <div className="page-enter w-full">
          {children}
        </div>
      </main>

      {/* Bottom Floating Pill Dock (all 8 navigation items) + Student Signature */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  )
}