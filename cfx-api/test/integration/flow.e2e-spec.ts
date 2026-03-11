import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

process.env.JWT_ACCESS_SECRET ??= 'test-access-secret';
process.env.JWT_REFRESH_SECRET ??= 'test-refresh-secret';

const { AppModule } = require('../../src/app.module');

describe('Happy path flow (e2e)', () => {
  let app: INestApplication;
  let token = '';
  let itemId = '';
  let listingId = '';
  let climateCreated = false;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('registers and logs in', async () => {
    const username = `testuser${Date.now()}`;
    const password = 'Password1';

    await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({ username, password, cityLat: 53.8, cityLon: -1.55 })
      .expect(201);

    const login = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ username, password })
      .expect(201);

    token = login.body.tokens.accessToken;
    expect(token).toBeDefined();
  });

  it('creates an item and listing, then matches', async () => {
    const createItem = await request(app.getHttpServer())
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send({
        category: 'TOP',
        sizeLabel: 'M',
        material: 'recycled cotton',
        condition: 4,
        styleEmbedding: [0.1, 0.2, 0.3, 0.4],
      })
      .expect(201);
    itemId = createItem.body.id;

    const createListing = await request(app.getHttpServer())
      .post('/api/listings')
      .set('Authorization', `Bearer ${token}`)
      .send({
        itemId,
        intent: 'SWAP',
        availabilityStart: new Date().toISOString(),
        availabilityEnd: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString(),
      })
      .expect(201);
    listingId = createListing.body.id;

    const matches = await request(app.getHttpServer())
      .post(`/api/listings/${listingId}/match`)
      .expect(201);

    expect(Array.isArray(matches.body)).toBeTruthy();
  });

  it('updates and deletes a listing, releasing the item back to available', async () => {
    await request(app.getHttpServer())
      .patch(`/api/listings/${listingId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        availabilityEnd: new Date(Date.now() + 14 * 24 * 3600 * 1000).toISOString(),
      })
      .expect(200);

    await request(app.getHttpServer())
      .delete(`/api/listings/${listingId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    const item = await request(app.getHttpServer())
      .get(`/api/items/${itemId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(item.body.status).toBe('AVAILABLE');
  });

  it('creates climate snapshot and gets recommendation', async () => {
    const now = new Date().toISOString();
    await request(app.getHttpServer())
      .post('/api/climate')
      .send({
        location: 'Leeds',
        capturedAt: now,
        temperatureC: 12,
        humidity: 70,
        precipProb: 30,
        windKph: 8,
        conditions: 'cloudy',
      })
      .expect(201);
    climateCreated = true;

    const outfit = await request(app.getHttpServer())
      .post('/api/outfits')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test fit',
        occasion: 'commute',
        itemIds: [itemId],
        styleTags: ['casual'],
      })
      .expect(201);
    expect(outfit.body.id).toBeDefined();

    const rec = await request(app.getHttpServer())
      .get('/api/recommendations/outfit?location=Leeds')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(rec.body.outfit).toBeDefined();
    expect(rec.body.score).toBeDefined();
  });
});
