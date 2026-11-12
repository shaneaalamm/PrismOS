# 🚀 PrismOS: AI-Powered Personal Productivity & Career OS

> A premium full-stack dashboard for tracking your career roadmap, study progress, daily tasks, and analytics. Built for modern engineering students, featuring an integrated Explainable AI (XAI) academic prediction engine.

*Developed as a core component of the "Student Academic Performance Prediction supported by Explainable AI" project — Galgotias University.*

## ✨ Features & Modules
| Module | Description |
|--------|-------------|
| **Dashboard** | Summary cards, today's top tasks, streak, exam countdown, career progress. |
| **AI Predictor** | Machine Learning dashboard that analyzes 14 student metrics to predict exam success, providing SHAP-based actionable insights. |
| **Roadmap** | Auto-seeded career path, milestone timeline, auto-generated tasks via Gemini AI, and 1-click Markdown export. |
| **Tasks** | Daily targets, Pomodoro timer, streak tracking, priority tags. |
| **Studies** | Semester & subject tracking, syllabus topics, exam dates, material upload. |
| **Analytics** | Study hours, productivity score, subject comparison, skill radar chart. |
| **Resume** | Skills, projects, certifications, experience, ATS PDF export. |
| **Settings** | Profile, appearance (dark/light), notifications, data export. |

## 🛠 Complete Tech Stack
### **Frontend (Next.js)**
* **Framework:** Next.js 14 (App Router, TypeScript)
* **Styling & UI:** Tailwind CSS, Radix UI components, Framer Motion
* **Charts:** Recharts
* **Deployment:** Vercel

### **Backend & Database**
* **Database & Auth:** Supabase (PostgreSQL + Row Level Security + SSR Auth)
* **Demo / Offline Mode:** Automatic fallback with rich seeded data for instant evaluation

### **Machine Learning & AI (FastAPI Microservice)**
* **Predictive Model:** **Random Forest Classifier** (Trained via Scikit-learn on UCI Student Performance Dataset)
* **Explainable AI (XAI):** **SHAP** (SHapley Additive exPlanations) for decoding model logic.
* **Generative AI:** Google **Gemini 2.5 Flash API** for dynamic roadmap generation.
* **ML Backend Framework:** FastAPI (Python), Uvicorn.

## 📂 Project Structure

```text
PrismOS/
├── prismos/                       # Next.js 14 Web Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/              # Login, Signup, Forgot Password
│   │   │   ├── dashboard/         # Home dashboard & Pomodoro
│   │   │   ├── resume/            # ATS Resume builder
│   │   │   ├── studies/           # Semester & syllabus tracking
│   │   │   ├── tasks/             # Daily task list
│   │   │   ├── roadmap/           # Career roadmap & export
│   │   │   ├── ai-predictor/      # XAI Student Performance Predictor
│   │   │   ├── analytics/         # Productivity telemetry & charts
│   │   │   └── settings/          # Profile & university preferences
│   │   ├── components/            # UI components (Navbar, Sidebar, etc.)
│   │   ├── lib/                   # Supabase clients & local database state
│   │   └── styles/                # Tailwind design tokens
│   ├── supabase/migrations/       # Database schema SQL files
│   ├── .env.local                 # Local environment configurations
│   └── package.json               # Frontend dependencies
└── prism-ml-api/                  # FastAPI ML Microservice
    ├── api.py                     # API routes, SHAP predictions, and roadmap export
    ├── train_model.py             # Model training script
    ├── model.pkl                  # Trained Random Forest classifier
    ├── explainer.pkl              # SHAP TreeExplainer artifact
    └── requirements.txt           # Python dependencies
```

## ⚙️ How to Run Locally

### 1. Run Frontend (Next.js)
```bash
cd prismos
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 2. Run Backend (FastAPI ML Microservice)
In a separate terminal:
```bash
cd prism-ml-api
uvicorn api:app --reload --port 8000
```
API runs at **[http://localhost:8000](http://localhost:8000)**.
Interactive Swagger API docs: **[http://localhost:8000/docs](http://localhost:8000/docs)**.
