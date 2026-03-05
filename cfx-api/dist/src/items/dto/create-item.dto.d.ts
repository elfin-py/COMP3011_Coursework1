import { Category } from '@prisma/client';
export declare class CreateItemDto {
    category: Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding: number[];
    photos?: Record<string, unknown>;
    insulation?: number;
    waterproof?: number;
    styleTags?: string[];
}
