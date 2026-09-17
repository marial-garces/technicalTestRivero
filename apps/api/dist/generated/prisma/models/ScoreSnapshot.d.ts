import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type ScoreSnapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$ScoreSnapshotPayload>;
export type AggregateScoreSnapshot = {
    _count: ScoreSnapshotCountAggregateOutputType | null;
    _avg: ScoreSnapshotAvgAggregateOutputType | null;
    _sum: ScoreSnapshotSumAggregateOutputType | null;
    _min: ScoreSnapshotMinAggregateOutputType | null;
    _max: ScoreSnapshotMaxAggregateOutputType | null;
};
export type ScoreSnapshotAvgAggregateOutputType = {
    score: number | null;
};
export type ScoreSnapshotSumAggregateOutputType = {
    score: number | null;
};
export type ScoreSnapshotMinAggregateOutputType = {
    id: string | null;
    binId: string | null;
    score: number | null;
    calculatedAt: Date | null;
};
export type ScoreSnapshotMaxAggregateOutputType = {
    id: string | null;
    binId: string | null;
    score: number | null;
    calculatedAt: Date | null;
};
export type ScoreSnapshotCountAggregateOutputType = {
    id: number;
    binId: number;
    score: number;
    breakdown: number;
    calculatedAt: number;
    _all: number;
};
export type ScoreSnapshotAvgAggregateInputType = {
    score?: true;
};
export type ScoreSnapshotSumAggregateInputType = {
    score?: true;
};
export type ScoreSnapshotMinAggregateInputType = {
    id?: true;
    binId?: true;
    score?: true;
    calculatedAt?: true;
};
export type ScoreSnapshotMaxAggregateInputType = {
    id?: true;
    binId?: true;
    score?: true;
    calculatedAt?: true;
};
export type ScoreSnapshotCountAggregateInputType = {
    id?: true;
    binId?: true;
    score?: true;
    breakdown?: true;
    calculatedAt?: true;
    _all?: true;
};
export type ScoreSnapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreSnapshotWhereInput;
    orderBy?: Prisma.ScoreSnapshotOrderByWithRelationInput | Prisma.ScoreSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ScoreSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScoreSnapshotCountAggregateInputType;
    _avg?: ScoreSnapshotAvgAggregateInputType;
    _sum?: ScoreSnapshotSumAggregateInputType;
    _min?: ScoreSnapshotMinAggregateInputType;
    _max?: ScoreSnapshotMaxAggregateInputType;
};
export type GetScoreSnapshotAggregateType<T extends ScoreSnapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateScoreSnapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScoreSnapshot[P]> : Prisma.GetScalarType<T[P], AggregateScoreSnapshot[P]>;
};
export type ScoreSnapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreSnapshotWhereInput;
    orderBy?: Prisma.ScoreSnapshotOrderByWithAggregationInput | Prisma.ScoreSnapshotOrderByWithAggregationInput[];
    by: Prisma.ScoreSnapshotScalarFieldEnum[] | Prisma.ScoreSnapshotScalarFieldEnum;
    having?: Prisma.ScoreSnapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScoreSnapshotCountAggregateInputType | true;
    _avg?: ScoreSnapshotAvgAggregateInputType;
    _sum?: ScoreSnapshotSumAggregateInputType;
    _min?: ScoreSnapshotMinAggregateInputType;
    _max?: ScoreSnapshotMaxAggregateInputType;
};
export type ScoreSnapshotGroupByOutputType = {
    id: string;
    binId: string;
    score: number;
    breakdown: runtime.JsonValue;
    calculatedAt: Date;
    _count: ScoreSnapshotCountAggregateOutputType | null;
    _avg: ScoreSnapshotAvgAggregateOutputType | null;
    _sum: ScoreSnapshotSumAggregateOutputType | null;
    _min: ScoreSnapshotMinAggregateOutputType | null;
    _max: ScoreSnapshotMaxAggregateOutputType | null;
};
type GetScoreSnapshotGroupByPayload<T extends ScoreSnapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScoreSnapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScoreSnapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScoreSnapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScoreSnapshotGroupByOutputType[P]>;
}>>;
export type ScoreSnapshotWhereInput = {
    AND?: Prisma.ScoreSnapshotWhereInput | Prisma.ScoreSnapshotWhereInput[];
    OR?: Prisma.ScoreSnapshotWhereInput[];
    NOT?: Prisma.ScoreSnapshotWhereInput | Prisma.ScoreSnapshotWhereInput[];
    id?: Prisma.StringFilter<"ScoreSnapshot"> | string;
    binId?: Prisma.StringFilter<"ScoreSnapshot"> | string;
    score?: Prisma.FloatFilter<"ScoreSnapshot"> | number;
    breakdown?: Prisma.JsonFilter<"ScoreSnapshot">;
    calculatedAt?: Prisma.DateTimeFilter<"ScoreSnapshot"> | Date | string;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
};
export type ScoreSnapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    bin?: Prisma.BinOrderByWithRelationInput;
};
export type ScoreSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScoreSnapshotWhereInput | Prisma.ScoreSnapshotWhereInput[];
    OR?: Prisma.ScoreSnapshotWhereInput[];
    NOT?: Prisma.ScoreSnapshotWhereInput | Prisma.ScoreSnapshotWhereInput[];
    binId?: Prisma.StringFilter<"ScoreSnapshot"> | string;
    score?: Prisma.FloatFilter<"ScoreSnapshot"> | number;
    breakdown?: Prisma.JsonFilter<"ScoreSnapshot">;
    calculatedAt?: Prisma.DateTimeFilter<"ScoreSnapshot"> | Date | string;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
}, "id">;
export type ScoreSnapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    _count?: Prisma.ScoreSnapshotCountOrderByAggregateInput;
    _avg?: Prisma.ScoreSnapshotAvgOrderByAggregateInput;
    _max?: Prisma.ScoreSnapshotMaxOrderByAggregateInput;
    _min?: Prisma.ScoreSnapshotMinOrderByAggregateInput;
    _sum?: Prisma.ScoreSnapshotSumOrderByAggregateInput;
};
export type ScoreSnapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScoreSnapshotScalarWhereWithAggregatesInput | Prisma.ScoreSnapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScoreSnapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScoreSnapshotScalarWhereWithAggregatesInput | Prisma.ScoreSnapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScoreSnapshot"> | string;
    binId?: Prisma.StringWithAggregatesFilter<"ScoreSnapshot"> | string;
    score?: Prisma.FloatWithAggregatesFilter<"ScoreSnapshot"> | number;
    breakdown?: Prisma.JsonWithAggregatesFilter<"ScoreSnapshot">;
    calculatedAt?: Prisma.DateTimeWithAggregatesFilter<"ScoreSnapshot"> | Date | string;
};
export type ScoreSnapshotCreateInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Date | string;
    bin: Prisma.BinCreateNestedOneWithoutScoreSnapshotsInput;
};
export type ScoreSnapshotUncheckedCreateInput = {
    id?: string;
    binId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Date | string;
};
export type ScoreSnapshotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bin?: Prisma.BinUpdateOneRequiredWithoutScoreSnapshotsNestedInput;
};
export type ScoreSnapshotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScoreSnapshotCreateManyInput = {
    id?: string;
    binId: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Date | string;
};
export type ScoreSnapshotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScoreSnapshotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScoreSnapshotListRelationFilter = {
    every?: Prisma.ScoreSnapshotWhereInput;
    some?: Prisma.ScoreSnapshotWhereInput;
    none?: Prisma.ScoreSnapshotWhereInput;
};
export type ScoreSnapshotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScoreSnapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
};
export type ScoreSnapshotAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type ScoreSnapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
};
export type ScoreSnapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
};
export type ScoreSnapshotSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type ScoreSnapshotCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.ScoreSnapshotCreateWithoutBinInput, Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput> | Prisma.ScoreSnapshotCreateWithoutBinInput[] | Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput | Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.ScoreSnapshotCreateManyBinInputEnvelope;
    connect?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
};
export type ScoreSnapshotUncheckedCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.ScoreSnapshotCreateWithoutBinInput, Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput> | Prisma.ScoreSnapshotCreateWithoutBinInput[] | Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput | Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.ScoreSnapshotCreateManyBinInputEnvelope;
    connect?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
};
export type ScoreSnapshotUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.ScoreSnapshotCreateWithoutBinInput, Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput> | Prisma.ScoreSnapshotCreateWithoutBinInput[] | Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput | Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.ScoreSnapshotUpsertWithWhereUniqueWithoutBinInput | Prisma.ScoreSnapshotUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.ScoreSnapshotCreateManyBinInputEnvelope;
    set?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    disconnect?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    delete?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    connect?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    update?: Prisma.ScoreSnapshotUpdateWithWhereUniqueWithoutBinInput | Prisma.ScoreSnapshotUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.ScoreSnapshotUpdateManyWithWhereWithoutBinInput | Prisma.ScoreSnapshotUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.ScoreSnapshotScalarWhereInput | Prisma.ScoreSnapshotScalarWhereInput[];
};
export type ScoreSnapshotUncheckedUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.ScoreSnapshotCreateWithoutBinInput, Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput> | Prisma.ScoreSnapshotCreateWithoutBinInput[] | Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput | Prisma.ScoreSnapshotCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.ScoreSnapshotUpsertWithWhereUniqueWithoutBinInput | Prisma.ScoreSnapshotUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.ScoreSnapshotCreateManyBinInputEnvelope;
    set?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    disconnect?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    delete?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    connect?: Prisma.ScoreSnapshotWhereUniqueInput | Prisma.ScoreSnapshotWhereUniqueInput[];
    update?: Prisma.ScoreSnapshotUpdateWithWhereUniqueWithoutBinInput | Prisma.ScoreSnapshotUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.ScoreSnapshotUpdateManyWithWhereWithoutBinInput | Prisma.ScoreSnapshotUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.ScoreSnapshotScalarWhereInput | Prisma.ScoreSnapshotScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ScoreSnapshotCreateWithoutBinInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Date | string;
};
export type ScoreSnapshotUncheckedCreateWithoutBinInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Date | string;
};
export type ScoreSnapshotCreateOrConnectWithoutBinInput = {
    where: Prisma.ScoreSnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScoreSnapshotCreateWithoutBinInput, Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput>;
};
export type ScoreSnapshotCreateManyBinInputEnvelope = {
    data: Prisma.ScoreSnapshotCreateManyBinInput | Prisma.ScoreSnapshotCreateManyBinInput[];
    skipDuplicates?: boolean;
};
export type ScoreSnapshotUpsertWithWhereUniqueWithoutBinInput = {
    where: Prisma.ScoreSnapshotWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScoreSnapshotUpdateWithoutBinInput, Prisma.ScoreSnapshotUncheckedUpdateWithoutBinInput>;
    create: Prisma.XOR<Prisma.ScoreSnapshotCreateWithoutBinInput, Prisma.ScoreSnapshotUncheckedCreateWithoutBinInput>;
};
export type ScoreSnapshotUpdateWithWhereUniqueWithoutBinInput = {
    where: Prisma.ScoreSnapshotWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScoreSnapshotUpdateWithoutBinInput, Prisma.ScoreSnapshotUncheckedUpdateWithoutBinInput>;
};
export type ScoreSnapshotUpdateManyWithWhereWithoutBinInput = {
    where: Prisma.ScoreSnapshotScalarWhereInput;
    data: Prisma.XOR<Prisma.ScoreSnapshotUpdateManyMutationInput, Prisma.ScoreSnapshotUncheckedUpdateManyWithoutBinInput>;
};
export type ScoreSnapshotScalarWhereInput = {
    AND?: Prisma.ScoreSnapshotScalarWhereInput | Prisma.ScoreSnapshotScalarWhereInput[];
    OR?: Prisma.ScoreSnapshotScalarWhereInput[];
    NOT?: Prisma.ScoreSnapshotScalarWhereInput | Prisma.ScoreSnapshotScalarWhereInput[];
    id?: Prisma.StringFilter<"ScoreSnapshot"> | string;
    binId?: Prisma.StringFilter<"ScoreSnapshot"> | string;
    score?: Prisma.FloatFilter<"ScoreSnapshot"> | number;
    breakdown?: Prisma.JsonFilter<"ScoreSnapshot">;
    calculatedAt?: Prisma.DateTimeFilter<"ScoreSnapshot"> | Date | string;
};
export type ScoreSnapshotCreateManyBinInput = {
    id?: string;
    score: number;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Date | string;
};
export type ScoreSnapshotUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScoreSnapshotUncheckedUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScoreSnapshotUncheckedUpdateManyWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScoreSnapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    binId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    calculatedAt?: boolean;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scoreSnapshot"]>;
export type ScoreSnapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    binId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    calculatedAt?: boolean;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scoreSnapshot"]>;
export type ScoreSnapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    binId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    calculatedAt?: boolean;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scoreSnapshot"]>;
export type ScoreSnapshotSelectScalar = {
    id?: boolean;
    binId?: boolean;
    score?: boolean;
    breakdown?: boolean;
    calculatedAt?: boolean;
};
export type ScoreSnapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "binId" | "score" | "breakdown" | "calculatedAt", ExtArgs["result"]["scoreSnapshot"]>;
export type ScoreSnapshotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type ScoreSnapshotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type ScoreSnapshotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type $ScoreSnapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScoreSnapshot";
    objects: {
        bin: Prisma.$BinPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        binId: string;
        score: number;
        breakdown: runtime.JsonValue;
        calculatedAt: Date;
    }, ExtArgs["result"]["scoreSnapshot"]>;
    composites: {};
};
export type ScoreSnapshotGetPayload<S extends boolean | null | undefined | ScoreSnapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload, S>;
export type ScoreSnapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScoreSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScoreSnapshotCountAggregateInputType | true;
};
export interface ScoreSnapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScoreSnapshot'];
        meta: {
            name: 'ScoreSnapshot';
        };
    };
    findUnique<T extends ScoreSnapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScoreSnapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScoreSnapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, ScoreSnapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScoreSnapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScoreSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScoreSnapshotFindManyArgs>(args?: Prisma.SelectSubset<T, ScoreSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScoreSnapshotCreateArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotCreateArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScoreSnapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, ScoreSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScoreSnapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScoreSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScoreSnapshotDeleteArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScoreSnapshotUpdateArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScoreSnapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScoreSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScoreSnapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScoreSnapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScoreSnapshotUpsertArgs>(args: Prisma.SelectSubset<T, ScoreSnapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__ScoreSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScoreSnapshotCountArgs>(args?: Prisma.Subset<T, ScoreSnapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScoreSnapshotCountAggregateOutputType> : number>;
    aggregate<T extends ScoreSnapshotAggregateArgs>(args: Prisma.Subset<T, ScoreSnapshotAggregateArgs>): Prisma.PrismaPromise<GetScoreSnapshotAggregateType<T>>;
    groupBy<T extends ScoreSnapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScoreSnapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: ScoreSnapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScoreSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScoreSnapshotFieldRefs;
}
export interface Prisma__ScoreSnapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bin<T extends Prisma.BinDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BinDefaultArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScoreSnapshotFieldRefs {
    readonly id: Prisma.FieldRef<"ScoreSnapshot", 'String'>;
    readonly binId: Prisma.FieldRef<"ScoreSnapshot", 'String'>;
    readonly score: Prisma.FieldRef<"ScoreSnapshot", 'Float'>;
    readonly breakdown: Prisma.FieldRef<"ScoreSnapshot", 'Json'>;
    readonly calculatedAt: Prisma.FieldRef<"ScoreSnapshot", 'DateTime'>;
}
export type ScoreSnapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where: Prisma.ScoreSnapshotWhereUniqueInput;
};
export type ScoreSnapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where: Prisma.ScoreSnapshotWhereUniqueInput;
};
export type ScoreSnapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where?: Prisma.ScoreSnapshotWhereInput;
    orderBy?: Prisma.ScoreSnapshotOrderByWithRelationInput | Prisma.ScoreSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ScoreSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreSnapshotScalarFieldEnum | Prisma.ScoreSnapshotScalarFieldEnum[];
};
export type ScoreSnapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where?: Prisma.ScoreSnapshotWhereInput;
    orderBy?: Prisma.ScoreSnapshotOrderByWithRelationInput | Prisma.ScoreSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ScoreSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreSnapshotScalarFieldEnum | Prisma.ScoreSnapshotScalarFieldEnum[];
};
export type ScoreSnapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where?: Prisma.ScoreSnapshotWhereInput;
    orderBy?: Prisma.ScoreSnapshotOrderByWithRelationInput | Prisma.ScoreSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ScoreSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreSnapshotScalarFieldEnum | Prisma.ScoreSnapshotScalarFieldEnum[];
};
export type ScoreSnapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScoreSnapshotCreateInput, Prisma.ScoreSnapshotUncheckedCreateInput>;
};
export type ScoreSnapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScoreSnapshotCreateManyInput | Prisma.ScoreSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScoreSnapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    data: Prisma.ScoreSnapshotCreateManyInput | Prisma.ScoreSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScoreSnapshotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScoreSnapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScoreSnapshotUpdateInput, Prisma.ScoreSnapshotUncheckedUpdateInput>;
    where: Prisma.ScoreSnapshotWhereUniqueInput;
};
export type ScoreSnapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScoreSnapshotUpdateManyMutationInput, Prisma.ScoreSnapshotUncheckedUpdateManyInput>;
    where?: Prisma.ScoreSnapshotWhereInput;
    limit?: number;
};
export type ScoreSnapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScoreSnapshotUpdateManyMutationInput, Prisma.ScoreSnapshotUncheckedUpdateManyInput>;
    where?: Prisma.ScoreSnapshotWhereInput;
    limit?: number;
    include?: Prisma.ScoreSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScoreSnapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where: Prisma.ScoreSnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScoreSnapshotCreateInput, Prisma.ScoreSnapshotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScoreSnapshotUpdateInput, Prisma.ScoreSnapshotUncheckedUpdateInput>;
};
export type ScoreSnapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
    where: Prisma.ScoreSnapshotWhereUniqueInput;
};
export type ScoreSnapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreSnapshotWhereInput;
    limit?: number;
};
export type ScoreSnapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ScoreSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ScoreSnapshotInclude<ExtArgs> | null;
};
export {};
