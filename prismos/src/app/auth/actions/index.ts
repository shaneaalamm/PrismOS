'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

// ── LOGIN ──────────────────────────────────────────────────────────────────────
export async function loginAction(formData: FormData) {
  try {
    const supabase = createClient()
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    if (email && password) {
      await supabase.auth.signInWithPassword({ email, password })
    }
  } catch {
    // Ignore error in offline / demo mode
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// ── SIGNUP ─────────────────────────────────────────────────────────────────────
export async function signupAction(formData: FormData) {
  try {
    const supabase = createClient()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as string
    const university = formData.get('university') as string
    const degree = formData.get('degree') as string
    const current_semester = parseInt(formData.get('current_semester') as string) || null
    const cgpa = parseFloat(formData.get('cgpa') as string) || null

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

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// ── LOGOUT ─────────────────────────────────────────────────────────────────────
export async function logoutAction() {
  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/auth/login')
}