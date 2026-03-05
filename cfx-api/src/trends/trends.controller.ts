import { BadRequestException, Controller, Get, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TrendsService } from './trends.service';
import type { Response } from 'express';

@ApiTags('trends')
@Controller('trends')
export class TrendsController {
  constructor(private readonly trendsService: TrendsService) {}

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
    if (!target || target.length < 12 || !target.startsWith('http') || !/\.(jpe?g|png|webp)$/i.test(target)) {
      throw new BadRequestException('Missing or invalid url');
    }
    const upstream = await fetch(target);
    if (!upstream.ok) {
      throw new BadRequestException(`Upstream failed: ${upstream.status}`);
    }
    const contentType = upstream.headers.get('content-type') || 'image/jpeg';
    const buffer = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Type', contentType);
    res.send(buffer);
  }
}
