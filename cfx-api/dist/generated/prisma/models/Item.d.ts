import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemPayload>;
export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
};
export type ItemAvgAggregateOutputType = {
    condition: number | null;
    styleEmbedding: number | null;
};
export type ItemSumAggregateOutputType = {
    condition: number | null;
    styleEmbedding: number[];
};
export type ItemMinAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    category: $Enums.Category | null;
    sizeLabel: string | null;
    material: string | null;
    condition: number | null;
    status: $Enums.ItemStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItemMaxAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    category: $Enums.Category | null;
    sizeLabel: string | null;
    material: string | null;
    condition: number | null;
    status: $Enums.ItemStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItemCountAggregateOutputType = {
    id: number;
    ownerId: number;
    category: number;
    sizeLabel: number;
    material: number;
    condition: number;
    styleEmbedding: number;
    status: number;
    photos: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ItemAvgAggregateInputType = {
    condition?: true;
    styleEmbedding?: true;
};
export type ItemSumAggregateInputType = {
    condition?: true;
    styleEmbedding?: true;
};
export type ItemMinAggregateInputType = {
    id?: true;
    ownerId?: true;
    category?: true;
    sizeLabel?: true;
    material?: true;
    condition?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItemMaxAggregateInputType = {
    id?: true;
    ownerId?: true;
    category?: true;
    sizeLabel?: true;
    material?: true;
    condition?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItemCountAggregateInputType = {
    id?: true;
    ownerId?: true;
    category?: true;
    sizeLabel?: true;
    material?: true;
    condition?: true;
    styleEmbedding?: true;
    status?: true;
    photos?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItemCountAggregateInputType;
    _avg?: ItemAvgAggregateInputType;
    _sum?: ItemSumAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
};
export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItem[P]> : Prisma.GetScalarType<T[P], AggregateItem[P]>;
};
export type ItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithAggregationInput | Prisma.ItemOrderByWithAggregationInput[];
    by: Prisma.ItemScalarFieldEnum[] | Prisma.ItemScalarFieldEnum;
    having?: Prisma.ItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCountAggregateInputType | true;
    _avg?: ItemAvgAggregateInputType;
    _sum?: ItemSumAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
};
export type ItemGroupByOutputType = {
    id: string;
    ownerId: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding: number[];
    status: $Enums.ItemStatus;
    photos: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
};
type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemGroupByOutputType[P]>;
}>>;
export type ItemWhereInput = {
    AND?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    OR?: Prisma.ItemWhereInput[];
    NOT?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    id?: Prisma.StringFilter<"Item"> | string;
    ownerId?: Prisma.StringFilter<"Item"> | string;
    category?: Prisma.EnumCategoryFilter<"Item"> | $Enums.Category;
    sizeLabel?: Prisma.StringFilter<"Item"> | string;
    material?: Prisma.StringFilter<"Item"> | string;
    condition?: Prisma.IntFilter<"Item"> | number;
    styleEmbedding?: Prisma.FloatNullableListFilter<"Item">;
    status?: Prisma.EnumItemStatusFilter<"Item"> | $Enums.ItemStatus;
    photos?: Prisma.JsonNullableFilter<"Item">;
    createdAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    listing?: Prisma.XOR<Prisma.ListingNullableScalarRelationFilter, Prisma.ListingWhereInput> | null;
    matches?: Prisma.MatchListRelationFilter;
    donations?: Prisma.DonationListRelationFilter;
};
export type ItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    styleEmbedding?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    photos?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    listing?: Prisma.ListingOrderByWithRelationInput;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
    donations?: Prisma.DonationOrderByRelationAggregateInput;
};
export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    OR?: Prisma.ItemWhereInput[];
    NOT?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    ownerId?: Prisma.StringFilter<"Item"> | string;
    category?: Prisma.EnumCategoryFilter<"Item"> | $Enums.Category;
    sizeLabel?: Prisma.StringFilter<"Item"> | string;
    material?: Prisma.StringFilter<"Item"> | string;
    condition?: Prisma.IntFilter<"Item"> | number;
    styleEmbedding?: Prisma.FloatNullableListFilter<"Item">;
    status?: Prisma.EnumItemStatusFilter<"Item"> | $Enums.ItemStatus;
    photos?: Prisma.JsonNullableFilter<"Item">;
    createdAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    listing?: Prisma.XOR<Prisma.ListingNullableScalarRelationFilter, Prisma.ListingWhereInput> | null;
    matches?: Prisma.MatchListRelationFilter;
    donations?: Prisma.DonationListRelationFilter;
}, "id">;
export type ItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    styleEmbedding?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    photos?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ItemCountOrderByAggregateInput;
    _avg?: Prisma.ItemAvgOrderByAggregateInput;
    _max?: Prisma.ItemMaxOrderByAggregateInput;
    _min?: Prisma.ItemMinOrderByAggregateInput;
    _sum?: Prisma.ItemSumOrderByAggregateInput;
};
export type ItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemScalarWhereWithAggregatesInput | Prisma.ItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemScalarWhereWithAggregatesInput | Prisma.ItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    category?: Prisma.EnumCategoryWithAggregatesFilter<"Item"> | $Enums.Category;
    sizeLabel?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    material?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    condition?: Prisma.IntWithAggregatesFilter<"Item"> | number;
    styleEmbedding?: Prisma.FloatNullableListFilter<"Item">;
    status?: Prisma.EnumItemStatusWithAggregatesFilter<"Item"> | $Enums.ItemStatus;
    photos?: Prisma.JsonNullableWithAggregatesFilter<"Item">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Item"> | Date | string;
};
export type ItemCreateInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutItemsInput;
    listing?: Prisma.ListingCreateNestedOneWithoutItemInput;
    matches?: Prisma.MatchCreateNestedManyWithoutCandidateItemInput;
    donations?: Prisma.DonationCreateNestedManyWithoutItemInput;
};
export type ItemUncheckedCreateInput = {
    id?: string;
    ownerId: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing?: Prisma.ListingUncheckedCreateNestedOneWithoutItemInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutCandidateItemInput;
    donations?: Prisma.DonationUncheckedCreateNestedManyWithoutItemInput;
};
export type ItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutItemsNestedInput;
    listing?: Prisma.ListingUpdateOneWithoutItemNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutCandidateItemNestedInput;
    donations?: Prisma.DonationUpdateManyWithoutItemNestedInput;
};
export type ItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUncheckedUpdateOneWithoutItemNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutCandidateItemNestedInput;
    donations?: Prisma.DonationUncheckedUpdateManyWithoutItemNestedInput;
};
export type ItemCreateManyInput = {
    id?: string;
    ownerId: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemListRelationFilter = {
    every?: Prisma.ItemWhereInput;
    some?: Prisma.ItemWhereInput;
    none?: Prisma.ItemWhereInput;
};
export type ItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    styleEmbedding?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemAvgOrderByAggregateInput = {
    condition?: Prisma.SortOrder;
    styleEmbedding?: Prisma.SortOrder;
};
export type ItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemSumOrderByAggregateInput = {
    condition?: Prisma.SortOrder;
    styleEmbedding?: Prisma.SortOrder;
};
export type ItemScalarRelationFilter = {
    is?: Prisma.ItemWhereInput;
    isNot?: Prisma.ItemWhereInput;
};
export type ItemCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOwnerInput, Prisma.ItemUncheckedCreateWithoutOwnerInput> | Prisma.ItemCreateWithoutOwnerInput[] | Prisma.ItemUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOwnerInput | Prisma.ItemCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.ItemCreateManyOwnerInputEnvelope;
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
};
export type ItemUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOwnerInput, Prisma.ItemUncheckedCreateWithoutOwnerInput> | Prisma.ItemCreateWithoutOwnerInput[] | Prisma.ItemUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOwnerInput | Prisma.ItemCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.ItemCreateManyOwnerInputEnvelope;
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
};
export type ItemUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOwnerInput, Prisma.ItemUncheckedCreateWithoutOwnerInput> | Prisma.ItemCreateWithoutOwnerInput[] | Prisma.ItemUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOwnerInput | Prisma.ItemCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.ItemUpsertWithWhereUniqueWithoutOwnerInput | Prisma.ItemUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.ItemCreateManyOwnerInputEnvelope;
    set?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    disconnect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    delete?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    update?: Prisma.ItemUpdateWithWhereUniqueWithoutOwnerInput | Prisma.ItemUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.ItemUpdateManyWithWhereWithoutOwnerInput | Prisma.ItemUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
};
export type ItemUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOwnerInput, Prisma.ItemUncheckedCreateWithoutOwnerInput> | Prisma.ItemCreateWithoutOwnerInput[] | Prisma.ItemUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOwnerInput | Prisma.ItemCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.ItemUpsertWithWhereUniqueWithoutOwnerInput | Prisma.ItemUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.ItemCreateManyOwnerInputEnvelope;
    set?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    disconnect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    delete?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    update?: Prisma.ItemUpdateWithWhereUniqueWithoutOwnerInput | Prisma.ItemUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.ItemUpdateManyWithWhereWithoutOwnerInput | Prisma.ItemUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
};
export type ItemCreatestyleEmbeddingInput = {
    set: number[];
};
export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ItemUpdatestyleEmbeddingInput = {
    set?: number[];
    push?: number | number[];
};
export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus;
};
export type ItemCreateNestedOneWithoutListingInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutListingInput, Prisma.ItemUncheckedCreateWithoutListingInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutListingInput;
    connect?: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateOneRequiredWithoutListingNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutListingInput, Prisma.ItemUncheckedCreateWithoutListingInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutListingInput;
    upsert?: Prisma.ItemUpsertWithoutListingInput;
    connect?: Prisma.ItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ItemUpdateToOneWithWhereWithoutListingInput, Prisma.ItemUpdateWithoutListingInput>, Prisma.ItemUncheckedUpdateWithoutListingInput>;
};
export type ItemCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutMatchesInput, Prisma.ItemUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutMatchesInput, Prisma.ItemUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.ItemUpsertWithoutMatchesInput;
    connect?: Prisma.ItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ItemUpdateToOneWithWhereWithoutMatchesInput, Prisma.ItemUpdateWithoutMatchesInput>, Prisma.ItemUncheckedUpdateWithoutMatchesInput>;
};
export type ItemCreateNestedOneWithoutDonationsInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutDonationsInput, Prisma.ItemUncheckedCreateWithoutDonationsInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutDonationsInput;
    connect?: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutDonationsInput, Prisma.ItemUncheckedCreateWithoutDonationsInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutDonationsInput;
    upsert?: Prisma.ItemUpsertWithoutDonationsInput;
    connect?: Prisma.ItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ItemUpdateToOneWithWhereWithoutDonationsInput, Prisma.ItemUpdateWithoutDonationsInput>, Prisma.ItemUncheckedUpdateWithoutDonationsInput>;
};
export type ItemCreateWithoutOwnerInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing?: Prisma.ListingCreateNestedOneWithoutItemInput;
    matches?: Prisma.MatchCreateNestedManyWithoutCandidateItemInput;
    donations?: Prisma.DonationCreateNestedManyWithoutItemInput;
};
export type ItemUncheckedCreateWithoutOwnerInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing?: Prisma.ListingUncheckedCreateNestedOneWithoutItemInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutCandidateItemInput;
    donations?: Prisma.DonationUncheckedCreateNestedManyWithoutItemInput;
};
export type ItemCreateOrConnectWithoutOwnerInput = {
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateWithoutOwnerInput, Prisma.ItemUncheckedCreateWithoutOwnerInput>;
};
export type ItemCreateManyOwnerInputEnvelope = {
    data: Prisma.ItemCreateManyOwnerInput | Prisma.ItemCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type ItemUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.ItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemUpdateWithoutOwnerInput, Prisma.ItemUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.ItemCreateWithoutOwnerInput, Prisma.ItemUncheckedCreateWithoutOwnerInput>;
};
export type ItemUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.ItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemUpdateWithoutOwnerInput, Prisma.ItemUncheckedUpdateWithoutOwnerInput>;
};
export type ItemUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.ItemScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyWithoutOwnerInput>;
};
export type ItemScalarWhereInput = {
    AND?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
    OR?: Prisma.ItemScalarWhereInput[];
    NOT?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
    id?: Prisma.StringFilter<"Item"> | string;
    ownerId?: Prisma.StringFilter<"Item"> | string;
    category?: Prisma.EnumCategoryFilter<"Item"> | $Enums.Category;
    sizeLabel?: Prisma.StringFilter<"Item"> | string;
    material?: Prisma.StringFilter<"Item"> | string;
    condition?: Prisma.IntFilter<"Item"> | number;
    styleEmbedding?: Prisma.FloatNullableListFilter<"Item">;
    status?: Prisma.EnumItemStatusFilter<"Item"> | $Enums.ItemStatus;
    photos?: Prisma.JsonNullableFilter<"Item">;
    createdAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
};
export type ItemCreateWithoutListingInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutItemsInput;
    matches?: Prisma.MatchCreateNestedManyWithoutCandidateItemInput;
    donations?: Prisma.DonationCreateNestedManyWithoutItemInput;
};
export type ItemUncheckedCreateWithoutListingInput = {
    id?: string;
    ownerId: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutCandidateItemInput;
    donations?: Prisma.DonationUncheckedCreateNestedManyWithoutItemInput;
};
export type ItemCreateOrConnectWithoutListingInput = {
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateWithoutListingInput, Prisma.ItemUncheckedCreateWithoutListingInput>;
};
export type ItemUpsertWithoutListingInput = {
    update: Prisma.XOR<Prisma.ItemUpdateWithoutListingInput, Prisma.ItemUncheckedUpdateWithoutListingInput>;
    create: Prisma.XOR<Prisma.ItemCreateWithoutListingInput, Prisma.ItemUncheckedCreateWithoutListingInput>;
    where?: Prisma.ItemWhereInput;
};
export type ItemUpdateToOneWithWhereWithoutListingInput = {
    where?: Prisma.ItemWhereInput;
    data: Prisma.XOR<Prisma.ItemUpdateWithoutListingInput, Prisma.ItemUncheckedUpdateWithoutListingInput>;
};
export type ItemUpdateWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutItemsNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutCandidateItemNestedInput;
    donations?: Prisma.DonationUpdateManyWithoutItemNestedInput;
};
export type ItemUncheckedUpdateWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutCandidateItemNestedInput;
    donations?: Prisma.DonationUncheckedUpdateManyWithoutItemNestedInput;
};
export type ItemCreateWithoutMatchesInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutItemsInput;
    listing?: Prisma.ListingCreateNestedOneWithoutItemInput;
    donations?: Prisma.DonationCreateNestedManyWithoutItemInput;
};
export type ItemUncheckedCreateWithoutMatchesInput = {
    id?: string;
    ownerId: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing?: Prisma.ListingUncheckedCreateNestedOneWithoutItemInput;
    donations?: Prisma.DonationUncheckedCreateNestedManyWithoutItemInput;
};
export type ItemCreateOrConnectWithoutMatchesInput = {
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateWithoutMatchesInput, Prisma.ItemUncheckedCreateWithoutMatchesInput>;
};
export type ItemUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.ItemUpdateWithoutMatchesInput, Prisma.ItemUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.ItemCreateWithoutMatchesInput, Prisma.ItemUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.ItemWhereInput;
};
export type ItemUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.ItemWhereInput;
    data: Prisma.XOR<Prisma.ItemUpdateWithoutMatchesInput, Prisma.ItemUncheckedUpdateWithoutMatchesInput>;
};
export type ItemUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutItemsNestedInput;
    listing?: Prisma.ListingUpdateOneWithoutItemNestedInput;
    donations?: Prisma.DonationUpdateManyWithoutItemNestedInput;
};
export type ItemUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUncheckedUpdateOneWithoutItemNestedInput;
    donations?: Prisma.DonationUncheckedUpdateManyWithoutItemNestedInput;
};
export type ItemCreateWithoutDonationsInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutItemsInput;
    listing?: Prisma.ListingCreateNestedOneWithoutItemInput;
    matches?: Prisma.MatchCreateNestedManyWithoutCandidateItemInput;
};
export type ItemUncheckedCreateWithoutDonationsInput = {
    id?: string;
    ownerId: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    listing?: Prisma.ListingUncheckedCreateNestedOneWithoutItemInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutCandidateItemInput;
};
export type ItemCreateOrConnectWithoutDonationsInput = {
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateWithoutDonationsInput, Prisma.ItemUncheckedCreateWithoutDonationsInput>;
};
export type ItemUpsertWithoutDonationsInput = {
    update: Prisma.XOR<Prisma.ItemUpdateWithoutDonationsInput, Prisma.ItemUncheckedUpdateWithoutDonationsInput>;
    create: Prisma.XOR<Prisma.ItemCreateWithoutDonationsInput, Prisma.ItemUncheckedCreateWithoutDonationsInput>;
    where?: Prisma.ItemWhereInput;
};
export type ItemUpdateToOneWithWhereWithoutDonationsInput = {
    where?: Prisma.ItemWhereInput;
    data: Prisma.XOR<Prisma.ItemUpdateWithoutDonationsInput, Prisma.ItemUncheckedUpdateWithoutDonationsInput>;
};
export type ItemUpdateWithoutDonationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutItemsNestedInput;
    listing?: Prisma.ListingUpdateOneWithoutItemNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutCandidateItemNestedInput;
};
export type ItemUncheckedUpdateWithoutDonationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUncheckedUpdateOneWithoutItemNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutCandidateItemNestedInput;
};
export type ItemCreateManyOwnerInput = {
    id?: string;
    category: $Enums.Category;
    sizeLabel: string;
    material: string;
    condition: number;
    styleEmbedding?: Prisma.ItemCreatestyleEmbeddingInput | number[];
    status?: $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUpdateOneWithoutItemNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutCandidateItemNestedInput;
    donations?: Prisma.DonationUpdateManyWithoutItemNestedInput;
};
export type ItemUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUncheckedUpdateOneWithoutItemNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutCandidateItemNestedInput;
    donations?: Prisma.DonationUncheckedUpdateManyWithoutItemNestedInput;
};
export type ItemUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.IntFieldUpdateOperationsInput | number;
    styleEmbedding?: Prisma.ItemUpdatestyleEmbeddingInput | number[];
    status?: Prisma.EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemCountOutputType = {
    matches: number;
    donations: number;
};
export type ItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matches?: boolean | ItemCountOutputTypeCountMatchesArgs;
    donations?: boolean | ItemCountOutputTypeCountDonationsArgs;
};
export type ItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCountOutputTypeSelect<ExtArgs> | null;
};
export type ItemCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type ItemCountOutputTypeCountDonationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
};
export type ItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    category?: boolean;
    sizeLabel?: boolean;
    material?: boolean;
    condition?: boolean;
    styleEmbedding?: boolean;
    status?: boolean;
    photos?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    listing?: boolean | Prisma.Item$listingArgs<ExtArgs>;
    matches?: boolean | Prisma.Item$matchesArgs<ExtArgs>;
    donations?: boolean | Prisma.Item$donationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    category?: boolean;
    sizeLabel?: boolean;
    material?: boolean;
    condition?: boolean;
    styleEmbedding?: boolean;
    status?: boolean;
    photos?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    category?: boolean;
    sizeLabel?: boolean;
    material?: boolean;
    condition?: boolean;
    styleEmbedding?: boolean;
    status?: boolean;
    photos?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectScalar = {
    id?: boolean;
    ownerId?: boolean;
    category?: boolean;
    sizeLabel?: boolean;
    material?: boolean;
    condition?: boolean;
    styleEmbedding?: boolean;
    status?: boolean;
    photos?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerId" | "category" | "sizeLabel" | "material" | "condition" | "styleEmbedding" | "status" | "photos" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>;
export type ItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    listing?: boolean | Prisma.Item$listingArgs<ExtArgs>;
    matches?: boolean | Prisma.Item$matchesArgs<ExtArgs>;
    donations?: boolean | Prisma.Item$donationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Item";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        listing: Prisma.$ListingPayload<ExtArgs> | null;
        matches: Prisma.$MatchPayload<ExtArgs>[];
        donations: Prisma.$DonationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerId: string;
        category: $Enums.Category;
        sizeLabel: string;
        material: string;
        condition: number;
        styleEmbedding: number[];
        status: $Enums.ItemStatus;
        photos: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["item"]>;
    composites: {};
};
export type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemPayload, S>;
export type ItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCountAggregateInputType | true;
};
export interface ItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Item'];
        meta: {
            name: 'Item';
        };
    };
    findUnique<T extends ItemFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItemFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItemFindManyArgs>(args?: Prisma.SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItemCreateArgs>(args: Prisma.SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItemCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ItemDeleteArgs>(args: Prisma.SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItemUpdateArgs>(args: Prisma.SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItemUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ItemUpsertArgs>(args: Prisma.SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItemCountArgs>(args?: Prisma.Subset<T, ItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemCountAggregateOutputType> : number>;
    aggregate<T extends ItemAggregateArgs>(args: Prisma.Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>;
    groupBy<T extends ItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItemFieldRefs;
}
export interface Prisma__ItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listing<T extends Prisma.Item$listingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Item$listingArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    matches<T extends Prisma.Item$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Item$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    donations<T extends Prisma.Item$donationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Item$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItemFieldRefs {
    readonly id: Prisma.FieldRef<"Item", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Item", 'String'>;
    readonly category: Prisma.FieldRef<"Item", 'Category'>;
    readonly sizeLabel: Prisma.FieldRef<"Item", 'String'>;
    readonly material: Prisma.FieldRef<"Item", 'String'>;
    readonly condition: Prisma.FieldRef<"Item", 'Int'>;
    readonly styleEmbedding: Prisma.FieldRef<"Item", 'Float[]'>;
    readonly status: Prisma.FieldRef<"Item", 'ItemStatus'>;
    readonly photos: Prisma.FieldRef<"Item", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Item", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Item", 'DateTime'>;
}
export type ItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemCreateInput, Prisma.ItemUncheckedCreateInput>;
};
export type ItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItemCreateManyInput | Prisma.ItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    data: Prisma.ItemCreateManyInput | Prisma.ItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemUpdateInput, Prisma.ItemUncheckedUpdateInput>;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyInput>;
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type ItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyInput>;
    where?: Prisma.ItemWhereInput;
    limit?: number;
    include?: Prisma.ItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateInput, Prisma.ItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItemUpdateInput, Prisma.ItemUncheckedUpdateInput>;
};
export type ItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type Item$listingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where?: Prisma.ListingWhereInput;
};
export type Item$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type Item$donationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput | Prisma.DonationOrderByWithRelationInput[];
    cursor?: Prisma.DonationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonationScalarFieldEnum | Prisma.DonationScalarFieldEnum[];
};
export type ItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
};
export {};
