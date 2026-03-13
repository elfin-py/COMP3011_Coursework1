# Style Forecast API

API for climate-aware outfit recommendations and fashion trend analysis. It resolves forecast context, ingests magazine/news trend signals, stores recommendation snapshots, and scores outfits with explainable weather + trend-aware heuristics.

## Quickstart
1. Install Node 18+ and Docker.
2. Copy env: `cp .env.example .env`
3. Install deps: `npm install`
4. Start DB: `docker compose up -d db`
5. Migrate + generate client: `npm run prisma:migrate && npm run prisma:generate`
6. Seed demo data: `npm run prisma:seed`
7. (Optional) Ingest trends: `npm run ingest:trends` or `npm run ingest:news`
8. Set strong JWT secrets in `.env`, then run: `npm run start:dev` (Swagger at http://localhost:3000/docs, health at http://localhost:3000/api/health)

## Core assessed system
- Core user-facing workflow: request a recommendation for a location and time, inspect the scored result, and save it for later review.
- Core persistence supporting that workflow: `User`, `Profile`, `Outfit`, `Item`, `ClimateSnapshot`, `OutfitUsage`, and `SavedRecommendation`.
- Supporting extensions: listings, matching, donations, recycling, shipment, and analytics modules. These extend the codebase but are not the primary narrative of the final submission.

## Scripts
- `npm run prisma:migrate` – apply schema
- `npm run prisma:seed` – seed sample users/items/outfits/climate/trends
- `npm run ingest:trends` – load synthetic trends from `data/trends.json`
- `npm run ingest:news` – fetch RSS and store keyword trends as `news-rss`
- `npm run start:dev` – start API with watch
- `npm run docs:json` – export OpenAPI JSON to `docs/swagger.json`
- `npm run docs:pdf` – export OpenAPI PDF to `docs/api.pdf`

## Features (current)
- JWT auth (register/login/refresh)
- User profiles with saved home location and timezone
- Item and outfit resources supporting assessed CRUD and stored recommendation structures
- Climate snapshots with `validFor` for forecast-aware scoring
- Recommendation `GET /recommendations/outfit?location=...&datetime=...` with explainable weather + trend-aware scoring
- Trend ingestion + endpoints (`/trends/top`, `/trends/materials`, Pinterest/Google inspiration helpers)
- Activity-chip chat assistant for streamlined work/school/gym/dinner/commute guidance
- Saved recommendation snapshots with stored, deduped inspiration images
- Outfit usage logging with captured climate context
- Listings lifecycle with create/update/delete support
- Analytics `/analytics/impact`, `/analytics/match-success`, `/analytics/recycler-capacity`, `/analytics/comfort-vs-temp`
- Health probe `/api/health`

## Docs export
- JSON: `npm run docs:json` -> `docs/swagger.json`
- PDF (ReDoc): `npm run docs:pdf` -> `docs/api.pdf`

## Trend ingest
- Static synthetic tags: `npm run ingest:trends` (loads `data/trends.json` into `SocialTrend`).
- Live news scrape (RSS keyword counts): `npm run ingest:news` (sources include Vogue, Elle, WWD, Harper's Bazaar, NYT Fashion, Guardian, GQ, Refinery29). If RSS fails, a fallback dataset is used under platform `news-fallback`.

## Quick curl walkthrough
Register:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"styleuser","password":"Password1","cityLat":53.8,"cityLon":-1.55}'
```
Log in (get accessToken):
```bash
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"styleuser","password":"Password1"}' | jq -r .tokens.accessToken)
```
Create the supporting item and outfit used by the recommendation engine:
```bash
ITEM_ID=$(curl -s -X POST http://localhost:3000/api/items \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"category":"TOP","sizeLabel":"M","material":"recycled cotton","condition":4,"styleEmbedding":[0.1,0.2,0.3,0.4],"insulation":0.6,"waterproof":0.2,"styleTags":["puffer","casual"]}' | jq -r .id)
OUTFIT_ID=$(curl -s -X POST http://localhost:3000/api/outfits \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"Auto fit","occasion":"commute","itemIds":["'"'"$ITEM_ID'"'"],"styleTags":["puffer","skirt"]}' | jq -r .id)
```
Create climate snapshot (forecast):
```bash
curl -X POST http://localhost:3000/api/climate \
  -H "Content-Type: application/json" \
  -d '{"location":"Leeds","capturedAt":"2026-03-20T07:00:00Z","validFor":"2026-03-20T09:00:00Z","temperatureC":8,"precipProb":70,"windKph":28,"conditions":"rain"}'
```
Get recommendation (trend + weather aware):
```bash
curl -X GET "http://localhost:3000/api/recommendations/outfit?location=Leeds&datetime=2026-03-20T09:00:00Z" \
  -H "Authorization: Bearer $TOKEN"
```
Log outfit usage (captures weather):
```bash
curl -X POST http://localhost:3000/api/outfits/$OUTFIT_ID/usage \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"location":"Leeds","usedAt":"2026-03-20T09:00:00Z"}'
```
## Scoring (simplified)
- Temperature match favors insulation suited to ambient temp.
- Rain penalty for suede/low-waterproof items when precipProb is high.
- Wind penalty for skirts/dresses in high wind.
- Trend boost if item tags/materials appear in top trends (`SocialTrend`).
- Optional authenticated context can support future extension points, but the main live scoring signals are weather fit and trend relevance.
- Overall score combines comfort, rain/wind protection, and trend influence in one bounded, explainable score.

## CI
- Verified automated test gate for this project is `npm run ci:test`, which runs unit and e2e coverage.
- Linting remains available separately through `npm run lint`.

## Roadmap
- Improve user-adaptive model with per-feature weight learning
- Mobile-first frontend polish and persistent auth
- Optional: deploy API + client with docker-compose or Fly.io
