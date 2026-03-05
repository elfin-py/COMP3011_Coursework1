"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.NullableJsonNullValueInput = exports.JsonNullValueInput = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.FeedbackScalarFieldEnum = exports.ShipmentScalarFieldEnum = exports.DonationScalarFieldEnum = exports.RecyclerScalarFieldEnum = exports.MatchScalarFieldEnum = exports.ListingScalarFieldEnum = exports.ItemScalarFieldEnum = exports.ProfileScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.3.0",
    engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Profile: 'Profile',
    Item: 'Item',
    Listing: 'Listing',
    Match: 'Match',
    Recycler: 'Recycler',
    Donation: 'Donation',
    Shipment: 'Shipment',
    Feedback: 'Feedback',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    styleTags: 'styleTags',
    sizes: 'sizes',
    cityLat: 'cityLat',
    cityLon: 'cityLon'
};
exports.ItemScalarFieldEnum = {
    id: 'id',
    ownerId: 'ownerId',
    category: 'category',
    sizeLabel: 'sizeLabel',
    material: 'material',
    condition: 'condition',
    styleEmbedding: 'styleEmbedding',
    status: 'status',
    photos: 'photos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ListingScalarFieldEnum = {
    id: 'id',
    itemId: 'itemId',
    intent: 'intent',
    availabilityStart: 'availabilityStart',
    availabilityEnd: 'availabilityEnd',
    rentalTerms: 'rentalTerms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MatchScalarFieldEnum = {
    id: 'id',
    listingId: 'listingId',
    candidateItemId: 'candidateItemId',
    score: 'score',
    breakdown: 'breakdown',
    status: 'status',
    createdAt: 'createdAt'
};
exports.RecyclerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    materials: 'materials',
    distanceKm: 'distanceKm',
    capacityKg: 'capacityKg',
    co2PerKg: 'co2PerKg',
    createdAt: 'createdAt'
};
exports.DonationScalarFieldEnum = {
    id: 'id',
    itemId: 'itemId',
    recyclerId: 'recyclerId',
    allocatedKg: 'allocatedKg',
    impactEstimate: 'impactEstimate',
    status: 'status',
    createdAt: 'createdAt'
};
exports.ShipmentScalarFieldEnum = {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    recyclerId: 'recyclerId',
    eta: 'eta',
    labelUrl: 'labelUrl',
    status: 'status',
    createdAt: 'createdAt'
};
exports.FeedbackScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    targetType: 'targetType',
    targetId: 'targetId',
    rating: 'rating',
    note: 'note',
    createdAt: 'createdAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map