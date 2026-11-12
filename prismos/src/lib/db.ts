'use client'

import { createClient } from '@/lib/supabase/client'
import type { Task, Skill, Project, Certification, WorkExperience, Subject, CareerGoal, CareerMilestone, Profile } from '@/lib/types'
import { CAREER_ROADMAP_SEED, SKILLS_SEED, SEMESTER4_SUBJECTS } from '@/lib/utils/seedData'

const db = () => createClient()

// ─── DEMO IN-MEMORY STATE (FOR INTERVIEWS / OFFLINE DATABASE) ────────────────
let memoryProfile: Profile = {
  id: 'demo-user-1',
  full_name: 'Shane',
  email: 'shane@galgotiasuniversity.edu.in',
  bio: 'Computer Science & Engineering Student passionate about AI & Systems Engineering.',
  avatar_url: null,
  university: 'Galgotias University',
  degree: 'B.Tech CSE',
  enrollment_no: 'GU23BTECH042',
  current_semester: 4,
  cgpa: 8.92,
  career_goal: 'AI & Systems Software Engineer',
  linkedin_url: 'https://linkedin.com/in/shane',
  github_url: 'https://github.com/shane',
  portfolio_url: 'https://prismos.dev',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

let memoryTasks: Task[] = [
  {
    id: 't-1',
    user_id: 'demo-user-1',
    title: 'Complete Deep Neural Networks assignment',
    description: 'Implement backpropagation algorithm from scratch in Python.',
    priority: 'urgent',
    status: 'in_progress',
    due_date: new Date().toISOString().split('T')[0],
    completed_at: null,
    tags: ['AIML', 'Academic'],
    related_subject_id: 'subj-3',
    created_at: new Date().toISOString(),
  },
  {
    id: 't-2',
    user_id: 'demo-user-1',
    title: 'Solve 3 LeetCode Graph problems',
    description: 'BFS, DFS, and Dijkstra on shortest path problems.',
    priority: 'high',
    status: 'pending',
    due_date: new Date().toISOString().split('T')[0],
    completed_at: null,
    tags: ['DSA', 'Placement'],
    related_subject_id: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 't-3',
    user_id: 'demo-user-1',
    title: 'Review Operating Systems process scheduling',
    description: 'Round Robin, Multilevel Queue Scheduling diagrams.',
    priority: 'medium',
    status: 'completed',
    due_date: new Date().toISOString().split('T')[0],
    completed_at: new Date().toISOString(),
    tags: ['OS', 'Revision'],
    related_subject_id: 'subj-4',
    created_at: new Date().toISOString(),
  },
  {
    id: 't-4',
    user_id: 'demo-user-1',
    title: 'Optimize PrismOS ML model inference latency',
    description: 'Benchmark SHAP tree explainer with FastAPI background task.',
    priority: 'high',
    status: 'pending',
    due_date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    completed_at: null,
    tags: ['PrismOS', 'Dev'],
    related_subject_id: null,
    created_at: new Date().toISOString(),
  }
]

let memorySubjects: Subject[] = SEMESTER4_SUBJECTS.map((s, idx) => ({
  id: `subj-${idx + 1}`,
  semester_id: 'sem-4',
  user_id: 'demo-user-1',
  name: s.name,
  code: s.code,
  credits: s.credits,
  progress: s.progress,
  priority: s.priority as 'high' | 'medium' | 'low',
  exam_date: new Date(Date.now() + (idx + 7) * 86400000).toISOString().split('T')[0],
  color: s.color,
  status: 'current',
  created_at: new Date().toISOString(),
  syllabus_topics: [
    { id: `top-${idx}-1`, topic: 'Core Theoretical Foundations', done: true },
    { id: `top-${idx}-2`, topic: 'Applied Problem Sets & Lab', done: true },
    { id: `top-${idx}-3`, topic: 'Advanced Applications & Review', done: false },
  ],
}))

let memoryGoals: CareerGoal[] = CAREER_ROADMAP_SEED.map((g, idx) => ({
  id: `goal-${idx + 1}`,
  user_id: 'demo-user-1',
  title: g.title,
  description: g.description,
  category: g.category as any,
  target_date: g.target_date,
  status: g.status as any,
  priority: g.priority,
  created_at: new Date().toISOString(),
  milestones: g.milestones.map((m, mIdx) => ({
    id: `m-${idx + 1}-${mIdx + 1}`,
    goal_id: `goal-${idx + 1}`,
    user_id: 'demo-user-1',
    title: m.title,
    description: null,
    target_date: m.target_date,
    status: m.status as any,
    created_at: new Date().toISOString(),
  })),
}))

let memoryAcademics = [
  {
    id: 'acad-1',
    user_id: 'demo-user-1',
    institution: 'Galgotias University',
    degree: 'B.Tech - Computer Science & Engineering',
    start_year: 2023,
    end_year: 2027,
    score: '8.92',
    score_type: 'CGPA',
    description: 'Pursuing specialization in Artificial Intelligence and Machine Learning.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'acad-2',
    user_id: 'demo-user-1',
    institution: 'Delhi Public School (CBSE)',
    degree: 'Class XII (Senior Secondary)',
    start_year: 2021,
    end_year: 2023,
    score: '94.2%',
    score_type: 'Percentage',
    description: 'Science stream (Physics, Chemistry, Mathematics, Computer Science).',
    created_at: new Date().toISOString(),
  }
]

let memoryProjects: Project[] = [
  {
    id: 'proj-1',
    user_id: 'demo-user-1',
    title: 'PrismOS: Academic & Career Telemetry OS',
    description: 'Engineered an AI-driven academic performance predictor using Random Forest & SHAP with automated career roadmaps and Pomodoro telemetry.',
    tech_stack: ['Next.js 14', 'TypeScript', 'FastAPI', 'Scikit-Learn', 'SHAP', 'Tailwind CSS'],
    github_url: 'https://github.com/shane/prismos',
    live_url: 'http://localhost:3000',
    start_date: '2026-01-01',
    end_date: null,
    status: 'in_progress',
    highlights: [
      'Built 14-feature student performance classifier achieving 86% accuracy',
      'Implemented explainable AI (SHAP) for transparent local feature attribution',
      'Architected responsive modern UI with real-time study analytics'
    ],
    created_at: new Date().toISOString(),
  },
  {
    id: 'proj-2',
    user_id: 'demo-user-1',
    title: 'High-Concurrency URL Dispatcher & Analytics API',
    description: 'Designed low-latency asynchronous microservice with Redis caching and PostgreSQL persistence.',
    tech_stack: ['Python', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL'],
    github_url: 'https://github.com/shane/fastapi-analytics',
    live_url: null,
    start_date: '2025-08-01',
    end_date: '2025-11-01',
    status: 'completed',
    highlights: ['Sub-15ms p99 latency', 'Comprehensive test coverage and Docker Compose workflow'],
    created_at: new Date().toISOString(),
  }
]

let memorySkills: Skill[] = SKILLS_SEED.map((s, idx) => ({
  id: `skill-${idx + 1}`,
  user_id: 'demo-user-1',
  name: s.name,
  category: s.category as any,
  proficiency: s.proficiency,
  created_at: new Date().toISOString(),
}))

let memoryCerts: Certification[] = [
  {
    id: 'cert-1',
    user_id: 'demo-user-1',
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    issue_date: '2025-09-15',
    expiry_date: null,
    credential_id: 'DL-2025-8839',
    file_url: null,
    cert_url: 'https://coursera.org',
    created_at: new Date().toISOString(),
  },
  {
    id: 'cert-2',
    user_id: 'demo-user-1',
    name: 'Problem Solving (Advanced)',
    issuer: 'HackerRank',
    issue_date: '2025-06-20',
    expiry_date: null,
    credential_id: 'HR-PS-5510',
    file_url: null,
    cert_url: 'https://hackerrank.com',
    created_at: new Date().toISOString(),
  }
]

let memoryExperience: WorkExperience[] = [
  {
    id: 'exp-1',
    user_id: 'demo-user-1',
    company: 'NextGen Tech Labs',
    role: 'Software Development Engineering Intern',
    start_date: '2025-06-01',
    end_date: '2025-08-31',
    is_current: false,
    description: 'Developed Python backend APIs and integrated PostgreSQL database pipelines.',
    skills_used: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    created_at: new Date().toISOString(),
  }
]

const DEFAULT_ANALYTICS_LOGS = Array.from({ length: 7 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() - (6 - i))
  return {
    id: `log-${i + 1}`,
    user_id: 'demo-user-1',
    date: d.toISOString().split('T')[0],
    study_minutes: [140, 195, 110, 240, 160, 210, 150][i],
    tasks_completed: [3, 4, 2, 5, 4, 6, 3][i],
    tasks_total: [4, 5, 3, 5, 5, 7, 4][i],
    focus_sessions: [3, 4, 2, 5, 3, 4, 3][i],
    streak_day: 4 + i,
  }
})

// ─── PROFILE ────────────────────────────────────────────────────────────────
export async function getProfile() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db().from('profiles').select('*').eq('id', user.id).single()
      if (data) return data
    }
  } catch {}
  return memoryProfile
}

export async function updateProfile(updates: Record<string, unknown>) {
  memoryProfile = { ...memoryProfile, ...updates } as Profile
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      await db().from('profiles').update(updates).eq('id', user.id)
    }
  } catch {}
  return { error: null }
}

// ─── TASKS ───────────────────────────────────────────────────────────────────
export async function getTasks() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db()
        .from('tasks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memoryTasks
}

export async function addTask(task: Partial<Task>) {
  const newTask: Task = {
    id: `t-${Date.now()}`,
    user_id: 'demo-user-1',
    title: task.title || 'Untitled Task',
    description: task.description || null,
    priority: task.priority || 'medium',
    status: task.status || 'pending',
    due_date: task.due_date || new Date().toISOString().split('T')[0],
    completed_at: null,
    tags: task.tags || [],
    related_subject_id: task.related_subject_id || null,
    created_at: new Date().toISOString(),
  }
  memoryTasks = [newTask, ...memoryTasks]

  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data, error } = await db().from('tasks').insert({ ...task, user_id: user.id }).select().single()
      if (data) return { data, error: error?.message }
    }
  } catch {}
  return { data: newTask, error: null }
}

export async function updateTask(id: string, updates: Partial<Task>) {
  memoryTasks = memoryTasks.map(t => (t.id === id ? { ...t, ...updates } : t))
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      await db().from('tasks').update(updates).eq('id', id).eq('user_id', user.id)
    }
  } catch {}
  return { error: null }
}

export async function deleteTask(id: string) {
  memoryTasks = memoryTasks.filter(t => t.id !== id)
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      await db().from('tasks').delete().eq('id', id).eq('user_id', user.id)
    }
  } catch {}
  return { error: null }
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export async function getSkills() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db().from('skills').select('*').eq('user_id', user.id).order('category')
      if (data && data.length > 0) return data
    }
  } catch {}
  return memorySkills
}

export async function addSkill(skill: Partial<Skill>) {
  const newSkill: Skill = {
    id: `skill-${Date.now()}`,
    user_id: 'demo-user-1',
    name: skill.name || 'Skill',
    category: skill.category || 'tool',
    proficiency: skill.proficiency || 50,
    created_at: new Date().toISOString(),
  }
  memorySkills.push(newSkill)
  return { data: newSkill, error: null }
}

export async function updateSkill(id: string, updates: Partial<Skill>) {
  memorySkills = memorySkills.map(s => (s.id === id ? { ...s, ...updates } : s))
  return { error: null }
}

export async function deleteSkill(id: string) {
  memorySkills = memorySkills.filter(s => s.id !== id)
  return { error: null }
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export async function getProjects() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db().from('projects').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memoryProjects
}

export async function addProject(project: Partial<Project>) {
  const newProj: Project = {
    id: `proj-${Date.now()}`,
    user_id: 'demo-user-1',
    title: project.title || 'New Project',
    description: project.description || null,
    tech_stack: project.tech_stack || [],
    github_url: project.github_url || null,
    live_url: project.live_url || null,
    start_date: project.start_date || null,
    end_date: project.end_date || null,
    status: project.status || 'in_progress',
    highlights: project.highlights || [],
    created_at: new Date().toISOString(),
  }
  memoryProjects.unshift(newProj)
  return { data: newProj, error: null }
}

export async function updateProject(id: string, updates: Partial<Project>) {
  memoryProjects = memoryProjects.map(p => (p.id === id ? { ...p, ...updates } : p))
  return { error: null }
}

export async function deleteProject(id: string) {
  memoryProjects = memoryProjects.filter(p => p.id !== id)
  return { error: null }
}

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export async function getCertifications() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db().from('certifications').select('*').eq('user_id', user.id).order('issue_date', { ascending: false })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memoryCerts
}

export async function addCertification(cert: Partial<Certification>) {
  const newCert: Certification = {
    id: `cert-${Date.now()}`,
    user_id: 'demo-user-1',
    name: cert.name || 'Certificate',
    issuer: cert.issuer || 'Issuer',
    issue_date: cert.issue_date || null,
    expiry_date: cert.expiry_date || null,
    credential_id: cert.credential_id || null,
    file_url: cert.file_url || null,
    cert_url: cert.cert_url || null,
    created_at: new Date().toISOString(),
  }
  memoryCerts.unshift(newCert)
  return { data: newCert, error: null }
}

export async function deleteCertification(id: string) {
  memoryCerts = memoryCerts.filter(c => c.id !== id)
  return { error: null }
}

// ─── WORK EXPERIENCE ─────────────────────────────────────────────────────────
export async function getWorkExperience() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db().from('work_experience').select('*').eq('user_id', user.id).order('start_date', { ascending: false })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memoryExperience
}

export async function addWorkExperience(exp: Partial<WorkExperience>) {
  const newExp: WorkExperience = {
    id: `exp-${Date.now()}`,
    user_id: 'demo-user-1',
    company: exp.company || 'Company',
    role: exp.role || 'Role',
    start_date: exp.start_date || null,
    end_date: exp.end_date || null,
    is_current: exp.is_current || false,
    description: exp.description || null,
    skills_used: exp.skills_used || [],
    created_at: new Date().toISOString(),
  }
  memoryExperience.unshift(newExp)
  return { data: newExp, error: null }
}

export async function deleteWorkExperience(id: string) {
  memoryExperience = memoryExperience.filter(e => e.id !== id)
  return { error: null }
}

// ─── SUBJECTS ────────────────────────────────────────────────────────────────
export async function getSubjects() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db()
        .from('subjects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memorySubjects
}

export async function addSubject(subject: Partial<Subject>) {
  const newSubj: Subject = {
    id: `subj-${Date.now()}`,
    semester_id: subject.semester_id || 'sem-4',
    user_id: 'demo-user-1',
    name: subject.name || 'New Subject',
    code: subject.code || 'CS000',
    credits: subject.credits || 3,
    progress: subject.progress || 0,
    priority: subject.priority || 'medium',
    exam_date: subject.exam_date || null,
    syllabus_topics: subject.syllabus_topics || [],
    color: subject.color || '#6366f1',
    status: subject.status || 'current',
    created_at: new Date().toISOString(),
  }
  memorySubjects.push(newSubj)
  return { data: newSubj, error: null }
}

export async function updateSubject(id: string, updates: Partial<Subject>) {
  memorySubjects = memorySubjects.map(s => (s.id === id ? { ...s, ...updates } : s))
  return { error: null }
}

export async function deleteSubject(id: string) {
  memorySubjects = memorySubjects.filter(s => s.id !== id)
  return { error: null }
}

// ─── CAREER GOALS ────────────────────────────────────────────────────────────
export async function getCareerGoals() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db()
        .from('career_goals')
        .select('*, milestones:career_milestones(*)')
        .eq('user_id', user.id)
        .order('priority', { ascending: false })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memoryGoals
}

export async function addCareerGoal(goal: Partial<CareerGoal>) {
  const newGoal: CareerGoal = {
    id: `goal-${Date.now()}`,
    user_id: 'demo-user-1',
    title: goal.title || 'Goal',
    description: goal.description || null,
    category: goal.category || 'backend',
    target_date: goal.target_date || null,
    status: goal.status || 'active',
    priority: goal.priority || 5,
    milestones: goal.milestones || [],
    created_at: new Date().toISOString(),
  }
  memoryGoals.unshift(newGoal)
  return { data: newGoal, error: null }
}

export async function updateCareerGoal(id: string, updates: Partial<CareerGoal>) {
  memoryGoals = memoryGoals.map(g => (g.id === id ? { ...g, ...updates } : g))
  return { error: null }
}

export async function addMilestone(milestone: Partial<CareerMilestone>) {
  const newM: CareerMilestone = {
    id: `m-${Date.now()}`,
    goal_id: milestone.goal_id || '',
    user_id: 'demo-user-1',
    title: milestone.title || 'Milestone',
    description: milestone.description || null,
    target_date: milestone.target_date || null,
    status: milestone.status || 'pending',
    created_at: new Date().toISOString(),
  }
  memoryGoals = memoryGoals.map(g => {
    if (g.id === milestone.goal_id) {
      return { ...g, milestones: [...(g.milestones || []), newM] }
    }
    return g
  })
  return { data: newM, error: null }
}

export async function updateMilestone(id: string, updates: Partial<CareerMilestone>) {
  memoryGoals = memoryGoals.map(g => ({
    ...g,
    milestones: g.milestones?.map(m => (m.id === id ? { ...m, ...updates } : m)),
  }))
  return { error: null }
}

export async function deleteCareerGoal(id: string) {
  memoryGoals = memoryGoals.filter(g => g.id !== id)
  return { error: null }
}

export async function deleteMilestone(id: string) {
  memoryGoals = memoryGoals.map(g => ({
    ...g,
    milestones: g.milestones?.filter(m => m.id !== id),
  }))
  return { error: null }
}

// ─── ANALYTICS ───────────────────────────────────────────────────────────────
export async function getAnalyticsLogs() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db()
        .from('analytics_logs')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .limit(30)
      if (data && data.length > 0) return data
    }
  } catch {}
  return DEFAULT_ANALYTICS_LOGS
}

export async function upsertAnalyticsLog(_log: { date: string; study_minutes?: number; tasks_completed?: number; tasks_total?: number; focus_sessions?: number }) {
  return { error: null }
}

export async function getFocusSessions() {
  return []
}

export async function addFocusSession(_session: { duration_minutes: number; session_type: string }) {
  return { error: null }
}

// ─── STUDY MATERIALS ─────────────────────────────────────────────────────────
export async function getStudyMaterials(_subjectId: string) {
  return []
}

export async function addStudyMaterial(material: {
  subject_id: string
  name: string
  type: string
  file_url?: string | null
  external_url?: string | null
  size_bytes?: number | null
}) {
  return { data: { id: `mat-${Date.now()}`, ...material }, error: null }
}

export async function deleteStudyMaterial(_id: string) {
  return { error: null }
}

export async function uploadMaterialFile(file: File, userId: string, subjectId: string): Promise<{ url: string | null; error: string | null }> {
  try {
    const supabase = db()
    const path = `${userId}/${subjectId}/${Date.now()}_${file.name.replace(/\s+/g, '_')}`
    const { error } = await supabase.storage.from('study-materials').upload(path, file, { cacheControl: '3600', upsert: false })
    if (!error) {
      const { data } = supabase.storage.from('study-materials').getPublicUrl(path)
      return { url: data.publicUrl, error: null }
    }
  } catch {}
  return { url: `https://example.com/materials/${file.name}`, error: null }
}

// ─── ACADEMICS (EDUCATION) ───────────────────────────────────────────────────
export async function getAcademics() {
  try {
    const { data: { user } } = await db().auth.getUser()
    if (user) {
      const { data } = await db()
        .from('academics')
        .select('*')
        .eq('user_id', user.id)
        .order('end_year', { ascending: false })
      if (data && data.length > 0) return data
    }
  } catch {}
  return memoryAcademics
}

export async function addAcademic(academic: any) {
  const newAcad = { id: `acad-${Date.now()}`, user_id: 'demo-user-1', ...academic }
  memoryAcademics.unshift(newAcad)
  return { data: newAcad, error: null }
}

export async function updateAcademic(id: string, updates: any) {
  memoryAcademics = memoryAcademics.map(a => (a.id === id ? { ...a, ...updates } : a))
  return { error: null }
}

export async function deleteAcademic(id: string) {
  memoryAcademics = memoryAcademics.filter(a => a.id !== id)
  return { error: null }
}

// ─── FOCUS TIME STATS (DASHBOARD) ───────────────────────────────────────────
export async function getFocusTimeStats() {
  return { today: 150, week: 760, lifetime: 2840 }
}
