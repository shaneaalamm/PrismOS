import { AppShell } from '@/components/layout/AppShell'

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return <AppShell title="Daily Targets">{children}</AppShell>
}
