import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { scrapePinterestImages } from './pinterest.scraper';

@Injectable()
export class TrendsService {
  constructor(private readonly prisma: PrismaService) {}

  topTags(platform: string, limit = 20) {
    return this.prisma.socialTrend.findMany({
      where: platform ? { platform } : {},
      orderBy: { volume: 'desc' },
      take: limit,
    });
  }

  topTagsRecent(platform = '', limit = 50, days = 60) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    return this.prisma.socialTrend.findMany({
      where: {
        ...(platform ? { platform } : {}),
        capturedAt: { gte: since },
      },
      orderBy: [{ volume: 'desc' }, { capturedAt: 'desc' }],
      take: limit,
    });
  }

  materialPopularity() {
    return this.prisma.trendSignal.findMany({
      orderBy: { capturedAt: 'desc' },
      take: 5,
      select: { season: true, materialPopularity: true, capturedAt: true },
    });
  }

  async fetchPinterestImages(query: string) {
    // 1) Try live scrape with Puppeteer
    try {
      const live = await scrapePinterestImages(query, 6);
      if (live.length) {
        return live.map((url) => ({ url, source: 'pinterest-scrape', query }));
      }
    } catch (e) {
      // ignore and fall through to API-based fallback
    }

    // Hit Pinterest resource endpoint used by the search page
    const apiUrl = `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/pins/?q=${encodeURIComponent(
      query,
    )}&data=%7B%22options%22%3A%7B%22query%22%3A%22${encodeURIComponent(
      query,
    )}%22%2C%22scope%22%3A%22pins%22%2C%22page_size%22%3A20%7D%2C%22context%22%3A%7B%7D%7D&_=${Date.now()}`;
    try {
      const res = await fetch(apiUrl, {
        cache: 'no-store',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      });
      if (!res.ok) {
        return await this.fetchGoogleImages(query);
      }
      const text = await res.text();
      let json: any;
      try {
        json = JSON.parse(text);
      } catch {
        return await this.fetchGoogleImages(query);
      }
      const results = json?.resource_response?.data?.results ?? [];
      const images = results
        .map((r: any) => r?.images?.orig?.url as string | undefined)
        .filter((u: string | undefined): u is string => !!u && /\.(jpe?g|png|webp)$/i.test(u));
      const unique = Array.from(new Set(images)).slice(0, 10);
      if (unique.length) {
        return unique.map((url) => ({ url, source: 'pinterest', query }));
      }
      // fallback to google images if pinterest empty
      return await this.fetchGoogleImages(query);
    } catch {
      return await this.fetchGoogleImages(query);
    }
  }

  async fetchGoogleImages(query: string) {
    const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'text/html',
      },
    });
    const html = await res.text();
    const matches = Array.from(html.matchAll(/\"ou\":\"(https?:[^\"\\s]+)\"/g)).map((m) => m[1]);
    const unique = Array.from(new Set(matches)).slice(0, 10);
    return unique.map((url) => ({ url, source: 'google', query }));
  }
}
