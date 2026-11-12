import { AppShell } from '@/components/layout/AppShell'

export default function AIPredictorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppShell title="AI Predictor">{children}</AppShell>
}