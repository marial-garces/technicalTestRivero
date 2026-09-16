import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type AuditTaskModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditTaskPayload>;
export type AggregateAuditTask = {
    _count: AuditTaskCountAggregateOutputType | null;
    _avg: AuditTaskAvgAggregateOutputType | null;
    _sum: AuditTaskSumAggregateOutputType | null;
    _min: AuditTaskMinAggregateOutputType | null;
    _max: AuditTaskMaxAggregateOutputType | null;
};
export type AuditTaskAvgAggregateOutputType = {
    expectedQuantity: number | null;
    countedQuantity: number | null;
};
export type AuditTaskSumAggregateOutputType = {
    expectedQuantity: number | null;
    countedQuantity: number | null;
};
export type AuditTaskMinAggregateOutputType = {
    id: string | null;
    auditPlanId: string | null;
    binId: string | null;
    status: $Enums.TaskStatus | null;
    createdAt: Date | null;
    expectedQuantity: number | null;
    countedQuantity: number | null;
    passed: boolean | null;
    countedAt: Date | null;
};
export type AuditTaskMaxAggregateOutputType = {
    id: string | null;
    auditPlanId: string | null;
    binId: string | null;
    status: $Enums.TaskStatus | null;
    createdAt: Date | null;
    expectedQuantity: number | null;
    countedQuantity: number | null;
    passed: boolean | null;
    countedAt: Date | null;
};
export type AuditTaskCountAggregateOutputType = {
    id: number;
    auditPlanId: number;
    binId: number;
    status: number;
    createdAt: number;
    expectedQuantity: number;
    countedQuantity: number;
    passed: number;
    countedAt: number;
    _all: number;
};
export type AuditTaskAvgAggregateInputType = {
    expectedQuantity?: true;
    countedQuantity?: true;
};
export type AuditTaskSumAggregateInputType = {
    expectedQuantity?: true;
    countedQuantity?: true;
};
export type AuditTaskMinAggregateInputType = {
    id?: true;
    auditPlanId?: true;
    binId?: true;
    status?: true;
    createdAt?: true;
    expectedQuantity?: true;
    countedQuantity?: true;
    passed?: true;
    countedAt?: true;
};
export type AuditTaskMaxAggregateInputType = {
    id?: true;
    auditPlanId?: true;
    binId?: true;
    status?: true;
    createdAt?: true;
    expectedQuantity?: true;
    countedQuantity?: true;
    passed?: true;
    countedAt?: true;
};
export type AuditTaskCountAggregateInputType = {
    id?: true;
    auditPlanId?: true;
    binId?: true;
    status?: true;
    createdAt?: true;
    expectedQuantity?: true;
    countedQuantity?: true;
    passed?: true;
    countedAt?: true;
    _all?: true;
};
export type AuditTaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTaskWhereInput;
    orderBy?: Prisma.AuditTaskOrderByWithRelationInput | Prisma.AuditTaskOrderByWithRelationInput[];
    cursor?: Prisma.AuditTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditTaskCountAggregateInputType;
    _avg?: AuditTaskAvgAggregateInputType;
    _sum?: AuditTaskSumAggregateInputType;
    _min?: AuditTaskMinAggregateInputType;
    _max?: AuditTaskMaxAggregateInputType;
};
export type GetAuditTaskAggregateType<T extends AuditTaskAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditTask[P]> : Prisma.GetScalarType<T[P], AggregateAuditTask[P]>;
};
export type AuditTaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTaskWhereInput;
    orderBy?: Prisma.AuditTaskOrderByWithAggregationInput | Prisma.AuditTaskOrderByWithAggregationInput[];
    by: Prisma.AuditTaskScalarFieldEnum[] | Prisma.AuditTaskScalarFieldEnum;
    having?: Prisma.AuditTaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditTaskCountAggregateInputType | true;
    _avg?: AuditTaskAvgAggregateInputType;
    _sum?: AuditTaskSumAggregateInputType;
    _min?: AuditTaskMinAggregateInputType;
    _max?: AuditTaskMaxAggregateInputType;
};
export type AuditTaskGroupByOutputType = {
    id: string;
    auditPlanId: string;
    binId: string;
    status: $Enums.TaskStatus;
    createdAt: Date;
    expectedQuantity: number | null;
    countedQuantity: number | null;
    passed: boolean | null;
    countedAt: Date | null;
    _count: AuditTaskCountAggregateOutputType | null;
    _avg: AuditTaskAvgAggregateOutputType | null;
    _sum: AuditTaskSumAggregateOutputType | null;
    _min: AuditTaskMinAggregateOutputType | null;
    _max: AuditTaskMaxAggregateOutputType | null;
};
type GetAuditTaskGroupByPayload<T extends AuditTaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditTaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditTaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditTaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditTaskGroupByOutputType[P]>;
}>>;
export type AuditTaskWhereInput = {
    AND?: Prisma.AuditTaskWhereInput | Prisma.AuditTaskWhereInput[];
    OR?: Prisma.AuditTaskWhereInput[];
    NOT?: Prisma.AuditTaskWhereInput | Prisma.AuditTaskWhereInput[];
    id?: Prisma.StringFilter<"AuditTask"> | string;
    auditPlanId?: Prisma.StringFilter<"AuditTask"> | string;
    binId?: Prisma.StringFilter<"AuditTask"> | string;
    status?: Prisma.EnumTaskStatusFilter<"AuditTask"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFilter<"AuditTask"> | Date | string;
    expectedQuantity?: Prisma.IntNullableFilter<"AuditTask"> | number | null;
    countedQuantity?: Prisma.IntNullableFilter<"AuditTask"> | number | null;
    passed?: Prisma.BoolNullableFilter<"AuditTask"> | boolean | null;
    countedAt?: Prisma.DateTimeNullableFilter<"AuditTask"> | Date | string | null;
    auditPlan?: Prisma.XOR<Prisma.AuditPlanScalarRelationFilter, Prisma.AuditPlanWhereInput>;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
};
export type AuditTaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    auditPlanId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expectedQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    passed?: Prisma.SortOrderInput | Prisma.SortOrder;
    countedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    auditPlan?: Prisma.AuditPlanOrderByWithRelationInput;
    bin?: Prisma.BinOrderByWithRelationInput;
};
export type AuditTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AuditTaskWhereInput | Prisma.AuditTaskWhereInput[];
    OR?: Prisma.AuditTaskWhereInput[];
    NOT?: Prisma.AuditTaskWhereInput | Prisma.AuditTaskWhereInput[];
    auditPlanId?: Prisma.StringFilter<"AuditTask"> | string;
    binId?: Prisma.StringFilter<"AuditTask"> | string;
    status?: Prisma.EnumTaskStatusFilter<"AuditTask"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFilter<"AuditTask"> | Date | string;
    expectedQuantity?: Prisma.IntNullableFilter<"AuditTask"> | number | null;
    countedQuantity?: Prisma.IntNullableFilter<"AuditTask"> | number | null;
    passed?: Prisma.BoolNullableFilter<"AuditTask"> | boolean | null;
    countedAt?: Prisma.DateTimeNullableFilter<"AuditTask"> | Date | string | null;
    auditPlan?: Prisma.XOR<Prisma.AuditPlanScalarRelationFilter, Prisma.AuditPlanWhereInput>;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
}, "id">;
export type AuditTaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    auditPlanId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expectedQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    passed?: Prisma.SortOrderInput | Prisma.SortOrder;
    countedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AuditTaskCountOrderByAggregateInput;
    _avg?: Prisma.AuditTaskAvgOrderByAggregateInput;
    _max?: Prisma.AuditTaskMaxOrderByAggregateInput;
    _min?: Prisma.AuditTaskMinOrderByAggregateInput;
    _sum?: Prisma.AuditTaskSumOrderByAggregateInput;
};
export type AuditTaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditTaskScalarWhereWithAggregatesInput | Prisma.AuditTaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditTaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditTaskScalarWhereWithAggregatesInput | Prisma.AuditTaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AuditTask"> | string;
    auditPlanId?: Prisma.StringWithAggregatesFilter<"AuditTask"> | string;
    binId?: Prisma.StringWithAggregatesFilter<"AuditTask"> | string;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"AuditTask"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AuditTask"> | Date | string;
    expectedQuantity?: Prisma.IntNullableWithAggregatesFilter<"AuditTask"> | number | null;
    countedQuantity?: Prisma.IntNullableWithAggregatesFilter<"AuditTask"> | number | null;
    passed?: Prisma.BoolNullableWithAggregatesFilter<"AuditTask"> | boolean | null;
    countedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AuditTask"> | Date | string | null;
};
export type AuditTaskCreateInput = {
    id?: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
    auditPlan: Prisma.AuditPlanCreateNestedOneWithoutAuditTasksInput;
    bin: Prisma.BinCreateNestedOneWithoutAuditTasksInput;
};
export type AuditTaskUncheckedCreateInput = {
    id?: string;
    auditPlanId: string;
    binId: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
};
export type AuditTaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    auditPlan?: Prisma.AuditPlanUpdateOneRequiredWithoutAuditTasksNestedInput;
    bin?: Prisma.BinUpdateOneRequiredWithoutAuditTasksNestedInput;
};
export type AuditTaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auditPlanId?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskCreateManyInput = {
    id?: string;
    auditPlanId: string;
    binId: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
};
export type AuditTaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auditPlanId?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskListRelationFilter = {
    every?: Prisma.AuditTaskWhereInput;
    some?: Prisma.AuditTaskWhereInput;
    none?: Prisma.AuditTaskWhereInput;
};
export type AuditTaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditTaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    auditPlanId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expectedQuantity?: Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    countedAt?: Prisma.SortOrder;
};
export type AuditTaskAvgOrderByAggregateInput = {
    expectedQuantity?: Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrder;
};
export type AuditTaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    auditPlanId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expectedQuantity?: Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    countedAt?: Prisma.SortOrder;
};
export type AuditTaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    auditPlanId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expectedQuantity?: Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    countedAt?: Prisma.SortOrder;
};
export type AuditTaskSumOrderByAggregateInput = {
    expectedQuantity?: Prisma.SortOrder;
    countedQuantity?: Prisma.SortOrder;
};
export type AuditTaskCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutBinInput, Prisma.AuditTaskUncheckedCreateWithoutBinInput> | Prisma.AuditTaskCreateWithoutBinInput[] | Prisma.AuditTaskUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutBinInput | Prisma.AuditTaskCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.AuditTaskCreateManyBinInputEnvelope;
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
};
export type AuditTaskUncheckedCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutBinInput, Prisma.AuditTaskUncheckedCreateWithoutBinInput> | Prisma.AuditTaskCreateWithoutBinInput[] | Prisma.AuditTaskUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutBinInput | Prisma.AuditTaskCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.AuditTaskCreateManyBinInputEnvelope;
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
};
export type AuditTaskUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutBinInput, Prisma.AuditTaskUncheckedCreateWithoutBinInput> | Prisma.AuditTaskCreateWithoutBinInput[] | Prisma.AuditTaskUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutBinInput | Prisma.AuditTaskCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.AuditTaskUpsertWithWhereUniqueWithoutBinInput | Prisma.AuditTaskUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.AuditTaskCreateManyBinInputEnvelope;
    set?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    disconnect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    delete?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    update?: Prisma.AuditTaskUpdateWithWhereUniqueWithoutBinInput | Prisma.AuditTaskUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.AuditTaskUpdateManyWithWhereWithoutBinInput | Prisma.AuditTaskUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.AuditTaskScalarWhereInput | Prisma.AuditTaskScalarWhereInput[];
};
export type AuditTaskUncheckedUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutBinInput, Prisma.AuditTaskUncheckedCreateWithoutBinInput> | Prisma.AuditTaskCreateWithoutBinInput[] | Prisma.AuditTaskUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutBinInput | Prisma.AuditTaskCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.AuditTaskUpsertWithWhereUniqueWithoutBinInput | Prisma.AuditTaskUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.AuditTaskCreateManyBinInputEnvelope;
    set?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    disconnect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    delete?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    update?: Prisma.AuditTaskUpdateWithWhereUniqueWithoutBinInput | Prisma.AuditTaskUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.AuditTaskUpdateManyWithWhereWithoutBinInput | Prisma.AuditTaskUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.AuditTaskScalarWhereInput | Prisma.AuditTaskScalarWhereInput[];
};
export type AuditTaskCreateNestedManyWithoutAuditPlanInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput> | Prisma.AuditTaskCreateWithoutAuditPlanInput[] | Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput | Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput[];
    createMany?: Prisma.AuditTaskCreateManyAuditPlanInputEnvelope;
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
};
export type AuditTaskUncheckedCreateNestedManyWithoutAuditPlanInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput> | Prisma.AuditTaskCreateWithoutAuditPlanInput[] | Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput | Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput[];
    createMany?: Prisma.AuditTaskCreateManyAuditPlanInputEnvelope;
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
};
export type AuditTaskUpdateManyWithoutAuditPlanNestedInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput> | Prisma.AuditTaskCreateWithoutAuditPlanInput[] | Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput | Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput[];
    upsert?: Prisma.AuditTaskUpsertWithWhereUniqueWithoutAuditPlanInput | Prisma.AuditTaskUpsertWithWhereUniqueWithoutAuditPlanInput[];
    createMany?: Prisma.AuditTaskCreateManyAuditPlanInputEnvelope;
    set?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    disconnect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    delete?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    update?: Prisma.AuditTaskUpdateWithWhereUniqueWithoutAuditPlanInput | Prisma.AuditTaskUpdateWithWhereUniqueWithoutAuditPlanInput[];
    updateMany?: Prisma.AuditTaskUpdateManyWithWhereWithoutAuditPlanInput | Prisma.AuditTaskUpdateManyWithWhereWithoutAuditPlanInput[];
    deleteMany?: Prisma.AuditTaskScalarWhereInput | Prisma.AuditTaskScalarWhereInput[];
};
export type AuditTaskUncheckedUpdateManyWithoutAuditPlanNestedInput = {
    create?: Prisma.XOR<Prisma.AuditTaskCreateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput> | Prisma.AuditTaskCreateWithoutAuditPlanInput[] | Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput[];
    connectOrCreate?: Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput | Prisma.AuditTaskCreateOrConnectWithoutAuditPlanInput[];
    upsert?: Prisma.AuditTaskUpsertWithWhereUniqueWithoutAuditPlanInput | Prisma.AuditTaskUpsertWithWhereUniqueWithoutAuditPlanInput[];
    createMany?: Prisma.AuditTaskCreateManyAuditPlanInputEnvelope;
    set?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    disconnect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    delete?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    connect?: Prisma.AuditTaskWhereUniqueInput | Prisma.AuditTaskWhereUniqueInput[];
    update?: Prisma.AuditTaskUpdateWithWhereUniqueWithoutAuditPlanInput | Prisma.AuditTaskUpdateWithWhereUniqueWithoutAuditPlanInput[];
    updateMany?: Prisma.AuditTaskUpdateManyWithWhereWithoutAuditPlanInput | Prisma.AuditTaskUpdateManyWithWhereWithoutAuditPlanInput[];
    deleteMany?: Prisma.AuditTaskScalarWhereInput | Prisma.AuditTaskScalarWhereInput[];
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type AuditTaskCreateWithoutBinInput = {
    id?: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
    auditPlan: Prisma.AuditPlanCreateNestedOneWithoutAuditTasksInput;
};
export type AuditTaskUncheckedCreateWithoutBinInput = {
    id?: string;
    auditPlanId: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
};
export type AuditTaskCreateOrConnectWithoutBinInput = {
    where: Prisma.AuditTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditTaskCreateWithoutBinInput, Prisma.AuditTaskUncheckedCreateWithoutBinInput>;
};
export type AuditTaskCreateManyBinInputEnvelope = {
    data: Prisma.AuditTaskCreateManyBinInput | Prisma.AuditTaskCreateManyBinInput[];
    skipDuplicates?: boolean;
};
export type AuditTaskUpsertWithWhereUniqueWithoutBinInput = {
    where: Prisma.AuditTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditTaskUpdateWithoutBinInput, Prisma.AuditTaskUncheckedUpdateWithoutBinInput>;
    create: Prisma.XOR<Prisma.AuditTaskCreateWithoutBinInput, Prisma.AuditTaskUncheckedCreateWithoutBinInput>;
};
export type AuditTaskUpdateWithWhereUniqueWithoutBinInput = {
    where: Prisma.AuditTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditTaskUpdateWithoutBinInput, Prisma.AuditTaskUncheckedUpdateWithoutBinInput>;
};
export type AuditTaskUpdateManyWithWhereWithoutBinInput = {
    where: Prisma.AuditTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditTaskUpdateManyMutationInput, Prisma.AuditTaskUncheckedUpdateManyWithoutBinInput>;
};
export type AuditTaskScalarWhereInput = {
    AND?: Prisma.AuditTaskScalarWhereInput | Prisma.AuditTaskScalarWhereInput[];
    OR?: Prisma.AuditTaskScalarWhereInput[];
    NOT?: Prisma.AuditTaskScalarWhereInput | Prisma.AuditTaskScalarWhereInput[];
    id?: Prisma.StringFilter<"AuditTask"> | string;
    auditPlanId?: Prisma.StringFilter<"AuditTask"> | string;
    binId?: Prisma.StringFilter<"AuditTask"> | string;
    status?: Prisma.EnumTaskStatusFilter<"AuditTask"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFilter<"AuditTask"> | Date | string;
    expectedQuantity?: Prisma.IntNullableFilter<"AuditTask"> | number | null;
    countedQuantity?: Prisma.IntNullableFilter<"AuditTask"> | number | null;
    passed?: Prisma.BoolNullableFilter<"AuditTask"> | boolean | null;
    countedAt?: Prisma.DateTimeNullableFilter<"AuditTask"> | Date | string | null;
};
export type AuditTaskCreateWithoutAuditPlanInput = {
    id?: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
    bin: Prisma.BinCreateNestedOneWithoutAuditTasksInput;
};
export type AuditTaskUncheckedCreateWithoutAuditPlanInput = {
    id?: string;
    binId: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
};
export type AuditTaskCreateOrConnectWithoutAuditPlanInput = {
    where: Prisma.AuditTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditTaskCreateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput>;
};
export type AuditTaskCreateManyAuditPlanInputEnvelope = {
    data: Prisma.AuditTaskCreateManyAuditPlanInput | Prisma.AuditTaskCreateManyAuditPlanInput[];
    skipDuplicates?: boolean;
};
export type AuditTaskUpsertWithWhereUniqueWithoutAuditPlanInput = {
    where: Prisma.AuditTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditTaskUpdateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedUpdateWithoutAuditPlanInput>;
    create: Prisma.XOR<Prisma.AuditTaskCreateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedCreateWithoutAuditPlanInput>;
};
export type AuditTaskUpdateWithWhereUniqueWithoutAuditPlanInput = {
    where: Prisma.AuditTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditTaskUpdateWithoutAuditPlanInput, Prisma.AuditTaskUncheckedUpdateWithoutAuditPlanInput>;
};
export type AuditTaskUpdateManyWithWhereWithoutAuditPlanInput = {
    where: Prisma.AuditTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditTaskUpdateManyMutationInput, Prisma.AuditTaskUncheckedUpdateManyWithoutAuditPlanInput>;
};
export type AuditTaskCreateManyBinInput = {
    id?: string;
    auditPlanId: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
};
export type AuditTaskUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    auditPlan?: Prisma.AuditPlanUpdateOneRequiredWithoutAuditTasksNestedInput;
};
export type AuditTaskUncheckedUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auditPlanId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskUncheckedUpdateManyWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auditPlanId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskCreateManyAuditPlanInput = {
    id?: string;
    binId: string;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    expectedQuantity?: number | null;
    countedQuantity?: number | null;
    passed?: boolean | null;
    countedAt?: Date | string | null;
};
export type AuditTaskUpdateWithoutAuditPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bin?: Prisma.BinUpdateOneRequiredWithoutAuditTasksNestedInput;
};
export type AuditTaskUncheckedUpdateWithoutAuditPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskUncheckedUpdateManyWithoutAuditPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    countedQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    countedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AuditTaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    auditPlanId?: boolean;
    binId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expectedQuantity?: boolean;
    countedQuantity?: boolean;
    passed?: boolean;
    countedAt?: boolean;
    auditPlan?: boolean | Prisma.AuditPlanDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditTask"]>;
export type AuditTaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    auditPlanId?: boolean;
    binId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expectedQuantity?: boolean;
    countedQuantity?: boolean;
    passed?: boolean;
    countedAt?: boolean;
    auditPlan?: boolean | Prisma.AuditPlanDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditTask"]>;
export type AuditTaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    auditPlanId?: boolean;
    binId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expectedQuantity?: boolean;
    countedQuantity?: boolean;
    passed?: boolean;
    countedAt?: boolean;
    auditPlan?: boolean | Prisma.AuditPlanDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditTask"]>;
export type AuditTaskSelectScalar = {
    id?: boolean;
    auditPlanId?: boolean;
    binId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expectedQuantity?: boolean;
    countedQuantity?: boolean;
    passed?: boolean;
    countedAt?: boolean;
};
export type AuditTaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "auditPlanId" | "binId" | "status" | "createdAt" | "expectedQuantity" | "countedQuantity" | "passed" | "countedAt", ExtArgs["result"]["auditTask"]>;
export type AuditTaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditPlan?: boolean | Prisma.AuditPlanDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type AuditTaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditPlan?: boolean | Prisma.AuditPlanDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type AuditTaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditPlan?: boolean | Prisma.AuditPlanDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type $AuditTaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditTask";
    objects: {
        auditPlan: Prisma.$AuditPlanPayload<ExtArgs>;
        bin: Prisma.$BinPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        auditPlanId: string;
        binId: string;
        status: $Enums.TaskStatus;
        createdAt: Date;
        expectedQuantity: number | null;
        countedQuantity: number | null;
        passed: boolean | null;
        countedAt: Date | null;
    }, ExtArgs["result"]["auditTask"]>;
    composites: {};
};
export type AuditTaskGetPayload<S extends boolean | null | undefined | AuditTaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload, S>;
export type AuditTaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditTaskCountAggregateInputType | true;
};
export interface AuditTaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditTask'];
        meta: {
            name: 'AuditTask';
        };
    };
    findUnique<T extends AuditTaskFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditTaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditTaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditTaskFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditTaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditTaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditTaskFindManyArgs>(args?: Prisma.SelectSubset<T, AuditTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditTaskCreateArgs>(args: Prisma.SelectSubset<T, AuditTaskCreateArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditTaskCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditTaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditTaskDeleteArgs>(args: Prisma.SelectSubset<T, AuditTaskDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditTaskUpdateArgs>(args: Prisma.SelectSubset<T, AuditTaskUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditTaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditTaskUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditTaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditTaskUpsertArgs>(args: Prisma.SelectSubset<T, AuditTaskUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditTaskClient<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditTaskCountArgs>(args?: Prisma.Subset<T, AuditTaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditTaskCountAggregateOutputType> : number>;
    aggregate<T extends AuditTaskAggregateArgs>(args: Prisma.Subset<T, AuditTaskAggregateArgs>): Prisma.PrismaPromise<GetAuditTaskAggregateType<T>>;
    groupBy<T extends AuditTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditTaskGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditTaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditTaskFieldRefs;
}
export interface Prisma__AuditTaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auditPlan<T extends Prisma.AuditPlanDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuditPlanDefaultArgs<ExtArgs>>): Prisma.Prisma__AuditPlanClient<runtime.Types.Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bin<T extends Prisma.BinDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BinDefaultArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditTaskFieldRefs {
    readonly id: Prisma.FieldRef<"AuditTask", 'String'>;
    readonly auditPlanId: Prisma.FieldRef<"AuditTask", 'String'>;
    readonly binId: Prisma.FieldRef<"AuditTask", 'String'>;
    readonly status: Prisma.FieldRef<"AuditTask", 'TaskStatus'>;
    readonly createdAt: Prisma.FieldRef<"AuditTask", 'DateTime'>;
    readonly expectedQuantity: Prisma.FieldRef<"AuditTask", 'Int'>;
    readonly countedQuantity: Prisma.FieldRef<"AuditTask", 'Int'>;
    readonly passed: Prisma.FieldRef<"AuditTask", 'Boolean'>;
    readonly countedAt: Prisma.FieldRef<"AuditTask", 'DateTime'>;
}
export type AuditTaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    where: Prisma.AuditTaskWhereUniqueInput;
};
export type AuditTaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    where: Prisma.AuditTaskWhereUniqueInput;
};
export type AuditTaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditTaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditTaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditTaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditTaskCreateInput, Prisma.AuditTaskUncheckedCreateInput>;
};
export type AuditTaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditTaskCreateManyInput | Prisma.AuditTaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditTaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    data: Prisma.AuditTaskCreateManyInput | Prisma.AuditTaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditTaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditTaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditTaskUpdateInput, Prisma.AuditTaskUncheckedUpdateInput>;
    where: Prisma.AuditTaskWhereUniqueInput;
};
export type AuditTaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditTaskUpdateManyMutationInput, Prisma.AuditTaskUncheckedUpdateManyInput>;
    where?: Prisma.AuditTaskWhereInput;
    limit?: number;
};
export type AuditTaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditTaskUpdateManyMutationInput, Prisma.AuditTaskUncheckedUpdateManyInput>;
    where?: Prisma.AuditTaskWhereInput;
    limit?: number;
    include?: Prisma.AuditTaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditTaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    where: Prisma.AuditTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditTaskCreateInput, Prisma.AuditTaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditTaskUpdateInput, Prisma.AuditTaskUncheckedUpdateInput>;
};
export type AuditTaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
    where: Prisma.AuditTaskWhereUniqueInput;
};
export type AuditTaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTaskWhereInput;
    limit?: number;
};
export type AuditTaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTaskSelect<ExtArgs> | null;
    omit?: Prisma.AuditTaskOmit<ExtArgs> | null;
    include?: Prisma.AuditTaskInclude<ExtArgs> | null;
};
export {};
