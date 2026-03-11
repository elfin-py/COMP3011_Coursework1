import { NotFoundException } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';

describe('RecommendationService', () => {
  const prisma = {
    outfit: {
      findMany: jest.fn(),
    },
  };

  const climateService = {
    latest: jest.fn(),
  };

  const trendsService = {
    topTagsRecent: jest.fn(),
    topTags: jest.fn(),
  };

  const feedbackService = {
    userAverage: jest.fn(),
  };

  let service: RecommendationService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new RecommendationService(
      prisma as any,
      climateService as any,
      trendsService as any,
      feedbackService as any,
    );
  });

  it('returns the highest scored outfit', async () => {
    climateService.latest.mockResolvedValue({
      id: 'climate-1',
      temperatureC: 13,
      precipProb: 10,
      windKph: 6,
    });
    feedbackService.userAverage.mockResolvedValue({ avg: 4, count: 2 });
    trendsService.topTagsRecent.mockResolvedValue([
      { tag: 'coat', volume: 100, sentiment: 0.4 },
      { tag: 'casual', volume: 50, sentiment: 0.2 },
    ]);
    prisma.outfit.findMany.mockResolvedValue([
      {
        id: 'outfit-1',
        name: 'Good fit',
        occasion: 'commute',
        styleTags: ['casual'],
        items: [
          {
            item: {
              id: 'item-1',
              insulation: 0.5,
              waterproof: 0.3,
              material: 'cotton coat',
              styleTags: ['coat'],
            },
          },
        ],
      },
      {
        id: 'outfit-2',
        name: 'Bad fit',
        occasion: 'commute',
        styleTags: ['dressy'],
        items: [
          {
            item: {
              id: 'item-2',
              insulation: 0.1,
              waterproof: 0,
              material: 'suede',
              styleTags: ['skirt'],
            },
          },
        ],
      },
    ]);

    const result = await service.recommendOutfit(
      'user-1',
      'Leeds',
      '2026-03-10T09:00',
    );

    expect(result.outfit.id).toBe('outfit-1');
    expect(result.score.total).toBeGreaterThan(0);
    expect(result.score.items[0].userBoost).toBeGreaterThan(0);
  });

  it('does not apply a user boost for anonymous requests', async () => {
    climateService.latest.mockResolvedValue({
      id: 'climate-1',
      temperatureC: 12,
      precipProb: 20,
      windKph: 5,
    });
    trendsService.topTagsRecent.mockResolvedValue([{ tag: 'coat', volume: 80, sentiment: 0.3 }]);
    prisma.outfit.findMany.mockResolvedValue([
      {
        id: 'outfit-1',
        name: 'Anonymous fit',
        occasion: 'commute',
        styleTags: ['casual'],
        items: [
          {
            item: {
              id: 'item-1',
              insulation: 0.6,
              waterproof: 0.5,
              material: 'cotton coat',
              styleTags: ['coat'],
            },
          },
        ],
      },
    ]);

    const result = await service.recommendOutfit(null, 'Leeds');

    expect(feedbackService.userAverage).not.toHaveBeenCalled();
    expect(result.score.items[0].userBoost).toBe(0);
  });

  it('falls back to general trend tags when recent news trends are unavailable', async () => {
    climateService.latest.mockResolvedValue({
      id: 'climate-1',
      temperatureC: 11,
      precipProb: 10,
      windKph: 4,
    });
    feedbackService.userAverage.mockResolvedValue({ avg: null, count: 0 });
    trendsService.topTagsRecent.mockResolvedValue([]);
    trendsService.topTags.mockResolvedValue([
      { tag: 'linen', volume: 200, sentiment: 0.5 },
    ]);
    prisma.outfit.findMany.mockResolvedValue([
      {
        id: 'outfit-1',
        name: 'Fallback trend fit',
        occasion: 'commute',
        styleTags: ['smart'],
        items: [
          {
            item: {
              id: 'item-1',
              insulation: 0.5,
              waterproof: 0.4,
              material: 'linen blend',
              styleTags: ['smart'],
            },
          },
        ],
      },
    ]);

    const result = await service.recommendOutfit('user-1', 'Leeds');

    expect(trendsService.topTags).toHaveBeenCalled();
    expect(result.score.items[0].trendBoost).toBeGreaterThan(0);
  });

  it('applies custom preference boosts and penalties', async () => {
    climateService.latest.mockResolvedValue({
      id: 'climate-1',
      temperatureC: 16,
      precipProb: 0,
      windKph: 3,
    });
    feedbackService.userAverage.mockResolvedValue({ avg: null, count: 0 });
    trendsService.topTagsRecent.mockResolvedValue([]);
    trendsService.topTags.mockResolvedValue([]);
    prisma.outfit.findMany.mockResolvedValue([
      {
        id: 'outfit-1',
        name: 'Preferred fit',
        occasion: 'Dinner date',
        styleTags: ['polished', 'heels'],
        items: [
          {
            item: {
              id: 'item-1',
              insulation: 0.4,
              waterproof: 0.2,
              material: 'wool',
              styleTags: ['heels'],
            },
          },
        ],
      },
      {
        id: 'outfit-2',
        name: 'Avoided fit',
        occasion: 'Casual',
        styleTags: ['casual'],
        items: [
          {
            item: {
              id: 'item-2',
              insulation: 0.4,
              waterproof: 0.2,
              material: 'wool',
              styleTags: ['flats'],
            },
          },
        ],
      },
    ]);

    const result = await service.recommendOutfit('user-1', 'Leeds', undefined, {
      occasion: 'dinner',
      styleTags: ['polished'],
      avoidTags: ['casual'],
    });

    expect(result.outfit.id).toBe('outfit-1');
  });

  it('throws when no climate snapshot is available', async () => {
    climateService.latest.mockResolvedValue(null);

    await expect(
      service.recommendOutfit('user-1', 'Leeds'),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('throws when there are no outfits to score', async () => {
    climateService.latest.mockResolvedValue({
      id: 'climate-1',
      temperatureC: 12,
      precipProb: 0,
      windKph: 4,
    });
    prisma.outfit.findMany.mockResolvedValue([]);

    await expect(service.recommendOutfit('user-1', 'Leeds')).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
