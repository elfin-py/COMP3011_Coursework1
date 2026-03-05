import { Intent } from '@prisma/client';
export declare class CreateListingDto {
    intent: Intent;
    availabilityStart?: string;
    availabilityEnd?: string;
    rentalTerms?: Record<string, unknown>;
    itemId: string;
}
