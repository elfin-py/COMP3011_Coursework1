---
marp: true
title: Style Forecast
paginate: true
size: 16:9
---

# Style Forecast
## Climate Intelligence for Circular Fashion Decisions

- From static outfit picks to context-aware, explainable recommendations
- Integrates weather forecasting, trend sentiment, and user preference signals
- Designed for practical reuse workflows: wear, swap, rent, recycle

---

# Why This Matters
- Fashion assistants are often style-only and ignore climate risk
- Sustainability platforms are often logistics-only and ignore user adoption
- Recommendation systems often optimize accuracy, not explainability

---

# Core Innovation
- A single scoring pipeline combining:
  - Hourly weather suitability (temperature, precipitation, wind)
  - Trend momentum and sentiment from recent fashion media
  - Personal feedback adaptation over time
- Every recommendation includes interpretable score components
- Chat intent acts as a soft constraint, not a black-box override

---

# Research Curiosity: Alternatives Explored
- Pure collaborative filtering: rejected (cold-start, sparse implicit signals)
- End-to-end LLM ranking: rejected (non-deterministic and hard to audit)
- Chosen approach: hybrid heuristic + live data + bounded personalization
- Rationale: stable outputs, transparent trade-offs, demo reliability

---

# Novel Data Integration
- Live Open-Meteo forecast + geocoding timezone resolution
- RSS-derived trend extraction with recency window (last 60 days)
- Outfit usage logging with captured weather context
- Feedback memory to adapt subsequent ranking decisions

---

# System Architecture
- Frontend: React + Vite (interactive recommendation and chat UX)
- Backend: NestJS modular services
- Data layer: Prisma + PostgreSQL
- Auth: JWT access + refresh token lifecycle
- API docs via OpenAPI/Swagger for reproducible integration

---

# Scoring Design (Expert-Level View)
- Base utility = weighted blend of:
  - Thermal comfort fit
  - Rain and wind resilience
  - Trend relevance boost
  - User-adaptive confidence bonus
- Guardrails:
  - Penalties for weather-incompatible materials/tags
  - Bounded boosts to prevent unstable ranking swings
- Outcome: robust and explainable recommendations under noisy inputs

---

# Quality and Evaluation Strategy
- Functional correctness: end-to-end API + UI flows
- Robustness: timezone conversion and nearest-hour weather matching
- Relevance: trend recency filtering and sentiment weighting
- Explainability: item-level and outfit-level score decomposition
- Delivery quality: reproducible setup, documented endpoints, runnable build

---

# Live Demo Script (Oral Exam)
1. Register/login and obtain JWT
2. Create item + outfit
3. Request recommendation for a specific location/time
4. Inspect score breakdown (weather + trend + feedback effects)
5. Submit feedback and re-query to show adaptive change
6. Use chat recommendation for constrained scenario refinement

---

# Limitations and Cutting-Edge Next Steps
- Current sentiment model is lexical and not multimodal
- Personalization is bounded heuristic, not learned embeddings
- Next-stage roadmap:
  - Retrieval-augmented trend intelligence from richer sources
  - Lightweight learning-to-rank with explainability constraints
  - Counterfactual explanations: “why this outfit over the next best one?”

---

# Generative AI Use (Transparent and Controlled)
- Used for selective ideation, small code corrections, and document scaffolding
- Final architecture, implementation, and validation decisions were human-led
- Every suggestion was manually reviewed and tested before adoption

---

# Closing
## Style Forecast demonstrates explainable, research-led innovation for real-world circular fashion decisions.
