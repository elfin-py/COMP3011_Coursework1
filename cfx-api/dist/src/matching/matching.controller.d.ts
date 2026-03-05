import { MatchingService } from './matching.service';
export declare class MatchingController {
    private readonly matchingService;
    constructor(matchingService: MatchingService);
    generate(id: string): Promise<{
        listingId: string;
        candidateItemId: string;
        score: number;
        breakdown: {
            style: number;
            size: number;
            condition: number;
            distance: number;
            sustain: number;
            demand: number;
            total: number;
        };
    }[]>;
}
