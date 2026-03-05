import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ItemStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

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

  findAll(ownerId: string) {
    return this.prisma.item.findMany({
      where: { ownerId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(ownerId: string, id: string) {
    const item = await this.prisma.item.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    if (item.ownerId !== ownerId) {
      throw new ForbiddenException('You can only view your own items');
    }
    return item;
  }

  async update(ownerId: string, id: string, dto: UpdateItemDto) {
    const existing = await this.prisma.item.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Item not found');
    if (existing.ownerId !== ownerId) {
      throw new ForbiddenException('You can only update your own items');
    }
    return this.prisma.item.update({
      where: { id },
      data: {
        category: dto.category,
        sizeLabel: dto.sizeLabel,
        material: dto.material,
        condition: dto.condition,
        styleEmbedding: dto.styleEmbedding,
        photos: dto.photos as Prisma.InputJsonValue | undefined,
        insulation: dto.insulation,
        waterproof: dto.waterproof,
        styleTags: dto.styleTags,
        status: dto.status,
      },
    });
  }

  async remove(ownerId: string, id: string) {
    const existing = await this.prisma.item.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Item not found');
    if (existing.ownerId !== ownerId) {
      throw new ForbiddenException('You can only delete your own items');
    }
    await this.prisma.item.delete({ where: { id } });
  }
}
