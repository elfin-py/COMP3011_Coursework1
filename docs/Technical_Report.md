# Style Forecast Technical Report

## 1. Project Summary
Style Forecast is a full-stack system that recommends outfits by combining climate data, fashion trend signals, and user feedback. The project consists of a NestJS API (`cfx-api`) and a React frontend (`client`).

## 2. Technology Choices and Justification
- Language: TypeScript end-to-end
- Backend: NestJS
- Data access: Prisma ORM
- Database: PostgreSQL
- Frontend: React + Vite
- Auth: JWT bearer tokens

Reasons for these choices:
- TypeScript reduced integration errors between frontend and backend and improved refactor safety.
- NestJS gave a modular architecture and clear dependency injection for maintainable controllers/services.
- Prisma enabled fast schema iteration with strongly typed queries and migrations.
- PostgreSQL was a suitable relational store for users, outfits, listings, feedback, and trend snapshots.
- React + Vite allowed fast local iteration and a responsive demo UI.

## 3. Architecture and Design
The system is API-first.

Backend modules include:
- `auth`: registration/login and token issuance
- `users`: profile and settings
- `items`, `outfits`, `listings`, `matching`, `donations`: clothing lifecycle workflows
- `climate`: cached and live weather snapshots
- `trends`: trend ingestion and media/image trend endpoints
- `recommendation`: scoring and ranking logic
- `feedback`: user feedback capture for adaptive biasing
- `analytics`: impact and operational metrics
- `chat`: conversational recommendation layer

Data model highlights:
- `User` + `Profile` for account/settings
- `Item`, `Listing`, `Outfit`, `OutfitUsage` for wardrobe and reuse flows
- `ClimateSnapshot` for weather context
- `SocialTrend` for trend volume/sentiment signals
- `Feedback` for user preference adaptation

## 4. Core Design Decisions
- Recommendation strategy: heuristic scoring with explainable components rather than opaque ML, to keep outputs interpretable in the oral demo.
- Weather handling: timezone-aware conversion and near-target snapshot selection, with live Open-Meteo fallback where requested.
- Trend strategy: recent tag volume and sentiment are used as score adjustments to avoid stale trends dominating recommendations.
- Personalization: user feedback contributes a bounded boost to prevent unstable ranking swings.

## 5. Testing and Validation
What was done:
- Build validation for backend and frontend (`npm run build` both projects).
- Endpoint checks via Swagger and manual request testing.
- Integration test assets exist in `cfx-api/test/integration`.

Current gap:
- Automated unit/integration coverage should be expanded, especially for timezone conversion, scoring edge cases, and external API fallback behavior.

## 6. Challenges and Lessons Learned
Main technical challenges:
- Timezone correctness for user-selected local times.
- Balancing trend influence so recommendations remain practical for weather.
- Reliability of external services (weather/image/trend feeds).

Lessons:
- Keeping business logic in services simplified controller responsibilities.
- Strict DTO validation catches invalid client input early.
- Explicit score components improved explainability and debugging.

## 7. Limitations and Future Improvements
Limitations:
- Scoring is heuristic and not learned from large real-world interaction data.
- Trend sentiment extraction is lexical and can be noisy.
- External API outages can affect quality/latency.

Future work:
- Expand automated tests and CI gates.
- Add background job queue for scheduled trend ingestion.
- Introduce stronger per-user preference modeling.
- Add production deployment hardening (secrets, observability, rate limits).

## 8. Generative AI Declaration
Generative AI tools were used for coding assistance, draft text generation, and iterative refinement of documentation and presentation materials.

How AI was used:
- Proposed alternative implementations and code snippets for selected features.
- Helped draft and structure technical documentation.
- Assisted with editing clarity and consistency.

How quality was controlled:
- All AI-assisted output was reviewed, edited, and validated against project requirements and observed runtime behavior.
- No output was accepted without manual verification.
- Final design and implementation decisions remained my own.
