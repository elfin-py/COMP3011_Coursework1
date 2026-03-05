import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Profile: "Profile";
    readonly Item: "Item";
    readonly Listing: "Listing";
    readonly Match: "Match";
    readonly Recycler: "Recycler";
    readonly Donation: "Donation";
    readonly Shipment: "Shipment";
    readonly Feedback: "Feedback";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly styleTags: "styleTags";
    readonly sizes: "sizes";
    readonly cityLat: "cityLat";
    readonly cityLon: "cityLon";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const ItemScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly category: "category";
    readonly sizeLabel: "sizeLabel";
    readonly material: "material";
    readonly condition: "condition";
    readonly styleEmbedding: "styleEmbedding";
    readonly status: "status";
    readonly photos: "photos";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];
export declare const ListingScalarFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly intent: "intent";
    readonly availabilityStart: "availabilityStart";
    readonly availabilityEnd: "availabilityEnd";
    readonly rentalTerms: "rentalTerms";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly listingId: "listingId";
    readonly candidateItemId: "candidateItemId";
    readonly score: "score";
    readonly breakdown: "breakdown";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const RecyclerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly materials: "materials";
    readonly distanceKm: "distanceKm";
    readonly capacityKg: "capacityKg";
    readonly co2PerKg: "co2PerKg";
    readonly createdAt: "createdAt";
};
export type RecyclerScalarFieldEnum = (typeof RecyclerScalarFieldEnum)[keyof typeof RecyclerScalarFieldEnum];
export declare const DonationScalarFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly recyclerId: "recyclerId";
    readonly allocatedKg: "allocatedKg";
    readonly impactEstimate: "impactEstimate";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum];
export declare const ShipmentScalarFieldEnum: {
    readonly id: "id";
    readonly fromUserId: "fromUserId";
    readonly toUserId: "toUserId";
    readonly recyclerId: "recyclerId";
    readonly eta: "eta";
    readonly labelUrl: "labelUrl";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum];
export declare const FeedbackScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly targetType: "targetType";
    readonly targetId: "targetId";
    readonly rating: "rating";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
