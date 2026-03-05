# Style Forecast COMP3011 Coursework 1

Full-stack API coursework project for weather-aware and trend-aware outfit recommendations.

## Repository Contents
- `cfx-api/`: NestJS + Prisma + PostgreSQL API
- `client/`: React + Vite frontend
- `docs/`: coursework deliverables (API docs, technical report, presentation)

## Deliverables (for assessment)
- Code repository with commit history: this Git repository
- API Documentation (PDF): [docs/API_Documentation.pdf](docs/API_Documentation.pdf)
- Technical Report: [docs/Technical_Report.md](docs/Technical_Report.md)
- Presentation Slides (PowerPoint): [docs/Presentation_Slides.pptx](docs/Presentation_Slides.pptx)

## Quick Setup

### 1) Backend API (`cfx-api`)
```bash
cd cfx-api
cp .env.example .env
npm install
docker compose up -d db
npm run prisma:migrate
npm run prisma:generate
npm run prisma:seed
npm run start:dev
```

Backend URLs:
- API base: `http://localhost:3000/api`
- Swagger UI: `http://localhost:3000/docs`
- Health: `http://localhost:3000/api/health`

### 2) Frontend (`client`)
In another terminal:
```bash
cd client
npm install
npm run dev
```

Frontend URL:
- App: `http://localhost:5173`

## Build Verification
Both parts build successfully from this repository:
- `cd cfx-api && npm run build`
- `cd client && npm run build`

## API Docs Regeneration
From repository root:
```bash
cd cfx-api
npm run docs:json
```
Then regenerate coursework docs:
```bash
cd ..
pandoc docs/API_Documentation.md -t html -s -o docs/API_Documentation.html
pandoc docs/API_Documentation.md -t plain -o /tmp/API_Documentation.txt
cupsfilter -m application/pdf /tmp/API_Documentation.txt > docs/API_Documentation.pdf
```

## Notes
- Keep `.env` files private.
- Use regular commits throughout development to show consistent version control.
