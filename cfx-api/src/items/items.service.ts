import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ItemStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  create(ownerId: string, dto: CreateItemDto) {
    return this.prisma.item.create({
      data: {
        ownerId,
        category: dto.category,
        sizeLabel: dto.sizeLabel,
        material: dto.material,
        condition: dto.condition,
        styleEmbedding: dto.styleEmbedding,
        photos: (dto.photos ?? {}) as Prisma.InputJsonValue,
        insulation: dto.insulation ?? 0.5,
        waterproof: dto.waterproof ?? 0.0,
        styleTags: dto.styleTags ?? [],
        status: ItemStatus.AVAILABLE,
      },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.item.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    return item;
    }
}
