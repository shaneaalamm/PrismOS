'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { loginAction } from '@/app/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Eye, EyeOff, AlertCircle } from 'lucide-react'

// Inner component uses useSearchParams — must be inside Suspense
function LoginForm() {
  const searchParams = useSearchParams()
  const [showPw, setShowPw] = useState(false)
  const [pending, setPending] = useState(false)

  const errorMsg = searchParams.get('error')
  const message = searchParams.get('message')

  useEffect(() => {
    // Auto-bypass to dashboard
    window.location.href = '/dashboard'
  }, [])

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="text-sm text-muted-foreground">Welcome to PrismOS Dashboard</p>
      </div>

      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-center">
        <p className="text-xs text-primary font-medium mb-2">Demo Mode Active — Instant Access</p>
        <Link href="/dashboard">
          <Button type="button" className="w-full bg-primary text-primary-foreground font-semibold">
            Open Dashboard Now →
          </Button>
        </Link>
      </div>

      <form action={loginAction} onSubmit={() => setPending(true)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="student@galgotiasuniversity.edu.in" required autoComplete="email" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password" name="password"
              type={showPw ? 'text' : 'password'}
              placeholder="••••••••" required autoComplete="current-password"
            />
            <button type="button" onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={pending}>
          {pending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
          {pending ? 'Entering…' : 'Sign In'}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href="/auth/signup" className="text-primary hover:underline font-medium">Create one</Link>
      </p>
    </div>
  )
}

// Outer page wraps inner component in Suspense — required by Next.js 14
// for any component that uses useSearchParams() during static generation
export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-32 bg-secondary rounded" />
        <div className="space-y-3">
          <div className="h-10 bg-secondary rounded-lg" />
          <div className="h-10 bg-secondary rounded-lg" />
          <div className="h-12 bg-secondary rounded-lg" />
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
