import { DonationsService } from './donations.service';
export declare class DonationsController {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
    route(itemId: string): Promise<{
        donation: {
            id: string;
            createdAt: Date;
            status: string;
            itemId: string;
            allocatedKg: number;
            impactEstimate: number;
            recyclerId: string;
        };
        rationale: {
            recycler: string;
            distanceScore: number;
            impactScore: number;
            capacityScore: number;
            total: number;
        };
    }>;
}
