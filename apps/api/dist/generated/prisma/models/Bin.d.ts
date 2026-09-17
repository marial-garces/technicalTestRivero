import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type BinModel = runtime.Types.Result.DefaultSelection<Prisma.$BinPayload>;
export type AggregateBin = {
    _count: BinCountAggregateOutputType | null;
    _min: BinMinAggregateOutputType | null;
    _max: BinMaxAggregateOutputType | null;
};
export type BinMinAggregateOutputType = {
    id: string | null;
    rackId: string | null;
    code: string | null;
    lastAuditedAt: Date | null;
    createdAt: Date | null;
};
export type BinMaxAggregateOutputType = {
    id: string | null;
    rackId: string | null;
    code: string | null;
    lastAuditedAt: Date | null;
    createdAt: Date | null;
};
export type BinCountAggregateOutputType = {
    id: number;
    rackId: number;
    code: number;
    lastAuditedAt: number;
    createdAt: number;
    _all: number;
};
export type BinMinAggregateInputType = {
    id?: true;
    rackId?: true;
    code?: true;
    lastAuditedAt?: true;
    createdAt?: true;
};
export type BinMaxAggregateInputType = {
    id?: true;
    rackId?: true;
    code?: true;
    lastAuditedAt?: true;
    createdAt?: true;
};
export type BinCountAggregateInputType = {
    id?: true;
    rackId?: true;
    code?: true;
    lastAuditedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type BinAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BinWhereInput;
    orderBy?: Prisma.BinOrderByWithRelationInput | Prisma.BinOrderByWithRelationInput[];
    cursor?: Prisma.BinWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BinCountAggregateInputType;
    _min?: BinMinAggregateInputType;
    _max?: BinMaxAggregateInputType;
};
export type GetBinAggregateType<T extends BinAggregateArgs> = {
    [P in keyof T & keyof AggregateBin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBin[P]> : Prisma.GetScalarType<T[P], AggregateBin[P]>;
};
export type BinGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BinWhereInput;
    orderBy?: Prisma.BinOrderByWithAggregationInput | Prisma.BinOrderByWithAggregationInput[];
    by: Prisma.BinScalarFieldEnum[] | Prisma.BinScalarFieldEnum;
    having?: Prisma.BinScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BinCountAggregateInputType | true;
    _min?: BinMinAggregateInputType;
    _max?: BinMaxAggregateInputType;
};
export type BinGroupByOutputType = {
    id: string;
    rackId: string;
    code: string;
    lastAuditedAt: Date | null;
    createdAt: Date;
    _count: BinCountAggregateOutputType | null;
    _min: BinMinAggregateOutputType | null;
    _max: BinMaxAggregateOutputType | null;
};
type GetBinGroupByPayload<T extends BinGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BinGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BinGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BinGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BinGroupByOutputType[P]>;
}>>;
export type BinWhereInput = {
    AND?: Prisma.BinWhereInput | Prisma.BinWhereInput[];
    OR?: Prisma.BinWhereInput[];
    NOT?: Prisma.BinWhereInput | Prisma.BinWhereInput[];
    id?: Prisma.StringFilter<"Bin"> | string;
    rackId?: Prisma.StringFilter<"Bin"> | string;
    code?: Prisma.StringFilter<"Bin"> | string;
    lastAuditedAt?: Prisma.DateTimeNullableFilter<"Bin"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Bin"> | Date | string;
    rack?: Prisma.XOR<Prisma.RackScalarRelationFilter, Prisma.RackWhereInput>;
    pallets?: Prisma.PalletListRelationFilter;
    movements?: Prisma.MovementListRelationFilter;
    scoreSnapshots?: Prisma.ScoreSnapshotListRelationFilter;
    auditTasks?: Prisma.AuditTaskListRelationFilter;
};
export type BinOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rackId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    lastAuditedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rack?: Prisma.RackOrderByWithRelationInput;
    pallets?: Prisma.PalletOrderByRelationAggregateInput;
    movements?: Prisma.MovementOrderByRelationAggregateInput;
    scoreSnapshots?: Prisma.ScoreSnapshotOrderByRelationAggregateInput;
    auditTasks?: Prisma.AuditTaskOrderByRelationAggregateInput;
};
export type BinWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.BinWhereInput | Prisma.BinWhereInput[];
    OR?: Prisma.BinWhereInput[];
    NOT?: Prisma.BinWhereInput | Prisma.BinWhereInput[];
    rackId?: Prisma.StringFilter<"Bin"> | string;
    lastAuditedAt?: Prisma.DateTimeNullableFilter<"Bin"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Bin"> | Date | string;
    rack?: Prisma.XOR<Prisma.RackScalarRelationFilter, Prisma.RackWhereInput>;
    pallets?: Prisma.PalletListRelationFilter;
    movements?: Prisma.MovementListRelationFilter;
    scoreSnapshots?: Prisma.ScoreSnapshotListRelationFilter;
    auditTasks?: Prisma.AuditTaskListRelationFilter;
}, "id" | "code">;
export type BinOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rackId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    lastAuditedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BinCountOrderByAggregateInput;
    _max?: Prisma.BinMaxOrderByAggregateInput;
    _min?: Prisma.BinMinOrderByAggregateInput;
};
export type BinScalarWhereWithAggregatesInput = {
    AND?: Prisma.BinScalarWhereWithAggregatesInput | Prisma.BinScalarWhereWithAggregatesInput[];
    OR?: Prisma.BinScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BinScalarWhereWithAggregatesInput | Prisma.BinScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Bin"> | string;
    rackId?: Prisma.StringWithAggregatesFilter<"Bin"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Bin"> | string;
    lastAuditedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Bin"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bin"> | Date | string;
};
export type BinCreateInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    rack: Prisma.RackCreateNestedOneWithoutBinsInput;
    pallets?: Prisma.PalletCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskCreateNestedManyWithoutBinInput;
};
export type BinUncheckedCreateInput = {
    id?: string;
    rackId: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    pallets?: Prisma.PalletUncheckedCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskUncheckedCreateNestedManyWithoutBinInput;
};
export type BinUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rack?: Prisma.RackUpdateOneRequiredWithoutBinsNestedInput;
    pallets?: Prisma.PalletUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rackId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallets?: Prisma.PalletUncheckedUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUncheckedUpdateManyWithoutBinNestedInput;
};
export type BinCreateManyInput = {
    id?: string;
    rackId: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BinUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BinUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rackId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BinListRelationFilter = {
    every?: Prisma.BinWhereInput;
    some?: Prisma.BinWhereInput;
    none?: Prisma.BinWhereInput;
};
export type BinOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BinCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rackId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    lastAuditedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BinMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rackId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    lastAuditedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BinMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rackId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    lastAuditedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BinScalarRelationFilter = {
    is?: Prisma.BinWhereInput;
    isNot?: Prisma.BinWhereInput;
};
export type BinCreateNestedManyWithoutRackInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutRackInput, Prisma.BinUncheckedCreateWithoutRackInput> | Prisma.BinCreateWithoutRackInput[] | Prisma.BinUncheckedCreateWithoutRackInput[];
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutRackInput | Prisma.BinCreateOrConnectWithoutRackInput[];
    createMany?: Prisma.BinCreateManyRackInputEnvelope;
    connect?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
};
export type BinUncheckedCreateNestedManyWithoutRackInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutRackInput, Prisma.BinUncheckedCreateWithoutRackInput> | Prisma.BinCreateWithoutRackInput[] | Prisma.BinUncheckedCreateWithoutRackInput[];
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutRackInput | Prisma.BinCreateOrConnectWithoutRackInput[];
    createMany?: Prisma.BinCreateManyRackInputEnvelope;
    connect?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
};
export type BinUpdateManyWithoutRackNestedInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutRackInput, Prisma.BinUncheckedCreateWithoutRackInput> | Prisma.BinCreateWithoutRackInput[] | Prisma.BinUncheckedCreateWithoutRackInput[];
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutRackInput | Prisma.BinCreateOrConnectWithoutRackInput[];
    upsert?: Prisma.BinUpsertWithWhereUniqueWithoutRackInput | Prisma.BinUpsertWithWhereUniqueWithoutRackInput[];
    createMany?: Prisma.BinCreateManyRackInputEnvelope;
    set?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    disconnect?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    delete?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    connect?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    update?: Prisma.BinUpdateWithWhereUniqueWithoutRackInput | Prisma.BinUpdateWithWhereUniqueWithoutRackInput[];
    updateMany?: Prisma.BinUpdateManyWithWhereWithoutRackInput | Prisma.BinUpdateManyWithWhereWithoutRackInput[];
    deleteMany?: Prisma.BinScalarWhereInput | Prisma.BinScalarWhereInput[];
};
export type BinUncheckedUpdateManyWithoutRackNestedInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutRackInput, Prisma.BinUncheckedCreateWithoutRackInput> | Prisma.BinCreateWithoutRackInput[] | Prisma.BinUncheckedCreateWithoutRackInput[];
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutRackInput | Prisma.BinCreateOrConnectWithoutRackInput[];
    upsert?: Prisma.BinUpsertWithWhereUniqueWithoutRackInput | Prisma.BinUpsertWithWhereUniqueWithoutRackInput[];
    createMany?: Prisma.BinCreateManyRackInputEnvelope;
    set?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    disconnect?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    delete?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    connect?: Prisma.BinWhereUniqueInput | Prisma.BinWhereUniqueInput[];
    update?: Prisma.BinUpdateWithWhereUniqueWithoutRackInput | Prisma.BinUpdateWithWhereUniqueWithoutRackInput[];
    updateMany?: Prisma.BinUpdateManyWithWhereWithoutRackInput | Prisma.BinUpdateManyWithWhereWithoutRackInput[];
    deleteMany?: Prisma.BinScalarWhereInput | Prisma.BinScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BinCreateNestedOneWithoutPalletsInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutPalletsInput, Prisma.BinUncheckedCreateWithoutPalletsInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutPalletsInput;
    connect?: Prisma.BinWhereUniqueInput;
};
export type BinUpdateOneRequiredWithoutPalletsNestedInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutPalletsInput, Prisma.BinUncheckedCreateWithoutPalletsInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutPalletsInput;
    upsert?: Prisma.BinUpsertWithoutPalletsInput;
    connect?: Prisma.BinWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BinUpdateToOneWithWhereWithoutPalletsInput, Prisma.BinUpdateWithoutPalletsInput>, Prisma.BinUncheckedUpdateWithoutPalletsInput>;
};
export type BinCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutMovementsInput, Prisma.BinUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.BinWhereUniqueInput;
};
export type BinUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutMovementsInput, Prisma.BinUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.BinUpsertWithoutMovementsInput;
    connect?: Prisma.BinWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BinUpdateToOneWithWhereWithoutMovementsInput, Prisma.BinUpdateWithoutMovementsInput>, Prisma.BinUncheckedUpdateWithoutMovementsInput>;
};
export type BinCreateNestedOneWithoutScoreSnapshotsInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutScoreSnapshotsInput, Prisma.BinUncheckedCreateWithoutScoreSnapshotsInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutScoreSnapshotsInput;
    connect?: Prisma.BinWhereUniqueInput;
};
export type BinUpdateOneRequiredWithoutScoreSnapshotsNestedInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutScoreSnapshotsInput, Prisma.BinUncheckedCreateWithoutScoreSnapshotsInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutScoreSnapshotsInput;
    upsert?: Prisma.BinUpsertWithoutScoreSnapshotsInput;
    connect?: Prisma.BinWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BinUpdateToOneWithWhereWithoutScoreSnapshotsInput, Prisma.BinUpdateWithoutScoreSnapshotsInput>, Prisma.BinUncheckedUpdateWithoutScoreSnapshotsInput>;
};
export type BinCreateNestedOneWithoutAuditTasksInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutAuditTasksInput, Prisma.BinUncheckedCreateWithoutAuditTasksInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutAuditTasksInput;
    connect?: Prisma.BinWhereUniqueInput;
};
export type BinUpdateOneRequiredWithoutAuditTasksNestedInput = {
    create?: Prisma.XOR<Prisma.BinCreateWithoutAuditTasksInput, Prisma.BinUncheckedCreateWithoutAuditTasksInput>;
    connectOrCreate?: Prisma.BinCreateOrConnectWithoutAuditTasksInput;
    upsert?: Prisma.BinUpsertWithoutAuditTasksInput;
    connect?: Prisma.BinWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BinUpdateToOneWithWhereWithoutAuditTasksInput, Prisma.BinUpdateWithoutAuditTasksInput>, Prisma.BinUncheckedUpdateWithoutAuditTasksInput>;
};
export type BinCreateWithoutRackInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    pallets?: Prisma.PalletCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskCreateNestedManyWithoutBinInput;
};
export type BinUncheckedCreateWithoutRackInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    pallets?: Prisma.PalletUncheckedCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskUncheckedCreateNestedManyWithoutBinInput;
};
export type BinCreateOrConnectWithoutRackInput = {
    where: Prisma.BinWhereUniqueInput;
    create: Prisma.XOR<Prisma.BinCreateWithoutRackInput, Prisma.BinUncheckedCreateWithoutRackInput>;
};
export type BinCreateManyRackInputEnvelope = {
    data: Prisma.BinCreateManyRackInput | Prisma.BinCreateManyRackInput[];
    skipDuplicates?: boolean;
};
export type BinUpsertWithWhereUniqueWithoutRackInput = {
    where: Prisma.BinWhereUniqueInput;
    update: Prisma.XOR<Prisma.BinUpdateWithoutRackInput, Prisma.BinUncheckedUpdateWithoutRackInput>;
    create: Prisma.XOR<Prisma.BinCreateWithoutRackInput, Prisma.BinUncheckedCreateWithoutRackInput>;
};
export type BinUpdateWithWhereUniqueWithoutRackInput = {
    where: Prisma.BinWhereUniqueInput;
    data: Prisma.XOR<Prisma.BinUpdateWithoutRackInput, Prisma.BinUncheckedUpdateWithoutRackInput>;
};
export type BinUpdateManyWithWhereWithoutRackInput = {
    where: Prisma.BinScalarWhereInput;
    data: Prisma.XOR<Prisma.BinUpdateManyMutationInput, Prisma.BinUncheckedUpdateManyWithoutRackInput>;
};
export type BinScalarWhereInput = {
    AND?: Prisma.BinScalarWhereInput | Prisma.BinScalarWhereInput[];
    OR?: Prisma.BinScalarWhereInput[];
    NOT?: Prisma.BinScalarWhereInput | Prisma.BinScalarWhereInput[];
    id?: Prisma.StringFilter<"Bin"> | string;
    rackId?: Prisma.StringFilter<"Bin"> | string;
    code?: Prisma.StringFilter<"Bin"> | string;
    lastAuditedAt?: Prisma.DateTimeNullableFilter<"Bin"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Bin"> | Date | string;
};
export type BinCreateWithoutPalletsInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    rack: Prisma.RackCreateNestedOneWithoutBinsInput;
    movements?: Prisma.MovementCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskCreateNestedManyWithoutBinInput;
};
export type BinUncheckedCreateWithoutPalletsInput = {
    id?: string;
    rackId: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskUncheckedCreateNestedManyWithoutBinInput;
};
export type BinCreateOrConnectWithoutPalletsInput = {
    where: Prisma.BinWhereUniqueInput;
    create: Prisma.XOR<Prisma.BinCreateWithoutPalletsInput, Prisma.BinUncheckedCreateWithoutPalletsInput>;
};
export type BinUpsertWithoutPalletsInput = {
    update: Prisma.XOR<Prisma.BinUpdateWithoutPalletsInput, Prisma.BinUncheckedUpdateWithoutPalletsInput>;
    create: Prisma.XOR<Prisma.BinCreateWithoutPalletsInput, Prisma.BinUncheckedCreateWithoutPalletsInput>;
    where?: Prisma.BinWhereInput;
};
export type BinUpdateToOneWithWhereWithoutPalletsInput = {
    where?: Prisma.BinWhereInput;
    data: Prisma.XOR<Prisma.BinUpdateWithoutPalletsInput, Prisma.BinUncheckedUpdateWithoutPalletsInput>;
};
export type BinUpdateWithoutPalletsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rack?: Prisma.RackUpdateOneRequiredWithoutBinsNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateWithoutPalletsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rackId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUncheckedUpdateManyWithoutBinNestedInput;
};
export type BinCreateWithoutMovementsInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    rack: Prisma.RackCreateNestedOneWithoutBinsInput;
    pallets?: Prisma.PalletCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskCreateNestedManyWithoutBinInput;
};
export type BinUncheckedCreateWithoutMovementsInput = {
    id?: string;
    rackId: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    pallets?: Prisma.PalletUncheckedCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskUncheckedCreateNestedManyWithoutBinInput;
};
export type BinCreateOrConnectWithoutMovementsInput = {
    where: Prisma.BinWhereUniqueInput;
    create: Prisma.XOR<Prisma.BinCreateWithoutMovementsInput, Prisma.BinUncheckedCreateWithoutMovementsInput>;
};
export type BinUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.BinUpdateWithoutMovementsInput, Prisma.BinUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.BinCreateWithoutMovementsInput, Prisma.BinUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.BinWhereInput;
};
export type BinUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.BinWhereInput;
    data: Prisma.XOR<Prisma.BinUpdateWithoutMovementsInput, Prisma.BinUncheckedUpdateWithoutMovementsInput>;
};
export type BinUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rack?: Prisma.RackUpdateOneRequiredWithoutBinsNestedInput;
    pallets?: Prisma.PalletUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rackId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallets?: Prisma.PalletUncheckedUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUncheckedUpdateManyWithoutBinNestedInput;
};
export type BinCreateWithoutScoreSnapshotsInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    rack: Prisma.RackCreateNestedOneWithoutBinsInput;
    pallets?: Prisma.PalletCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskCreateNestedManyWithoutBinInput;
};
export type BinUncheckedCreateWithoutScoreSnapshotsInput = {
    id?: string;
    rackId: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    pallets?: Prisma.PalletUncheckedCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutBinInput;
    auditTasks?: Prisma.AuditTaskUncheckedCreateNestedManyWithoutBinInput;
};
export type BinCreateOrConnectWithoutScoreSnapshotsInput = {
    where: Prisma.BinWhereUniqueInput;
    create: Prisma.XOR<Prisma.BinCreateWithoutScoreSnapshotsInput, Prisma.BinUncheckedCreateWithoutScoreSnapshotsInput>;
};
export type BinUpsertWithoutScoreSnapshotsInput = {
    update: Prisma.XOR<Prisma.BinUpdateWithoutScoreSnapshotsInput, Prisma.BinUncheckedUpdateWithoutScoreSnapshotsInput>;
    create: Prisma.XOR<Prisma.BinCreateWithoutScoreSnapshotsInput, Prisma.BinUncheckedCreateWithoutScoreSnapshotsInput>;
    where?: Prisma.BinWhereInput;
};
export type BinUpdateToOneWithWhereWithoutScoreSnapshotsInput = {
    where?: Prisma.BinWhereInput;
    data: Prisma.XOR<Prisma.BinUpdateWithoutScoreSnapshotsInput, Prisma.BinUncheckedUpdateWithoutScoreSnapshotsInput>;
};
export type BinUpdateWithoutScoreSnapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rack?: Prisma.RackUpdateOneRequiredWithoutBinsNestedInput;
    pallets?: Prisma.PalletUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateWithoutScoreSnapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rackId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallets?: Prisma.PalletUncheckedUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUncheckedUpdateManyWithoutBinNestedInput;
};
export type BinCreateWithoutAuditTasksInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    rack: Prisma.RackCreateNestedOneWithoutBinsInput;
    pallets?: Prisma.PalletCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotCreateNestedManyWithoutBinInput;
};
export type BinUncheckedCreateWithoutAuditTasksInput = {
    id?: string;
    rackId: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
    pallets?: Prisma.PalletUncheckedCreateNestedManyWithoutBinInput;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutBinInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedCreateNestedManyWithoutBinInput;
};
export type BinCreateOrConnectWithoutAuditTasksInput = {
    where: Prisma.BinWhereUniqueInput;
    create: Prisma.XOR<Prisma.BinCreateWithoutAuditTasksInput, Prisma.BinUncheckedCreateWithoutAuditTasksInput>;
};
export type BinUpsertWithoutAuditTasksInput = {
    update: Prisma.XOR<Prisma.BinUpdateWithoutAuditTasksInput, Prisma.BinUncheckedUpdateWithoutAuditTasksInput>;
    create: Prisma.XOR<Prisma.BinCreateWithoutAuditTasksInput, Prisma.BinUncheckedCreateWithoutAuditTasksInput>;
    where?: Prisma.BinWhereInput;
};
export type BinUpdateToOneWithWhereWithoutAuditTasksInput = {
    where?: Prisma.BinWhereInput;
    data: Prisma.XOR<Prisma.BinUpdateWithoutAuditTasksInput, Prisma.BinUncheckedUpdateWithoutAuditTasksInput>;
};
export type BinUpdateWithoutAuditTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rack?: Prisma.RackUpdateOneRequiredWithoutBinsNestedInput;
    pallets?: Prisma.PalletUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateWithoutAuditTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rackId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallets?: Prisma.PalletUncheckedUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedUpdateManyWithoutBinNestedInput;
};
export type BinCreateManyRackInput = {
    id?: string;
    code: string;
    lastAuditedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BinUpdateWithoutRackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallets?: Prisma.PalletUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateWithoutRackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallets?: Prisma.PalletUncheckedUpdateManyWithoutBinNestedInput;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutBinNestedInput;
    scoreSnapshots?: Prisma.ScoreSnapshotUncheckedUpdateManyWithoutBinNestedInput;
    auditTasks?: Prisma.AuditTaskUncheckedUpdateManyWithoutBinNestedInput;
};
export type BinUncheckedUpdateManyWithoutRackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    lastAuditedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BinCountOutputType = {
    pallets: number;
    movements: number;
    scoreSnapshots: number;
    auditTasks: number;
};
export type BinCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pallets?: boolean | BinCountOutputTypeCountPalletsArgs;
    movements?: boolean | BinCountOutputTypeCountMovementsArgs;
    scoreSnapshots?: boolean | BinCountOutputTypeCountScoreSnapshotsArgs;
    auditTasks?: boolean | BinCountOutputTypeCountAuditTasksArgs;
};
export type BinCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinCountOutputTypeSelect<ExtArgs> | null;
};
export type BinCountOutputTypeCountPalletsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PalletWhereInput;
};
export type BinCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
};
export type BinCountOutputTypeCountScoreSnapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreSnapshotWhereInput;
};
export type BinCountOutputTypeCountAuditTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTaskWhereInput;
};
export type BinSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rackId?: boolean;
    code?: boolean;
    lastAuditedAt?: boolean;
    createdAt?: boolean;
    rack?: boolean | Prisma.RackDefaultArgs<ExtArgs>;
    pallets?: boolean | Prisma.Bin$palletsArgs<ExtArgs>;
    movements?: boolean | Prisma.Bin$movementsArgs<ExtArgs>;
    scoreSnapshots?: boolean | Prisma.Bin$scoreSnapshotsArgs<ExtArgs>;
    auditTasks?: boolean | Prisma.Bin$auditTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.BinCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bin"]>;
export type BinSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rackId?: boolean;
    code?: boolean;
    lastAuditedAt?: boolean;
    createdAt?: boolean;
    rack?: boolean | Prisma.RackDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bin"]>;
export type BinSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rackId?: boolean;
    code?: boolean;
    lastAuditedAt?: boolean;
    createdAt?: boolean;
    rack?: boolean | Prisma.RackDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bin"]>;
export type BinSelectScalar = {
    id?: boolean;
    rackId?: boolean;
    code?: boolean;
    lastAuditedAt?: boolean;
    createdAt?: boolean;
};
export type BinOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rackId" | "code" | "lastAuditedAt" | "createdAt", ExtArgs["result"]["bin"]>;
export type BinInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rack?: boolean | Prisma.RackDefaultArgs<ExtArgs>;
    pallets?: boolean | Prisma.Bin$palletsArgs<ExtArgs>;
    movements?: boolean | Prisma.Bin$movementsArgs<ExtArgs>;
    scoreSnapshots?: boolean | Prisma.Bin$scoreSnapshotsArgs<ExtArgs>;
    auditTasks?: boolean | Prisma.Bin$auditTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.BinCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BinIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rack?: boolean | Prisma.RackDefaultArgs<ExtArgs>;
};
export type BinIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rack?: boolean | Prisma.RackDefaultArgs<ExtArgs>;
};
export type $BinPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bin";
    objects: {
        rack: Prisma.$RackPayload<ExtArgs>;
        pallets: Prisma.$PalletPayload<ExtArgs>[];
        movements: Prisma.$MovementPayload<ExtArgs>[];
        scoreSnapshots: Prisma.$ScoreSnapshotPayload<ExtArgs>[];
        auditTasks: Prisma.$AuditTaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rackId: string;
        code: string;
        lastAuditedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["bin"]>;
    composites: {};
};
export type BinGetPayload<S extends boolean | null | undefined | BinDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BinPayload, S>;
export type BinCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BinCountAggregateInputType | true;
};
export interface BinDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bin'];
        meta: {
            name: 'Bin';
        };
    };
    findUnique<T extends BinFindUniqueArgs>(args: Prisma.SelectSubset<T, BinFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BinFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BinFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BinFindFirstArgs>(args?: Prisma.SelectSubset<T, BinFindFirstArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BinFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BinFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BinFindManyArgs>(args?: Prisma.SelectSubset<T, BinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BinCreateArgs>(args: Prisma.SelectSubset<T, BinCreateArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BinCreateManyArgs>(args?: Prisma.SelectSubset<T, BinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BinCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BinDeleteArgs>(args: Prisma.SelectSubset<T, BinDeleteArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BinUpdateArgs>(args: Prisma.SelectSubset<T, BinUpdateArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BinDeleteManyArgs>(args?: Prisma.SelectSubset<T, BinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BinUpdateManyArgs>(args: Prisma.SelectSubset<T, BinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BinUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BinUpsertArgs>(args: Prisma.SelectSubset<T, BinUpsertArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BinCountArgs>(args?: Prisma.Subset<T, BinCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BinCountAggregateOutputType> : number>;
    aggregate<T extends BinAggregateArgs>(args: Prisma.Subset<T, BinAggregateArgs>): Prisma.PrismaPromise<GetBinAggregateType<T>>;
    groupBy<T extends BinGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BinGroupByArgs['orderBy'];
    } : {
        orderBy?: BinGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BinFieldRefs;
}
export interface Prisma__BinClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rack<T extends Prisma.RackDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RackDefaultArgs<ExtArgs>>): Prisma.Prisma__RackClient<runtime.Types.Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pallets<T extends Prisma.Bin$palletsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bin$palletsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movements<T extends Prisma.Bin$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bin$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    scoreSnapshots<T extends Prisma.Bin$scoreSnapshotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bin$scoreSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditTasks<T extends Prisma.Bin$auditTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bin$auditTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BinFieldRefs {
    readonly id: Prisma.FieldRef<"Bin", 'String'>;
    readonly rackId: Prisma.FieldRef<"Bin", 'String'>;
    readonly code: Prisma.FieldRef<"Bin", 'String'>;
    readonly lastAuditedAt: Prisma.FieldRef<"Bin", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Bin", 'DateTime'>;
}
export type BinFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    where: Prisma.BinWhereUniqueInput;
};
export type BinFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    where: Prisma.BinWhereUniqueInput;
};
export type BinFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BinFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BinFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BinCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BinCreateInput, Prisma.BinUncheckedCreateInput>;
};
export type BinCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BinCreateManyInput | Prisma.BinCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BinCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    data: Prisma.BinCreateManyInput | Prisma.BinCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BinIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BinUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BinUpdateInput, Prisma.BinUncheckedUpdateInput>;
    where: Prisma.BinWhereUniqueInput;
};
export type BinUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BinUpdateManyMutationInput, Prisma.BinUncheckedUpdateManyInput>;
    where?: Prisma.BinWhereInput;
    limit?: number;
};
export type BinUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BinUpdateManyMutationInput, Prisma.BinUncheckedUpdateManyInput>;
    where?: Prisma.BinWhereInput;
    limit?: number;
    include?: Prisma.BinIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BinUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    where: Prisma.BinWhereUniqueInput;
    create: Prisma.XOR<Prisma.BinCreateInput, Prisma.BinUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BinUpdateInput, Prisma.BinUncheckedUpdateInput>;
};
export type BinDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
    where: Prisma.BinWhereUniqueInput;
};
export type BinDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BinWhereInput;
    limit?: number;
};
export type Bin$palletsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    where?: Prisma.PalletWhereInput;
    orderBy?: Prisma.PalletOrderByWithRelationInput | Prisma.PalletOrderByWithRelationInput[];
    cursor?: Prisma.PalletWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PalletScalarFieldEnum | Prisma.PalletScalarFieldEnum[];
};
export type Bin$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithRelationInput | Prisma.MovementOrderByWithRelationInput[];
    cursor?: Prisma.MovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovementScalarFieldEnum | Prisma.MovementScalarFieldEnum[];
};
export type Bin$scoreSnapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Bin$auditTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BinDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BinSelect<ExtArgs> | null;
    omit?: Prisma.BinOmit<ExtArgs> | null;
    include?: Prisma.BinInclude<ExtArgs> | null;
};
export {};
