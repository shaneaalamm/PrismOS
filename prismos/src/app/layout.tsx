import type { Metadata } from 'next'
import { Playfair_Display, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PrismOS — Personal Academic & Career Telemetry OS',
    template: '%s | PrismOS',
  },
  description: 'Editorial telemetry dashboard for tracking your career roadmap, syllabus progress, daily execution plan, and XAI academic predictions.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#F6F5F0] dark:bg-[#050505] text-[#151413] dark:text-[#F2F2EE] relative overflow-x-hidden selection:bg-[#EA4316] selection:text-white">
        {/* Subtle tactile paper grain overlay (zero blue undertones) */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.025] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}