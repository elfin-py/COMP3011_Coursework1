import { BadRequestException, Controller, Get, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TrendsService } from './trends.service';
import type { Response } from 'express';

@ApiTags('trends')
@Controller('trends')
export class TrendsController {
  constructor(private readonly trendsService: TrendsService) {}
  private static readonly ALLOWED_PROXY_HOSTS = ['pinimg.com', 'pinterest.com'];

  @Get('top')
  top(@Query('platform') platform?: string, @Query('limit') limit = 20) {
    return this.trendsService.topTags(platform ?? '', Number(limit));
  }

  @Get('materials')
  materials() {
    return this.trendsService.materialPopularity();
  }

  @Get('pinterest')
  async pinterest(@Query('q') q: string) {
    const query = q?.trim();
    if (!query) return { images: [] };
    const images = await this.trendsService.fetchPinterestImages(query);
    return { images };
  }

  @Get('google')
  async google(@Query('q') q: string) {
    const query = q?.trim();
    if (!query) return { images: [] };
    const images = await this.trendsService.fetchGoogleImages(query);
    return { images };
  }

  @Get('pinterest/proxy')
  async proxyPinterest(@Query('url') url: string, @Res() res: Response) {
    const target = url?.trim();
    if (!target || target.length < 12) {
      throw new BadRequestException('Missing or invalid url');
    }
    let parsed: URL;
    try {
      parsed = new URL(target);
    } catch {
      throw new BadRequestException('Missing or invalid url');
    }
    const hostname = parsed.hostname.toLowerCase();
    const isAllowedHost = TrendsController.ALLOWED_PROXY_HOSTS.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
    );
    if (
      parsed.protocol !== 'https:' ||
      !isAllowedHost ||
      !/\.(jpe?g|png|webp)$/i.test(parsed.pathname)
    ) {
      throw new BadRequestException('Missing or invalid url');
    }

    const upstream = await fetch(parsed, {
      signal: AbortSignal.timeout(5000),
    });
    if (!upstream.ok) {
      throw new BadRequestException(`Upstream failed: ${upstream.status}`);
    }
    const contentType = upstream.headers.get('content-type') || 'image/jpeg';
    const contentLength = Number(upstream.headers.get('content-length') || '0');
    if (!contentType.startsWith('image/')) {
      throw new BadRequestException('Upstream did not return an image');
    }
    if (contentLength > 5_000_000) {
      throw new BadRequestException('Image too large');
    }
    const buffer = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Type', contentType);
    res.send(buffer);
  }
}
