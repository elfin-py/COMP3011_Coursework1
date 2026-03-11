import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

process.env.JWT_ACCESS_SECRET ??= 'test-access-secret';
process.env.JWT_REFRESH_SECRET ??= 'test-refresh-secret';

const { AppModule } = require('../../src/app.module');

describe('Authenticated recommendation and account flows (e2e)', () => {
  let app: INestApplication;
  let token = '';
  let outfitId = '';
  let itemId = '';
  const username = `recuser${Date.now()}`;
  const password = 'Password1';
  const nextPassword = 'Password2';
  const location = `Leeds-auth-${Date.now()}`;

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

  it('registers, logs in, and creates a recommendation target', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({ username, password, cityLat: 53.8, cityLon: -1.55 })
      .expect(201);

    const login = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ username, password })
      .expect(201);
    token = login.body.tokens.accessToken;

    await request(app.getHttpServer())
      .post('/api/climate')
      .send({
        location,
        capturedAt: new Date().toISOString(),
        temperatureC: 10,
        humidity: 70,
        precipProb: 20,
        windKph: 6,
        conditions: 'cloudy',
      })
      .expect(201);

    const createItem = await request(app.getHttpServer())
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send({
        category: 'OUTER',
        sizeLabel: 'M',
        material: 'polyester',
        condition: 4,
        styleEmbedding: [0.2, 0.2, 0.2, 0.2],
        insulation: 0.8,
        waterproof: 0.6,
        styleTags: ['jacket', 'casual'],
      })
      .expect(201);
    itemId = createItem.body.id;

    const createOutfit = await request(app.getHttpServer())
      .post('/api/outfits')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Authenticated Fit',
        occasion: 'commute',
        itemIds: [itemId],
        styleTags: ['casual'],
      })
      .expect(201);
    outfitId = createOutfit.body.id;
  });

  it('applies feedback boost only when the recommendation request is authenticated', async () => {
    await request(app.getHttpServer())
      .post('/api/feedback/recommendation')
      .set('Authorization', `Bearer ${token}`)
      .send({
        targetId: outfitId,
        rating: 5,
        note: 'Works well in this weather',
      })
      .expect(201);

    const anonymous = await request(app.getHttpServer())
      .get(`/api/recommendations/outfit?location=${encodeURIComponent(location)}`)
      .expect(200);

    const authenticated = await request(app.getHttpServer())
      .get(`/api/recommendations/outfit?location=${encodeURIComponent(location)}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(anonymous.body.score.items[0].userBoost).toBe(0);
    expect(authenticated.body.outfit.id).toBe(outfitId);
    expect(authenticated.body.score.items[0].userBoost).toBeGreaterThan(0);
  });

  it('saves and unsaves a recommendation snapshot', async () => {
    const togglePayload = {
      recommendedFor: new Date().toISOString(),
      location,
      weather: {
        temperatureC: 10,
        precipProb: 20,
        windKph: 6,
        conditions: 'cloudy',
      },
      outfit: {
        id: outfitId,
        name: 'Authenticated Fit',
        occasion: 'commute',
        styleTags: ['casual'],
        imageUrls: ['https://i.pinimg.com/236x/example.jpg'],
        items: [
          {
            id: itemId,
            material: 'polyester',
            sizeLabel: 'M',
            styleTags: ['jacket', 'casual'],
          },
        ],
      },
    };

    const saved = await request(app.getHttpServer())
      .post('/api/outfits/saved/toggle')
      .set('Authorization', `Bearer ${token}`)
      .send(togglePayload)
      .expect(201);
    expect(saved.body.saved).toBe(true);

    const listAfterSave = await request(app.getHttpServer())
      .get('/api/outfits/saved')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    expect(listAfterSave.body).toHaveLength(1);

    const unsaved = await request(app.getHttpServer())
      .post('/api/outfits/saved/toggle')
      .set('Authorization', `Bearer ${token}`)
      .send(togglePayload)
      .expect(201);
    expect(unsaved.body.saved).toBe(false);

    const listAfterUnsave = await request(app.getHttpServer())
      .get('/api/outfits/saved')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    expect(listAfterUnsave.body).toHaveLength(0);
  });

  it('changes the password and rejects the old one afterwards', async () => {
    await request(app.getHttpServer())
      .post('/api/users/me/change-password')
      .set('Authorization', `Bearer ${token}`)
      .send({
        currentPassword: password,
        newPassword: nextPassword,
      })
      .expect(201);

    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ username, password })
      .expect(401);

    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ username, password: nextPassword })
      .expect(201);
  });
});
