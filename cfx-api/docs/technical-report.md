# Style Forecast — Technical Report

## Overview
Style Forecast is an API-first outfit recommendation system designed for a practical everyday problem: people often have limited time when getting ready, incomplete awareness of weather conditions at a chosen time, and only partial knowledge of current style trends. The system aims to bridge that knowledge gap by combining weather, trend, and user-preference signals into a recommendation that helps the user feel both comfortable and confident.

The central design objective was not simply to return an outfit, but to return one that is appropriate for climate, relevant to current fashion context, and explainable enough to earn user trust. This led to three guiding priorities: explainability, adaptive usefulness, and robust local demonstrability.

## Methodology

### Problem Framing and Design Approach
The project was approached as a decision-support system rather than a generic fashion catalogue. That distinction shaped the methodology. A recommendation is only useful if it reduces uncertainty at the point of decision-making, so the model needs to reason about context, not only preference. For that reason, the chosen methodology combines:
- **weather suitability**, to reduce the risk of physical discomfort,
- **trend relevance**, to reflect recent fashion signals,
- **user feedback adaptation**, to avoid static, one-size-fits-all behaviour.

I considered alternative approaches before selecting the final model. Pure collaborative filtering was not suitable because the dataset is small and suffers from cold-start problems. An end-to-end LLM ranking approach was also considered, but rejected because it would be harder to audit, less deterministic, and less reliable for a live assessment setting. I therefore chose a hybrid weighted model that exposes its reasoning while still incorporating multiple data sources.

### Architecture Overview
The system is structured in three layers:
- **Presentation**: React + Vite client for user interaction and feedback.
- **Application**: NestJS API modules for auth, items, outfits, climate, trends, and recommendation logic.
- **Persistence and data sources**: PostgreSQL via Prisma for internal state, with Open-Meteo and trend feeds for external context.

### Technology Choices and Rationale
**TypeScript** was chosen across frontend and backend to reduce integration mismatch and improve refactor safety. This was a practical choice rather than a stylistic one: using one typed language simplified DTO design, API contracts, and debugging.

**NestJS** was chosen for the backend because its modular structure fits a system with distinct domains such as authentication, items, outfits, climate, trends, and recommendations. Keeping logic in services rather than controllers improved clarity and made it easier to adjust scoring logic without destabilising routing behaviour.

**PostgreSQL** with **Prisma** was chosen for persistence. An SQL database is appropriate because the project is relational: users own items, outfits contain items, feedback references users and targets, and time-based records such as climate snapshots and trend entries benefit from structured querying. Prisma added migrations and type-safe data access, which reduced implementation errors.

**React + Vite** was chosen for the client because the interaction model is stateful and iterative. React made it straightforward to manage recommendation flows and authenticated UI state, while Vite reduced build latency during development.

## Implementation

### Core Data and CRUD
To satisfy the coursework requirement for database-backed CRUD, the `Item` model implements full RESTful CRUD:
- `POST /api/items` creates an item,
- `GET /api/items` and `GET /api/items/:id` read user items,
- `PATCH /api/items/:id` updates an item,
- `DELETE /api/items/:id` deletes an item.

These operations are backed by PostgreSQL through Prisma and return conventional JSON/status-code responses.

### Recommendation Pipeline
The recommendation service combines three signals. First, climate suitability measures whether an outfit is likely to be comfortable for the chosen location and time. Second, trend relevance applies a bounded boost or penalty from recent media-derived signals. Third, user feedback introduces a small adaptive bias so the system becomes more personalised without becoming unstable. I deliberately kept this model heuristic and bounded: it is easier to explain, debug, and defend than an opaque ranking method, and it fits a client flow where users can search from a curated city list, enter coordinates directly, or reuse a saved home location.

### Security Decisions
Security was addressed at multiple layers.

**Authentication.** The API uses JWT-based authentication with guarded routes. This choice provides a simple stateless security model suitable for a coursework API and allows protected ownership checks without server-side session storage. The account area also supports authenticated password change with current-password verification before a new bcrypt hash is stored.

**Authorisation.** Ownership checks were added to CRUD operations so a user can only read, update, or delete their own items. This prevents horizontal privilege issues and ensures the API does not expose another user's wardrobe data.

**Validation.** DTO validation is enforced in NestJS using class-validator and a global validation pipe. This helps prevent malformed payloads from entering business logic or the database layer, including password-policy enforcement and structured validation of saved account location input.

**Secret handling.** Environment files are excluded from version control, and previously tracked `.env` data was removed from Git history. This is important because leaked API keys invalidate any claim of basic operational security.

**Database safety.** Prisma reduces query-construction mistakes by using typed queries rather than manual string assembly. While this is not a complete substitute for broader security testing, it lowers the risk of common implementation errors.

## Evaluation

### Usefulness
The system is useful because it reduces cognitive load during a time-constrained daily task. Users may know the current weather in general terms but still miss details such as rain probability, wind, or conditions at a later time of day. They may also have only vague awareness of recent fashion trends. Style Forecast aggregates those signals and turns them into a single actionable suggestion, reducing both uncertainty and decision fatigue.

### Testing and Validation
Evaluation was carried out in three ways:
1. backend and frontend production builds to confirm deployable integrity,
2. endpoint validation through Swagger and direct HTTP requests,
3. end-to-end flow checks across authentication, item creation, recommendation, and feedback.

### Challenges and Lessons
The most difficult implementation issue was timezone correctness. Weather relevance depends on when and where the user intends to wear an outfit, so naive datetime handling produces incorrect recommendations. This also affected account settings, because the interface needed to display an obvious user-facing timezone label while still storing a robust underlying zone identifier. A second challenge was external data reliability: trend and weather inputs are inherently less controllable than internal data, so the system had to fail clearly rather than silently.

The main lesson from the project was that explainability matters as much as raw feature count. A smaller system with clear logic, secure defaults, and a strong end-to-end flow is more defensible than a larger but less coherent implementation.

### Limitations and Future Work
The current trend sentiment model is lexical and can miss nuance. Personalisation is heuristic rather than learned from large-scale data, and automated test coverage remains narrower than production standards. A scheduled email-digest channel was explored, but reliable SMTP or OAuth-backed delivery introduced provider and deployment dependencies that were disproportionate to the coursework scope. Future work would therefore focus on stronger automated testing, scheduled trend-ingestion jobs, a managed notification service if reminders are revisited, and a constrained learning-to-rank approach that preserves explainability.

## Conclusion
Style Forecast was designed to bridge a genuine everyday knowledge gap: what to wear when time is limited and contextual information is fragmented. The final architecture reflects deliberate choices about maintainability, security, explainability, and practical usefulness. The project demonstrates a coherent API-centric system whose technical decisions are justified by both user need and engineering trade-offs.

## Generative AI Declaration
Generative AI tools were used selectively for ideation and drafting assistance. Final design choices, implementation decisions, and report wording were reviewed and finalised by me.
