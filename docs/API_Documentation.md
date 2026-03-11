# Style Forecast API Documentation

Base URL: `http://localhost:3000/api`

Interactive docs: `http://localhost:3000/docs`

## Authentication

JWT bearer token is required for protected endpoints.

Environment note:
- `JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` must be set for the API to start.
- There are no built-in fallback secrets in the submitted configuration.

1. Register: `POST /auth/register`
2. Login: `POST /auth/login`
3. Use returned access token in header:

```http
Authorization: Bearer <accessToken>
```

## Error Model

Common responses:
- `400 Bad Request`: validation error, malformed input, bad query params
- `401 Unauthorized`: missing/invalid JWT, invalid credentials
- `404 Not Found`: requested record does not exist
- `409 Conflict`: duplicate username on registration
- `500 Internal Server Error`: unexpected server error

Validation errors are NestJS standard payloads:

```json
{
  "statusCode": 400,
  "message": ["username must be 3-24 characters and contain only letters, numbers, or underscores"],
  "error": "Bad Request"
}
```

## Endpoint Reference

## Core Submission Narrative

The final submission is centred on one main workflow:
1. resolve climate context for a chosen location and time,
2. rank stored outfits using explainable weather and trend signals,
3. let authenticated users save results and feed back into future scoring.

`Items`, `outfits`, `saved recommendations`, `feedback`, and `climate snapshots` are the main assessed persistence components. Marketplace and sustainability endpoints remain documented because they are implemented, but they are secondary extensions rather than the central story of the project.

### Health

#### `GET /health`
Checks service status.

Response `200`:
```json
{
  "status": "ok",
  "timestamp": "2026-03-05T12:00:00.000Z"
}
```

### Auth

#### `POST /auth/register`
Creates a user account.

Request body:
```json
{
  "username": "styleuser",
  "password": "Password1",
  "cityLat": 53.8008,
  "cityLon": -1.5491
}
```

Response `201`:
```json
{
  "user": {
    "id": "uuid",
    "username": "styleuser",
    "role": "USER",
    "createdAt": "2026-03-05T12:00:00.000Z",
    "updatedAt": "2026-03-05T12:00:00.000Z"
  },
  "tokens": {
    "accessToken": "jwt",
    "refreshToken": "jwt"
  }
}
```

#### `POST /auth/login`
Authenticates user.

Request body:
```json
{
  "username": "styleuser",
  "password": "Password1"
}
```

Response `201`: same shape as register.

#### `POST /auth/refresh`
Refreshes the access token using a refresh token.

Request body:
```json
{
  "refreshToken": "jwt"
}
```

Response `201`: same shape as register.

### Users

#### `GET /users/me/settings` (Protected)
Returns authenticated user's settings.

Response `200`:
```json
{
  "homeLocation": "Leeds",
  "timezone": "Europe/London"
}
```

#### `PATCH /users/me/settings` (Protected)
Updates user settings.

Request body (all optional):
```json
{
  "homeLocation": "London",
  "timezone": "Europe/London"
}
```

Response `200`: updated settings object.

#### `POST /users/me/change-password` (Protected)
Changes the authenticated user's password.

Request body:
```json
{
  "currentPassword": "Password1",
  "newPassword": "BetterPass2"
}
```

Response `201`:
```json
{
  "message": "Password updated"
}
```

### Items

The `Item` resource provides the assessed database-backed CRUD surface and supports stored outfit composition for recommendations.

#### `POST /items` (Protected)
Creates an item resource.

Request body:
```json
{
  "category": "TOP",
  "sizeLabel": "M",
  "material": "recycled cotton",
  "condition": 4,
  "styleEmbedding": [0.1, 0.2, 0.3, 0.4],
  "insulation": 0.6,
  "waterproof": 0.2,
  "styleTags": ["casual", "puffer"]
}
```

Response `201`:
```json
{
  "id": "uuid",
  "ownerId": "uuid",
  "category": "TOP",
  "sizeLabel": "M",
  "material": "recycled cotton",
  "condition": 4,
  "styleEmbedding": [0.1, 0.2, 0.3, 0.4],
  "insulation": 0.6,
  "waterproof": 0.2,
  "styleTags": ["casual", "puffer"],
  "status": "AVAILABLE"
}
```

#### `GET /items/{id}` (Protected)
Returns item by id.

### Listings & Matching

#### `POST /listings` (Protected)
Creates listing for an item.

Request body:
```json
{
  "intent": "SWAP",
  "availabilityStart": "2026-03-10T09:00:00.000Z",
  "availabilityEnd": "2026-03-20T18:00:00.000Z",
  "itemId": "uuid"
}
```

#### `GET /listings`
Returns public listings.

#### `GET /listings/{id}`
Returns listing with relations.

#### `PATCH /listings/{id}` (Protected)
Updates listing metadata for a listing owned by the authenticated user.

Request body (all optional except `itemId`, which cannot be changed if supplied):
```json
{
  "intent": "SWAP",
  "availabilityStart": "2026-03-10T09:00:00.000Z",
  "availabilityEnd": "2026-03-24T18:00:00.000Z",
  "rentalTerms": {
    "deposit": 15
  }
}
```

Response `200`: updated listing with linked item.

#### `DELETE /listings/{id}` (Protected)
Deletes a listing owned by the authenticated user and returns the linked item to `AVAILABLE`.

Response `200`:
```json
{
  "deleted": true,
  "id": "uuid"
}
```

#### `POST /listings/{id}/match`
Generates match scores for listing.

### Donations

#### `POST /donations/{itemId}/route` (Protected)
Routes item to recycler and returns impact estimate.

### Analytics

#### `GET /analytics/impact`
Returns impact metrics.

#### `GET /analytics/match-success`
Returns matching success stats.

#### `GET /analytics/recycler-capacity`
Returns recycler capacity summary.

#### `GET /analytics/comfort-vs-temp`
Returns usage comfort vs. temperature analytics.

### Climate

#### `POST /climate`
Creates climate snapshot.

Request body:
```json
{
  "location": "Leeds",
  "capturedAt": "2026-03-20T07:00:00.000Z",
  "validFor": "2026-03-20T09:00:00.000Z",
  "temperatureC": 8,
  "humidity": 77,
  "windKph": 28,
  "precipProb": 70,
  "conditions": "rain"
}
```

#### `POST /climate/latest?location=Leeds&datetime=2026-03-20T09:00&force_live=true`
Returns best matching climate snapshot. Can fetch and persist live Open-Meteo data.

Response `201`/`200` example:
```json
{
  "id": "uuid",
  "location": "Leeds",
  "capturedAt": "2026-03-20T08:55:00.000Z",
  "validFor": "2026-03-20T09:00:00.000Z",
  "temperatureC": 8.2,
  "humidity": 76,
  "windKph": 27.5,
  "precipProb": 64,
  "conditions": "live forecast"
}
```

#### `POST /climate/local-now?location=Leeds`
Returns local timezone and local datetime string.

### Outfits

#### `POST /outfits` (Protected)
Creates an outfit from existing item IDs so it can be scored, logged, and saved in recommendations.

Request body:
```json
{
  "name": "Commute Rain Fit",
  "occasion": "commute",
  "styleTags": ["practical", "casual"],
  "itemIds": ["uuid-item-1", "uuid-item-2"]
}
```

#### `GET /outfits` (Protected)
Returns authenticated user's outfits.

#### `GET /outfits/saved` (Protected)
Returns the authenticated user's saved recommendations.

#### `POST /outfits/saved/toggle` (Protected)
Saves or unsaves a recommendation snapshot.

Request body:
```json
{
  "outfitId": "uuid",
  "outfitName": "Commute Rain Fit",
  "location": "Leeds",
  "recommendedFor": "2026-03-20T09:00:00.000Z",
  "weatherSummary": {
    "temperatureC": 8.2,
    "conditions": "live forecast"
  },
  "outfitSnapshot": {
    "styleTags": ["practical", "casual"],
    "itemNames": ["puffer", "skirt"]
  },
  "imageUrls": ["https://i.pinimg.com/...jpg"]
}
```

#### `POST /outfits/{id}/usage` (Protected)
Logs usage event and records climate context.

Request body:
```json
{
  "location": "Leeds",
  "usedAt": "2026-03-20T09:00:00.000Z"
}
```

### Recommendations

This is the main user-facing workflow in the submitted system.

#### `GET /recommendations/outfit?location=Leeds&datetime=2026-03-20T09:00`
Returns the highest-scoring outfit. The route is public, but if a valid bearer token is provided the service can also apply per-user feedback history.

Response `200`:
```json
{
  "outfit": {
    "id": "uuid",
    "name": "Commute Rain Fit",
    "occasion": "commute",
    "styleTags": ["practical", "casual"],
    "items": [
      {
        "item": {
          "id": "uuid-item-1",
          "material": "recycled polyester",
          "waterproof": 0.8,
          "insulation": 0.6,
          "styleTags": ["jacket"]
        }
      }
    ]
  },
  "score": {
    "total": 0.81,
    "items": [
      {
        "itemId": "uuid-item-1",
        "tempScore": 0.73,
        "precipPenalty": 0,
        "windPenalty": 0,
        "protection": 0.8,
        "trendBoost": 0.2,
        "userBoost": 0.03,
        "total": 0.84
      }
    ]
  },
  "customBoost": 0.04
}
```

### Trends

#### `GET /trends/top?platform=news-rss&limit=20`
Returns top trend tags.

#### `GET /trends/materials`
Returns material popularity summary.

#### `GET /trends/pinterest?q=streetwear`
Returns Pinterest image URLs:
```json
{ "images": [{ "url": "https://..." }] }
```

#### `GET /trends/google?q=streetwear`
Returns Google image URLs.

#### `GET /trends/pinterest/proxy?url=https://...jpg`
Image proxy endpoint for Pinterest assets. Only HTTPS Pinterest image hosts are accepted.

### Feedback

#### `POST /feedback/recommendation` (Protected)
Records user feedback for recommendation output.

Request body:
```json
{
  "targetId": "uuid",
  "rating": 5,
  "note": "Great for rain"
}
```

Response `201`:
```json
{
  "id": "uuid",
  "userId": "uuid",
  "targetType": "RECOMMENDATION",
  "targetId": "uuid",
  "rating": 5,
  "note": "Great for rain",
  "createdAt": "2026-03-05T12:00:00.000Z"
}
```

### Chat

#### `POST /chat/recommendation`
Creates conversational recommendation response. Supports optional bearer token in request header.

Request body:
```json
{
  "location": "Leeds",
  "datetime": "2026-03-20T09:00",
  "message": "I need something warm for commuting.",
  "context": "Office day",
  "occasion": "commute",
  "activity": "walking",
  "styleTags": ["minimal"],
  "avoidTags": ["skirt"]
}
```

Response `201` (example):
```json
{
  "assistant": "Try your insulated waterproof outer layer with comfortable bottoms...",
  "recommendation": {
    "outfit": { "id": "uuid", "name": "Commute Rain Fit" },
    "score": { "total": 0.81 }
  },
  "meta": {
    "location": "Leeds",
    "datetime": "2026-03-20T09:00"
  }
}
```
