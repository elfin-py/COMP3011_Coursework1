import { PrismaService } from '../prisma/prisma.service';
import { ListingsService } from '../listings/listings.service';
type ScoreBreakdown = {
    style: number;
    size: number;
    condition: number;
    distance: number;
    sustain: number;
    demand: number;
    total: number;
};
export declare class MatchingService {
    private readonly prisma;
    private readonly listingsService;
    private readonly weights;
    constructor(prisma: PrismaService, listingsService: ListingsService);
    generateMatches(listingId: string): Promise<{
        listingId: string;
        candidateItemId: string;
        score: number;
        breakdown: ScoreBreakdown;
    }[]>;
    private scoreItem;
    private sizePenalty;
    private cosine;
    private inverseDistance;
    private haversine;
    private computeDemandBalance;
}
export {};
