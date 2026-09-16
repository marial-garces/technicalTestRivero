import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type RackModel = runtime.Types.Result.DefaultSelection<Prisma.$RackPayload>;
export type AggregateRack = {
    _count: RackCountAggregateOutputType | null;
    _min: RackMinAggregateOutputType | null;
    _max: RackMaxAggregateOutputType | null;
};
export type RackMinAggregateOutputType = {
    id: string | null;
    aisleId: string | null;
    code: string | null;
};
export type RackMaxAggregateOutputType = {
    id: string | null;
    aisleId: string | null;
    code: string | null;
};
export type RackCountAggregateOutputType = {
    id: number;
    aisleId: number;
    code: number;
    _all: number;
};
export type RackMinAggregateInputType = {
    id?: true;
    aisleId?: true;
    code?: true;
};
export type RackMaxAggregateInputType = {
    id?: true;
    aisleId?: true;
    code?: true;
};
export type RackCountAggregateInputType = {
    id?: true;
    aisleId?: true;
    code?: true;
    _all?: true;
};
export type RackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RackWhereInput;
    orderBy?: Prisma.RackOrderByWithRelationInput | Prisma.RackOrderByWithRelationInput[];
    cursor?: Prisma.RackWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RackCountAggregateInputType;
    _min?: RackMinAggregateInputType;
    _max?: RackMaxAggregateInputType;
};
export type GetRackAggregateType<T extends RackAggregateArgs> = {
    [P in keyof T & keyof AggregateRack]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRack[P]> : Prisma.GetScalarType<T[P], AggregateRack[P]>;
};
export type RackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RackWhereInput;
    orderBy?: Prisma.RackOrderByWithAggregationInput | Prisma.RackOrderByWithAggregationInput[];
    by: Prisma.RackScalarFieldEnum[] | Prisma.RackScalarFieldEnum;
    having?: Prisma.RackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RackCountAggregateInputType | true;
    _min?: RackMinAggregateInputType;
    _max?: RackMaxAggregateInputType;
};
export type RackGroupByOutputType = {
    id: string;
    aisleId: string;
    code: string;
    _count: RackCountAggregateOutputType | null;
    _min: RackMinAggregateOutputType | null;
    _max: RackMaxAggregateOutputType | null;
};
type GetRackGroupByPayload<T extends RackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RackGroupByOutputType[P]>;
}>>;
export type RackWhereInput = {
    AND?: Prisma.RackWhereInput | Prisma.RackWhereInput[];
    OR?: Prisma.RackWhereInput[];
    NOT?: Prisma.RackWhereInput | Prisma.RackWhereInput[];
    id?: Prisma.StringFilter<"Rack"> | string;
    aisleId?: Prisma.StringFilter<"Rack"> | string;
    code?: Prisma.StringFilter<"Rack"> | string;
    aisle?: Prisma.XOR<Prisma.AisleScalarRelationFilter, Prisma.AisleWhereInput>;
    bins?: Prisma.BinListRelationFilter;
};
export type RackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    aisleId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    aisle?: Prisma.AisleOrderByWithRelationInput;
    bins?: Prisma.BinOrderByRelationAggregateInput;
};
export type RackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RackWhereInput | Prisma.RackWhereInput[];
    OR?: Prisma.RackWhereInput[];
    NOT?: Prisma.RackWhereInput | Prisma.RackWhereInput[];
    aisleId?: Prisma.StringFilter<"Rack"> | string;
    code?: Prisma.StringFilter<"Rack"> | string;
    aisle?: Prisma.XOR<Prisma.AisleScalarRelationFilter, Prisma.AisleWhereInput>;
    bins?: Prisma.BinListRelationFilter;
}, "id">;
export type RackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    aisleId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    _count?: Prisma.RackCountOrderByAggregateInput;
    _max?: Prisma.RackMaxOrderByAggregateInput;
    _min?: Prisma.RackMinOrderByAggregateInput;
};
export type RackScalarWhereWithAggregatesInput = {
    AND?: Prisma.RackScalarWhereWithAggregatesInput | Prisma.RackScalarWhereWithAggregatesInput[];
    OR?: Prisma.RackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RackScalarWhereWithAggregatesInput | Prisma.RackScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rack"> | string;
    aisleId?: Prisma.StringWithAggregatesFilter<"Rack"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Rack"> | string;
};
export type RackCreateInput = {
    id?: string;
    code: string;
    aisle: Prisma.AisleCreateNestedOneWithoutRacksInput;
    bins?: Prisma.BinCreateNestedManyWithoutRackInput;
};
export type RackUncheckedCreateInput = {
    id?: string;
    aisleId: string;
    code: string;
    bins?: Prisma.BinUncheckedCreateNestedManyWithoutRackInput;
};
export type RackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    aisle?: Prisma.AisleUpdateOneRequiredWithoutRacksNestedInput;
    bins?: Prisma.BinUpdateManyWithoutRackNestedInput;
};
export type RackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    aisleId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    bins?: Prisma.BinUncheckedUpdateManyWithoutRackNestedInput;
};
export type RackCreateManyInput = {
    id?: string;
    aisleId: string;
    code: string;
};
export type RackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    aisleId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RackListRelationFilter = {
    every?: Prisma.RackWhereInput;
    some?: Prisma.RackWhereInput;
    none?: Prisma.RackWhereInput;
};
export type RackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aisleId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
};
export type RackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aisleId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
};
export type RackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aisleId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
};
export type RackScalarRelationFilter = {
    is?: Prisma.RackWhereInput;
    isNot?: Prisma.RackWhereInput;
};
export type RackCreateNestedManyWithoutAisleInput = {
    create?: Prisma.XOR<Prisma.RackCreateWithoutAisleInput, Prisma.RackUncheckedCreateWithoutAisleInput> | Prisma.RackCreateWithoutAisleInput[] | Prisma.RackUncheckedCreateWithoutAisleInput[];
    connectOrCreate?: Prisma.RackCreateOrConnectWithoutAisleInput | Prisma.RackCreateOrConnectWithoutAisleInput[];
    createMany?: Prisma.RackCreateManyAisleInputEnvelope;
    connect?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
};
export type RackUncheckedCreateNestedManyWithoutAisleInput = {
    create?: Prisma.XOR<Prisma.RackCreateWithoutAisleInput, Prisma.RackUncheckedCreateWithoutAisleInput> | Prisma.RackCreateWithoutAisleInput[] | Prisma.RackUncheckedCreateWithoutAisleInput[];
    connectOrCreate?: Prisma.RackCreateOrConnectWithoutAisleInput | Prisma.RackCreateOrConnectWithoutAisleInput[];
    createMany?: Prisma.RackCreateManyAisleInputEnvelope;
    connect?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
};
export type RackUpdateManyWithoutAisleNestedInput = {
    create?: Prisma.XOR<Prisma.RackCreateWithoutAisleInput, Prisma.RackUncheckedCreateWithoutAisleInput> | Prisma.RackCreateWithoutAisleInput[] | Prisma.RackUncheckedCreateWithoutAisleInput[];
    connectOrCreate?: Prisma.RackCreateOrConnectWithoutAisleInput | Prisma.RackCreateOrConnectWithoutAisleInput[];
    upsert?: Prisma.RackUpsertWithWhereUniqueWithoutAisleInput | Prisma.RackUpsertWithWhereUniqueWithoutAisleInput[];
    createMany?: Prisma.RackCreateManyAisleInputEnvelope;
    set?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    disconnect?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    delete?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    connect?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    update?: Prisma.RackUpdateWithWhereUniqueWithoutAisleInput | Prisma.RackUpdateWithWhereUniqueWithoutAisleInput[];
    updateMany?: Prisma.RackUpdateManyWithWhereWithoutAisleInput | Prisma.RackUpdateManyWithWhereWithoutAisleInput[];
    deleteMany?: Prisma.RackScalarWhereInput | Prisma.RackScalarWhereInput[];
};
export type RackUncheckedUpdateManyWithoutAisleNestedInput = {
    create?: Prisma.XOR<Prisma.RackCreateWithoutAisleInput, Prisma.RackUncheckedCreateWithoutAisleInput> | Prisma.RackCreateWithoutAisleInput[] | Prisma.RackUncheckedCreateWithoutAisleInput[];
    connectOrCreate?: Prisma.RackCreateOrConnectWithoutAisleInput | Prisma.RackCreateOrConnectWithoutAisleInput[];
    upsert?: Prisma.RackUpsertWithWhereUniqueWithoutAisleInput | Prisma.RackUpsertWithWhereUniqueWithoutAisleInput[];
    createMany?: Prisma.RackCreateManyAisleInputEnvelope;
    set?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    disconnect?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    delete?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    connect?: Prisma.RackWhereUniqueInput | Prisma.RackWhereUniqueInput[];
    update?: Prisma.RackUpdateWithWhereUniqueWithoutAisleInput | Prisma.RackUpdateWithWhereUniqueWithoutAisleInput[];
    updateMany?: Prisma.RackUpdateManyWithWhereWithoutAisleInput | Prisma.RackUpdateManyWithWhereWithoutAisleInput[];
    deleteMany?: Prisma.RackScalarWhereInput | Prisma.RackScalarWhereInput[];
};
export type RackCreateNestedOneWithoutBinsInput = {
    create?: Prisma.XOR<Prisma.RackCreateWithoutBinsInput, Prisma.RackUncheckedCreateWithoutBinsInput>;
    connectOrCreate?: Prisma.RackCreateOrConnectWithoutBinsInput;
    connect?: Prisma.RackWhereUniqueInput;
};
export type RackUpdateOneRequiredWithoutBinsNestedInput = {
    create?: Prisma.XOR<Prisma.RackCreateWithoutBinsInput, Prisma.RackUncheckedCreateWithoutBinsInput>;
    connectOrCreate?: Prisma.RackCreateOrConnectWithoutBinsInput;
    upsert?: Prisma.RackUpsertWithoutBinsInput;
    connect?: Prisma.RackWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RackUpdateToOneWithWhereWithoutBinsInput, Prisma.RackUpdateWithoutBinsInput>, Prisma.RackUncheckedUpdateWithoutBinsInput>;
};
export type RackCreateWithoutAisleInput = {
    id?: string;
    code: string;
    bins?: Prisma.BinCreateNestedManyWithoutRackInput;
};
export type RackUncheckedCreateWithoutAisleInput = {
    id?: string;
    code: string;
    bins?: Prisma.BinUncheckedCreateNestedManyWithoutRackInput;
};
export type RackCreateOrConnectWithoutAisleInput = {
    where: Prisma.RackWhereUniqueInput;
    create: Prisma.XOR<Prisma.RackCreateWithoutAisleInput, Prisma.RackUncheckedCreateWithoutAisleInput>;
};
export type RackCreateManyAisleInputEnvelope = {
    data: Prisma.RackCreateManyAisleInput | Prisma.RackCreateManyAisleInput[];
    skipDuplicates?: boolean;
};
export type RackUpsertWithWhereUniqueWithoutAisleInput = {
    where: Prisma.RackWhereUniqueInput;
    update: Prisma.XOR<Prisma.RackUpdateWithoutAisleInput, Prisma.RackUncheckedUpdateWithoutAisleInput>;
    create: Prisma.XOR<Prisma.RackCreateWithoutAisleInput, Prisma.RackUncheckedCreateWithoutAisleInput>;
};
export type RackUpdateWithWhereUniqueWithoutAisleInput = {
    where: Prisma.RackWhereUniqueInput;
    data: Prisma.XOR<Prisma.RackUpdateWithoutAisleInput, Prisma.RackUncheckedUpdateWithoutAisleInput>;
};
export type RackUpdateManyWithWhereWithoutAisleInput = {
    where: Prisma.RackScalarWhereInput;
    data: Prisma.XOR<Prisma.RackUpdateManyMutationInput, Prisma.RackUncheckedUpdateManyWithoutAisleInput>;
};
export type RackScalarWhereInput = {
    AND?: Prisma.RackScalarWhereInput | Prisma.RackScalarWhereInput[];
    OR?: Prisma.RackScalarWhereInput[];
    NOT?: Prisma.RackScalarWhereInput | Prisma.RackScalarWhereInput[];
    id?: Prisma.StringFilter<"Rack"> | string;
    aisleId?: Prisma.StringFilter<"Rack"> | string;
    code?: Prisma.StringFilter<"Rack"> | string;
};
export type RackCreateWithoutBinsInput = {
    id?: string;
    code: string;
    aisle: Prisma.AisleCreateNestedOneWithoutRacksInput;
};
export type RackUncheckedCreateWithoutBinsInput = {
    id?: string;
    aisleId: string;
    code: string;
};
export type RackCreateOrConnectWithoutBinsInput = {
    where: Prisma.RackWhereUniqueInput;
    create: Prisma.XOR<Prisma.RackCreateWithoutBinsInput, Prisma.RackUncheckedCreateWithoutBinsInput>;
};
export type RackUpsertWithoutBinsInput = {
    update: Prisma.XOR<Prisma.RackUpdateWithoutBinsInput, Prisma.RackUncheckedUpdateWithoutBinsInput>;
    create: Prisma.XOR<Prisma.RackCreateWithoutBinsInput, Prisma.RackUncheckedCreateWithoutBinsInput>;
    where?: Prisma.RackWhereInput;
};
export type RackUpdateToOneWithWhereWithoutBinsInput = {
    where?: Prisma.RackWhereInput;
    data: Prisma.XOR<Prisma.RackUpdateWithoutBinsInput, Prisma.RackUncheckedUpdateWithoutBinsInput>;
};
export type RackUpdateWithoutBinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    aisle?: Prisma.AisleUpdateOneRequiredWithoutRacksNestedInput;
};
export type RackUncheckedUpdateWithoutBinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    aisleId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RackCreateManyAisleInput = {
    id?: string;
    code: string;
};
export type RackUpdateWithoutAisleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    bins?: Prisma.BinUpdateManyWithoutRackNestedInput;
};
export type RackUncheckedUpdateWithoutAisleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    bins?: Prisma.BinUncheckedUpdateManyWithoutRackNestedInput;
};
export type RackUncheckedUpdateManyWithoutAisleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RackCountOutputType = {
    bins: number;
};
export type RackCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bins?: boolean | RackCountOutputTypeCountBinsArgs;
};
export type RackCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackCountOutputTypeSelect<ExtArgs> | null;
};
export type RackCountOutputTypeCountBinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BinWhereInput;
};
export type RackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aisleId?: boolean;
    code?: boolean;
    aisle?: boolean | Prisma.AisleDefaultArgs<ExtArgs>;
    bins?: boolean | Prisma.Rack$binsArgs<ExtArgs>;
    _count?: boolean | Prisma.RackCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rack"]>;
export type RackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aisleId?: boolean;
    code?: boolean;
    aisle?: boolean | Prisma.AisleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rack"]>;
export type RackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aisleId?: boolean;
    code?: boolean;
    aisle?: boolean | Prisma.AisleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rack"]>;
export type RackSelectScalar = {
    id?: boolean;
    aisleId?: boolean;
    code?: boolean;
};
export type RackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "aisleId" | "code", ExtArgs["result"]["rack"]>;
export type RackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aisle?: boolean | Prisma.AisleDefaultArgs<ExtArgs>;
    bins?: boolean | Prisma.Rack$binsArgs<ExtArgs>;
    _count?: boolean | Prisma.RackCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aisle?: boolean | Prisma.AisleDefaultArgs<ExtArgs>;
};
export type RackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aisle?: boolean | Prisma.AisleDefaultArgs<ExtArgs>;
};
export type $RackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rack";
    objects: {
        aisle: Prisma.$AislePayload<ExtArgs>;
        bins: Prisma.$BinPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        aisleId: string;
        code: string;
    }, ExtArgs["result"]["rack"]>;
    composites: {};
};
export type RackGetPayload<S extends boolean | null | undefined | RackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RackPayload, S>;
export type RackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RackCountAggregateInputType | true;
};
export interface RackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rack'];
        meta: {
            name: 'Rack';
        };
    };
    findUnique<T extends RackFindUniqueArgs>(args: Prisma.SelectSubset<T, RackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RackFindFirstArgs>(args?: Prisma.SelectSubset<T, RackFindFirstArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RackFindManyArgs>(args?: Prisma.SelectSubset<T, RackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RackCreateArgs>(args: Prisma.SelectSubset<T, RackCreateArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RackCreateManyArgs>(args?: Prisma.SelectSubset<T, RackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RackDeleteArgs>(args: Prisma.SelectSubset<T, RackDeleteArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RackUpdateArgs>(args: Prisma.SelectSubset<T, RackUpdateArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RackDeleteManyArgs>(args?: Prisma.SelectSubset<T, RackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RackUpdateManyArgs>(args: Prisma.SelectSubset<T, RackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RackUpsertArgs>(args: Prisma.SelectSubset<T, RackUpsertArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RackCountArgs>(args?: Prisma.Subset<T, RackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RackCountAggregateOutputType> : number>;
    aggregate<T extends RackAggregateArgs>(args: Prisma.Subset<T, RackAggregateArgs>): Prisma.PrismaPromise<GetRackAggregateType<T>>;
    groupBy<T extends RackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RackGroupByArgs['orderBy'];
    } : {
        orderBy?: RackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RackFieldRefs;
}
export interface Prisma__RackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aisle<T extends Prisma.AisleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AisleDefaultArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bins<T extends Prisma.Rack$binsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rack$binsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RackFieldRefs {
    readonly id: Prisma.FieldRef<"Rack", 'String'>;
    readonly aisleId: Prisma.FieldRef<"Rack", 'String'>;
    readonly code: Prisma.FieldRef<"Rack", 'String'>;
}
export type RackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where: Prisma.RackWhereUniqueInput;
};
export type RackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where: Prisma.RackWhereUniqueInput;
};
export type RackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where?: Prisma.RackWhereInput;
    orderBy?: Prisma.RackOrderByWithRelationInput | Prisma.RackOrderByWithRelationInput[];
    cursor?: Prisma.RackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RackScalarFieldEnum | Prisma.RackScalarFieldEnum[];
};
export type RackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where?: Prisma.RackWhereInput;
    orderBy?: Prisma.RackOrderByWithRelationInput | Prisma.RackOrderByWithRelationInput[];
    cursor?: Prisma.RackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RackScalarFieldEnum | Prisma.RackScalarFieldEnum[];
};
export type RackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where?: Prisma.RackWhereInput;
    orderBy?: Prisma.RackOrderByWithRelationInput | Prisma.RackOrderByWithRelationInput[];
    cursor?: Prisma.RackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RackScalarFieldEnum | Prisma.RackScalarFieldEnum[];
};
export type RackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RackCreateInput, Prisma.RackUncheckedCreateInput>;
};
export type RackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RackCreateManyInput | Prisma.RackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    data: Prisma.RackCreateManyInput | Prisma.RackCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RackIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RackUpdateInput, Prisma.RackUncheckedUpdateInput>;
    where: Prisma.RackWhereUniqueInput;
};
export type RackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RackUpdateManyMutationInput, Prisma.RackUncheckedUpdateManyInput>;
    where?: Prisma.RackWhereInput;
    limit?: number;
};
export type RackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RackUpdateManyMutationInput, Prisma.RackUncheckedUpdateManyInput>;
    where?: Prisma.RackWhereInput;
    limit?: number;
    include?: Prisma.RackIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where: Prisma.RackWhereUniqueInput;
    create: Prisma.XOR<Prisma.RackCreateInput, Prisma.RackUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RackUpdateInput, Prisma.RackUncheckedUpdateInput>;
};
export type RackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
    where: Prisma.RackWhereUniqueInput;
};
export type RackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RackWhereInput;
    limit?: number;
};
export type Rack$binsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    where?: Prisma.BinWhereInput;
    orderBy?: Prisma.BinOrderByWithRelationInput | Prisma.BinOrderByWithRelationInput[];
    cursor?: Prisma.BinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BinScalarFieldEnum | Prisma.BinScalarFieldEnum[];
};
export type RackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RackSelect<ExtArgs> | null;
    omit?: Prisma.RackOmit<ExtArgs> | null;
    include?: Prisma.RackInclude<ExtArgs> | null;
};
export {};
