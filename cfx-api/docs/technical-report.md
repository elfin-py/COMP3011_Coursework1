# Style Forecast — Technical Report

## Overview
Style Forecast is a climate- and trend-aware outfit recommendation system. It combines local weather forecasts, social/news trend signals, and user feedback to produce outfit guidance and explainability. The system offers an API-first architecture with a React client for interaction and demonstration.

## Technology Stack
- **Language**: TypeScript (backend + frontend)
- **Backend**: NestJS + Prisma + PostgreSQL
- **Frontend**: React + Vite
- **Auth**: JWT (access + refresh tokens)
- **Trends**: RSS ingestion + keyword/sentiment extraction, Pinterest image retrieval
- **Weather**: Open-Meteo (live forecast + timezone resolution)

### Rationale
- **TypeScript** provides shared language across client/server, reduces integration errors, and improves refactor safety.
- **NestJS** offers structured modules, dependency injection, and straightforward testability.
- **Prisma + PostgreSQL** provides strong relational modelling, migrations, and type-safe querying.
- **React + Vite** yields fast dev iterations and a responsive UI for demonstration.
- **Open-Meteo** is a free, documented source for live forecasts and timezone offsets.

## Architecture
- **Client**: React app with recommendation flow, chat assistant, and saved outfits.
- **API**: NestJS modules for auth, users, climate, trends, recommendations, outfits, feedback.
- **Data**: PostgreSQL stores users, profiles, outfits, climate snapshots, trend signals, and feedback.

### Data Model (summary)
- `User` + `Profile`: authentication + preferences + home location
- `ClimateSnapshot`: weather at a time + location
- `Outfit` + `OutfitUsage`: saved outfits and usage tracking
- `SocialTrend`: trend tags with sentiment and volume
- `Feedback`: user ratings for adaptive tuning

## Core Features
1. **Weather-aware recommendations** using live forecasts at user-selected location/time.
2. **Trend-aware scoring** based on recent media mentions and sentiment (last 60 days).
3. **Adaptive feedback** to bias future recommendations.
4. **Chat assistant** to refine outfit guidance with user intent and preferences.
5. **Saved outfits** for logged-in users and optional daily recommendation settings.

## Recommendation Logic
- Base score is a weighted blend of temperature match, precipitation risk, wind penalty, and trend boost.
- Trend boost is sentiment-weighted using recent fashion media signals.
- User feedback adds an adaptive boost.
- Chat intent is treated as a soft bias (occasion, activity, avoid tags).

## Weather Accuracy
- Uses Open-Meteo hourly forecasts with timezone resolution from geocoding.
- The selected datetime is converted to the correct timezone before fetching.
- If a live fetch fails, a clear error is returned (no stale fallback).

## Trends and Sentiment
- RSS sources are polled to extract keyword mentions.
- Sentiment is derived from positive/negative language cues in recent articles.
- Only articles from the last 60 days influence `news-rss` trend signals.

## Testing Approach
- **Manual**: API endpoints verified via curl/Swagger; UI flows validated in the browser.
- **Automated**: Minimal unit coverage currently; key candidates are climate/timezone conversion and trend sentiment parsing.

## Challenges & Lessons
- **Timezone correctness** required server-side handling to avoid client-local time errors.
- **Trend sourcing** needed reliable sentiment handling and recency windows to avoid stale results.
- **Pinterest** image retrieval required proxying and de-duplication to avoid broken or irrelevant images.

## Limitations
- Chat assistant depends on external AI availability; fallback is heuristic-based.
- Trend sentiment is lexical and can be noisy.
- Limited automated testing coverage.

## Future Work
- Add full test suite (unit + integration).
- Add a production-grade job queue for trend ingestion.
- Improve personalised ranking with per-user preference vectors.
- Add email delivery for daily recommendations.

## Generative AI Declaration
Generative AI was used to assist with coding tasks, summarising design choices, and drafting documentation. All outputs were reviewed and edited to ensure correctness. AI-generated suggestions were implemented only after validation against the system’s functional requirements and observed behaviour.
