import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DonationModel = runtime.Types.Result.DefaultSelection<Prisma.$DonationPayload>;
export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null;
    _avg: DonationAvgAggregateOutputType | null;
    _sum: DonationSumAggregateOutputType | null;
    _min: DonationMinAggregateOutputType | null;
    _max: DonationMaxAggregateOutputType | null;
};
export type DonationAvgAggregateOutputType = {
    allocatedKg: number | null;
    impactEstimate: number | null;
};
export type DonationSumAggregateOutputType = {
    allocatedKg: number | null;
    impactEstimate: number | null;
};
export type DonationMinAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    recyclerId: string | null;
    allocatedKg: number | null;
    impactEstimate: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type DonationMaxAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    recyclerId: string | null;
    allocatedKg: number | null;
    impactEstimate: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type DonationCountAggregateOutputType = {
    id: number;
    itemId: number;
    recyclerId: number;
    allocatedKg: number;
    impactEstimate: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type DonationAvgAggregateInputType = {
    allocatedKg?: true;
    impactEstimate?: true;
};
export type DonationSumAggregateInputType = {
    allocatedKg?: true;
    impactEstimate?: true;
};
export type DonationMinAggregateInputType = {
    id?: true;
    itemId?: true;
    recyclerId?: true;
    allocatedKg?: true;
    impactEstimate?: true;
    status?: true;
    createdAt?: true;
};
export type DonationMaxAggregateInputType = {
    id?: true;
    itemId?: true;
    recyclerId?: true;
    allocatedKg?: true;
    impactEstimate?: true;
    status?: true;
    createdAt?: true;
};
export type DonationCountAggregateInputType = {
    id?: true;
    itemId?: true;
    recyclerId?: true;
    allocatedKg?: true;
    impactEstimate?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type DonationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput | Prisma.DonationOrderByWithRelationInput[];
    cursor?: Prisma.DonationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DonationCountAggregateInputType;
    _avg?: DonationAvgAggregateInputType;
    _sum?: DonationSumAggregateInputType;
    _min?: DonationMinAggregateInputType;
    _max?: DonationMaxAggregateInputType;
};
export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
    [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDonation[P]> : Prisma.GetScalarType<T[P], AggregateDonation[P]>;
};
export type DonationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithAggregationInput | Prisma.DonationOrderByWithAggregationInput[];
    by: Prisma.DonationScalarFieldEnum[] | Prisma.DonationScalarFieldEnum;
    having?: Prisma.DonationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DonationCountAggregateInputType | true;
    _avg?: DonationAvgAggregateInputType;
    _sum?: DonationSumAggregateInputType;
    _min?: DonationMinAggregateInputType;
    _max?: DonationMaxAggregateInputType;
};
export type DonationGroupByOutputType = {
    id: string;
    itemId: string;
    recyclerId: string;
    allocatedKg: number;
    impactEstimate: number;
    status: string;
    createdAt: Date;
    _count: DonationCountAggregateOutputType | null;
    _avg: DonationAvgAggregateOutputType | null;
    _sum: DonationSumAggregateOutputType | null;
    _min: DonationMinAggregateOutputType | null;
    _max: DonationMaxAggregateOutputType | null;
};
type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DonationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DonationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DonationGroupByOutputType[P]>;
}>>;
export type DonationWhereInput = {
    AND?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    OR?: Prisma.DonationWhereInput[];
    NOT?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    id?: Prisma.StringFilter<"Donation"> | string;
    itemId?: Prisma.StringFilter<"Donation"> | string;
    recyclerId?: Prisma.StringFilter<"Donation"> | string;
    allocatedKg?: Prisma.FloatFilter<"Donation"> | number;
    impactEstimate?: Prisma.FloatFilter<"Donation"> | number;
    status?: Prisma.StringFilter<"Donation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    recycler?: Prisma.XOR<Prisma.RecyclerScalarRelationFilter, Prisma.RecyclerWhereInput>;
};
export type DonationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    item?: Prisma.ItemOrderByWithRelationInput;
    recycler?: Prisma.RecyclerOrderByWithRelationInput;
};
export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    OR?: Prisma.DonationWhereInput[];
    NOT?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    itemId?: Prisma.StringFilter<"Donation"> | string;
    recyclerId?: Prisma.StringFilter<"Donation"> | string;
    allocatedKg?: Prisma.FloatFilter<"Donation"> | number;
    impactEstimate?: Prisma.FloatFilter<"Donation"> | number;
    status?: Prisma.StringFilter<"Donation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    recycler?: Prisma.XOR<Prisma.RecyclerScalarRelationFilter, Prisma.RecyclerWhereInput>;
}, "id">;
export type DonationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DonationCountOrderByAggregateInput;
    _avg?: Prisma.DonationAvgOrderByAggregateInput;
    _max?: Prisma.DonationMaxOrderByAggregateInput;
    _min?: Prisma.DonationMinOrderByAggregateInput;
    _sum?: Prisma.DonationSumOrderByAggregateInput;
};
export type DonationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DonationScalarWhereWithAggregatesInput | Prisma.DonationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DonationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DonationScalarWhereWithAggregatesInput | Prisma.DonationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    itemId?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    recyclerId?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    allocatedKg?: Prisma.FloatWithAggregatesFilter<"Donation"> | number;
    impactEstimate?: Prisma.FloatWithAggregatesFilter<"Donation"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Donation"> | Date | string;
};
export type DonationCreateInput = {
    id?: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
    item: Prisma.ItemCreateNestedOneWithoutDonationsInput;
    recycler: Prisma.RecyclerCreateNestedOneWithoutDonationsInput;
};
export type DonationUncheckedCreateInput = {
    id?: string;
    itemId: string;
    recyclerId: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
};
export type DonationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    item?: Prisma.ItemUpdateOneRequiredWithoutDonationsNestedInput;
    recycler?: Prisma.RecyclerUpdateOneRequiredWithoutDonationsNestedInput;
};
export type DonationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    recyclerId?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationCreateManyInput = {
    id?: string;
    itemId: string;
    recyclerId: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
};
export type DonationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    recyclerId?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationListRelationFilter = {
    every?: Prisma.DonationWhereInput;
    some?: Prisma.DonationWhereInput;
    none?: Prisma.DonationWhereInput;
};
export type DonationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DonationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DonationAvgOrderByAggregateInput = {
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
};
export type DonationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DonationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DonationSumOrderByAggregateInput = {
    allocatedKg?: Prisma.SortOrder;
    impactEstimate?: Prisma.SortOrder;
};
export type DonationCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutItemInput, Prisma.DonationUncheckedCreateWithoutItemInput> | Prisma.DonationCreateWithoutItemInput[] | Prisma.DonationUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutItemInput | Prisma.DonationCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.DonationCreateManyItemInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUncheckedCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutItemInput, Prisma.DonationUncheckedCreateWithoutItemInput> | Prisma.DonationCreateWithoutItemInput[] | Prisma.DonationUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutItemInput | Prisma.DonationCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.DonationCreateManyItemInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutItemInput, Prisma.DonationUncheckedCreateWithoutItemInput> | Prisma.DonationCreateWithoutItemInput[] | Prisma.DonationUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutItemInput | Prisma.DonationCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutItemInput | Prisma.DonationUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.DonationCreateManyItemInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutItemInput | Prisma.DonationUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutItemInput | Prisma.DonationUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationUncheckedUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutItemInput, Prisma.DonationUncheckedCreateWithoutItemInput> | Prisma.DonationCreateWithoutItemInput[] | Prisma.DonationUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutItemInput | Prisma.DonationCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutItemInput | Prisma.DonationUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.DonationCreateManyItemInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutItemInput | Prisma.DonationUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutItemInput | Prisma.DonationUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationCreateNestedManyWithoutRecyclerInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutRecyclerInput, Prisma.DonationUncheckedCreateWithoutRecyclerInput> | Prisma.DonationCreateWithoutRecyclerInput[] | Prisma.DonationUncheckedCreateWithoutRecyclerInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutRecyclerInput | Prisma.DonationCreateOrConnectWithoutRecyclerInput[];
    createMany?: Prisma.DonationCreateManyRecyclerInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUncheckedCreateNestedManyWithoutRecyclerInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutRecyclerInput, Prisma.DonationUncheckedCreateWithoutRecyclerInput> | Prisma.DonationCreateWithoutRecyclerInput[] | Prisma.DonationUncheckedCreateWithoutRecyclerInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutRecyclerInput | Prisma.DonationCreateOrConnectWithoutRecyclerInput[];
    createMany?: Prisma.DonationCreateManyRecyclerInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUpdateManyWithoutRecyclerNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutRecyclerInput, Prisma.DonationUncheckedCreateWithoutRecyclerInput> | Prisma.DonationCreateWithoutRecyclerInput[] | Prisma.DonationUncheckedCreateWithoutRecyclerInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutRecyclerInput | Prisma.DonationCreateOrConnectWithoutRecyclerInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutRecyclerInput | Prisma.DonationUpsertWithWhereUniqueWithoutRecyclerInput[];
    createMany?: Prisma.DonationCreateManyRecyclerInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutRecyclerInput | Prisma.DonationUpdateWithWhereUniqueWithoutRecyclerInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutRecyclerInput | Prisma.DonationUpdateManyWithWhereWithoutRecyclerInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationUncheckedUpdateManyWithoutRecyclerNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutRecyclerInput, Prisma.DonationUncheckedCreateWithoutRecyclerInput> | Prisma.DonationCreateWithoutRecyclerInput[] | Prisma.DonationUncheckedCreateWithoutRecyclerInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutRecyclerInput | Prisma.DonationCreateOrConnectWithoutRecyclerInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutRecyclerInput | Prisma.DonationUpsertWithWhereUniqueWithoutRecyclerInput[];
    createMany?: Prisma.DonationCreateManyRecyclerInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutRecyclerInput | Prisma.DonationUpdateWithWhereUniqueWithoutRecyclerInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutRecyclerInput | Prisma.DonationUpdateManyWithWhereWithoutRecyclerInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationCreateWithoutItemInput = {
    id?: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
    recycler: Prisma.RecyclerCreateNestedOneWithoutDonationsInput;
};
export type DonationUncheckedCreateWithoutItemInput = {
    id?: string;
    recyclerId: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
};
export type DonationCreateOrConnectWithoutItemInput = {
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateWithoutItemInput, Prisma.DonationUncheckedCreateWithoutItemInput>;
};
export type DonationCreateManyItemInputEnvelope = {
    data: Prisma.DonationCreateManyItemInput | Prisma.DonationCreateManyItemInput[];
    skipDuplicates?: boolean;
};
export type DonationUpsertWithWhereUniqueWithoutItemInput = {
    where: Prisma.DonationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DonationUpdateWithoutItemInput, Prisma.DonationUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.DonationCreateWithoutItemInput, Prisma.DonationUncheckedCreateWithoutItemInput>;
};
export type DonationUpdateWithWhereUniqueWithoutItemInput = {
    where: Prisma.DonationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DonationUpdateWithoutItemInput, Prisma.DonationUncheckedUpdateWithoutItemInput>;
};
export type DonationUpdateManyWithWhereWithoutItemInput = {
    where: Prisma.DonationScalarWhereInput;
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyWithoutItemInput>;
};
export type DonationScalarWhereInput = {
    AND?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
    OR?: Prisma.DonationScalarWhereInput[];
    NOT?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
    id?: Prisma.StringFilter<"Donation"> | string;
    itemId?: Prisma.StringFilter<"Donation"> | string;
    recyclerId?: Prisma.StringFilter<"Donation"> | string;
    allocatedKg?: Prisma.FloatFilter<"Donation"> | number;
    impactEstimate?: Prisma.FloatFilter<"Donation"> | number;
    status?: Prisma.StringFilter<"Donation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
};
export type DonationCreateWithoutRecyclerInput = {
    id?: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
    item: Prisma.ItemCreateNestedOneWithoutDonationsInput;
};
export type DonationUncheckedCreateWithoutRecyclerInput = {
    id?: string;
    itemId: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
};
export type DonationCreateOrConnectWithoutRecyclerInput = {
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateWithoutRecyclerInput, Prisma.DonationUncheckedCreateWithoutRecyclerInput>;
};
export type DonationCreateManyRecyclerInputEnvelope = {
    data: Prisma.DonationCreateManyRecyclerInput | Prisma.DonationCreateManyRecyclerInput[];
    skipDuplicates?: boolean;
};
export type DonationUpsertWithWhereUniqueWithoutRecyclerInput = {
    where: Prisma.DonationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DonationUpdateWithoutRecyclerInput, Prisma.DonationUncheckedUpdateWithoutRecyclerInput>;
    create: Prisma.XOR<Prisma.DonationCreateWithoutRecyclerInput, Prisma.DonationUncheckedCreateWithoutRecyclerInput>;
};
export type DonationUpdateWithWhereUniqueWithoutRecyclerInput = {
    where: Prisma.DonationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DonationUpdateWithoutRecyclerInput, Prisma.DonationUncheckedUpdateWithoutRecyclerInput>;
};
export type DonationUpdateManyWithWhereWithoutRecyclerInput = {
    where: Prisma.DonationScalarWhereInput;
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyWithoutRecyclerInput>;
};
export type DonationCreateManyItemInput = {
    id?: string;
    recyclerId: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
};
export type DonationUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recycler?: Prisma.RecyclerUpdateOneRequiredWithoutDonationsNestedInput;
};
export type DonationUncheckedUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recyclerId?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationUncheckedUpdateManyWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recyclerId?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationCreateManyRecyclerInput = {
    id?: string;
    itemId: string;
    allocatedKg: number;
    impactEstimate: number;
    status?: string;
    createdAt?: Date | string;
};
export type DonationUpdateWithoutRecyclerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    item?: Prisma.ItemUpdateOneRequiredWithoutDonationsNestedInput;
};
export type DonationUncheckedUpdateWithoutRecyclerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationUncheckedUpdateManyWithoutRecyclerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    allocatedKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    impactEstimate?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    recyclerId?: boolean;
    allocatedKg?: boolean;
    impactEstimate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    recycler?: boolean | Prisma.RecyclerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donation"]>;
export type DonationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    recyclerId?: boolean;
    allocatedKg?: boolean;
    impactEstimate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    recycler?: boolean | Prisma.RecyclerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donation"]>;
export type DonationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    recyclerId?: boolean;
    allocatedKg?: boolean;
    impactEstimate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    recycler?: boolean | Prisma.RecyclerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donation"]>;
export type DonationSelectScalar = {
    id?: boolean;
    itemId?: boolean;
    recyclerId?: boolean;
    allocatedKg?: boolean;
    impactEstimate?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type DonationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "itemId" | "recyclerId" | "allocatedKg" | "impactEstimate" | "status" | "createdAt", ExtArgs["result"]["donation"]>;
export type DonationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    recycler?: boolean | Prisma.RecyclerDefaultArgs<ExtArgs>;
};
export type DonationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    recycler?: boolean | Prisma.RecyclerDefaultArgs<ExtArgs>;
};
export type DonationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    recycler?: boolean | Prisma.RecyclerDefaultArgs<ExtArgs>;
};
export type $DonationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Donation";
    objects: {
        item: Prisma.$ItemPayload<ExtArgs>;
        recycler: Prisma.$RecyclerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        itemId: string;
        recyclerId: string;
        allocatedKg: number;
        impactEstimate: number;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["donation"]>;
    composites: {};
};
export type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DonationPayload, S>;
export type DonationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DonationCountAggregateInputType | true;
};
export interface DonationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Donation'];
        meta: {
            name: 'Donation';
        };
    };
    findUnique<T extends DonationFindUniqueArgs>(args: Prisma.SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DonationFindFirstArgs>(args?: Prisma.SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DonationFindManyArgs>(args?: Prisma.SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DonationCreateArgs>(args: Prisma.SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DonationCreateManyArgs>(args?: Prisma.SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DonationDeleteArgs>(args: Prisma.SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DonationUpdateArgs>(args: Prisma.SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DonationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DonationUpdateManyArgs>(args: Prisma.SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DonationUpsertArgs>(args: Prisma.SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DonationCountArgs>(args?: Prisma.Subset<T, DonationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DonationCountAggregateOutputType> : number>;
    aggregate<T extends DonationAggregateArgs>(args: Prisma.Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>;
    groupBy<T extends DonationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DonationGroupByArgs['orderBy'];
    } : {
        orderBy?: DonationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DonationFieldRefs;
}
export interface Prisma__DonationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recycler<T extends Prisma.RecyclerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecyclerDefaultArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DonationFieldRefs {
    readonly id: Prisma.FieldRef<"Donation", 'String'>;
    readonly itemId: Prisma.FieldRef<"Donation", 'String'>;
    readonly recyclerId: Prisma.FieldRef<"Donation", 'String'>;
    readonly allocatedKg: Prisma.FieldRef<"Donation", 'Float'>;
    readonly impactEstimate: Prisma.FieldRef<"Donation", 'Float'>;
    readonly status: Prisma.FieldRef<"Donation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Donation", 'DateTime'>;
}
export type DonationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DonationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DonationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DonationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonationCreateInput, Prisma.DonationUncheckedCreateInput>;
};
export type DonationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DonationCreateManyInput | Prisma.DonationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DonationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    data: Prisma.DonationCreateManyInput | Prisma.DonationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DonationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DonationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonationUpdateInput, Prisma.DonationUncheckedUpdateInput>;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyInput>;
    where?: Prisma.DonationWhereInput;
    limit?: number;
};
export type DonationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyInput>;
    where?: Prisma.DonationWhereInput;
    limit?: number;
    include?: Prisma.DonationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DonationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateInput, Prisma.DonationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DonationUpdateInput, Prisma.DonationUncheckedUpdateInput>;
};
export type DonationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
    limit?: number;
};
export type DonationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
};
export {};
