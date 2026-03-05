import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(ownerId: string, dto: CreateItemDto): Prisma.Prisma__ItemClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        styleTags: string[];
        ownerId: string;
        category: import("@prisma/client").$Enums.Category;
        sizeLabel: string;
        material: string;
        condition: number;
        styleEmbedding: number[];
        insulation: number;
        waterproof: number;
        status: import("@prisma/client").$Enums.ItemStatus;
        photos: Prisma.JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        styleTags: string[];
        ownerId: string;
        category: import("@prisma/client").$Enums.Category;
        sizeLabel: string;
        material: string;
        condition: number;
        styleEmbedding: number[];
        insulation: number;
        waterproof: number;
        status: import("@prisma/client").$Enums.ItemStatus;
        photos: Prisma.JsonValue | null;
    }>;
}
