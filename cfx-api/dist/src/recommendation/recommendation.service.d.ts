import { PrismaService } from '../prisma/prisma.service';
import { ClimateService } from '../climate/climate.service';
import { TrendsService } from '../trends/trends.service';
import { FeedbackService } from '../feedback/feedback.service';
type RecommendOptions = {
    occasion?: string;
    activity?: string;
    styleTags?: string[];
    avoidTags?: string[];
    preferences?: string[];
};
export declare class RecommendationService {
    private readonly prisma;
    private readonly climateService;
    private readonly trendsService;
    private readonly feedbackService;
    constructor(prisma: PrismaService, climateService: ClimateService, trendsService: TrendsService, feedbackService: FeedbackService);
    recommendOutfit(userId: string | null, location: string, datetime?: string, options?: RecommendOptions): Promise<{
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
                    status: import("@prisma/client").$Enums.ItemStatus;
                    photos: import("@prisma/client/runtime/client").JsonValue | null;
                    insulation: number;
                    waterproof: number;
                };
            } & {
                itemId: string;
                outfitId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            userId: string;
            styleTags: string[];
            name: string;
            occasion: string | null;
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
                materialQuality: number;
                userBoost: number;
                total: number;
            }[];
        };
        customBoost: number;
    }>;
    private customPreferenceBoost;
    private scoreItem;
    private materialQualityBoost;
    private trendBoost;
    private tempMatch;
}
export {};
