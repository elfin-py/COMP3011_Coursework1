import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RecyclerModel = runtime.Types.Result.DefaultSelection<Prisma.$RecyclerPayload>;
export type AggregateRecycler = {
    _count: RecyclerCountAggregateOutputType | null;
    _avg: RecyclerAvgAggregateOutputType | null;
    _sum: RecyclerSumAggregateOutputType | null;
    _min: RecyclerMinAggregateOutputType | null;
    _max: RecyclerMaxAggregateOutputType | null;
};
export type RecyclerAvgAggregateOutputType = {
    distanceKm: number | null;
    capacityKg: number | null;
    co2PerKg: number | null;
};
export type RecyclerSumAggregateOutputType = {
    distanceKm: number | null;
    capacityKg: number | null;
    co2PerKg: number | null;
};
export type RecyclerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    distanceKm: number | null;
    capacityKg: number | null;
    co2PerKg: number | null;
    createdAt: Date | null;
};
export type RecyclerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    distanceKm: number | null;
    capacityKg: number | null;
    co2PerKg: number | null;
    createdAt: Date | null;
};
export type RecyclerCountAggregateOutputType = {
    id: number;
    name: number;
    materials: number;
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt: number;
    _all: number;
};
export type RecyclerAvgAggregateInputType = {
    distanceKm?: true;
    capacityKg?: true;
    co2PerKg?: true;
};
export type RecyclerSumAggregateInputType = {
    distanceKm?: true;
    capacityKg?: true;
    co2PerKg?: true;
};
export type RecyclerMinAggregateInputType = {
    id?: true;
    name?: true;
    distanceKm?: true;
    capacityKg?: true;
    co2PerKg?: true;
    createdAt?: true;
};
export type RecyclerMaxAggregateInputType = {
    id?: true;
    name?: true;
    distanceKm?: true;
    capacityKg?: true;
    co2PerKg?: true;
    createdAt?: true;
};
export type RecyclerCountAggregateInputType = {
    id?: true;
    name?: true;
    materials?: true;
    distanceKm?: true;
    capacityKg?: true;
    co2PerKg?: true;
    createdAt?: true;
    _all?: true;
};
export type RecyclerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecyclerWhereInput;
    orderBy?: Prisma.RecyclerOrderByWithRelationInput | Prisma.RecyclerOrderByWithRelationInput[];
    cursor?: Prisma.RecyclerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RecyclerCountAggregateInputType;
    _avg?: RecyclerAvgAggregateInputType;
    _sum?: RecyclerSumAggregateInputType;
    _min?: RecyclerMinAggregateInputType;
    _max?: RecyclerMaxAggregateInputType;
};
export type GetRecyclerAggregateType<T extends RecyclerAggregateArgs> = {
    [P in keyof T & keyof AggregateRecycler]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecycler[P]> : Prisma.GetScalarType<T[P], AggregateRecycler[P]>;
};
export type RecyclerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecyclerWhereInput;
    orderBy?: Prisma.RecyclerOrderByWithAggregationInput | Prisma.RecyclerOrderByWithAggregationInput[];
    by: Prisma.RecyclerScalarFieldEnum[] | Prisma.RecyclerScalarFieldEnum;
    having?: Prisma.RecyclerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecyclerCountAggregateInputType | true;
    _avg?: RecyclerAvgAggregateInputType;
    _sum?: RecyclerSumAggregateInputType;
    _min?: RecyclerMinAggregateInputType;
    _max?: RecyclerMaxAggregateInputType;
};
export type RecyclerGroupByOutputType = {
    id: string;
    name: string;
    materials: string[];
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt: Date;
    _count: RecyclerCountAggregateOutputType | null;
    _avg: RecyclerAvgAggregateOutputType | null;
    _sum: RecyclerSumAggregateOutputType | null;
    _min: RecyclerMinAggregateOutputType | null;
    _max: RecyclerMaxAggregateOutputType | null;
};
type GetRecyclerGroupByPayload<T extends RecyclerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecyclerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecyclerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecyclerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecyclerGroupByOutputType[P]>;
}>>;
export type RecyclerWhereInput = {
    AND?: Prisma.RecyclerWhereInput | Prisma.RecyclerWhereInput[];
    OR?: Prisma.RecyclerWhereInput[];
    NOT?: Prisma.RecyclerWhereInput | Prisma.RecyclerWhereInput[];
    id?: Prisma.StringFilter<"Recycler"> | string;
    name?: Prisma.StringFilter<"Recycler"> | string;
    materials?: Prisma.StringNullableListFilter<"Recycler">;
    distanceKm?: Prisma.FloatFilter<"Recycler"> | number;
    capacityKg?: Prisma.FloatFilter<"Recycler"> | number;
    co2PerKg?: Prisma.FloatFilter<"Recycler"> | number;
    createdAt?: Prisma.DateTimeFilter<"Recycler"> | Date | string;
    donations?: Prisma.DonationListRelationFilter;
};
export type RecyclerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    materials?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    donations?: Prisma.DonationOrderByRelationAggregateInput;
};
export type RecyclerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RecyclerWhereInput | Prisma.RecyclerWhereInput[];
    OR?: Prisma.RecyclerWhereInput[];
    NOT?: Prisma.RecyclerWhereInput | Prisma.RecyclerWhereInput[];
    name?: Prisma.StringFilter<"Recycler"> | string;
    materials?: Prisma.StringNullableListFilter<"Recycler">;
    distanceKm?: Prisma.FloatFilter<"Recycler"> | number;
    capacityKg?: Prisma.FloatFilter<"Recycler"> | number;
    co2PerKg?: Prisma.FloatFilter<"Recycler"> | number;
    createdAt?: Prisma.DateTimeFilter<"Recycler"> | Date | string;
    donations?: Prisma.DonationListRelationFilter;
}, "id">;
export type RecyclerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    materials?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RecyclerCountOrderByAggregateInput;
    _avg?: Prisma.RecyclerAvgOrderByAggregateInput;
    _max?: Prisma.RecyclerMaxOrderByAggregateInput;
    _min?: Prisma.RecyclerMinOrderByAggregateInput;
    _sum?: Prisma.RecyclerSumOrderByAggregateInput;
};
export type RecyclerScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecyclerScalarWhereWithAggregatesInput | Prisma.RecyclerScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecyclerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecyclerScalarWhereWithAggregatesInput | Prisma.RecyclerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Recycler"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Recycler"> | string;
    materials?: Prisma.StringNullableListFilter<"Recycler">;
    distanceKm?: Prisma.FloatWithAggregatesFilter<"Recycler"> | number;
    capacityKg?: Prisma.FloatWithAggregatesFilter<"Recycler"> | number;
    co2PerKg?: Prisma.FloatWithAggregatesFilter<"Recycler"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Recycler"> | Date | string;
};
export type RecyclerCreateInput = {
    id?: string;
    name: string;
    materials?: Prisma.RecyclerCreatematerialsInput | string[];
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt?: Date | string;
    donations?: Prisma.DonationCreateNestedManyWithoutRecyclerInput;
};
export type RecyclerUncheckedCreateInput = {
    id?: string;
    name: string;
    materials?: Prisma.RecyclerCreatematerialsInput | string[];
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt?: Date | string;
    donations?: Prisma.DonationUncheckedCreateNestedManyWithoutRecyclerInput;
};
export type RecyclerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    materials?: Prisma.RecyclerUpdatematerialsInput | string[];
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    co2PerKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donations?: Prisma.DonationUpdateManyWithoutRecyclerNestedInput;
};
export type RecyclerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    materials?: Prisma.RecyclerUpdatematerialsInput | string[];
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    co2PerKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donations?: Prisma.DonationUncheckedUpdateManyWithoutRecyclerNestedInput;
};
export type RecyclerCreateManyInput = {
    id?: string;
    name: string;
    materials?: Prisma.RecyclerCreatematerialsInput | string[];
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt?: Date | string;
};
export type RecyclerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    materials?: Prisma.RecyclerUpdatematerialsInput | string[];
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    co2PerKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecyclerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    materials?: Prisma.RecyclerUpdatematerialsInput | string[];
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    co2PerKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecyclerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    materials?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecyclerAvgOrderByAggregateInput = {
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
};
export type RecyclerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecyclerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecyclerSumOrderByAggregateInput = {
    distanceKm?: Prisma.SortOrder;
    capacityKg?: Prisma.SortOrder;
    co2PerKg?: Prisma.SortOrder;
};
export type RecyclerScalarRelationFilter = {
    is?: Prisma.RecyclerWhereInput;
    isNot?: Prisma.RecyclerWhereInput;
};
export type RecyclerCreatematerialsInput = {
    set: string[];
};
export type RecyclerUpdatematerialsInput = {
    set?: string[];
    push?: string | string[];
};
export type RecyclerCreateNestedOneWithoutDonationsInput = {
    create?: Prisma.XOR<Prisma.RecyclerCreateWithoutDonationsInput, Prisma.RecyclerUncheckedCreateWithoutDonationsInput>;
    connectOrCreate?: Prisma.RecyclerCreateOrConnectWithoutDonationsInput;
    connect?: Prisma.RecyclerWhereUniqueInput;
};
export type RecyclerUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: Prisma.XOR<Prisma.RecyclerCreateWithoutDonationsInput, Prisma.RecyclerUncheckedCreateWithoutDonationsInput>;
    connectOrCreate?: Prisma.RecyclerCreateOrConnectWithoutDonationsInput;
    upsert?: Prisma.RecyclerUpsertWithoutDonationsInput;
    connect?: Prisma.RecyclerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecyclerUpdateToOneWithWhereWithoutDonationsInput, Prisma.RecyclerUpdateWithoutDonationsInput>, Prisma.RecyclerUncheckedUpdateWithoutDonationsInput>;
};
export type RecyclerCreateWithoutDonationsInput = {
    id?: string;
    name: string;
    materials?: Prisma.RecyclerCreatematerialsInput | string[];
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt?: Date | string;
};
export type RecyclerUncheckedCreateWithoutDonationsInput = {
    id?: string;
    name: string;
    materials?: Prisma.RecyclerCreatematerialsInput | string[];
    distanceKm: number;
    capacityKg: number;
    co2PerKg: number;
    createdAt?: Date | string;
};
export type RecyclerCreateOrConnectWithoutDonationsInput = {
    where: Prisma.RecyclerWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecyclerCreateWithoutDonationsInput, Prisma.RecyclerUncheckedCreateWithoutDonationsInput>;
};
export type RecyclerUpsertWithoutDonationsInput = {
    update: Prisma.XOR<Prisma.RecyclerUpdateWithoutDonationsInput, Prisma.RecyclerUncheckedUpdateWithoutDonationsInput>;
    create: Prisma.XOR<Prisma.RecyclerCreateWithoutDonationsInput, Prisma.RecyclerUncheckedCreateWithoutDonationsInput>;
    where?: Prisma.RecyclerWhereInput;
};
export type RecyclerUpdateToOneWithWhereWithoutDonationsInput = {
    where?: Prisma.RecyclerWhereInput;
    data: Prisma.XOR<Prisma.RecyclerUpdateWithoutDonationsInput, Prisma.RecyclerUncheckedUpdateWithoutDonationsInput>;
};
export type RecyclerUpdateWithoutDonationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    materials?: Prisma.RecyclerUpdatematerialsInput | string[];
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    co2PerKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecyclerUncheckedUpdateWithoutDonationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    materials?: Prisma.RecyclerUpdatematerialsInput | string[];
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    co2PerKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecyclerCountOutputType = {
    donations: number;
};
export type RecyclerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donations?: boolean | RecyclerCountOutputTypeCountDonationsArgs;
};
export type RecyclerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerCountOutputTypeSelect<ExtArgs> | null;
};
export type RecyclerCountOutputTypeCountDonationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
};
export type RecyclerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    materials?: boolean;
    distanceKm?: boolean;
    capacityKg?: boolean;
    co2PerKg?: boolean;
    createdAt?: boolean;
    donations?: boolean | Prisma.Recycler$donationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecyclerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recycler"]>;
export type RecyclerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    materials?: boolean;
    distanceKm?: boolean;
    capacityKg?: boolean;
    co2PerKg?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["recycler"]>;
export type RecyclerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    materials?: boolean;
    distanceKm?: boolean;
    capacityKg?: boolean;
    co2PerKg?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["recycler"]>;
export type RecyclerSelectScalar = {
    id?: boolean;
    name?: boolean;
    materials?: boolean;
    distanceKm?: boolean;
    capacityKg?: boolean;
    co2PerKg?: boolean;
    createdAt?: boolean;
};
export type RecyclerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "materials" | "distanceKm" | "capacityKg" | "co2PerKg" | "createdAt", ExtArgs["result"]["recycler"]>;
export type RecyclerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donations?: boolean | Prisma.Recycler$donationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecyclerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RecyclerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RecyclerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RecyclerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Recycler";
    objects: {
        donations: Prisma.$DonationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        materials: string[];
        distanceKm: number;
        capacityKg: number;
        co2PerKg: number;
        createdAt: Date;
    }, ExtArgs["result"]["recycler"]>;
    composites: {};
};
export type RecyclerGetPayload<S extends boolean | null | undefined | RecyclerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecyclerPayload, S>;
export type RecyclerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecyclerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecyclerCountAggregateInputType | true;
};
export interface RecyclerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Recycler'];
        meta: {
            name: 'Recycler';
        };
    };
    findUnique<T extends RecyclerFindUniqueArgs>(args: Prisma.SelectSubset<T, RecyclerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RecyclerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecyclerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RecyclerFindFirstArgs>(args?: Prisma.SelectSubset<T, RecyclerFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RecyclerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecyclerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RecyclerFindManyArgs>(args?: Prisma.SelectSubset<T, RecyclerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RecyclerCreateArgs>(args: Prisma.SelectSubset<T, RecyclerCreateArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RecyclerCreateManyArgs>(args?: Prisma.SelectSubset<T, RecyclerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RecyclerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecyclerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RecyclerDeleteArgs>(args: Prisma.SelectSubset<T, RecyclerDeleteArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RecyclerUpdateArgs>(args: Prisma.SelectSubset<T, RecyclerUpdateArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RecyclerDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecyclerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RecyclerUpdateManyArgs>(args: Prisma.SelectSubset<T, RecyclerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RecyclerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecyclerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RecyclerUpsertArgs>(args: Prisma.SelectSubset<T, RecyclerUpsertArgs<ExtArgs>>): Prisma.Prisma__RecyclerClient<runtime.Types.Result.GetResult<Prisma.$RecyclerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RecyclerCountArgs>(args?: Prisma.Subset<T, RecyclerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecyclerCountAggregateOutputType> : number>;
    aggregate<T extends RecyclerAggregateArgs>(args: Prisma.Subset<T, RecyclerAggregateArgs>): Prisma.PrismaPromise<GetRecyclerAggregateType<T>>;
    groupBy<T extends RecyclerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecyclerGroupByArgs['orderBy'];
    } : {
        orderBy?: RecyclerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecyclerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecyclerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RecyclerFieldRefs;
}
export interface Prisma__RecyclerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    donations<T extends Prisma.Recycler$donationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recycler$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RecyclerFieldRefs {
    readonly id: Prisma.FieldRef<"Recycler", 'String'>;
    readonly name: Prisma.FieldRef<"Recycler", 'String'>;
    readonly materials: Prisma.FieldRef<"Recycler", 'String[]'>;
    readonly distanceKm: Prisma.FieldRef<"Recycler", 'Float'>;
    readonly capacityKg: Prisma.FieldRef<"Recycler", 'Float'>;
    readonly co2PerKg: Prisma.FieldRef<"Recycler", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Recycler", 'DateTime'>;
}
export type RecyclerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where: Prisma.RecyclerWhereUniqueInput;
};
export type RecyclerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where: Prisma.RecyclerWhereUniqueInput;
};
export type RecyclerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where?: Prisma.RecyclerWhereInput;
    orderBy?: Prisma.RecyclerOrderByWithRelationInput | Prisma.RecyclerOrderByWithRelationInput[];
    cursor?: Prisma.RecyclerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecyclerScalarFieldEnum | Prisma.RecyclerScalarFieldEnum[];
};
export type RecyclerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where?: Prisma.RecyclerWhereInput;
    orderBy?: Prisma.RecyclerOrderByWithRelationInput | Prisma.RecyclerOrderByWithRelationInput[];
    cursor?: Prisma.RecyclerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecyclerScalarFieldEnum | Prisma.RecyclerScalarFieldEnum[];
};
export type RecyclerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where?: Prisma.RecyclerWhereInput;
    orderBy?: Prisma.RecyclerOrderByWithRelationInput | Prisma.RecyclerOrderByWithRelationInput[];
    cursor?: Prisma.RecyclerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecyclerScalarFieldEnum | Prisma.RecyclerScalarFieldEnum[];
};
export type RecyclerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecyclerCreateInput, Prisma.RecyclerUncheckedCreateInput>;
};
export type RecyclerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RecyclerCreateManyInput | Prisma.RecyclerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RecyclerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    data: Prisma.RecyclerCreateManyInput | Prisma.RecyclerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RecyclerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecyclerUpdateInput, Prisma.RecyclerUncheckedUpdateInput>;
    where: Prisma.RecyclerWhereUniqueInput;
};
export type RecyclerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RecyclerUpdateManyMutationInput, Prisma.RecyclerUncheckedUpdateManyInput>;
    where?: Prisma.RecyclerWhereInput;
    limit?: number;
};
export type RecyclerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecyclerUpdateManyMutationInput, Prisma.RecyclerUncheckedUpdateManyInput>;
    where?: Prisma.RecyclerWhereInput;
    limit?: number;
};
export type RecyclerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where: Prisma.RecyclerWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecyclerCreateInput, Prisma.RecyclerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RecyclerUpdateInput, Prisma.RecyclerUncheckedUpdateInput>;
};
export type RecyclerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
    where: Prisma.RecyclerWhereUniqueInput;
};
export type RecyclerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecyclerWhereInput;
    limit?: number;
};
export type Recycler$donationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RecyclerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecyclerSelect<ExtArgs> | null;
    omit?: Prisma.RecyclerOmit<ExtArgs> | null;
    include?: Prisma.RecyclerInclude<ExtArgs> | null;
};
export {};
