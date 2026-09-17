import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type WarehouseModel = runtime.Types.Result.DefaultSelection<Prisma.$WarehousePayload>;
export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null;
    _min: WarehouseMinAggregateOutputType | null;
    _max: WarehouseMaxAggregateOutputType | null;
};
export type WarehouseMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type WarehouseMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type WarehouseCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type WarehouseMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
};
export type WarehouseMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
};
export type WarehouseCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type WarehouseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WarehouseCountAggregateInputType;
    _min?: WarehouseMinAggregateInputType;
    _max?: WarehouseMaxAggregateInputType;
};
export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
    [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWarehouse[P]> : Prisma.GetScalarType<T[P], AggregateWarehouse[P]>;
};
export type WarehouseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithAggregationInput | Prisma.WarehouseOrderByWithAggregationInput[];
    by: Prisma.WarehouseScalarFieldEnum[] | Prisma.WarehouseScalarFieldEnum;
    having?: Prisma.WarehouseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WarehouseCountAggregateInputType | true;
    _min?: WarehouseMinAggregateInputType;
    _max?: WarehouseMaxAggregateInputType;
};
export type WarehouseGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    _count: WarehouseCountAggregateOutputType | null;
    _min: WarehouseMinAggregateOutputType | null;
    _max: WarehouseMaxAggregateOutputType | null;
};
type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WarehouseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WarehouseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WarehouseGroupByOutputType[P]>;
}>>;
export type WarehouseWhereInput = {
    AND?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    OR?: Prisma.WarehouseWhereInput[];
    NOT?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    id?: Prisma.StringFilter<"Warehouse"> | string;
    name?: Prisma.StringFilter<"Warehouse"> | string;
    createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    aisles?: Prisma.AisleListRelationFilter;
};
export type WarehouseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    aisles?: Prisma.AisleOrderByRelationAggregateInput;
};
export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    OR?: Prisma.WarehouseWhereInput[];
    NOT?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    name?: Prisma.StringFilter<"Warehouse"> | string;
    createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    aisles?: Prisma.AisleListRelationFilter;
}, "id">;
export type WarehouseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WarehouseCountOrderByAggregateInput;
    _max?: Prisma.WarehouseMaxOrderByAggregateInput;
    _min?: Prisma.WarehouseMinOrderByAggregateInput;
};
export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: Prisma.WarehouseScalarWhereWithAggregatesInput | Prisma.WarehouseScalarWhereWithAggregatesInput[];
    OR?: Prisma.WarehouseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WarehouseScalarWhereWithAggregatesInput | Prisma.WarehouseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Warehouse"> | Date | string;
};
export type WarehouseCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    aisles?: Prisma.AisleCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    aisles?: Prisma.AisleUncheckedCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aisles?: Prisma.AisleUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aisles?: Prisma.AisleUncheckedUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type WarehouseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WarehouseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WarehouseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WarehouseScalarRelationFilter = {
    is?: Prisma.WarehouseWhereInput;
    isNot?: Prisma.WarehouseWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type WarehouseCreateNestedOneWithoutAislesInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutAislesInput, Prisma.WarehouseUncheckedCreateWithoutAislesInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutAislesInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseUpdateOneRequiredWithoutAislesNestedInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutAislesInput, Prisma.WarehouseUncheckedCreateWithoutAislesInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutAislesInput;
    upsert?: Prisma.WarehouseUpsertWithoutAislesInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseUpdateToOneWithWhereWithoutAislesInput, Prisma.WarehouseUpdateWithoutAislesInput>, Prisma.WarehouseUncheckedUpdateWithoutAislesInput>;
};
export type WarehouseCreateWithoutAislesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type WarehouseUncheckedCreateWithoutAislesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type WarehouseCreateOrConnectWithoutAislesInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutAislesInput, Prisma.WarehouseUncheckedCreateWithoutAislesInput>;
};
export type WarehouseUpsertWithoutAislesInput = {
    update: Prisma.XOR<Prisma.WarehouseUpdateWithoutAislesInput, Prisma.WarehouseUncheckedUpdateWithoutAislesInput>;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutAislesInput, Prisma.WarehouseUncheckedCreateWithoutAislesInput>;
    where?: Prisma.WarehouseWhereInput;
};
export type WarehouseUpdateToOneWithWhereWithoutAislesInput = {
    where?: Prisma.WarehouseWhereInput;
    data: Prisma.XOR<Prisma.WarehouseUpdateWithoutAislesInput, Prisma.WarehouseUncheckedUpdateWithoutAislesInput>;
};
export type WarehouseUpdateWithoutAislesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseUncheckedUpdateWithoutAislesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseCountOutputType = {
    aisles: number;
};
export type WarehouseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aisles?: boolean | WarehouseCountOutputTypeCountAislesArgs;
};
export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseCountOutputTypeSelect<ExtArgs> | null;
};
export type WarehouseCountOutputTypeCountAislesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AisleWhereInput;
};
export type WarehouseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    aisles?: boolean | Prisma.Warehouse$aislesArgs<ExtArgs>;
    _count?: boolean | Prisma.WarehouseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warehouse"]>;
export type WarehouseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["warehouse"]>;
export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["warehouse"]>;
export type WarehouseSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type WarehouseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["warehouse"]>;
export type WarehouseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aisles?: boolean | Prisma.Warehouse$aislesArgs<ExtArgs>;
    _count?: boolean | Prisma.WarehouseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WarehousePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Warehouse";
    objects: {
        aisles: Prisma.$AislePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["warehouse"]>;
    composites: {};
};
export type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WarehousePayload, S>;
export type WarehouseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WarehouseCountAggregateInputType | true;
};
export interface WarehouseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'];
        meta: {
            name: 'Warehouse';
        };
    };
    findUnique<T extends WarehouseFindUniqueArgs>(args: Prisma.SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WarehouseFindFirstArgs>(args?: Prisma.SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WarehouseFindManyArgs>(args?: Prisma.SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WarehouseCreateArgs>(args: Prisma.SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WarehouseCreateManyArgs>(args?: Prisma.SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WarehouseDeleteArgs>(args: Prisma.SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WarehouseUpdateArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: Prisma.SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WarehouseUpdateManyArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WarehouseUpsertArgs>(args: Prisma.SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WarehouseCountArgs>(args?: Prisma.Subset<T, WarehouseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WarehouseCountAggregateOutputType> : number>;
    aggregate<T extends WarehouseAggregateArgs>(args: Prisma.Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>;
    groupBy<T extends WarehouseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WarehouseGroupByArgs['orderBy'];
    } : {
        orderBy?: WarehouseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WarehouseFieldRefs;
}
export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aisles<T extends Prisma.Warehouse$aislesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Warehouse$aislesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AislePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WarehouseFieldRefs {
    readonly id: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly name: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Warehouse", 'DateTime'>;
}
export type WarehouseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[];
};
export type WarehouseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[];
};
export type WarehouseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[];
};
export type WarehouseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarehouseCreateInput, Prisma.WarehouseUncheckedCreateInput>;
};
export type WarehouseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WarehouseCreateManyInput | Prisma.WarehouseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WarehouseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    data: Prisma.WarehouseCreateManyInput | Prisma.WarehouseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WarehouseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarehouseUpdateInput, Prisma.WarehouseUncheckedUpdateInput>;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyInput>;
    where?: Prisma.WarehouseWhereInput;
    limit?: number;
};
export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyInput>;
    where?: Prisma.WarehouseWhereInput;
    limit?: number;
};
export type WarehouseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateInput, Prisma.WarehouseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WarehouseUpdateInput, Prisma.WarehouseUncheckedUpdateInput>;
};
export type WarehouseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarehouseWhereInput;
    limit?: number;
};
export type Warehouse$aislesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WarehouseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
};
export {};
