import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type AisleModel = runtime.Types.Result.DefaultSelection<Prisma.$AislePayload>;
export type AggregateAisle = {
    _count: AisleCountAggregateOutputType | null;
    _min: AisleMinAggregateOutputType | null;
    _max: AisleMaxAggregateOutputType | null;
};
export type AisleMinAggregateOutputType = {
    id: string | null;
    warehouseId: string | null;
    code: string | null;
};
export type AisleMaxAggregateOutputType = {
    id: string | null;
    warehouseId: string | null;
    code: string | null;
};
export type AisleCountAggregateOutputType = {
    id: number;
    warehouseId: number;
    code: number;
    _all: number;
};
export type AisleMinAggregateInputType = {
    id?: true;
    warehouseId?: true;
    code?: true;
};
export type AisleMaxAggregateInputType = {
    id?: true;
    warehouseId?: true;
    code?: true;
};
export type AisleCountAggregateInputType = {
    id?: true;
    warehouseId?: true;
    code?: true;
    _all?: true;
};
export type AisleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AisleWhereInput;
    orderBy?: Prisma.AisleOrderByWithRelationInput | Prisma.AisleOrderByWithRelationInput[];
    cursor?: Prisma.AisleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AisleCountAggregateInputType;
    _min?: AisleMinAggregateInputType;
    _max?: AisleMaxAggregateInputType;
};
export type GetAisleAggregateType<T extends AisleAggregateArgs> = {
    [P in keyof T & keyof AggregateAisle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAisle[P]> : Prisma.GetScalarType<T[P], AggregateAisle[P]>;
};
export type AisleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AisleWhereInput;
    orderBy?: Prisma.AisleOrderByWithAggregationInput | Prisma.AisleOrderByWithAggregationInput[];
    by: Prisma.AisleScalarFieldEnum[] | Prisma.AisleScalarFieldEnum;
    having?: Prisma.AisleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AisleCountAggregateInputType | true;
    _min?: AisleMinAggregateInputType;
    _max?: AisleMaxAggregateInputType;
};
export type AisleGroupByOutputType = {
    id: string;
    warehouseId: string;
    code: string;
    _count: AisleCountAggregateOutputType | null;
    _min: AisleMinAggregateOutputType | null;
    _max: AisleMaxAggregateOutputType | null;
};
type GetAisleGroupByPayload<T extends AisleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AisleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AisleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AisleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AisleGroupByOutputType[P]>;
}>>;
export type AisleWhereInput = {
    AND?: Prisma.AisleWhereInput | Prisma.AisleWhereInput[];
    OR?: Prisma.AisleWhereInput[];
    NOT?: Prisma.AisleWhereInput | Prisma.AisleWhereInput[];
    id?: Prisma.StringFilter<"Aisle"> | string;
    warehouseId?: Prisma.StringFilter<"Aisle"> | string;
    code?: Prisma.StringFilter<"Aisle"> | string;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    racks?: Prisma.RackListRelationFilter;
};
export type AisleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
    racks?: Prisma.RackOrderByRelationAggregateInput;
};
export type AisleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AisleWhereInput | Prisma.AisleWhereInput[];
    OR?: Prisma.AisleWhereInput[];
    NOT?: Prisma.AisleWhereInput | Prisma.AisleWhereInput[];
    warehouseId?: Prisma.StringFilter<"Aisle"> | string;
    code?: Prisma.StringFilter<"Aisle"> | string;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    racks?: Prisma.RackListRelationFilter;
}, "id">;
export type AisleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    _count?: Prisma.AisleCountOrderByAggregateInput;
    _max?: Prisma.AisleMaxOrderByAggregateInput;
    _min?: Prisma.AisleMinOrderByAggregateInput;
};
export type AisleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AisleScalarWhereWithAggregatesInput | Prisma.AisleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AisleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AisleScalarWhereWithAggregatesInput | Prisma.AisleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Aisle"> | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"Aisle"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Aisle"> | string;
};
export type AisleCreateInput = {
    id?: string;
    code: string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutAislesInput;
    racks?: Prisma.RackCreateNestedManyWithoutAisleInput;
};
export type AisleUncheckedCreateInput = {
    id?: string;
    warehouseId: string;
    code: string;
    racks?: Prisma.RackUncheckedCreateNestedManyWithoutAisleInput;
};
export type AisleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutAislesNestedInput;
    racks?: Prisma.RackUpdateManyWithoutAisleNestedInput;
};
export type AisleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    racks?: Prisma.RackUncheckedUpdateManyWithoutAisleNestedInput;
};
export type AisleCreateManyInput = {
    id?: string;
    warehouseId: string;
    code: string;
};
export type AisleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AisleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AisleListRelationFilter = {
    every?: Prisma.AisleWhereInput;
    some?: Prisma.AisleWhereInput;
    none?: Prisma.AisleWhereInput;
};
export type AisleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AisleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
};
export type AisleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
};
export type AisleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
};
export type AisleScalarRelationFilter = {
    is?: Prisma.AisleWhereInput;
    isNot?: Prisma.AisleWhereInput;
};
export type AisleCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.AisleCreateWithoutWarehouseInput, Prisma.AisleUncheckedCreateWithoutWarehouseInput> | Prisma.AisleCreateWithoutWarehouseInput[] | Prisma.AisleUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.AisleCreateOrConnectWithoutWarehouseInput | Prisma.AisleCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.AisleCreateManyWarehouseInputEnvelope;
    connect?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
};
export type AisleUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.AisleCreateWithoutWarehouseInput, Prisma.AisleUncheckedCreateWithoutWarehouseInput> | Prisma.AisleCreateWithoutWarehouseInput[] | Prisma.AisleUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.AisleCreateOrConnectWithoutWarehouseInput | Prisma.AisleCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.AisleCreateManyWarehouseInputEnvelope;
    connect?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
};
export type AisleUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.AisleCreateWithoutWarehouseInput, Prisma.AisleUncheckedCreateWithoutWarehouseInput> | Prisma.AisleCreateWithoutWarehouseInput[] | Prisma.AisleUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.AisleCreateOrConnectWithoutWarehouseInput | Prisma.AisleCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.AisleUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.AisleUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.AisleCreateManyWarehouseInputEnvelope;
    set?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    disconnect?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    delete?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    connect?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    update?: Prisma.AisleUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.AisleUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.AisleUpdateManyWithWhereWithoutWarehouseInput | Prisma.AisleUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.AisleScalarWhereInput | Prisma.AisleScalarWhereInput[];
};
export type AisleUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.AisleCreateWithoutWarehouseInput, Prisma.AisleUncheckedCreateWithoutWarehouseInput> | Prisma.AisleCreateWithoutWarehouseInput[] | Prisma.AisleUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.AisleCreateOrConnectWithoutWarehouseInput | Prisma.AisleCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.AisleUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.AisleUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.AisleCreateManyWarehouseInputEnvelope;
    set?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    disconnect?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    delete?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    connect?: Prisma.AisleWhereUniqueInput | Prisma.AisleWhereUniqueInput[];
    update?: Prisma.AisleUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.AisleUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.AisleUpdateManyWithWhereWithoutWarehouseInput | Prisma.AisleUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.AisleScalarWhereInput | Prisma.AisleScalarWhereInput[];
};
export type AisleCreateNestedOneWithoutRacksInput = {
    create?: Prisma.XOR<Prisma.AisleCreateWithoutRacksInput, Prisma.AisleUncheckedCreateWithoutRacksInput>;
    connectOrCreate?: Prisma.AisleCreateOrConnectWithoutRacksInput;
    connect?: Prisma.AisleWhereUniqueInput;
};
export type AisleUpdateOneRequiredWithoutRacksNestedInput = {
    create?: Prisma.XOR<Prisma.AisleCreateWithoutRacksInput, Prisma.AisleUncheckedCreateWithoutRacksInput>;
    connectOrCreate?: Prisma.AisleCreateOrConnectWithoutRacksInput;
    upsert?: Prisma.AisleUpsertWithoutRacksInput;
    connect?: Prisma.AisleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AisleUpdateToOneWithWhereWithoutRacksInput, Prisma.AisleUpdateWithoutRacksInput>, Prisma.AisleUncheckedUpdateWithoutRacksInput>;
};
export type AisleCreateWithoutWarehouseInput = {
    id?: string;
    code: string;
    racks?: Prisma.RackCreateNestedManyWithoutAisleInput;
};
export type AisleUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    code: string;
    racks?: Prisma.RackUncheckedCreateNestedManyWithoutAisleInput;
};
export type AisleCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.AisleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AisleCreateWithoutWarehouseInput, Prisma.AisleUncheckedCreateWithoutWarehouseInput>;
};
export type AisleCreateManyWarehouseInputEnvelope = {
    data: Prisma.AisleCreateManyWarehouseInput | Prisma.AisleCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type AisleUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.AisleWhereUniqueInput;
    update: Prisma.XOR<Prisma.AisleUpdateWithoutWarehouseInput, Prisma.AisleUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.AisleCreateWithoutWarehouseInput, Prisma.AisleUncheckedCreateWithoutWarehouseInput>;
};
export type AisleUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.AisleWhereUniqueInput;
    data: Prisma.XOR<Prisma.AisleUpdateWithoutWarehouseInput, Prisma.AisleUncheckedUpdateWithoutWarehouseInput>;
};
export type AisleUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.AisleScalarWhereInput;
    data: Prisma.XOR<Prisma.AisleUpdateManyMutationInput, Prisma.AisleUncheckedUpdateManyWithoutWarehouseInput>;
};
export type AisleScalarWhereInput = {
    AND?: Prisma.AisleScalarWhereInput | Prisma.AisleScalarWhereInput[];
    OR?: Prisma.AisleScalarWhereInput[];
    NOT?: Prisma.AisleScalarWhereInput | Prisma.AisleScalarWhereInput[];
    id?: Prisma.StringFilter<"Aisle"> | string;
    warehouseId?: Prisma.StringFilter<"Aisle"> | string;
    code?: Prisma.StringFilter<"Aisle"> | string;
};
export type AisleCreateWithoutRacksInput = {
    id?: string;
    code: string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutAislesInput;
};
export type AisleUncheckedCreateWithoutRacksInput = {
    id?: string;
    warehouseId: string;
    code: string;
};
export type AisleCreateOrConnectWithoutRacksInput = {
    where: Prisma.AisleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AisleCreateWithoutRacksInput, Prisma.AisleUncheckedCreateWithoutRacksInput>;
};
export type AisleUpsertWithoutRacksInput = {
    update: Prisma.XOR<Prisma.AisleUpdateWithoutRacksInput, Prisma.AisleUncheckedUpdateWithoutRacksInput>;
    create: Prisma.XOR<Prisma.AisleCreateWithoutRacksInput, Prisma.AisleUncheckedCreateWithoutRacksInput>;
    where?: Prisma.AisleWhereInput;
};
export type AisleUpdateToOneWithWhereWithoutRacksInput = {
    where?: Prisma.AisleWhereInput;
    data: Prisma.XOR<Prisma.AisleUpdateWithoutRacksInput, Prisma.AisleUncheckedUpdateWithoutRacksInput>;
};
export type AisleUpdateWithoutRacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutAislesNestedInput;
};
export type AisleUncheckedUpdateWithoutRacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AisleCreateManyWarehouseInput = {
    id?: string;
    code: string;
};
export type AisleUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    racks?: Prisma.RackUpdateManyWithoutAisleNestedInput;
};
export type AisleUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    racks?: Prisma.RackUncheckedUpdateManyWithoutAisleNestedInput;
};
export type AisleUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AisleCountOutputType = {
    racks: number;
};
export type AisleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    racks?: boolean | AisleCountOutputTypeCountRacksArgs;
};
export type AisleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleCountOutputTypeSelect<ExtArgs> | null;
};
export type AisleCountOutputTypeCountRacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RackWhereInput;
};
export type AisleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    warehouseId?: boolean;
    code?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    racks?: boolean | Prisma.Aisle$racksArgs<ExtArgs>;
    _count?: boolean | Prisma.AisleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aisle"]>;
export type AisleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    warehouseId?: boolean;
    code?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aisle"]>;
export type AisleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    warehouseId?: boolean;
    code?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aisle"]>;
export type AisleSelectScalar = {
    id?: boolean;
    warehouseId?: boolean;
    code?: boolean;
};
export type AisleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "warehouseId" | "code", ExtArgs["result"]["aisle"]>;
export type AisleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    racks?: boolean | Prisma.Aisle$racksArgs<ExtArgs>;
    _count?: boolean | Prisma.AisleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AisleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type AisleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type $AislePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Aisle";
    objects: {
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
        racks: Prisma.$RackPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        warehouseId: string;
        code: string;
    }, ExtArgs["result"]["aisle"]>;
    composites: {};
};
export type AisleGetPayload<S extends boolean | null | undefined | AisleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AislePayload, S>;
export type AisleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AisleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AisleCountAggregateInputType | true;
};
export interface AisleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Aisle'];
        meta: {
            name: 'Aisle';
        };
    };
    findUnique<T extends AisleFindUniqueArgs>(args: Prisma.SelectSubset<T, AisleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AisleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AisleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AisleFindFirstArgs>(args?: Prisma.SelectSubset<T, AisleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AisleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AisleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AisleFindManyArgs>(args?: Prisma.SelectSubset<T, AisleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AisleCreateArgs>(args: Prisma.SelectSubset<T, AisleCreateArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AisleCreateManyArgs>(args?: Prisma.SelectSubset<T, AisleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AisleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AisleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AisleDeleteArgs>(args: Prisma.SelectSubset<T, AisleDeleteArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AisleUpdateArgs>(args: Prisma.SelectSubset<T, AisleUpdateArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AisleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AisleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AisleUpdateManyArgs>(args: Prisma.SelectSubset<T, AisleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AisleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AisleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AisleUpsertArgs>(args: Prisma.SelectSubset<T, AisleUpsertArgs<ExtArgs>>): Prisma.Prisma__AisleClient<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AisleCountArgs>(args?: Prisma.Subset<T, AisleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AisleCountAggregateOutputType> : number>;
    aggregate<T extends AisleAggregateArgs>(args: Prisma.Subset<T, AisleAggregateArgs>): Prisma.PrismaPromise<GetAisleAggregateType<T>>;
    groupBy<T extends AisleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AisleGroupByArgs['orderBy'];
    } : {
        orderBy?: AisleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AisleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAisleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AisleFieldRefs;
}
export interface Prisma__AisleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    racks<T extends Prisma.Aisle$racksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Aisle$racksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AisleFieldRefs {
    readonly id: Prisma.FieldRef<"Aisle", 'String'>;
    readonly warehouseId: Prisma.FieldRef<"Aisle", 'String'>;
    readonly code: Prisma.FieldRef<"Aisle", 'String'>;
}
export type AisleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where: Prisma.AisleWhereUniqueInput;
};
export type AisleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where: Prisma.AisleWhereUniqueInput;
};
export type AisleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where?: Prisma.AisleWhereInput;
    orderBy?: Prisma.AisleOrderByWithRelationInput | Prisma.AisleOrderByWithRelationInput[];
    cursor?: Prisma.AisleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AisleScalarFieldEnum | Prisma.AisleScalarFieldEnum[];
};
export type AisleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where?: Prisma.AisleWhereInput;
    orderBy?: Prisma.AisleOrderByWithRelationInput | Prisma.AisleOrderByWithRelationInput[];
    cursor?: Prisma.AisleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AisleScalarFieldEnum | Prisma.AisleScalarFieldEnum[];
};
export type AisleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where?: Prisma.AisleWhereInput;
    orderBy?: Prisma.AisleOrderByWithRelationInput | Prisma.AisleOrderByWithRelationInput[];
    cursor?: Prisma.AisleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AisleScalarFieldEnum | Prisma.AisleScalarFieldEnum[];
};
export type AisleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AisleCreateInput, Prisma.AisleUncheckedCreateInput>;
};
export type AisleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AisleCreateManyInput | Prisma.AisleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AisleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    data: Prisma.AisleCreateManyInput | Prisma.AisleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AisleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AisleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AisleUpdateInput, Prisma.AisleUncheckedUpdateInput>;
    where: Prisma.AisleWhereUniqueInput;
};
export type AisleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AisleUpdateManyMutationInput, Prisma.AisleUncheckedUpdateManyInput>;
    where?: Prisma.AisleWhereInput;
    limit?: number;
};
export type AisleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AisleUpdateManyMutationInput, Prisma.AisleUncheckedUpdateManyInput>;
    where?: Prisma.AisleWhereInput;
    limit?: number;
    include?: Prisma.AisleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AisleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where: Prisma.AisleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AisleCreateInput, Prisma.AisleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AisleUpdateInput, Prisma.AisleUncheckedUpdateInput>;
};
export type AisleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
    where: Prisma.AisleWhereUniqueInput;
};
export type AisleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AisleWhereInput;
    limit?: number;
};
export type Aisle$racksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AisleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AisleSelect<ExtArgs> | null;
    omit?: Prisma.AisleOmit<ExtArgs> | null;
    include?: Prisma.AisleInclude<ExtArgs> | null;
};
export {};
