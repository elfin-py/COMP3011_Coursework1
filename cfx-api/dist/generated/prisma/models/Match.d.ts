import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatchModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchPayload>;
export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
export type MatchAvgAggregateOutputType = {
    score: number | null;
};
export type MatchSumAggregateOutputType = {
    score: number | null;
};
export type MatchMinAggregateOutputType = {
    id: string | null;
    listingId: string | null;
    candidateItemId: string | null;
    score: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type MatchMaxAggregateOutputType = {
    id: string | null;
    listingId: string | null;
    candidateItemId: string | null;
    score: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type MatchCountAggregateOutputType = {
    id: number;
    listingId: number;
    candidateItemId: number;
    score: number;
    breakdown: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type MatchAvgAggregateInputType = {
    score?: true;
};
export type MatchSumAggregateInputType = {
    score?: true;
};
export type MatchMinAggregateInputType = {
    id?: true;
    listingId?: true;
    candidateItemId?: true;
    score?: true;
    status?: true;
    createdAt?: true;
};
export type MatchMaxAggregateInputType = {
    id?: true;
    listingId?: true;
    candidateItemId?: true;
    score?: true;
    status?: true;
    createdAt?: true;
};
export type MatchCountAggregateInputType = {
    id?: true;
    listingId?: true;
    candidateItemId?: true;
    score?: true;
    breakdown?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type MatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatchCountAggregateInputType;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
    [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatch[P]> : Prisma.GetScalarType<T[P], AggregateMatch[P]>;
};
export type MatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithAggregationInput | Prisma.MatchOrderByWithAggregationInput[];
    by: Prisma.MatchScalarFieldEnum[] | Prisma.MatchScalarFieldEnum;
    having?: Prisma.MatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchCountAggregateInputType | true;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type MatchGroupByOutputType = {
    id: string;
    listingId: string;
    candidateItemId: string;
    score: number;
    breakdown: runtime.JsonValue;
    status: string;
    createdAt: Date;
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]>;
}>>;
export type MatchWhereInput = {
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    id?: Prisma.StringFilter<"Match"> | string;
    listingId?: Prisma.StringFilter<"Match"> | string;
    candidateItemId?: Prisma.StringFilter<"Match"> | string;
    score?: Prisma.FloatFilter<"Match"> | number;
    breakdown?: Prisma.JsonFilter<"Match">;
    status?: Prisma.StringFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    listing?: Prisma.XOR<Prisma.ListingScalarRelationFilter, Prisma.ListingWhereInput>;
    candidateItem?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
};
export type MatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    candidateItemId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    listing?: Prisma.ListingOrderByWithRelationInput;
    candidateItem?: Prisma.ItemOrderByWithRelationInput;
};
export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    listingId?: Prisma.StringFilter<"Match"> | string;
    candidateItemId?: Prisma.StringFilter<"Match"> | string;
    score?: Prisma.FloatFilter<"Match"> | number;
    breakdown?: Prisma.JsonFilter<"Match">;
    status?: Prisma.StringFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    listing?: Prisma.XOR<Prisma.ListingScalarRelationFilter, Prisma.ListingWhereInput>;
    candidateItem?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
}, "id">;
export type MatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    candidateItemId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MatchCountOrderByAggregateInput;
    _avg?: Prisma.MatchAvgOrderByAggregateInput;
    _max?: Prisma.MatchMaxOrderByAggregateInput;
    _min?: Prisma.MatchMinOrderByAggregateInput;
    _sum?: Prisma.MatchSumOrderByAggregateInput;
};
export type MatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    listingId?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    candidateItemId?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    score?: Prisma.FloatWithAggregatesFilter<"Match"> | number;
    breakdown?: Prisma.JsonWithAggregatesFilter<"Match">;
    status?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
};
export type MatchCreateInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    listing: Prisma.ListingCreateNestedOneWithoutMatchesInput;
    candidateItem: Prisma.ItemCreateNestedOneWithoutMatchesInput;
};
export type MatchUncheckedCreateInput = {
    id?: string;
    listingId: string;
    candidateItemId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
};
export type MatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUpdateOneRequiredWithoutMatchesNestedInput;
    candidateItem?: Prisma.ItemUpdateOneRequiredWithoutMatchesNestedInput;
};
export type MatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCreateManyInput = {
    id?: string;
    listingId: string;
    candidateItemId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
};
export type MatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchListRelationFilter = {
    every?: Prisma.MatchWhereInput;
    some?: Prisma.MatchWhereInput;
    none?: Prisma.MatchWhereInput;
};
export type MatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    candidateItemId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type MatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    candidateItemId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listingId?: Prisma.SortOrder;
    candidateItemId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type MatchCreateNestedManyWithoutCandidateItemInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutCandidateItemInput, Prisma.MatchUncheckedCreateWithoutCandidateItemInput> | Prisma.MatchCreateWithoutCandidateItemInput[] | Prisma.MatchUncheckedCreateWithoutCandidateItemInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutCandidateItemInput | Prisma.MatchCreateOrConnectWithoutCandidateItemInput[];
    createMany?: Prisma.MatchCreateManyCandidateItemInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutCandidateItemInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutCandidateItemInput, Prisma.MatchUncheckedCreateWithoutCandidateItemInput> | Prisma.MatchCreateWithoutCandidateItemInput[] | Prisma.MatchUncheckedCreateWithoutCandidateItemInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutCandidateItemInput | Prisma.MatchCreateOrConnectWithoutCandidateItemInput[];
    createMany?: Prisma.MatchCreateManyCandidateItemInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUpdateManyWithoutCandidateItemNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutCandidateItemInput, Prisma.MatchUncheckedCreateWithoutCandidateItemInput> | Prisma.MatchCreateWithoutCandidateItemInput[] | Prisma.MatchUncheckedCreateWithoutCandidateItemInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutCandidateItemInput | Prisma.MatchCreateOrConnectWithoutCandidateItemInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutCandidateItemInput | Prisma.MatchUpsertWithWhereUniqueWithoutCandidateItemInput[];
    createMany?: Prisma.MatchCreateManyCandidateItemInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutCandidateItemInput | Prisma.MatchUpdateWithWhereUniqueWithoutCandidateItemInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutCandidateItemInput | Prisma.MatchUpdateManyWithWhereWithoutCandidateItemInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutCandidateItemNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutCandidateItemInput, Prisma.MatchUncheckedCreateWithoutCandidateItemInput> | Prisma.MatchCreateWithoutCandidateItemInput[] | Prisma.MatchUncheckedCreateWithoutCandidateItemInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutCandidateItemInput | Prisma.MatchCreateOrConnectWithoutCandidateItemInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutCandidateItemInput | Prisma.MatchUpsertWithWhereUniqueWithoutCandidateItemInput[];
    createMany?: Prisma.MatchCreateManyCandidateItemInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutCandidateItemInput | Prisma.MatchUpdateWithWhereUniqueWithoutCandidateItemInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutCandidateItemInput | Prisma.MatchUpdateManyWithWhereWithoutCandidateItemInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchCreateNestedManyWithoutListingInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutListingInput, Prisma.MatchUncheckedCreateWithoutListingInput> | Prisma.MatchCreateWithoutListingInput[] | Prisma.MatchUncheckedCreateWithoutListingInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutListingInput | Prisma.MatchCreateOrConnectWithoutListingInput[];
    createMany?: Prisma.MatchCreateManyListingInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutListingInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutListingInput, Prisma.MatchUncheckedCreateWithoutListingInput> | Prisma.MatchCreateWithoutListingInput[] | Prisma.MatchUncheckedCreateWithoutListingInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutListingInput | Prisma.MatchCreateOrConnectWithoutListingInput[];
    createMany?: Prisma.MatchCreateManyListingInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUpdateManyWithoutListingNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutListingInput, Prisma.MatchUncheckedCreateWithoutListingInput> | Prisma.MatchCreateWithoutListingInput[] | Prisma.MatchUncheckedCreateWithoutListingInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutListingInput | Prisma.MatchCreateOrConnectWithoutListingInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutListingInput | Prisma.MatchUpsertWithWhereUniqueWithoutListingInput[];
    createMany?: Prisma.MatchCreateManyListingInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutListingInput | Prisma.MatchUpdateWithWhereUniqueWithoutListingInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutListingInput | Prisma.MatchUpdateManyWithWhereWithoutListingInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutListingNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutListingInput, Prisma.MatchUncheckedCreateWithoutListingInput> | Prisma.MatchCreateWithoutListingInput[] | Prisma.MatchUncheckedCreateWithoutListingInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutListingInput | Prisma.MatchCreateOrConnectWithoutListingInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutListingInput | Prisma.MatchUpsertWithWhereUniqueWithoutListingInput[];
    createMany?: Prisma.MatchCreateManyListingInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutListingInput | Prisma.MatchUpdateWithWhereUniqueWithoutListingInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutListingInput | Prisma.MatchUpdateManyWithWhereWithoutListingInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchCreateWithoutCandidateItemInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    listing: Prisma.ListingCreateNestedOneWithoutMatchesInput;
};
export type MatchUncheckedCreateWithoutCandidateItemInput = {
    id?: string;
    listingId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
};
export type MatchCreateOrConnectWithoutCandidateItemInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutCandidateItemInput, Prisma.MatchUncheckedCreateWithoutCandidateItemInput>;
};
export type MatchCreateManyCandidateItemInputEnvelope = {
    data: Prisma.MatchCreateManyCandidateItemInput | Prisma.MatchCreateManyCandidateItemInput[];
    skipDuplicates?: boolean;
};
export type MatchUpsertWithWhereUniqueWithoutCandidateItemInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutCandidateItemInput, Prisma.MatchUncheckedUpdateWithoutCandidateItemInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutCandidateItemInput, Prisma.MatchUncheckedCreateWithoutCandidateItemInput>;
};
export type MatchUpdateWithWhereUniqueWithoutCandidateItemInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutCandidateItemInput, Prisma.MatchUncheckedUpdateWithoutCandidateItemInput>;
};
export type MatchUpdateManyWithWhereWithoutCandidateItemInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutCandidateItemInput>;
};
export type MatchScalarWhereInput = {
    AND?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    OR?: Prisma.MatchScalarWhereInput[];
    NOT?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    id?: Prisma.StringFilter<"Match"> | string;
    listingId?: Prisma.StringFilter<"Match"> | string;
    candidateItemId?: Prisma.StringFilter<"Match"> | string;
    score?: Prisma.FloatFilter<"Match"> | number;
    breakdown?: Prisma.JsonFilter<"Match">;
    status?: Prisma.StringFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
};
export type MatchCreateWithoutListingInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    candidateItem: Prisma.ItemCreateNestedOneWithoutMatchesInput;
};
export type MatchUncheckedCreateWithoutListingInput = {
    id?: string;
    candidateItemId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
};
export type MatchCreateOrConnectWithoutListingInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutListingInput, Prisma.MatchUncheckedCreateWithoutListingInput>;
};
export type MatchCreateManyListingInputEnvelope = {
    data: Prisma.MatchCreateManyListingInput | Prisma.MatchCreateManyListingInput[];
    skipDuplicates?: boolean;
};
export type MatchUpsertWithWhereUniqueWithoutListingInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutListingInput, Prisma.MatchUncheckedUpdateWithoutListingInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutListingInput, Prisma.MatchUncheckedCreateWithoutListingInput>;
};
export type MatchUpdateWithWhereUniqueWithoutListingInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutListingInput, Prisma.MatchUncheckedUpdateWithoutListingInput>;
};
export type MatchUpdateManyWithWhereWithoutListingInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutListingInput>;
};
export type MatchCreateManyCandidateItemInput = {
    id?: string;
    listingId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
};
export type MatchUpdateWithoutCandidateItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing?: Prisma.ListingUpdateOneRequiredWithoutMatchesNestedInput;
};
export type MatchUncheckedUpdateWithoutCandidateItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchUncheckedUpdateManyWithoutCandidateItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listingId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCreateManyListingInput = {
    id?: string;
    candidateItemId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
};
export type MatchUpdateWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    candidateItem?: Prisma.ItemUpdateOneRequiredWithoutMatchesNestedInput;
};
export type MatchUncheckedUpdateWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchUncheckedUpdateManyWithoutListingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listingId?: boolean;
    candidateItemId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    status?: boolean;
    createdAt?: boolean;
    listing?: boolean | Prisma.ListingDefaultArgs<ExtArgs>;
    candidateItem?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listingId?: boolean;
    candidateItemId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    status?: boolean;
    createdAt?: boolean;
    listing?: boolean | Prisma.ListingDefaultArgs<ExtArgs>;
    candidateItem?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listingId?: boolean;
    candidateItemId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    status?: boolean;
    createdAt?: boolean;
    listing?: boolean | Prisma.ListingDefaultArgs<ExtArgs>;
    candidateItem?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectScalar = {
    id?: boolean;
    listingId?: boolean;
    candidateItemId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type MatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listingId" | "candidateItemId" | "score" | "breakdown" | "status" | "createdAt", ExtArgs["result"]["match"]>;
export type MatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing?: boolean | Prisma.ListingDefaultArgs<ExtArgs>;
    candidateItem?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type MatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing?: boolean | Prisma.ListingDefaultArgs<ExtArgs>;
    candidateItem?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type MatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing?: boolean | Prisma.ListingDefaultArgs<ExtArgs>;
    candidateItem?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type $MatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Match";
    objects: {
        listing: Prisma.$ListingPayload<ExtArgs>;
        candidateItem: Prisma.$ItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listingId: string;
        candidateItemId: string;
        score: number;
        breakdown: runtime.JsonValue;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["match"]>;
    composites: {};
};
export type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchPayload, S>;
export type MatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchCountAggregateInputType | true;
};
export interface MatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Match'];
        meta: {
            name: 'Match';
        };
    };
    findUnique<T extends MatchFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatchFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatchFindManyArgs>(args?: Prisma.SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatchCreateArgs>(args: Prisma.SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatchCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatchDeleteArgs>(args: Prisma.SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatchUpdateArgs>(args: Prisma.SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatchUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatchUpsertArgs>(args: Prisma.SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatchCountArgs>(args?: Prisma.Subset<T, MatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchCountAggregateOutputType> : number>;
    aggregate<T extends MatchAggregateArgs>(args: Prisma.Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>;
    groupBy<T extends MatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatchFieldRefs;
}
export interface Prisma__MatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listing<T extends Prisma.ListingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ListingDefaultArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    candidateItem<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatchFieldRefs {
    readonly id: Prisma.FieldRef<"Match", 'String'>;
    readonly listingId: Prisma.FieldRef<"Match", 'String'>;
    readonly candidateItemId: Prisma.FieldRef<"Match", 'String'>;
    readonly score: Prisma.FieldRef<"Match", 'Float'>;
    readonly breakdown: Prisma.FieldRef<"Match", 'Json'>;
    readonly status: Prisma.FieldRef<"Match", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Match", 'DateTime'>;
}
export type MatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
};
export type MatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type MatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
    include?: Prisma.MatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
};
export type MatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type MatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
};
export {};
