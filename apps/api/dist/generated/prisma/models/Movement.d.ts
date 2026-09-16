import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type MovementModel = runtime.Types.Result.DefaultSelection<Prisma.$MovementPayload>;
export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null;
    _avg: MovementAvgAggregateOutputType | null;
    _sum: MovementSumAggregateOutputType | null;
    _min: MovementMinAggregateOutputType | null;
    _max: MovementMaxAggregateOutputType | null;
};
export type MovementAvgAggregateOutputType = {
    quantity: number | null;
};
export type MovementSumAggregateOutputType = {
    quantity: number | null;
};
export type MovementMinAggregateOutputType = {
    id: string | null;
    binId: string | null;
    palletId: string | null;
    type: $Enums.MovementType | null;
    quantity: number | null;
    occurredAt: Date | null;
};
export type MovementMaxAggregateOutputType = {
    id: string | null;
    binId: string | null;
    palletId: string | null;
    type: $Enums.MovementType | null;
    quantity: number | null;
    occurredAt: Date | null;
};
export type MovementCountAggregateOutputType = {
    id: number;
    binId: number;
    palletId: number;
    type: number;
    quantity: number;
    occurredAt: number;
    _all: number;
};
export type MovementAvgAggregateInputType = {
    quantity?: true;
};
export type MovementSumAggregateInputType = {
    quantity?: true;
};
export type MovementMinAggregateInputType = {
    id?: true;
    binId?: true;
    palletId?: true;
    type?: true;
    quantity?: true;
    occurredAt?: true;
};
export type MovementMaxAggregateInputType = {
    id?: true;
    binId?: true;
    palletId?: true;
    type?: true;
    quantity?: true;
    occurredAt?: true;
};
export type MovementCountAggregateInputType = {
    id?: true;
    binId?: true;
    palletId?: true;
    type?: true;
    quantity?: true;
    occurredAt?: true;
    _all?: true;
};
export type MovementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithRelationInput | Prisma.MovementOrderByWithRelationInput[];
    cursor?: Prisma.MovementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MovementCountAggregateInputType;
    _avg?: MovementAvgAggregateInputType;
    _sum?: MovementSumAggregateInputType;
    _min?: MovementMinAggregateInputType;
    _max?: MovementMaxAggregateInputType;
};
export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
    [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovement[P]> : Prisma.GetScalarType<T[P], AggregateMovement[P]>;
};
export type MovementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithAggregationInput | Prisma.MovementOrderByWithAggregationInput[];
    by: Prisma.MovementScalarFieldEnum[] | Prisma.MovementScalarFieldEnum;
    having?: Prisma.MovementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovementCountAggregateInputType | true;
    _avg?: MovementAvgAggregateInputType;
    _sum?: MovementSumAggregateInputType;
    _min?: MovementMinAggregateInputType;
    _max?: MovementMaxAggregateInputType;
};
export type MovementGroupByOutputType = {
    id: string;
    binId: string;
    palletId: string | null;
    type: $Enums.MovementType;
    quantity: number | null;
    occurredAt: Date;
    _count: MovementCountAggregateOutputType | null;
    _avg: MovementAvgAggregateOutputType | null;
    _sum: MovementSumAggregateOutputType | null;
    _min: MovementMinAggregateOutputType | null;
    _max: MovementMaxAggregateOutputType | null;
};
type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MovementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MovementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MovementGroupByOutputType[P]>;
}>>;
export type MovementWhereInput = {
    AND?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    OR?: Prisma.MovementWhereInput[];
    NOT?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    id?: Prisma.StringFilter<"Movement"> | string;
    binId?: Prisma.StringFilter<"Movement"> | string;
    palletId?: Prisma.StringNullableFilter<"Movement"> | string | null;
    type?: Prisma.EnumMovementTypeFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntNullableFilter<"Movement"> | number | null;
    occurredAt?: Prisma.DateTimeFilter<"Movement"> | Date | string;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
    pallet?: Prisma.XOR<Prisma.PalletNullableScalarRelationFilter, Prisma.PalletWhereInput> | null;
};
export type MovementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    palletId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    bin?: Prisma.BinOrderByWithRelationInput;
    pallet?: Prisma.PalletOrderByWithRelationInput;
};
export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    OR?: Prisma.MovementWhereInput[];
    NOT?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    binId?: Prisma.StringFilter<"Movement"> | string;
    palletId?: Prisma.StringNullableFilter<"Movement"> | string | null;
    type?: Prisma.EnumMovementTypeFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntNullableFilter<"Movement"> | number | null;
    occurredAt?: Prisma.DateTimeFilter<"Movement"> | Date | string;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
    pallet?: Prisma.XOR<Prisma.PalletNullableScalarRelationFilter, Prisma.PalletWhereInput> | null;
}, "id">;
export type MovementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    palletId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    _count?: Prisma.MovementCountOrderByAggregateInput;
    _avg?: Prisma.MovementAvgOrderByAggregateInput;
    _max?: Prisma.MovementMaxOrderByAggregateInput;
    _min?: Prisma.MovementMinOrderByAggregateInput;
    _sum?: Prisma.MovementSumOrderByAggregateInput;
};
export type MovementScalarWhereWithAggregatesInput = {
    AND?: Prisma.MovementScalarWhereWithAggregatesInput | Prisma.MovementScalarWhereWithAggregatesInput[];
    OR?: Prisma.MovementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MovementScalarWhereWithAggregatesInput | Prisma.MovementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Movement"> | string;
    binId?: Prisma.StringWithAggregatesFilter<"Movement"> | string;
    palletId?: Prisma.StringNullableWithAggregatesFilter<"Movement"> | string | null;
    type?: Prisma.EnumMovementTypeWithAggregatesFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntNullableWithAggregatesFilter<"Movement"> | number | null;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"Movement"> | Date | string;
};
export type MovementCreateInput = {
    id?: string;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
    bin: Prisma.BinCreateNestedOneWithoutMovementsInput;
    pallet?: Prisma.PalletCreateNestedOneWithoutMovementsInput;
};
export type MovementUncheckedCreateInput = {
    id?: string;
    binId: string;
    palletId?: string | null;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
};
export type MovementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bin?: Prisma.BinUpdateOneRequiredWithoutMovementsNestedInput;
    pallet?: Prisma.PalletUpdateOneWithoutMovementsNestedInput;
};
export type MovementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    palletId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementCreateManyInput = {
    id?: string;
    binId: string;
    palletId?: string | null;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
};
export type MovementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    palletId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementListRelationFilter = {
    every?: Prisma.MovementWhereInput;
    some?: Prisma.MovementWhereInput;
    none?: Prisma.MovementWhereInput;
};
export type MovementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MovementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    palletId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type MovementAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type MovementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    palletId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type MovementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    palletId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type MovementSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type MovementCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutBinInput, Prisma.MovementUncheckedCreateWithoutBinInput> | Prisma.MovementCreateWithoutBinInput[] | Prisma.MovementUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutBinInput | Prisma.MovementCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.MovementCreateManyBinInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUncheckedCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutBinInput, Prisma.MovementUncheckedCreateWithoutBinInput> | Prisma.MovementCreateWithoutBinInput[] | Prisma.MovementUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutBinInput | Prisma.MovementCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.MovementCreateManyBinInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutBinInput, Prisma.MovementUncheckedCreateWithoutBinInput> | Prisma.MovementCreateWithoutBinInput[] | Prisma.MovementUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutBinInput | Prisma.MovementCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutBinInput | Prisma.MovementUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.MovementCreateManyBinInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutBinInput | Prisma.MovementUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutBinInput | Prisma.MovementUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type MovementUncheckedUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutBinInput, Prisma.MovementUncheckedCreateWithoutBinInput> | Prisma.MovementCreateWithoutBinInput[] | Prisma.MovementUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutBinInput | Prisma.MovementCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutBinInput | Prisma.MovementUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.MovementCreateManyBinInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutBinInput | Prisma.MovementUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutBinInput | Prisma.MovementUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type MovementCreateNestedManyWithoutPalletInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutPalletInput, Prisma.MovementUncheckedCreateWithoutPalletInput> | Prisma.MovementCreateWithoutPalletInput[] | Prisma.MovementUncheckedCreateWithoutPalletInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutPalletInput | Prisma.MovementCreateOrConnectWithoutPalletInput[];
    createMany?: Prisma.MovementCreateManyPalletInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUncheckedCreateNestedManyWithoutPalletInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutPalletInput, Prisma.MovementUncheckedCreateWithoutPalletInput> | Prisma.MovementCreateWithoutPalletInput[] | Prisma.MovementUncheckedCreateWithoutPalletInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutPalletInput | Prisma.MovementCreateOrConnectWithoutPalletInput[];
    createMany?: Prisma.MovementCreateManyPalletInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUpdateManyWithoutPalletNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutPalletInput, Prisma.MovementUncheckedCreateWithoutPalletInput> | Prisma.MovementCreateWithoutPalletInput[] | Prisma.MovementUncheckedCreateWithoutPalletInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutPalletInput | Prisma.MovementCreateOrConnectWithoutPalletInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutPalletInput | Prisma.MovementUpsertWithWhereUniqueWithoutPalletInput[];
    createMany?: Prisma.MovementCreateManyPalletInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutPalletInput | Prisma.MovementUpdateWithWhereUniqueWithoutPalletInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutPalletInput | Prisma.MovementUpdateManyWithWhereWithoutPalletInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type MovementUncheckedUpdateManyWithoutPalletNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutPalletInput, Prisma.MovementUncheckedCreateWithoutPalletInput> | Prisma.MovementCreateWithoutPalletInput[] | Prisma.MovementUncheckedCreateWithoutPalletInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutPalletInput | Prisma.MovementCreateOrConnectWithoutPalletInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutPalletInput | Prisma.MovementUpsertWithWhereUniqueWithoutPalletInput[];
    createMany?: Prisma.MovementCreateManyPalletInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutPalletInput | Prisma.MovementUpdateWithWhereUniqueWithoutPalletInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutPalletInput | Prisma.MovementUpdateManyWithWhereWithoutPalletInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type MovementCreateWithoutBinInput = {
    id?: string;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
    pallet?: Prisma.PalletCreateNestedOneWithoutMovementsInput;
};
export type MovementUncheckedCreateWithoutBinInput = {
    id?: string;
    palletId?: string | null;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
};
export type MovementCreateOrConnectWithoutBinInput = {
    where: Prisma.MovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovementCreateWithoutBinInput, Prisma.MovementUncheckedCreateWithoutBinInput>;
};
export type MovementCreateManyBinInputEnvelope = {
    data: Prisma.MovementCreateManyBinInput | Prisma.MovementCreateManyBinInput[];
    skipDuplicates?: boolean;
};
export type MovementUpsertWithWhereUniqueWithoutBinInput = {
    where: Prisma.MovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovementUpdateWithoutBinInput, Prisma.MovementUncheckedUpdateWithoutBinInput>;
    create: Prisma.XOR<Prisma.MovementCreateWithoutBinInput, Prisma.MovementUncheckedCreateWithoutBinInput>;
};
export type MovementUpdateWithWhereUniqueWithoutBinInput = {
    where: Prisma.MovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovementUpdateWithoutBinInput, Prisma.MovementUncheckedUpdateWithoutBinInput>;
};
export type MovementUpdateManyWithWhereWithoutBinInput = {
    where: Prisma.MovementScalarWhereInput;
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyWithoutBinInput>;
};
export type MovementScalarWhereInput = {
    AND?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
    OR?: Prisma.MovementScalarWhereInput[];
    NOT?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
    id?: Prisma.StringFilter<"Movement"> | string;
    binId?: Prisma.StringFilter<"Movement"> | string;
    palletId?: Prisma.StringNullableFilter<"Movement"> | string | null;
    type?: Prisma.EnumMovementTypeFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntNullableFilter<"Movement"> | number | null;
    occurredAt?: Prisma.DateTimeFilter<"Movement"> | Date | string;
};
export type MovementCreateWithoutPalletInput = {
    id?: string;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
    bin: Prisma.BinCreateNestedOneWithoutMovementsInput;
};
export type MovementUncheckedCreateWithoutPalletInput = {
    id?: string;
    binId: string;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
};
export type MovementCreateOrConnectWithoutPalletInput = {
    where: Prisma.MovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovementCreateWithoutPalletInput, Prisma.MovementUncheckedCreateWithoutPalletInput>;
};
export type MovementCreateManyPalletInputEnvelope = {
    data: Prisma.MovementCreateManyPalletInput | Prisma.MovementCreateManyPalletInput[];
    skipDuplicates?: boolean;
};
export type MovementUpsertWithWhereUniqueWithoutPalletInput = {
    where: Prisma.MovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovementUpdateWithoutPalletInput, Prisma.MovementUncheckedUpdateWithoutPalletInput>;
    create: Prisma.XOR<Prisma.MovementCreateWithoutPalletInput, Prisma.MovementUncheckedCreateWithoutPalletInput>;
};
export type MovementUpdateWithWhereUniqueWithoutPalletInput = {
    where: Prisma.MovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovementUpdateWithoutPalletInput, Prisma.MovementUncheckedUpdateWithoutPalletInput>;
};
export type MovementUpdateManyWithWhereWithoutPalletInput = {
    where: Prisma.MovementScalarWhereInput;
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyWithoutPalletInput>;
};
export type MovementCreateManyBinInput = {
    id?: string;
    palletId?: string | null;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
};
export type MovementUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pallet?: Prisma.PalletUpdateOneWithoutMovementsNestedInput;
};
export type MovementUncheckedUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    palletId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementUncheckedUpdateManyWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    palletId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementCreateManyPalletInput = {
    id?: string;
    binId: string;
    type: $Enums.MovementType;
    quantity?: number | null;
    occurredAt: Date | string;
};
export type MovementUpdateWithoutPalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bin?: Prisma.BinUpdateOneRequiredWithoutMovementsNestedInput;
};
export type MovementUncheckedUpdateWithoutPalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementUncheckedUpdateManyWithoutPalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    binId?: boolean;
    palletId?: boolean;
    type?: boolean;
    quantity?: boolean;
    occurredAt?: boolean;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    pallet?: boolean | Prisma.Movement$palletArgs<ExtArgs>;
}, ExtArgs["result"]["movement"]>;
export type MovementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    binId?: boolean;
    palletId?: boolean;
    type?: boolean;
    quantity?: boolean;
    occurredAt?: boolean;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    pallet?: boolean | Prisma.Movement$palletArgs<ExtArgs>;
}, ExtArgs["result"]["movement"]>;
export type MovementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    binId?: boolean;
    palletId?: boolean;
    type?: boolean;
    quantity?: boolean;
    occurredAt?: boolean;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    pallet?: boolean | Prisma.Movement$palletArgs<ExtArgs>;
}, ExtArgs["result"]["movement"]>;
export type MovementSelectScalar = {
    id?: boolean;
    binId?: boolean;
    palletId?: boolean;
    type?: boolean;
    quantity?: boolean;
    occurredAt?: boolean;
};
export type MovementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "binId" | "palletId" | "type" | "quantity" | "occurredAt", ExtArgs["result"]["movement"]>;
export type MovementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    pallet?: boolean | Prisma.Movement$palletArgs<ExtArgs>;
};
export type MovementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    pallet?: boolean | Prisma.Movement$palletArgs<ExtArgs>;
};
export type MovementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    pallet?: boolean | Prisma.Movement$palletArgs<ExtArgs>;
};
export type $MovementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Movement";
    objects: {
        bin: Prisma.$BinPayload<ExtArgs>;
        pallet: Prisma.$PalletPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        binId: string;
        palletId: string | null;
        type: $Enums.MovementType;
        quantity: number | null;
        occurredAt: Date;
    }, ExtArgs["result"]["movement"]>;
    composites: {};
};
export type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MovementPayload, S>;
export type MovementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovementCountAggregateInputType | true;
};
export interface MovementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Movement'];
        meta: {
            name: 'Movement';
        };
    };
    findUnique<T extends MovementFindUniqueArgs>(args: Prisma.SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MovementFindFirstArgs>(args?: Prisma.SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MovementFindManyArgs>(args?: Prisma.SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MovementCreateArgs>(args: Prisma.SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MovementCreateManyArgs>(args?: Prisma.SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MovementDeleteArgs>(args: Prisma.SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MovementUpdateArgs>(args: Prisma.SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MovementDeleteManyArgs>(args?: Prisma.SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MovementUpdateManyArgs>(args: Prisma.SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MovementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MovementUpsertArgs>(args: Prisma.SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MovementCountArgs>(args?: Prisma.Subset<T, MovementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MovementCountAggregateOutputType> : number>;
    aggregate<T extends MovementAggregateArgs>(args: Prisma.Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>;
    groupBy<T extends MovementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MovementGroupByArgs['orderBy'];
    } : {
        orderBy?: MovementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MovementFieldRefs;
}
export interface Prisma__MovementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bin<T extends Prisma.BinDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BinDefaultArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pallet<T extends Prisma.Movement$palletArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Movement$palletArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MovementFieldRefs {
    readonly id: Prisma.FieldRef<"Movement", 'String'>;
    readonly binId: Prisma.FieldRef<"Movement", 'String'>;
    readonly palletId: Prisma.FieldRef<"Movement", 'String'>;
    readonly type: Prisma.FieldRef<"Movement", 'MovementType'>;
    readonly quantity: Prisma.FieldRef<"Movement", 'Int'>;
    readonly occurredAt: Prisma.FieldRef<"Movement", 'DateTime'>;
}
export type MovementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovementCreateInput, Prisma.MovementUncheckedCreateInput>;
};
export type MovementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MovementCreateManyInput | Prisma.MovementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MovementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    data: Prisma.MovementCreateManyInput | Prisma.MovementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MovementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MovementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovementUpdateInput, Prisma.MovementUncheckedUpdateInput>;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyInput>;
    where?: Prisma.MovementWhereInput;
    limit?: number;
};
export type MovementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyInput>;
    where?: Prisma.MovementWhereInput;
    limit?: number;
    include?: Prisma.MovementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MovementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovementCreateInput, Prisma.MovementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MovementUpdateInput, Prisma.MovementUncheckedUpdateInput>;
};
export type MovementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
    limit?: number;
};
export type Movement$palletArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    where?: Prisma.PalletWhereInput;
};
export type MovementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
};
export {};
