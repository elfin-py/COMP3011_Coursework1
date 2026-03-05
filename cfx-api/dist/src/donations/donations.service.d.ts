import { PrismaService } from '../prisma/prisma.service';
export declare class DonationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    routeItem(itemId: string): Promise<{
        donation: {
            id: string;
            createdAt: Date;
            status: string;
            itemId: string;
            recyclerId: string;
            allocatedKg: number;
            impactEstimate: number;
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
