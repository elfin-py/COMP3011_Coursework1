---
marp: true
title: Style Forecast
paginate: true
size: 16:9
---

# Style Forecast
## Weather × Trends Outfit Recommendations

- Climate-aware outfit suggestions
- Trend-aware scoring from fashion media
- Adaptive feedback + chat assistant

---

# Problem
- Outfit choices depend on weather, trends, and personal context
- Existing apps don’t explain *why* a look is recommended

---

# Solution
- API-first system that scores outfits using weather + trend signals
- Chat assistant for richer constraints (occasion, activity, preferences)
- Save outfits and track usage to improve recommendations

---

# Architecture
- Client: React + Vite
- API: NestJS + Prisma
- Database: PostgreSQL
- Weather: Open-Meteo
- Trends: RSS keyword + sentiment

---

# Data Model
- User + Profile (home location, preferences)
- Outfit + OutfitUsage
- ClimateSnapshot
- SocialTrend + TrendSignal
- Feedback

---

# Recommendation Logic
- Temperature fit + wind/precip penalties
- Trend boost from recent media sentiment
- User feedback bias
- Chat intent bias (occasion/avoid tags)

---

# Live Demo Flow
1. Select location + time
2. Generate recommendation
3. Save outfit
4. Open chat for tailored advice

---

# Evaluation
- Weather/timezone correctness
- Trend recency (last 60 days)
- Explainability in responses
- Feedback improves personalization

---

# Challenges
- Timezone accuracy
- Noisy trend sentiment
- External data reliability

---

# Future Work
- Automated test suite
- Job queue for trend ingestion
- Email delivery for daily digests

---

# Thank You
Questions?
