---
marp: true
title: Style Forecast
paginate: true
size: 16:9
---

# Style Forecast
## Explainable outfit recommendations using weather, trends, and user context

- API-first web application
- Designed for fast everyday decisions
- Focused on comfort, confidence, and transparency

---

# The Problem
- People often choose outfits with incomplete context
- Weather can change by the time they leave the house
- Trend awareness is usually vague rather than explicit
- Most fashion tools are either style-only or weather-only

---

# What The System Does
- Takes a location and time
- Pulls live weather context from Open-Meteo
- Combines that with trend signals and optional authenticated user feedback
- Returns an outfit recommendation with explainable scoring
- Lets signed-in users save looks they like for later

---

# Key User Features
- Username/password authentication with secure password rules
- Searchable city selection or direct coordinate input
- Saved home location in the account area
- Derived timezone handling rather than manual timezone entry
- Liked outfits page with saved recommendation history and inspiration images

---

# Architecture
- Frontend: React + Vite
- Backend: NestJS REST API
- Database: PostgreSQL with Prisma
- External data: Open-Meteo forecast + trend ingestion
- Auth: JWT-protected endpoints for personal features

---

# Recommendation Logic
- Weather suitability:
  - temperature
  - precipitation probability
  - wind
- Trend relevance:
  - recent fashion tags and sentiment
- User adaptation:
  - feedback is applied when the request is authenticated
- Output stays bounded and interpretable rather than opaque

---

# Why These Choices
- PostgreSQL was appropriate because the app is strongly relational
- NestJS suited a modular backend with clear services and DTO validation
- TypeScript reduced mismatch between frontend and backend contracts
- REST was more appropriate than GraphQL for a stable, demonstrable coursework API

---

# Security and Reliability
- Passwords are hashed with bcrypt
- Change-password flow verifies the current password first
- JWT guards protect account and saved-look endpoints
- JWT secrets are required environment configuration, not hard-coded fallbacks
- Ownership checks prevent users accessing each other’s data
- Validation pipes reduce malformed input reaching the database
- Pinterest proxy is restricted to approved HTTPS Pinterest image hosts

---

# Interesting Implementation Decisions
- Timezone is derived from location instead of manually typed
- A blank saved location does not force recommendation autofill
- Users can search a city list or use coordinates directly
- Saved recommendations store the recommendation context, not just an outfit id
- Listings can be updated or removed, and deleting a listing releases the item back to available

---

# Evaluation and Limitations
- Verified through runnable builds, automated tests, and end-to-end user flows
- Recommendation quality is explainable rather than benchmark-driven
- Main challenge: timezone correctness and external data reliability
- Limitation: trend sentiment is still heuristic
- Explored but removed: email digest delivery, because SMTP/OAuth setup was disproportionate for the coursework scope

---

# Demo Plan
1. Sign up and log in
2. Save or clear a home location in account settings
3. Generate a recommendation for a city or coordinates
4. Show score explanation and weather context
5. Like the recommendation and open the saved looks page
6. Show password change flow and protected account features

---

# Closing
## Style Forecast turns fragmented context into a usable, explainable recommendation

- practical user value
- justified architecture
- secure API design
- clear path for future improvement

---

# Sources
- Open-Meteo API documentation: https://open-meteo.com/en/docs
- TypeScript documentation: https://www.typescriptlang.org/
- NestJS documentation: https://docs.nestjs.com/
- Prisma ORM documentation: https://www.prisma.io/docs
- PostgreSQL documentation: https://www.postgresql.org/docs/
- React documentation: https://react.dev/
- Vite guide: https://vite.dev/guide/
