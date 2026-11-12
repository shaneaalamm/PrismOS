# 🚀 PrismOS: AI-Powered Personal Productivity & Career OS

> A full-stack academic telemetry and productivity platform designed for engineering students at **Galgotias University**. Features an Explainable AI (XAI) performance prediction engine, interactive Pomodoro tracking, career roadmap milestones, and ATS-ready resume generation.

---

## ⚡ Quick Start: Exact Commands to Run Locally

### Terminal 1: Frontend (Next.js)
```powershell
cd prismos
npm run dev
```
👉 Open in browser: **[http://localhost:3000](http://localhost:3000)** (auto-redirects to **[http://localhost:3000/dashboard](http://localhost:3000/dashboard)**)

---

### Terminal 2: Backend (FastAPI ML Microservice)
```powershell
cd prism-ml-api
uvicorn api:app --reload --port 8000
```
👉 API docs (Swagger): **[http://localhost:8000/docs](http://localhost:8000/docs)**  
👉 Health check: **[http://localhost:8000/health](http://localhost:8000/health)**

---

## 📂 Architecture & Directories

```text
PrismOS/
├── prismos/                       # Frontend Web Application (Next.js 14)
│   ├── src/
│   │   ├── app/                   # App Router (Dashboard, Resume, Studies, Roadmap, etc.)
│   │   ├── components/            # UI & Layout components (Navbar, Sidebar)
│   │   ├── lib/                   # Supabase clients & demo memory state
│   │   └── styles/                # Tailwind CSS styling
│   ├── supabase/                  # Database migrations
│   ├── .env.local                 # Local environment config
│   └── package.json
└── prism-ml-api/                  # Machine Learning & AI Microservice (FastAPI)
    ├── api.py                     # API endpoints (SHAP prediction & roadmap export)
    ├── train_model.py             # Model training script
    ├── model.pkl                  # Random Forest Classifier
    ├── explainer.pkl              # SHAP TreeExplainer artifact
    └── requirements.txt           # Python dependencies
```

---

## ✨ Features
* **Live Dashboard & Pomodoro Telemetry:** Real-time focus sessions, task tracking, and study hour statistics.
* **Explainable AI Predictor:** Evaluates 14 student academic metrics using Random Forest + SHAP local feature attributions.
* **Dynamic Career Roadmap:** Day-by-day learning milestones with 1-click Markdown export (`My_PrismOS_Roadmap.md`).
* **Resume Builder:** Academic profiles, projects, skills, and certifications formatted for ATS PDF export.
* **Galgotias University Pre-configured:** Pre-loaded with Semester 4 coursework, faculty subjects, and degree tracking.
