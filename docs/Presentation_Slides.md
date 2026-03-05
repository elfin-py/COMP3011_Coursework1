% Style Forecast
% COMP3011 Coursework 1
% March 2026

# Style Forecast
## Weather- and Trend-Aware Outfit Recommendations

- API-first sustainable fashion assistant
- Combines climate, trend signals, and user feedback

# Problem
- Outfit decisions are context dependent (weather, occasion, trend relevance)
- Existing tools often lack transparency for recommendations

# Solution
- Full-stack system with explainable scoring
- Personalized recommendations from wardrobe data + live context
- Chat interface for natural-language constraints

# Stack
- TypeScript (frontend + backend)
- NestJS API + Prisma
- PostgreSQL database
- React + Vite client
- JWT authentication

# Architecture
- Modules: auth, users, items, listings, outfits, climate, trends, recommendation, feedback, analytics, chat
- External integrations: Open-Meteo, RSS trend ingestion, image trend endpoints

# Recommendation Logic
- Temperature fit score
- Rain and wind penalties
- Trend boost from recent media sentiment/volume
- User feedback boost
- Optional chat preference biasing

# API Highlights
- Auth: register/login
- Wardrobe: items/outfits/listings
- Intelligence: recommendations/trends/chat
- Insights: analytics and impact endpoints
- Docs: Swagger + coursework API PDF

# Demonstration Flow
1. Register/login
2. Create item and outfit
3. Request climate-aware recommendation
4. Submit feedback and view impact on future suggestions

# Challenges and Learning
- Timezone-aware datetime handling
- External API reliability and fallback behavior
- Balancing explainability with personalization

# Limitations and Next Steps
- Expand automated test coverage
- Improve trend sentiment quality
- Add background jobs for trend ingestion
- Strengthen personalization model

# Thank You
Questions?
