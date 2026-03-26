# Prepwise

> The cheapest way to eat healthy — automatically.

Prepwise is a full-stack web application that generates **budget-optimized weekly meal plans** based on user constraints such as calorie targets, macro goals, dietary preferences, and grocery prices.

Instead of just tracking food, Prepwise actively answers:

> *“What is the cheapest way for me to eat this week while still hitting my nutrition goals?”*

---

## 🚀 Features

### 🧠 Core Functionality

* Generate **weekly meal plans under a fixed budget**
* Optimize for **calories, protein, and dietary preferences**
* Automatically produce a **grocery list with estimated total cost**
* Balance **nutrition + cost + variety**

### 👤 User System

* Secure authentication (Supabase Auth)
* Persistent user profiles and preferences
* Saved meal plans and history

### 🛒 Grocery Intelligence

* Ingredient-level pricing system
* Aggregated grocery list generation
* Cost breakdown per meal and per week

### 📊 Insights (Planned / Extension)

* Weekly savings estimates
* Cost comparisons across plans
* Personalized recommendations based on past behavior

---

## 🧱 Tech Stack

### Frontend

* React + TypeScript
* Vite
* Tailwind CSS
* React Query

### Backend

* Node.js + Express
* TypeScript

### Database / Auth

* Supabase (PostgreSQL + Auth)

### Infrastructure

* Frontend: Vercel
* Backend: Render / Railway / Fly.io
* Analytics: PostHog (optional)
* Error Tracking: Sentry (optional)

---

## 🧠 System Architecture

```
Frontend (React)
      ↓
REST API (Express)
      ↓
Services Layer
  - Optimization Engine
  - Cost Calculator
  - Meal Planner
      ↓
PostgreSQL (Supabase)
```

---

## ⚙️ How It Works

### 1. User Input

Users provide:

* Weekly budget
* Calorie target
* Protein target
* Food preferences / restrictions

### 2. Optimization Engine

The backend:

* Filters valid recipes
* Scores meals based on:

  * cost efficiency
  * macro alignment
  * preference match
* Selects a set of meals that:

  * stay within budget
  * meet nutritional goals

### 3. Output

The system returns:

* Weekly meal plan
* Grocery list (aggregated)
* Estimated total cost
* Macro breakdown

---

## 📡 API Endpoints

### Health

```
GET /api/health
```

### User

```
GET /api/me
PUT /api/me/preferences
```

### Recipes & Ingredients

```
GET /api/recipes
GET /api/recipes/:id

GET /api/ingredients
GET /api/ingredients/:id
```

### Meal Planning

```
POST /api/plans/generate
POST /api/plans/save
GET /api/plans
GET /api/plans/:id
```

### Grocery List

```
GET /api/plans/:id/grocery-list
```

---

## 🧮 Optimization Strategy

The planning engine solves a constrained selection problem:

* Minimize total cost
* Subject to:

  * calorie constraints
  * protein constraints
  * budget limit
  * dietary filters

Current implementation uses:

* heuristic scoring + constraint filtering

Future improvements:

* linear programming / integer optimization
* multi-objective optimization (cost vs nutrition vs variety)

---

## 🗄️ Data Model Overview

### Core Entities

* Users
* UserPreferences
* Ingredients
* Recipes
* RecipeIngredients
* WeeklyPlans
* PlannedMeals

---

## 🛠️ Local Development

### 1. Clone the repo

```
git clone https://github.com/natecl/prepwise.git
cd prepwise
```

### 2. Setup environment variables

#### Backend `.env`

```
PORT=5000
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
```

#### Frontend `.env`

```
VITE_API_URL=http://localhost:5000
```

---

### 3. Install dependencies

#### Backend

```
cd server
npm install
npm run dev
```

#### Frontend

```
cd client
npm install
npm run dev
```

---

### 4. Seed the database

Run the seed script to populate:

* ingredients
* meal templates

```
npm run seed
```

---

## 📦 Project Structure

```
prepwise/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── db/
│   │   └── middleware/
│
└── README.md
```

---

## 📈 Roadmap

### MVP

* [ ] Auth + user preferences
* [ ] Ingredient + recipe system
* [ ] Cost + macro calculations
* [ ] Weekly plan generation
* [ ] Grocery list output

### Next Features

* [ ] Pantry mode (exclude owned items)
* [ ] Store-specific pricing (Walmart, Publix, etc.)
* [ ] Savings dashboard
* [ ] Smarter ingredient substitutions

### Advanced

* [ ] Multi-objective optimization engine
* [ ] Personalized recommendations
* [ ] AI-powered recipe explanations
* [ ] Mobile app (React Native)

---

## 💰 Monetization Strategy

* Freemium model:

  * Free: basic plan generation
  * Premium:

    * store-specific optimization
    * advanced constraints
    * savings analytics

* Affiliate revenue:

  * grocery integrations (Instacart, Walmart, etc.)

---

## 🧠 Why This Project Matters

Most food apps focus on:

* tracking (MyFitnessPal)
* planning (Mealime)

Prepwise focuses on:

> **decision-making under constraints**

This project demonstrates:

* full-stack engineering
* optimization algorithms
* data modeling
* product thinking
* real-world impact

---

## 📄 License

MIT License

---

## 👤 Author

Nathan Chin-Lue
University of Florida — Computer Science

---
