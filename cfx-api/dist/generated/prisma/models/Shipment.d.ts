import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShipmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ShipmentPayload>;
export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null;
    _min: ShipmentMinAggregateOutputType | null;
    _max: ShipmentMaxAggregateOutputType | null;
};
export type ShipmentMinAggregateOutputType = {
    id: string | null;
    fromUserId: string | null;
    toUserId: string | null;
    recyclerId: string | null;
    eta: Date | null;
    labelUrl: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type ShipmentMaxAggregateOutputType = {
    id: string | null;
    fromUserId: string | null;
    toUserId: string | null;
    recyclerId: string | null;
    eta: Date | null;
    labelUrl: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type ShipmentCountAggregateOutputType = {
    id: number;
    fromUserId: number;
    toUserId: number;
    recyclerId: number;
    eta: number;
    labelUrl: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type ShipmentMinAggregateInputType = {
    id?: true;
    fromUserId?: true;
    toUserId?: true;
    recyclerId?: true;
    eta?: true;
    labelUrl?: true;
    status?: true;
    createdAt?: true;
};
export type ShipmentMaxAggregateInputType = {
    id?: true;
    fromUserId?: true;
    toUserId?: true;
    recyclerId?: true;
    eta?: true;
    labelUrl?: true;
    status?: true;
    createdAt?: true;
};
export type ShipmentCountAggregateInputType = {
    id?: true;
    fromUserId?: true;
    toUserId?: true;
    recyclerId?: true;
    eta?: true;
    labelUrl?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type ShipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShipmentCountAggregateInputType;
    _min?: ShipmentMinAggregateInputType;
    _max?: ShipmentMaxAggregateInputType;
};
export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
    [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipment[P]> : Prisma.GetScalarType<T[P], AggregateShipment[P]>;
};
export type ShipmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithAggregationInput | Prisma.ShipmentOrderByWithAggregationInput[];
    by: Prisma.ShipmentScalarFieldEnum[] | Prisma.ShipmentScalarFieldEnum;
    having?: Prisma.ShipmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentCountAggregateInputType | true;
    _min?: ShipmentMinAggregateInputType;
    _max?: ShipmentMaxAggregateInputType;
};
export type ShipmentGroupByOutputType = {
    id: string;
    fromUserId: string;
    toUserId: string | null;
    recyclerId: string | null;
    eta: Date | null;
    labelUrl: string | null;
    status: string;
    createdAt: Date;
    _count: ShipmentCountAggregateOutputType | null;
    _min: ShipmentMinAggregateOutputType | null;
    _max: ShipmentMaxAggregateOutputType | null;
};
type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]>;
}>>;
export type ShipmentWhereInput = {
    AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    OR?: Prisma.ShipmentWhereInput[];
    NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    id?: Prisma.StringFilter<"Shipment"> | string;
    fromUserId?: Prisma.StringFilter<"Shipment"> | string;
    toUserId?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    recyclerId?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    eta?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    labelUrl?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    status?: Prisma.StringFilter<"Shipment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    fromUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ShipmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recyclerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eta?: Prisma.SortOrderInput | Prisma.SortOrder;
    labelUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    fromUser?: Prisma.UserOrderByWithRelationInput;
};
export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    OR?: Prisma.ShipmentWhereInput[];
    NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    fromUserId?: Prisma.StringFilter<"Shipment"> | string;
    toUserId?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    recyclerId?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    eta?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    labelUrl?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    status?: Prisma.StringFilter<"Shipment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    fromUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ShipmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recyclerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eta?: Prisma.SortOrderInput | Prisma.SortOrder;
    labelUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShipmentCountOrderByAggregateInput;
    _max?: Prisma.ShipmentMaxOrderByAggregateInput;
    _min?: Prisma.ShipmentMinOrderByAggregateInput;
};
export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShipmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    fromUserId?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    toUserId?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null;
    recyclerId?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null;
    eta?: Prisma.DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null;
    labelUrl?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string;
};
export type ShipmentCreateInput = {
    id?: string;
    toUserId?: string | null;
    recyclerId?: string | null;
    eta?: Date | string | null;
    labelUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    fromUser: Prisma.UserCreateNestedOneWithoutShipmentsInput;
};
export type ShipmentUncheckedCreateInput = {
    id?: string;
    fromUserId: string;
    toUserId?: string | null;
    recyclerId?: string | null;
    eta?: Date | string | null;
    labelUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type ShipmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fromUser?: Prisma.UserUpdateOneRequiredWithoutShipmentsNestedInput;
};
export type ShipmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentCreateManyInput = {
    id?: string;
    fromUserId: string;
    toUserId?: string | null;
    recyclerId?: string | null;
    eta?: Date | string | null;
    labelUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type ShipmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentListRelationFilter = {
    every?: Prisma.ShipmentWhereInput;
    some?: Prisma.ShipmentWhereInput;
    none?: Prisma.ShipmentWhereInput;
};
export type ShipmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShipmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    eta?: Prisma.SortOrder;
    labelUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    eta?: Prisma.SortOrder;
    labelUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
    recyclerId?: Prisma.SortOrder;
    eta?: Prisma.SortOrder;
    labelUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentCreateNestedManyWithoutFromUserInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutFromUserInput, Prisma.ShipmentUncheckedCreateWithoutFromUserInput> | Prisma.ShipmentCreateWithoutFromUserInput[] | Prisma.ShipmentUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutFromUserInput | Prisma.ShipmentCreateOrConnectWithoutFromUserInput[];
    createMany?: Prisma.ShipmentCreateManyFromUserInputEnvelope;
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
};
export type ShipmentUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutFromUserInput, Prisma.ShipmentUncheckedCreateWithoutFromUserInput> | Prisma.ShipmentCreateWithoutFromUserInput[] | Prisma.ShipmentUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutFromUserInput | Prisma.ShipmentCreateOrConnectWithoutFromUserInput[];
    createMany?: Prisma.ShipmentCreateManyFromUserInputEnvelope;
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
};
export type ShipmentUpdateManyWithoutFromUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutFromUserInput, Prisma.ShipmentUncheckedCreateWithoutFromUserInput> | Prisma.ShipmentCreateWithoutFromUserInput[] | Prisma.ShipmentUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutFromUserInput | Prisma.ShipmentCreateOrConnectWithoutFromUserInput[];
    upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutFromUserInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutFromUserInput[];
    createMany?: Prisma.ShipmentCreateManyFromUserInputEnvelope;
    set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutFromUserInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutFromUserInput[];
    updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutFromUserInput | Prisma.ShipmentUpdateManyWithWhereWithoutFromUserInput[];
    deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
};
export type ShipmentUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutFromUserInput, Prisma.ShipmentUncheckedCreateWithoutFromUserInput> | Prisma.ShipmentCreateWithoutFromUserInput[] | Prisma.ShipmentUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutFromUserInput | Prisma.ShipmentCreateOrConnectWithoutFromUserInput[];
    upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutFromUserInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutFromUserInput[];
    createMany?: Prisma.ShipmentCreateManyFromUserInputEnvelope;
    set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutFromUserInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutFromUserInput[];
    updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutFromUserInput | Prisma.ShipmentUpdateManyWithWhereWithoutFromUserInput[];
    deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ShipmentCreateWithoutFromUserInput = {
    id?: string;
    toUserId?: string | null;
    recyclerId?: string | null;
    eta?: Date | string | null;
    labelUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type ShipmentUncheckedCreateWithoutFromUserInput = {
    id?: string;
    toUserId?: string | null;
    recyclerId?: string | null;
    eta?: Date | string | null;
    labelUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type ShipmentCreateOrConnectWithoutFromUserInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutFromUserInput, Prisma.ShipmentUncheckedCreateWithoutFromUserInput>;
};
export type ShipmentCreateManyFromUserInputEnvelope = {
    data: Prisma.ShipmentCreateManyFromUserInput | Prisma.ShipmentCreateManyFromUserInput[];
    skipDuplicates?: boolean;
};
export type ShipmentUpsertWithWhereUniqueWithoutFromUserInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShipmentUpdateWithoutFromUserInput, Prisma.ShipmentUncheckedUpdateWithoutFromUserInput>;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutFromUserInput, Prisma.ShipmentUncheckedCreateWithoutFromUserInput>;
};
export type ShipmentUpdateWithWhereUniqueWithoutFromUserInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateWithoutFromUserInput, Prisma.ShipmentUncheckedUpdateWithoutFromUserInput>;
};
export type ShipmentUpdateManyWithWhereWithoutFromUserInput = {
    where: Prisma.ShipmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyWithoutFromUserInput>;
};
export type ShipmentScalarWhereInput = {
    AND?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
    OR?: Prisma.ShipmentScalarWhereInput[];
    NOT?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Shipment"> | string;
    fromUserId?: Prisma.StringFilter<"Shipment"> | string;
    toUserId?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    recyclerId?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    eta?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    labelUrl?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    status?: Prisma.StringFilter<"Shipment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
};
export type ShipmentCreateManyFromUserInput = {
    id?: string;
    toUserId?: string | null;
    recyclerId?: string | null;
    eta?: Date | string | null;
    labelUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type ShipmentUpdateWithoutFromUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUncheckedUpdateWithoutFromUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUncheckedUpdateManyWithoutFromUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recyclerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labelUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    recyclerId?: boolean;
    eta?: boolean;
    labelUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    recyclerId?: boolean;
    eta?: boolean;
    labelUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    recyclerId?: boolean;
    eta?: boolean;
    labelUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectScalar = {
    id?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    recyclerId?: boolean;
    eta?: boolean;
    labelUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type ShipmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fromUserId" | "toUserId" | "recyclerId" | "eta" | "labelUrl" | "status" | "createdAt", ExtArgs["result"]["shipment"]>;
export type ShipmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ShipmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Shipment";
    objects: {
        fromUser: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fromUserId: string;
        toUserId: string | null;
        recyclerId: string | null;
        eta: Date | null;
        labelUrl: string | null;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["shipment"]>;
    composites: {};
};
export type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShipmentPayload, S>;
export type ShipmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentCountAggregateInputType | true;
};
export interface ShipmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Shipment'];
        meta: {
            name: 'Shipment';
        };
    };
    findUnique<T extends ShipmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShipmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShipmentFindManyArgs>(args?: Prisma.SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShipmentCreateArgs>(args: Prisma.SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShipmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShipmentDeleteArgs>(args: Prisma.SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShipmentUpdateArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShipmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShipmentUpsertArgs>(args: Prisma.SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShipmentCountArgs>(args?: Prisma.Subset<T, ShipmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentCountAggregateOutputType> : number>;
    aggregate<T extends ShipmentAggregateArgs>(args: Prisma.Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>;
    groupBy<T extends ShipmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShipmentGroupByArgs['orderBy'];
    } : {
        orderBy?: ShipmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShipmentFieldRefs;
}
export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fromUser<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShipmentFieldRefs {
    readonly id: Prisma.FieldRef<"Shipment", 'String'>;
    readonly fromUserId: Prisma.FieldRef<"Shipment", 'String'>;
    readonly toUserId: Prisma.FieldRef<"Shipment", 'String'>;
    readonly recyclerId: Prisma.FieldRef<"Shipment", 'String'>;
    readonly eta: Prisma.FieldRef<"Shipment", 'DateTime'>;
    readonly labelUrl: Prisma.FieldRef<"Shipment", 'String'>;
    readonly status: Prisma.FieldRef<"Shipment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
}
export type ShipmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ShipmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ShipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ShipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>;
};
export type ShipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShipmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShipmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
};
export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
    include?: Prisma.ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>;
};
export type ShipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
};
export type ShipmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
};
export {};
