# 🧠 PrismOS ML Microservice

This repository contains the intelligent backend engine powering **PrismOS**. Built on FastAPI, this microservice handles Machine Learning predictions, Explainable AI (XAI) processing, Generative AI prompt engineering, and Markdown report generation.

*Developed as part of the academic project — Galgotias University.*

## 🛠 Tech Stack
* **Framework:** FastAPI (Python), Uvicorn
* **Generative AI:** Google Gemini API (`gemini-2.5-flash`)
* **Machine Learning:** Scikit-Learn (Random Forest Classifier), NumPy, Pandas
* **Explainable AI:** SHAP (SHapley Additive exPlanations)
* **Deployment:** Render / Uvicorn Local

## ✨ Core API Modules

### 1. Generative AI Engine (`/generate-roadmap`)
* Receives a user goal and timeframe.
* Uses precise prompt engineering with Google Gemini to generate granular, day-by-day learning milestones in strict, parseable JSON format.

### 2. Explainable AI Academic Predictor (`/predict`)
* Uses a pre-trained **Random Forest Classifier** (`model.pkl`) to predict student success probabilities based on 14 real-world parameters (study time, attendance, past failures, etc.).
* Utilizes a SHAP TreeExplainer (`explainer.pkl`) to decode the model's logic, returning exact feature impacts (e.g., "Why did the model predict a fail?").
* Generates human-readable, actionable insights based on local SHAP values to guide student improvement.

### 3. Utility Services (`/export-roadmap` & `/health`)
* Processes complex, nested JSON data from the frontend to dynamically format and return downloadable Markdown (`.md`) files (`My_PrismOS_Roadmap.md`) for easy roadmap sharing.
* Provides health checks and serves global feature importance metrics to the frontend dashboard.

## ⚙️ Local Setup

1. **Navigate to the directory:**
   ```bash
   cd prism-ml-api
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the Uvicorn Server:**
   ```bash
   uvicorn api:app --reload --port 8000
   ```
   Access the interactive Swagger API documentation at **http://localhost:8000/docs**.

## 📊 Model Training (Optional)
If you wish to retrain the underlying Random Forest model and regenerate the SHAP explainers:

1. Ensure the UCI dataset `student-mat.csv` is in the directory.
2. Run the training script:
   ```bash
   python train_model.py
   ```

This will automatically generate and save fresh `model.pkl`, `explainer.pkl`, `feature_importance.json`, and `accuracy.json` artifacts.

## 📂 Project Structure

```text
prism-ml-api/
├── api.py                   # Main FastAPI application & API routes
├── train_model.py           # Script to train Random Forest & generate SHAP explainer
├── student-mat.csv          # UCI Student Performance Dataset
├── requirements.txt         # Python dependencies
├── model.pkl                # Pre-trained Random Forest model
├── explainer.pkl            # Pre-trained SHAP explainer artifact
├── features.json            # Cached feature names
├── feature_importance.json  # Global SHAP feature importance metrics
├── accuracy.json            # Model evaluation metrics
└── README.md                # Project documentation
```
