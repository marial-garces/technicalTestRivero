import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type AuditPlanModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditPlanPayload>;
export type AggregateAuditPlan = {
    _count: AuditPlanCountAggregateOutputType | null;
    _avg: AuditPlanAvgAggregateOutputType | null;
    _sum: AuditPlanSumAggregateOutputType | null;
    _min: AuditPlanMinAggregateOutputType | null;
    _max: AuditPlanMaxAggregateOutputType | null;
};
export type AuditPlanAvgAggregateOutputType = {
    topN: number | null;
};
export type AuditPlanSumAggregateOutputType = {
    topN: number | null;
};
export type AuditPlanMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    topN: number | null;
};
export type AuditPlanMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    topN: number | null;
};
export type AuditPlanCountAggregateOutputType = {
    id: number;
    createdAt: number;
    topN: number;
    _all: number;
};
export type AuditPlanAvgAggregateInputType = {
    topN?: true;
};
export type AuditPlanSumAggregateInputType = {
    topN?: true;
};
export type AuditPlanMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    topN?: true;
};
export type AuditPlanMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    topN?: true;
};
export type AuditPlanCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    topN?: true;
    _all?: true;
};
export type AuditPlanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditPlanWhereInput;
    orderBy?: Prisma.AuditPlanOrderByWithRelationInput | Prisma.AuditPlanOrderByWithRelationInput[];
    cursor?: Prisma.AuditPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditPlanCountAggregateInputType;
    _avg?: AuditPlanAvgAggregateInputType;
    _sum?: AuditPlanSumAggregateInputType;
    _min?: AuditPlanMinAggregateInputType;
    _max?: AuditPlanMaxAggregateInputType;
};
export type GetAuditPlanAggregateType<T extends AuditPlanAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditPlan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditPlan[P]> : Prisma.GetScalarType<T[P], AggregateAuditPlan[P]>;
};
export type AuditPlanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditPlanWhereInput;
    orderBy?: Prisma.AuditPlanOrderByWithAggregationInput | Prisma.AuditPlanOrderByWithAggregationInput[];
    by: Prisma.AuditPlanScalarFieldEnum[] | Prisma.AuditPlanScalarFieldEnum;
    having?: Prisma.AuditPlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditPlanCountAggregateInputType | true;
    _avg?: AuditPlanAvgAggregateInputType;
    _sum?: AuditPlanSumAggregateInputType;
    _min?: AuditPlanMinAggregateInputType;
    _max?: AuditPlanMaxAggregateInputType;
};
export type AuditPlanGroupByOutputType = {
    id: string;
    createdAt: Date;
    topN: number;
    _count: AuditPlanCountAggregateOutputType | null;
    _avg: AuditPlanAvgAggregateOutputType | null;
    _sum: AuditPlanSumAggregateOutputType | null;
    _min: AuditPlanMinAggregateOutputType | null;
    _max: AuditPlanMaxAggregateOutputType | null;
};
type GetAuditPlanGroupByPayload<T extends AuditPlanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditPlanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditPlanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditPlanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditPlanGroupByOutputType[P]>;
}>>;
export type AuditPlanWhereInput = {
    AND?: Prisma.AuditPlanWhereInput | Prisma.AuditPlanWhereInput[];
    OR?: Prisma.AuditPlanWhereInput[];
    NOT?: Prisma.AuditPlanWhereInput | Prisma.AuditPlanWhereInput[];
    id?: Prisma.StringFilter<"AuditPlan"> | string;
    createdAt?: Prisma.DateTimeFilter<"AuditPlan"> | Date | string;
    topN?: Prisma.IntFilter<"AuditPlan"> | number;
    auditTasks?: Prisma.AuditTaskListRelationFilter;
};
export type AuditPlanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    topN?: Prisma.SortOrder;
    auditTasks?: Prisma.AuditTaskOrderByRelationAggregateInput;
};
export type AuditPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AuditPlanWhereInput | Prisma.AuditPlanWhereInput[];
    OR?: Prisma.AuditPlanWhereInput[];
    NOT?: Prisma.AuditPlanWhereInput | Prisma.AuditPlanWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"AuditPlan"> | Date | string;
    topN?: Prisma.IntFilter<"AuditPlan"> | number;
    auditTasks?: Prisma.AuditTaskListRelationFilter;
}, "id">;
export type AuditPlanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    topN?: Prisma.SortOrder;
    _count?: Prisma.AuditPlanCountOrderByAggregateInput;
    _avg?: Prisma.AuditPlanAvgOrderByAggregateInput;
    _max?: Prisma.AuditPlanMaxOrderByAggregateInput;
    _min?: Prisma.AuditPlanMinOrderByAggregateInput;
    _sum?: Prisma.AuditPlanSumOrderByAggregateInput;
};
export type AuditPlanScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditPlanScalarWhereWithAggregatesInput | Prisma.AuditPlanScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditPlanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditPlanScalarWhereWithAggregatesInput | Prisma.AuditPlanScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AuditPlan"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AuditPlan"> | Date | string;
    topN?: Prisma.IntWithAggregatesFilter<"AuditPlan"> | number;
};
export type AuditPlanCreateInput = {
    id?: string;
    createdAt?: Date | string;
    topN: number;
    auditTasks?: Prisma.AuditTaskCreateNestedManyWithoutAuditPlanInput;
};
export type AuditPlanUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    topN: number;
    auditTasks?: Prisma.AuditTaskUncheckedCreateNestedManyWithoutAuditPlanInput;
};
export type AuditPlanUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topN?: Prisma.IntFieldUpdateOperationsInput | number;
    auditTasks?: Prisma.AuditTaskUpdateManyWithoutAuditPlanNestedInput;
};
export type AuditPlanUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topN?: Prisma.IntFieldUpdateOperationsInput | number;
    auditTasks?: Prisma.AuditTaskUncheckedUpdateManyWithoutAuditPlanNestedInput;
};
export type AuditPlanCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    topN: number;
};
export type AuditPlanUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topN?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuditPlanUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topN?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuditPlanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    topN?: Prisma.SortOrder;
};
export type AuditPlanAvgOrderByAggregateInput = {
    topN?: Prisma.SortOrder;
};
export type AuditPlanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    topN?: Prisma.SortOrder;
};
export type AuditPlanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    topN?: Prisma.SortOrder;
};
export type AuditPlanSumOrderByAggregateInput = {
    topN?: Prisma.SortOrder;
};
export type AuditPlanScalarRelationFilter = {
    is?: Prisma.AuditPlanWhereInput;
    isNot?: Prisma.AuditPlanWhereInput;
};
export type AuditPlanCreateNestedOneWithoutAuditTasksInput = {
    create?: Prisma.XOR<Prisma.AuditPlanCreateWithoutAuditTasksInput, Prisma.AuditPlanUncheckedCreateWithoutAuditTasksInput>;
    connectOrCreate?: Prisma.AuditPlanCreateOrConnectWithoutAuditTasksInput;
    connect?: Prisma.AuditPlanWhereUniqueInput;
};
export type AuditPlanUpdateOneRequiredWithoutAuditTasksNestedInput = {
    create?: Prisma.XOR<Prisma.AuditPlanCreateWithoutAuditTasksInput, Prisma.AuditPlanUncheckedCreateWithoutAuditTasksInput>;
    connectOrCreate?: Prisma.AuditPlanCreateOrConnectWithoutAuditTasksInput;
    upsert?: Prisma.AuditPlanUpsertWithoutAuditTasksInput;
    connect?: Prisma.AuditPlanWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuditPlanUpdateToOneWithWhereWithoutAuditTasksInput, Prisma.AuditPlanUpdateWithoutAuditTasksInput>, Prisma.AuditPlanUncheckedUpdateWithoutAuditTasksInput>;
};
export type AuditPlanCreateWithoutAuditTasksInput = {
    id?: string;
    createdAt?: Date | string;
    topN: number;
};
export type AuditPlanUncheckedCreateWithoutAuditTasksInput = {
    id?: string;
    createdAt?: Date | string;
    topN: number;
};
export type AuditPlanCreateOrConnectWithoutAuditTasksInput = {
    where: Prisma.AuditPlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditPlanCreateWithoutAuditTasksInput, Prisma.AuditPlanUncheckedCreateWithoutAuditTasksInput>;
};
export type AuditPlanUpsertWithoutAuditTasksInput = {
    update: Prisma.XOR<Prisma.AuditPlanUpdateWithoutAuditTasksInput, Prisma.AuditPlanUncheckedUpdateWithoutAuditTasksInput>;
    create: Prisma.XOR<Prisma.AuditPlanCreateWithoutAuditTasksInput, Prisma.AuditPlanUncheckedCreateWithoutAuditTasksInput>;
    where?: Prisma.AuditPlanWhereInput;
};
export type AuditPlanUpdateToOneWithWhereWithoutAuditTasksInput = {
    where?: Prisma.AuditPlanWhereInput;
    data: Prisma.XOR<Prisma.AuditPlanUpdateWithoutAuditTasksInput, Prisma.AuditPlanUncheckedUpdateWithoutAuditTasksInput>;
};
export type AuditPlanUpdateWithoutAuditTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topN?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuditPlanUncheckedUpdateWithoutAuditTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topN?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuditPlanCountOutputType = {
    auditTasks: number;
};
export type AuditPlanCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditTasks?: boolean | AuditPlanCountOutputTypeCountAuditTasksArgs;
};
export type AuditPlanCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanCountOutputTypeSelect<ExtArgs> | null;
};
export type AuditPlanCountOutputTypeCountAuditTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTaskWhereInput;
};
export type AuditPlanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    topN?: boolean;
    auditTasks?: boolean | Prisma.AuditPlan$auditTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.AuditPlanCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditPlan"]>;
export type AuditPlanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    topN?: boolean;
}, ExtArgs["result"]["auditPlan"]>;
export type AuditPlanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    topN?: boolean;
}, ExtArgs["result"]["auditPlan"]>;
export type AuditPlanSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    topN?: boolean;
};
export type AuditPlanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "topN", ExtArgs["result"]["auditPlan"]>;
export type AuditPlanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditTasks?: boolean | Prisma.AuditPlan$auditTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.AuditPlanCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AuditPlanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AuditPlanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AuditPlanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditPlan";
    objects: {
        auditTasks: Prisma.$AuditTaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        topN: number;
    }, ExtArgs["result"]["auditPlan"]>;
    composites: {};
};
export type AuditPlanGetPayload<S extends boolean | null | undefined | AuditPlanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload, S>;
export type AuditPlanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditPlanCountAggregateInputType | true;
};
export interface AuditPlanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditPlan'];
        meta: {
            name: 'AuditPlan';
        };
    };
    findUnique<T extends AuditPlanFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditPlanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditPlanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditPlanFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditPlanFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditPlanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditPlanFindManyArgs>(args?: Prisma.SelectSubset<T, AuditPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditPlanCreateArgs>(args: Prisma.SelectSubset<T, AuditPlanCreateArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditPlanCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditPlanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditPlanDeleteArgs>(args: Prisma.SelectSubset<T, AuditPlanDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditPlanUpdateArgs>(args: Prisma.SelectSubset<T, AuditPlanUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditPlanDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditPlanUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditPlanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditPlanUpsertArgs>(args: Prisma.SelectSubset<T, AuditPlanUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditPlanCountArgs>(args?: Prisma.Subset<T, AuditPlanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditPlanCountAggregateOutputType> : number>;
    aggregate<T extends AuditPlanAggregateArgs>(args: Prisma.Subset<T, AuditPlanAggregateArgs>): Prisma.PrismaPromise<GetAuditPlanAggregateType<T>>;
    groupBy<T extends AuditPlanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditPlanGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditPlanGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditPlanFieldRefs;
}
export interface Prisma__AuditPlanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auditTasks<T extends Prisma.AuditPlan$auditTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuditPlan$auditTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditPlanFieldRefs {
    readonly id: Prisma.FieldRef<"AuditPlan", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AuditPlan", 'DateTime'>;
    readonly topN: Prisma.FieldRef<"AuditPlan", 'Int'>;
}
export type AuditPlanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where: Prisma.AuditPlanWhereUniqueInput;
};
export type AuditPlanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where: Prisma.AuditPlanWhereUniqueInput;
};
export type AuditPlanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where?: Prisma.AuditPlanWhereInput;
    orderBy?: Prisma.AuditPlanOrderByWithRelationInput | Prisma.AuditPlanOrderByWithRelationInput[];
    cursor?: Prisma.AuditPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditPlanScalarFieldEnum | Prisma.AuditPlanScalarFieldEnum[];
};
export type AuditPlanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where?: Prisma.AuditPlanWhereInput;
    orderBy?: Prisma.AuditPlanOrderByWithRelationInput | Prisma.AuditPlanOrderByWithRelationInput[];
    cursor?: Prisma.AuditPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditPlanScalarFieldEnum | Prisma.AuditPlanScalarFieldEnum[];
};
export type AuditPlanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where?: Prisma.AuditPlanWhereInput;
    orderBy?: Prisma.AuditPlanOrderByWithRelationInput | Prisma.AuditPlanOrderByWithRelationInput[];
    cursor?: Prisma.AuditPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditPlanScalarFieldEnum | Prisma.AuditPlanScalarFieldEnum[];
};
export type AuditPlanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditPlanCreateInput, Prisma.AuditPlanUncheckedCreateInput>;
};
export type AuditPlanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditPlanCreateManyInput | Prisma.AuditPlanCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditPlanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    data: Prisma.AuditPlanCreateManyInput | Prisma.AuditPlanCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditPlanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditPlanUpdateInput, Prisma.AuditPlanUncheckedUpdateInput>;
    where: Prisma.AuditPlanWhereUniqueInput;
};
export type AuditPlanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditPlanUpdateManyMutationInput, Prisma.AuditPlanUncheckedUpdateManyInput>;
    where?: Prisma.AuditPlanWhereInput;
    limit?: number;
};
export type AuditPlanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditPlanUpdateManyMutationInput, Prisma.AuditPlanUncheckedUpdateManyInput>;
    where?: Prisma.AuditPlanWhereInput;
    limit?: number;
};
export type AuditPlanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where: Prisma.AuditPlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditPlanCreateInput, Prisma.AuditPlanUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditPlanUpdateInput, Prisma.AuditPlanUncheckedUpdateInput>;
};
export type AuditPlanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
    where: Prisma.AuditPlanWhereUniqueInput;
};
export type AuditPlanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditPlanWhereInput;
    limit?: number;
};
export type AuditPlan$auditTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    where?: Prisma.AuditTaskWhereInput;
    orderBy?: Prisma.AuditTaskOrderByWithRelationInput | Prisma.AuditTaskOrderByWithRelationInput[];
    cursor?: Prisma.AuditTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditTaskScalarFieldEnum | Prisma.AuditTaskScalarFieldEnum[];
};
export type AuditPlanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditPlanSelect<ExtArgs> | null;
    omit?: Prisma.AuditPlanOmit<ExtArgs> | null;
    include?: Prisma.AuditPlanInclude<ExtArgs> | null;
};
export {};
