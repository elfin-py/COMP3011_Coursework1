import { RecommendationService } from './recommendation.service';
export declare class RecommendationController {
    private readonly service;
    constructor(service: RecommendationService);
    outfit(req: any, location: string, datetime?: string): Promise<{
        outfit: {
            items: ({
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
                    insulation: number;
                    waterproof: number;
                    status: import("@prisma/client").$Enums.ItemStatus;
                    photos: import("@prisma/client/runtime/client").JsonValue | null;
                };
            } & {
                itemId: string;
                outfitId: string;
            })[];
        } & {
            name: string;
            id: string;
            createdAt: Date;
            styleTags: string[];
            occasion: string | null;
            userId: string;
        };
        score: {
            total: number;
            items: {
                itemId: any;
                tempScore: number;
                precipPenalty: number;
                windPenalty: number;
                protection: number;
                trendBoost: number;
                userBoost: number;
                total: number;
            }[];
        };
        customBoost: number;
    }>;
}
