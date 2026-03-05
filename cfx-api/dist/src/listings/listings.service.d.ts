import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
export declare class ListingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(ownerId: string, dto: CreateListingDto): Promise<{
        item: {
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
            status: import("@prisma/client").$Enums.ItemStatus;
            photos: Prisma.JsonValue | null;
            insulation: number;
            waterproof: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        itemId: string;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: Prisma.JsonValue | null;
    }>;
    getPublicListings(): Promise<({
        item: {
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
            status: import("@prisma/client").$Enums.ItemStatus;
            photos: Prisma.JsonValue | null;
            insulation: number;
            waterproof: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        itemId: string;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: Prisma.JsonValue | null;
    })[]>;
    findById(id: string): Promise<{
        item: {
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
            status: import("@prisma/client").$Enums.ItemStatus;
            photos: Prisma.JsonValue | null;
            insulation: number;
            waterproof: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        itemId: string;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: Prisma.JsonValue | null;
    }>;
}
