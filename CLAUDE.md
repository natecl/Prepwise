# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prepwise is a full-stack web app that generates budget-optimized weekly meal plans. It solves a constrained optimization problem: minimize grocery cost while meeting calorie targets, protein goals, and dietary preferences.

## Tech Stack

- **Frontend:** React + TypeScript, Vite, Tailwind CSS, React Query (`client/`)
- **Backend:** Node.js + Express + TypeScript (`server/`)
- **Database/Auth:** Supabase (PostgreSQL + Auth)
- **Deployment:** Vercel (frontend), Render/Railway/Fly.io (backend)

## Development Commands

```bash
# Backend
cd server && npm install
npm run dev          # Start dev server (port 5000)

# Frontend
cd client && npm install
npm run dev          # Start Vite dev server

# Database
npm run seed         # Seed ingredients and meal templates
```

## Environment Variables

Backend (`server/.env`):
- `PORT=5000`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

Frontend (`client/.env`):
- `VITE_API_URL=http://localhost:5000`

## Architecture

```
React Frontend → REST API (Express) → Services Layer → PostgreSQL (Supabase)
```

The backend has three core services:
- **Optimization Engine** — scores and selects meals using heuristic scoring + constraint filtering (minimize cost subject to calorie/protein/budget/dietary constraints)
- **Cost Calculator** — ingredient-level pricing, per-meal and per-week cost breakdowns
- **Meal Planner** — composes weekly plans and generates aggregated grocery lists

### Data Model

Core entities: Users, UserPreferences, Ingredients, Recipes, RecipeIngredients, WeeklyPlans, PlannedMeals.

### API Structure

All endpoints under `/api/`:
- `/health` — health check
- `/me`, `/me/preferences` — user profile
- `/recipes`, `/ingredients` — data CRUD
- `/plans/generate`, `/plans/save`, `/plans`, `/plans/:id` — meal planning
- `/plans/:id/grocery-list` — grocery list generation

## Project Structure

```
client/src/          # React frontend
  pages/             # Route pages
  components/        # UI components
  hooks/             # Custom React hooks
  lib/               # Utilities and API client

server/src/          # Express backend
  routes/            # API route definitions
  controllers/       # Request handlers
  services/          # Business logic (optimization, cost calc, planning)
  db/                # Database queries and migrations
  middleware/        # Auth, validation, error handling
```

## Current Status

The project is in pre-implementation phase — the README contains the full specification but no source code has been written yet. The MVP roadmap covers: auth + preferences, ingredient/recipe system, cost/macro calculations, weekly plan generation, and grocery list output.

## CLAUDE.md Size Limit (250 lines max)

This file must stay under 250 lines. When adding context that would push it over the limit:

1. **Extract** the feature-specific content into `.claude/docs/<feature-name>.md` (e.g. `.claude/docs/optimization-engine.md`)
2. **Replace** the detailed section in this file with a one-line pointer: `> See [.claude/docs/<feature-name>.md](.claude/docs/<feature-name>.md) for full context.`
3. **Create** the extracted file with all the detail that was removed, plus any new context being added

When working on a feature that has an extracted doc, read the linked file for full context before making changes.

### Extracted Feature Docs

_None yet — add entries here as sections are extracted:_
<!-- - [Feature Name](.claude/docs/feature-name.md) — one-line summary -->
