'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createClient } from '@/lib/supabase/server'

// ── LOGIN ──────────────────────────────────────────────────────────────────────
export async function loginAction(formData: FormData) {
  const email = (formData.get('email') as string) || 'student@galgotiasuniversity.edu.in'
  const password = formData.get('password') as string

  try {
    const supabase = createClient()
    if (email && password) {
      await supabase.auth.signInWithPassword({ email, password })
    }
  } catch {
    // Ignore error in offline / demo mode
  }

  const cookieStore = cookies()
  cookieStore.set('prismos_auth', 'authenticated', { path: '/' })
  cookieStore.set('prismos_user_email', email, { path: '/' })

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// ── SIGNUP ─────────────────────────────────────────────────────────────────────
export async function signupAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string
  const university = formData.get('university') as string
  const degree = formData.get('degree') as string
  const current_semester = parseInt(formData.get('current_semester') as string) || null
  const cgpa = parseFloat(formData.get('cgpa') as string) || null

  try {
    const supabase = createClient()
    if (email && password) {
      await supabase.auth.signUp({
        email,
        password,
        options: { 
          data: { 
            full_name: name,
            career_goal: role,
            university: university,
            degree: degree,
            current_semester: current_semester,
            cgpa: cgpa
          } 
        },
      })
    }
  } catch {
    // Ignore error in offline / demo mode
  }

  const cookieStore = cookies()
  cookieStore.set('prismos_auth', 'authenticated', { path: '/' })
  if (email) cookieStore.set('prismos_user_email', email, { path: '/' })
  if (name) cookieStore.set('prismos_user_name', name, { path: '/' })

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// ── LOGOUT ─────────────────────────────────────────────────────────────────────
export async function logoutAction() {
  try {
    const supabase = createClient()
    await supabase.auth.signOut()
  } catch {
    // Ignore error in offline / demo mode
  }

  const cookieStore = cookies()
  cookieStore.delete('prismos_auth')
  cookieStore.delete('prismos_user_email')
  cookieStore.delete('prismos_user_name')

  revalidatePath('/', 'layout')
  redirect('/auth/login')
}