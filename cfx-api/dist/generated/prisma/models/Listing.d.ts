import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ListingModel = runtime.Types.Result.DefaultSelection<Prisma.$ListingPayload>;
export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null;
    _min: ListingMinAggregateOutputType | null;
    _max: ListingMaxAggregateOutputType | null;
};
export type ListingMinAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    intent: $Enums.Intent | null;
    availabilityStart: Date | null;
    availabilityEnd: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ListingMaxAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    intent: $Enums.Intent | null;
    availabilityStart: Date | null;
    availabilityEnd: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ListingCountAggregateOutputType = {
    id: number;
    itemId: number;
    intent: number;
    availabilityStart: number;
    availabilityEnd: number;
    rentalTerms: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ListingMinAggregateInputType = {
    id?: true;
    itemId?: true;
    intent?: true;
    availabilityStart?: true;
    availabilityEnd?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ListingMaxAggregateInputType = {
    id?: true;
    itemId?: true;
    intent?: true;
    availabilityStart?: true;
    availabilityEnd?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ListingCountAggregateInputType = {
    id?: true;
    itemId?: true;
    intent?: true;
    availabilityStart?: true;
    availabilityEnd?: true;
    rentalTerms?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ListingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListingWhereInput;
    orderBy?: Prisma.ListingOrderByWithRelationInput | Prisma.ListingOrderByWithRelationInput[];
    cursor?: Prisma.ListingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ListingCountAggregateInputType;
    _min?: ListingMinAggregateInputType;
    _max?: ListingMaxAggregateInputType;
};
export type GetListingAggregateType<T extends ListingAggregateArgs> = {
    [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListing[P]> : Prisma.GetScalarType<T[P], AggregateListing[P]>;
};
export type ListingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListingWhereInput;
    orderBy?: Prisma.ListingOrderByWithAggregationInput | Prisma.ListingOrderByWithAggregationInput[];
    by: Prisma.ListingScalarFieldEnum[] | Prisma.ListingScalarFieldEnum;
    having?: Prisma.ListingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ListingCountAggregateInputType | true;
    _min?: ListingMinAggregateInputType;
    _max?: ListingMaxAggregateInputType;
};
export type ListingGroupByOutputType = {
    id: string;
    itemId: string;
    intent: $Enums.Intent;
    availabilityStart: Date | null;
    availabilityEnd: Date | null;
    rentalTerms: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ListingCountAggregateOutputType | null;
    _min: ListingMinAggregateOutputType | null;
    _max: ListingMaxAggregateOutputType | null;
};
type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ListingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ListingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ListingGroupByOutputType[P]>;
}>>;
export type ListingWhereInput = {
    AND?: Prisma.ListingWhereInput | Prisma.ListingWhereInput[];
    OR?: Prisma.ListingWhereInput[];
    NOT?: Prisma.ListingWhereInput | Prisma.ListingWhereInput[];
    id?: Prisma.StringFilter<"Listing"> | string;
    itemId?: Prisma.StringFilter<"Listing"> | string;
    intent?: Prisma.EnumIntentFilter<"Listing"> | $Enums.Intent;
    availabilityStart?: Prisma.DateTimeNullableFilter<"Listing"> | Date | string | null;
    availabilityEnd?: Prisma.DateTimeNullableFilter<"Listing"> | Date | string | null;
    rentalTerms?: Prisma.JsonNullableFilter<"Listing">;
    createdAt?: Prisma.DateTimeFilter<"Listing"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Listing"> | Date | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    matches?: Prisma.MatchListRelationFilter;
};
export type ListingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    intent?: Prisma.SortOrder;
    availabilityStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    availabilityEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalTerms?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    item?: Prisma.ItemOrderByWithRelationInput;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
};
export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    itemId?: string;
    AND?: Prisma.ListingWhereInput | Prisma.ListingWhereInput[];
    OR?: Prisma.ListingWhereInput[];
    NOT?: Prisma.ListingWhereInput | Prisma.ListingWhereInput[];
    intent?: Prisma.EnumIntentFilter<"Listing"> | $Enums.Intent;
    availabilityStart?: Prisma.DateTimeNullableFilter<"Listing"> | Date | string | null;
    availabilityEnd?: Prisma.DateTimeNullableFilter<"Listing"> | Date | string | null;
    rentalTerms?: Prisma.JsonNullableFilter<"Listing">;
    createdAt?: Prisma.DateTimeFilter<"Listing"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Listing"> | Date | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    matches?: Prisma.MatchListRelationFilter;
}, "id" | "itemId">;
export type ListingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    intent?: Prisma.SortOrder;
    availabilityStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    availabilityEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalTerms?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ListingCountOrderByAggregateInput;
    _max?: Prisma.ListingMaxOrderByAggregateInput;
    _min?: Prisma.ListingMinOrderByAggregateInput;
};
export type ListingScalarWhereWithAggregatesInput = {
    AND?: Prisma.ListingScalarWhereWithAggregatesInput | Prisma.ListingScalarWhereWithAggregatesInput[];
    OR?: Prisma.ListingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ListingScalarWhereWithAggregatesInput | Prisma.ListingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Listing"> | string;
    itemId?: Prisma.StringWithAggregatesFilter<"Listing"> | string;
    intent?: Prisma.EnumIntentWithAggregatesFilter<"Listing"> | $Enums.Intent;
    availabilityStart?: Prisma.DateTimeNullableWithAggregatesFilter<"Listing"> | Date | string | null;
    availabilityEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"Listing"> | Date | string | null;
    rentalTerms?: Prisma.JsonNullableWithAggregatesFilter<"Listing">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Listing"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Listing"> | Date | string;
};
export type ListingCreateInput = {
    id?: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    item: Prisma.ItemCreateNestedOneWithoutListingInput;
    matches?: Prisma.MatchCreateNestedManyWithoutListingInput;
};
export type ListingUncheckedCreateInput = {
    id?: string;
    itemId: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutListingInput;
};
export type ListingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    item?: Prisma.ItemUpdateOneRequiredWithoutListingNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutListingNestedInput;
};
export type ListingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutListingNestedInput;
};
export type ListingCreateManyInput = {
    id?: string;
    itemId: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingNullableScalarRelationFilter = {
    is?: Prisma.ListingWhereInput | null;
    isNot?: Prisma.ListingWhereInput | null;
};
export type ListingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    intent?: Prisma.SortOrder;
    availabilityStart?: Prisma.SortOrder;
    availabilityEnd?: Prisma.SortOrder;
    rentalTerms?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ListingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    intent?: Prisma.SortOrder;
    availabilityStart?: Prisma.SortOrder;
    availabilityEnd?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ListingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    intent?: Prisma.SortOrder;
    availabilityStart?: Prisma.SortOrder;
    availabilityEnd?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ListingScalarRelationFilter = {
    is?: Prisma.ListingWhereInput;
    isNot?: Prisma.ListingWhereInput;
};
export type ListingCreateNestedOneWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ListingCreateWithoutItemInput, Prisma.ListingUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ListingCreateOrConnectWithoutItemInput;
    connect?: Prisma.ListingWhereUniqueInput;
};
export type ListingUncheckedCreateNestedOneWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ListingCreateWithoutItemInput, Prisma.ListingUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ListingCreateOrConnectWithoutItemInput;
    connect?: Prisma.ListingWhereUniqueInput;
};
export type ListingUpdateOneWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ListingCreateWithoutItemInput, Prisma.ListingUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ListingCreateOrConnectWithoutItemInput;
    upsert?: Prisma.ListingUpsertWithoutItemInput;
    disconnect?: Prisma.ListingWhereInput | boolean;
    delete?: Prisma.ListingWhereInput | boolean;
    connect?: Prisma.ListingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ListingUpdateToOneWithWhereWithoutItemInput, Prisma.ListingUpdateWithoutItemInput>, Prisma.ListingUncheckedUpdateWithoutItemInput>;
};
export type ListingUncheckedUpdateOneWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ListingCreateWithoutItemInput, Prisma.ListingUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ListingCreateOrConnectWithoutItemInput;
    upsert?: Prisma.ListingUpsertWithoutItemInput;
    disconnect?: Prisma.ListingWhereInput | boolean;
    delete?: Prisma.ListingWhereInput | boolean;
    connect?: Prisma.ListingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ListingUpdateToOneWithWhereWithoutItemInput, Prisma.ListingUpdateWithoutItemInput>, Prisma.ListingUncheckedUpdateWithoutItemInput>;
};
export type EnumIntentFieldUpdateOperationsInput = {
    set?: $Enums.Intent;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ListingCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.ListingCreateWithoutMatchesInput, Prisma.ListingUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.ListingCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.ListingWhereUniqueInput;
};
export type ListingUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.ListingCreateWithoutMatchesInput, Prisma.ListingUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.ListingCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.ListingUpsertWithoutMatchesInput;
    connect?: Prisma.ListingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ListingUpdateToOneWithWhereWithoutMatchesInput, Prisma.ListingUpdateWithoutMatchesInput>, Prisma.ListingUncheckedUpdateWithoutMatchesInput>;
};
export type ListingCreateWithoutItemInput = {
    id?: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matches?: Prisma.MatchCreateNestedManyWithoutListingInput;
};
export type ListingUncheckedCreateWithoutItemInput = {
    id?: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutListingInput;
};
export type ListingCreateOrConnectWithoutItemInput = {
    where: Prisma.ListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingCreateWithoutItemInput, Prisma.ListingUncheckedCreateWithoutItemInput>;
};
export type ListingUpsertWithoutItemInput = {
    update: Prisma.XOR<Prisma.ListingUpdateWithoutItemInput, Prisma.ListingUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.ListingCreateWithoutItemInput, Prisma.ListingUncheckedCreateWithoutItemInput>;
    where?: Prisma.ListingWhereInput;
};
export type ListingUpdateToOneWithWhereWithoutItemInput = {
    where?: Prisma.ListingWhereInput;
    data: Prisma.XOR<Prisma.ListingUpdateWithoutItemInput, Prisma.ListingUncheckedUpdateWithoutItemInput>;
};
export type ListingUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: Prisma.MatchUpdateManyWithoutListingNestedInput;
};
export type ListingUncheckedUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutListingNestedInput;
};
export type ListingCreateWithoutMatchesInput = {
    id?: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    item: Prisma.ItemCreateNestedOneWithoutListingInput;
};
export type ListingUncheckedCreateWithoutMatchesInput = {
    id?: string;
    itemId: string;
    intent: $Enums.Intent;
    availabilityStart?: Date | string | null;
    availabilityEnd?: Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ListingCreateOrConnectWithoutMatchesInput = {
    where: Prisma.ListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingCreateWithoutMatchesInput, Prisma.ListingUncheckedCreateWithoutMatchesInput>;
};
export type ListingUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.ListingUpdateWithoutMatchesInput, Prisma.ListingUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.ListingCreateWithoutMatchesInput, Prisma.ListingUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.ListingWhereInput;
};
export type ListingUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.ListingWhereInput;
    data: Prisma.XOR<Prisma.ListingUpdateWithoutMatchesInput, Prisma.ListingUncheckedUpdateWithoutMatchesInput>;
};
export type ListingUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    item?: Prisma.ItemUpdateOneRequiredWithoutListingNestedInput;
};
export type ListingUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    intent?: Prisma.EnumIntentFieldUpdateOperationsInput | $Enums.Intent;
    availabilityStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentalTerms?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ListingCountOutputType = {
    matches: number;
};
export type ListingCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matches?: boolean | ListingCountOutputTypeCountMatchesArgs;
};
export type ListingCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingCountOutputTypeSelect<ExtArgs> | null;
};
export type ListingCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type ListingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    intent?: boolean;
    availabilityStart?: boolean;
    availabilityEnd?: boolean;
    rentalTerms?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    matches?: boolean | Prisma.Listing$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.ListingCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing"]>;
export type ListingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    intent?: boolean;
    availabilityStart?: boolean;
    availabilityEnd?: boolean;
    rentalTerms?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing"]>;
export type ListingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    intent?: boolean;
    availabilityStart?: boolean;
    availabilityEnd?: boolean;
    rentalTerms?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing"]>;
export type ListingSelectScalar = {
    id?: boolean;
    itemId?: boolean;
    intent?: boolean;
    availabilityStart?: boolean;
    availabilityEnd?: boolean;
    rentalTerms?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ListingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "itemId" | "intent" | "availabilityStart" | "availabilityEnd" | "rentalTerms" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>;
export type ListingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    matches?: boolean | Prisma.Listing$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.ListingCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ListingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type ListingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type $ListingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Listing";
    objects: {
        item: Prisma.$ItemPayload<ExtArgs>;
        matches: Prisma.$MatchPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        itemId: string;
        intent: $Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["listing"]>;
    composites: {};
};
export type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ListingPayload, S>;
export type ListingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ListingCountAggregateInputType | true;
};
export interface ListingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Listing'];
        meta: {
            name: 'Listing';
        };
    };
    findUnique<T extends ListingFindUniqueArgs>(args: Prisma.SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ListingFindFirstArgs>(args?: Prisma.SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ListingFindManyArgs>(args?: Prisma.SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ListingCreateArgs>(args: Prisma.SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ListingCreateManyArgs>(args?: Prisma.SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ListingDeleteArgs>(args: Prisma.SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ListingUpdateArgs>(args: Prisma.SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ListingDeleteManyArgs>(args?: Prisma.SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ListingUpdateManyArgs>(args: Prisma.SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ListingUpsertArgs>(args: Prisma.SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma.Prisma__ListingClient<runtime.Types.Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ListingCountArgs>(args?: Prisma.Subset<T, ListingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ListingCountAggregateOutputType> : number>;
    aggregate<T extends ListingAggregateArgs>(args: Prisma.Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>;
    groupBy<T extends ListingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ListingGroupByArgs['orderBy'];
    } : {
        orderBy?: ListingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ListingFieldRefs;
}
export interface Prisma__ListingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matches<T extends Prisma.Listing$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Listing$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ListingFieldRefs {
    readonly id: Prisma.FieldRef<"Listing", 'String'>;
    readonly itemId: Prisma.FieldRef<"Listing", 'String'>;
    readonly intent: Prisma.FieldRef<"Listing", 'Intent'>;
    readonly availabilityStart: Prisma.FieldRef<"Listing", 'DateTime'>;
    readonly availabilityEnd: Prisma.FieldRef<"Listing", 'DateTime'>;
    readonly rentalTerms: Prisma.FieldRef<"Listing", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Listing", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Listing", 'DateTime'>;
}
export type ListingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where: Prisma.ListingWhereUniqueInput;
};
export type ListingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where: Prisma.ListingWhereUniqueInput;
};
export type ListingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where?: Prisma.ListingWhereInput;
    orderBy?: Prisma.ListingOrderByWithRelationInput | Prisma.ListingOrderByWithRelationInput[];
    cursor?: Prisma.ListingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingScalarFieldEnum | Prisma.ListingScalarFieldEnum[];
};
export type ListingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where?: Prisma.ListingWhereInput;
    orderBy?: Prisma.ListingOrderByWithRelationInput | Prisma.ListingOrderByWithRelationInput[];
    cursor?: Prisma.ListingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingScalarFieldEnum | Prisma.ListingScalarFieldEnum[];
};
export type ListingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where?: Prisma.ListingWhereInput;
    orderBy?: Prisma.ListingOrderByWithRelationInput | Prisma.ListingOrderByWithRelationInput[];
    cursor?: Prisma.ListingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingScalarFieldEnum | Prisma.ListingScalarFieldEnum[];
};
export type ListingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ListingCreateInput, Prisma.ListingUncheckedCreateInput>;
};
export type ListingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ListingCreateManyInput | Prisma.ListingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ListingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    data: Prisma.ListingCreateManyInput | Prisma.ListingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ListingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ListingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ListingUpdateInput, Prisma.ListingUncheckedUpdateInput>;
    where: Prisma.ListingWhereUniqueInput;
};
export type ListingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ListingUpdateManyMutationInput, Prisma.ListingUncheckedUpdateManyInput>;
    where?: Prisma.ListingWhereInput;
    limit?: number;
};
export type ListingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ListingUpdateManyMutationInput, Prisma.ListingUncheckedUpdateManyInput>;
    where?: Prisma.ListingWhereInput;
    limit?: number;
    include?: Prisma.ListingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ListingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where: Prisma.ListingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListingCreateInput, Prisma.ListingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ListingUpdateInput, Prisma.ListingUncheckedUpdateInput>;
};
export type ListingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
    where: Prisma.ListingWhereUniqueInput;
};
export type ListingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListingWhereInput;
    limit?: number;
};
export type Listing$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ListingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ListingSelect<ExtArgs> | null;
    omit?: Prisma.ListingOmit<ExtArgs> | null;
    include?: Prisma.ListingInclude<ExtArgs> | null;
};
export {};
