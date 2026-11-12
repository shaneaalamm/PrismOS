import { AppShell } from '@/components/layout/AppShell'

export default function StudiesLayout({ children }: { children: React.ReactNode }) {
  return <AppShell title="Study Dashboard">{children}</AppShell>
}
