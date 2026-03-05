export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Category: {
    readonly TOP: "TOP";
    readonly BOTTOM: "BOTTOM";
    readonly SHOES: "SHOES";
    readonly OUTER: "OUTER";
    readonly ACCESSORY: "ACCESSORY";
};
export type Category = (typeof Category)[keyof typeof Category];
export declare const ItemStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly RESERVED: "RESERVED";
    readonly IN_SWAP: "IN_SWAP";
    readonly DONATED: "DONATED";
    readonly RECYCLED: "RECYCLED";
};
export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus];
export declare const Intent: {
    readonly SWAP: "SWAP";
    readonly RENT: "RENT";
};
export type Intent = (typeof Intent)[keyof typeof Intent];
export declare const TargetType: {
    readonly MATCH: "MATCH";
    readonly RECYCLER: "RECYCLER";
};
export type TargetType = (typeof TargetType)[keyof typeof TargetType];
