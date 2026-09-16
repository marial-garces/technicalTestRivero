import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type PalletModel = runtime.Types.Result.DefaultSelection<Prisma.$PalletPayload>;
export type AggregatePallet = {
    _count: PalletCountAggregateOutputType | null;
    _avg: PalletAvgAggregateOutputType | null;
    _sum: PalletSumAggregateOutputType | null;
    _min: PalletMinAggregateOutputType | null;
    _max: PalletMaxAggregateOutputType | null;
};
export type PalletAvgAggregateOutputType = {
    quantity: number | null;
};
export type PalletSumAggregateOutputType = {
    quantity: number | null;
};
export type PalletMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    binId: string | null;
    quantity: number | null;
    createdAt: Date | null;
};
export type PalletMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    binId: string | null;
    quantity: number | null;
    createdAt: Date | null;
};
export type PalletCountAggregateOutputType = {
    id: number;
    productId: number;
    binId: number;
    quantity: number;
    createdAt: number;
    _all: number;
};
export type PalletAvgAggregateInputType = {
    quantity?: true;
};
export type PalletSumAggregateInputType = {
    quantity?: true;
};
export type PalletMinAggregateInputType = {
    id?: true;
    productId?: true;
    binId?: true;
    quantity?: true;
    createdAt?: true;
};
export type PalletMaxAggregateInputType = {
    id?: true;
    productId?: true;
    binId?: true;
    quantity?: true;
    createdAt?: true;
};
export type PalletCountAggregateInputType = {
    id?: true;
    productId?: true;
    binId?: true;
    quantity?: true;
    createdAt?: true;
    _all?: true;
};
export type PalletAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PalletWhereInput;
    orderBy?: Prisma.PalletOrderByWithRelationInput | Prisma.PalletOrderByWithRelationInput[];
    cursor?: Prisma.PalletWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PalletCountAggregateInputType;
    _avg?: PalletAvgAggregateInputType;
    _sum?: PalletSumAggregateInputType;
    _min?: PalletMinAggregateInputType;
    _max?: PalletMaxAggregateInputType;
};
export type GetPalletAggregateType<T extends PalletAggregateArgs> = {
    [P in keyof T & keyof AggregatePallet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePallet[P]> : Prisma.GetScalarType<T[P], AggregatePallet[P]>;
};
export type PalletGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PalletWhereInput;
    orderBy?: Prisma.PalletOrderByWithAggregationInput | Prisma.PalletOrderByWithAggregationInput[];
    by: Prisma.PalletScalarFieldEnum[] | Prisma.PalletScalarFieldEnum;
    having?: Prisma.PalletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PalletCountAggregateInputType | true;
    _avg?: PalletAvgAggregateInputType;
    _sum?: PalletSumAggregateInputType;
    _min?: PalletMinAggregateInputType;
    _max?: PalletMaxAggregateInputType;
};
export type PalletGroupByOutputType = {
    id: string;
    productId: string;
    binId: string;
    quantity: number;
    createdAt: Date;
    _count: PalletCountAggregateOutputType | null;
    _avg: PalletAvgAggregateOutputType | null;
    _sum: PalletSumAggregateOutputType | null;
    _min: PalletMinAggregateOutputType | null;
    _max: PalletMaxAggregateOutputType | null;
};
type GetPalletGroupByPayload<T extends PalletGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PalletGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PalletGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PalletGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PalletGroupByOutputType[P]>;
}>>;
export type PalletWhereInput = {
    AND?: Prisma.PalletWhereInput | Prisma.PalletWhereInput[];
    OR?: Prisma.PalletWhereInput[];
    NOT?: Prisma.PalletWhereInput | Prisma.PalletWhereInput[];
    id?: Prisma.StringFilter<"Pallet"> | string;
    productId?: Prisma.StringFilter<"Pallet"> | string;
    binId?: Prisma.StringFilter<"Pallet"> | string;
    quantity?: Prisma.IntFilter<"Pallet"> | number;
    createdAt?: Prisma.DateTimeFilter<"Pallet"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
    movements?: Prisma.MovementListRelationFilter;
};
export type PalletOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    bin?: Prisma.BinOrderByWithRelationInput;
    movements?: Prisma.MovementOrderByRelationAggregateInput;
};
export type PalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PalletWhereInput | Prisma.PalletWhereInput[];
    OR?: Prisma.PalletWhereInput[];
    NOT?: Prisma.PalletWhereInput | Prisma.PalletWhereInput[];
    productId?: Prisma.StringFilter<"Pallet"> | string;
    binId?: Prisma.StringFilter<"Pallet"> | string;
    quantity?: Prisma.IntFilter<"Pallet"> | number;
    createdAt?: Prisma.DateTimeFilter<"Pallet"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    bin?: Prisma.XOR<Prisma.BinScalarRelationFilter, Prisma.BinWhereInput>;
    movements?: Prisma.MovementListRelationFilter;
}, "id">;
export type PalletOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PalletCountOrderByAggregateInput;
    _avg?: Prisma.PalletAvgOrderByAggregateInput;
    _max?: Prisma.PalletMaxOrderByAggregateInput;
    _min?: Prisma.PalletMinOrderByAggregateInput;
    _sum?: Prisma.PalletSumOrderByAggregateInput;
};
export type PalletScalarWhereWithAggregatesInput = {
    AND?: Prisma.PalletScalarWhereWithAggregatesInput | Prisma.PalletScalarWhereWithAggregatesInput[];
    OR?: Prisma.PalletScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PalletScalarWhereWithAggregatesInput | Prisma.PalletScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Pallet"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Pallet"> | string;
    binId?: Prisma.StringWithAggregatesFilter<"Pallet"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Pallet"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Pallet"> | Date | string;
};
export type PalletCreateInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPalletsInput;
    bin: Prisma.BinCreateNestedOneWithoutPalletsInput;
    movements?: Prisma.MovementCreateNestedManyWithoutPalletInput;
};
export type PalletUncheckedCreateInput = {
    id?: string;
    productId: string;
    binId: string;
    quantity: number;
    createdAt?: Date | string;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutPalletInput;
};
export type PalletUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPalletsNestedInput;
    bin?: Prisma.BinUpdateOneRequiredWithoutPalletsNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutPalletNestedInput;
};
export type PalletUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutPalletNestedInput;
};
export type PalletCreateManyInput = {
    id?: string;
    productId: string;
    binId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type PalletUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PalletUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PalletListRelationFilter = {
    every?: Prisma.PalletWhereInput;
    some?: Prisma.PalletWhereInput;
    none?: Prisma.PalletWhereInput;
};
export type PalletOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PalletCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PalletAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type PalletMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PalletMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    binId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PalletSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type PalletNullableScalarRelationFilter = {
    is?: Prisma.PalletWhereInput | null;
    isNot?: Prisma.PalletWhereInput | null;
};
export type PalletCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutBinInput, Prisma.PalletUncheckedCreateWithoutBinInput> | Prisma.PalletCreateWithoutBinInput[] | Prisma.PalletUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutBinInput | Prisma.PalletCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.PalletCreateManyBinInputEnvelope;
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
};
export type PalletUncheckedCreateNestedManyWithoutBinInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutBinInput, Prisma.PalletUncheckedCreateWithoutBinInput> | Prisma.PalletCreateWithoutBinInput[] | Prisma.PalletUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutBinInput | Prisma.PalletCreateOrConnectWithoutBinInput[];
    createMany?: Prisma.PalletCreateManyBinInputEnvelope;
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
};
export type PalletUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutBinInput, Prisma.PalletUncheckedCreateWithoutBinInput> | Prisma.PalletCreateWithoutBinInput[] | Prisma.PalletUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutBinInput | Prisma.PalletCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.PalletUpsertWithWhereUniqueWithoutBinInput | Prisma.PalletUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.PalletCreateManyBinInputEnvelope;
    set?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    disconnect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    delete?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    update?: Prisma.PalletUpdateWithWhereUniqueWithoutBinInput | Prisma.PalletUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.PalletUpdateManyWithWhereWithoutBinInput | Prisma.PalletUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.PalletScalarWhereInput | Prisma.PalletScalarWhereInput[];
};
export type PalletUncheckedUpdateManyWithoutBinNestedInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutBinInput, Prisma.PalletUncheckedCreateWithoutBinInput> | Prisma.PalletCreateWithoutBinInput[] | Prisma.PalletUncheckedCreateWithoutBinInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutBinInput | Prisma.PalletCreateOrConnectWithoutBinInput[];
    upsert?: Prisma.PalletUpsertWithWhereUniqueWithoutBinInput | Prisma.PalletUpsertWithWhereUniqueWithoutBinInput[];
    createMany?: Prisma.PalletCreateManyBinInputEnvelope;
    set?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    disconnect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    delete?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    update?: Prisma.PalletUpdateWithWhereUniqueWithoutBinInput | Prisma.PalletUpdateWithWhereUniqueWithoutBinInput[];
    updateMany?: Prisma.PalletUpdateManyWithWhereWithoutBinInput | Prisma.PalletUpdateManyWithWhereWithoutBinInput[];
    deleteMany?: Prisma.PalletScalarWhereInput | Prisma.PalletScalarWhereInput[];
};
export type PalletCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutProductInput, Prisma.PalletUncheckedCreateWithoutProductInput> | Prisma.PalletCreateWithoutProductInput[] | Prisma.PalletUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutProductInput | Prisma.PalletCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PalletCreateManyProductInputEnvelope;
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
};
export type PalletUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutProductInput, Prisma.PalletUncheckedCreateWithoutProductInput> | Prisma.PalletCreateWithoutProductInput[] | Prisma.PalletUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutProductInput | Prisma.PalletCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PalletCreateManyProductInputEnvelope;
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
};
export type PalletUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutProductInput, Prisma.PalletUncheckedCreateWithoutProductInput> | Prisma.PalletCreateWithoutProductInput[] | Prisma.PalletUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutProductInput | Prisma.PalletCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PalletUpsertWithWhereUniqueWithoutProductInput | Prisma.PalletUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PalletCreateManyProductInputEnvelope;
    set?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    disconnect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    delete?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    update?: Prisma.PalletUpdateWithWhereUniqueWithoutProductInput | Prisma.PalletUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PalletUpdateManyWithWhereWithoutProductInput | Prisma.PalletUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PalletScalarWhereInput | Prisma.PalletScalarWhereInput[];
};
export type PalletUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutProductInput, Prisma.PalletUncheckedCreateWithoutProductInput> | Prisma.PalletCreateWithoutProductInput[] | Prisma.PalletUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutProductInput | Prisma.PalletCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PalletUpsertWithWhereUniqueWithoutProductInput | Prisma.PalletUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PalletCreateManyProductInputEnvelope;
    set?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    disconnect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    delete?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    connect?: Prisma.PalletWhereUniqueInput | Prisma.PalletWhereUniqueInput[];
    update?: Prisma.PalletUpdateWithWhereUniqueWithoutProductInput | Prisma.PalletUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PalletUpdateManyWithWhereWithoutProductInput | Prisma.PalletUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PalletScalarWhereInput | Prisma.PalletScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PalletCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutMovementsInput, Prisma.PalletUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.PalletWhereUniqueInput;
};
export type PalletUpdateOneWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.PalletCreateWithoutMovementsInput, Prisma.PalletUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.PalletCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.PalletUpsertWithoutMovementsInput;
    disconnect?: Prisma.PalletWhereInput | boolean;
    delete?: Prisma.PalletWhereInput | boolean;
    connect?: Prisma.PalletWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PalletUpdateToOneWithWhereWithoutMovementsInput, Prisma.PalletUpdateWithoutMovementsInput>, Prisma.PalletUncheckedUpdateWithoutMovementsInput>;
};
export type PalletCreateWithoutBinInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPalletsInput;
    movements?: Prisma.MovementCreateNestedManyWithoutPalletInput;
};
export type PalletUncheckedCreateWithoutBinInput = {
    id?: string;
    productId: string;
    quantity: number;
    createdAt?: Date | string;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutPalletInput;
};
export type PalletCreateOrConnectWithoutBinInput = {
    where: Prisma.PalletWhereUniqueInput;
    create: Prisma.XOR<Prisma.PalletCreateWithoutBinInput, Prisma.PalletUncheckedCreateWithoutBinInput>;
};
export type PalletCreateManyBinInputEnvelope = {
    data: Prisma.PalletCreateManyBinInput | Prisma.PalletCreateManyBinInput[];
    skipDuplicates?: boolean;
};
export type PalletUpsertWithWhereUniqueWithoutBinInput = {
    where: Prisma.PalletWhereUniqueInput;
    update: Prisma.XOR<Prisma.PalletUpdateWithoutBinInput, Prisma.PalletUncheckedUpdateWithoutBinInput>;
    create: Prisma.XOR<Prisma.PalletCreateWithoutBinInput, Prisma.PalletUncheckedCreateWithoutBinInput>;
};
export type PalletUpdateWithWhereUniqueWithoutBinInput = {
    where: Prisma.PalletWhereUniqueInput;
    data: Prisma.XOR<Prisma.PalletUpdateWithoutBinInput, Prisma.PalletUncheckedUpdateWithoutBinInput>;
};
export type PalletUpdateManyWithWhereWithoutBinInput = {
    where: Prisma.PalletScalarWhereInput;
    data: Prisma.XOR<Prisma.PalletUpdateManyMutationInput, Prisma.PalletUncheckedUpdateManyWithoutBinInput>;
};
export type PalletScalarWhereInput = {
    AND?: Prisma.PalletScalarWhereInput | Prisma.PalletScalarWhereInput[];
    OR?: Prisma.PalletScalarWhereInput[];
    NOT?: Prisma.PalletScalarWhereInput | Prisma.PalletScalarWhereInput[];
    id?: Prisma.StringFilter<"Pallet"> | string;
    productId?: Prisma.StringFilter<"Pallet"> | string;
    binId?: Prisma.StringFilter<"Pallet"> | string;
    quantity?: Prisma.IntFilter<"Pallet"> | number;
    createdAt?: Prisma.DateTimeFilter<"Pallet"> | Date | string;
};
export type PalletCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    bin: Prisma.BinCreateNestedOneWithoutPalletsInput;
    movements?: Prisma.MovementCreateNestedManyWithoutPalletInput;
};
export type PalletUncheckedCreateWithoutProductInput = {
    id?: string;
    binId: string;
    quantity: number;
    createdAt?: Date | string;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutPalletInput;
};
export type PalletCreateOrConnectWithoutProductInput = {
    where: Prisma.PalletWhereUniqueInput;
    create: Prisma.XOR<Prisma.PalletCreateWithoutProductInput, Prisma.PalletUncheckedCreateWithoutProductInput>;
};
export type PalletCreateManyProductInputEnvelope = {
    data: Prisma.PalletCreateManyProductInput | Prisma.PalletCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type PalletUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.PalletWhereUniqueInput;
    update: Prisma.XOR<Prisma.PalletUpdateWithoutProductInput, Prisma.PalletUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.PalletCreateWithoutProductInput, Prisma.PalletUncheckedCreateWithoutProductInput>;
};
export type PalletUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.PalletWhereUniqueInput;
    data: Prisma.XOR<Prisma.PalletUpdateWithoutProductInput, Prisma.PalletUncheckedUpdateWithoutProductInput>;
};
export type PalletUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.PalletScalarWhereInput;
    data: Prisma.XOR<Prisma.PalletUpdateManyMutationInput, Prisma.PalletUncheckedUpdateManyWithoutProductInput>;
};
export type PalletCreateWithoutMovementsInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPalletsInput;
    bin: Prisma.BinCreateNestedOneWithoutPalletsInput;
};
export type PalletUncheckedCreateWithoutMovementsInput = {
    id?: string;
    productId: string;
    binId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type PalletCreateOrConnectWithoutMovementsInput = {
    where: Prisma.PalletWhereUniqueInput;
    create: Prisma.XOR<Prisma.PalletCreateWithoutMovementsInput, Prisma.PalletUncheckedCreateWithoutMovementsInput>;
};
export type PalletUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.PalletUpdateWithoutMovementsInput, Prisma.PalletUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.PalletCreateWithoutMovementsInput, Prisma.PalletUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.PalletWhereInput;
};
export type PalletUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.PalletWhereInput;
    data: Prisma.XOR<Prisma.PalletUpdateWithoutMovementsInput, Prisma.PalletUncheckedUpdateWithoutMovementsInput>;
};
export type PalletUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPalletsNestedInput;
    bin?: Prisma.BinUpdateOneRequiredWithoutPalletsNestedInput;
};
export type PalletUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PalletCreateManyBinInput = {
    id?: string;
    productId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type PalletUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPalletsNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutPalletNestedInput;
};
export type PalletUncheckedUpdateWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutPalletNestedInput;
};
export type PalletUncheckedUpdateManyWithoutBinInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PalletCreateManyProductInput = {
    id?: string;
    binId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type PalletUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bin?: Prisma.BinUpdateOneRequiredWithoutPalletsNestedInput;
    movements?: Prisma.MovementUpdateManyWithoutPalletNestedInput;
};
export type PalletUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutPalletNestedInput;
};
export type PalletUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    binId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PalletCountOutputType = {
    movements: number;
};
export type PalletCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | PalletCountOutputTypeCountMovementsArgs;
};
export type PalletCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletCountOutputTypeSelect<ExtArgs> | null;
};
export type PalletCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
};
export type PalletSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    binId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    movements?: boolean | Prisma.Pallet$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.PalletCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pallet"]>;
export type PalletSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    binId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pallet"]>;
export type PalletSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    binId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pallet"]>;
export type PalletSelectScalar = {
    id?: boolean;
    productId?: boolean;
    binId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
};
export type PalletOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "binId" | "quantity" | "createdAt", ExtArgs["result"]["pallet"]>;
export type PalletInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
    movements?: boolean | Prisma.Pallet$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.PalletCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PalletIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type PalletIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bin?: boolean | Prisma.BinDefaultArgs<ExtArgs>;
};
export type $PalletPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pallet";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        bin: Prisma.$BinPayload<ExtArgs>;
        movements: Prisma.$MovementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        binId: string;
        quantity: number;
        createdAt: Date;
    }, ExtArgs["result"]["pallet"]>;
    composites: {};
};
export type PalletGetPayload<S extends boolean | null | undefined | PalletDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PalletPayload, S>;
export type PalletCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PalletCountAggregateInputType | true;
};
export interface PalletDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pallet'];
        meta: {
            name: 'Pallet';
        };
    };
    findUnique<T extends PalletFindUniqueArgs>(args: Prisma.SelectSubset<T, PalletFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PalletFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PalletFindFirstArgs>(args?: Prisma.SelectSubset<T, PalletFindFirstArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PalletFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PalletFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PalletFindManyArgs>(args?: Prisma.SelectSubset<T, PalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PalletCreateArgs>(args: Prisma.SelectSubset<T, PalletCreateArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PalletCreateManyArgs>(args?: Prisma.SelectSubset<T, PalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PalletCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PalletDeleteArgs>(args: Prisma.SelectSubset<T, PalletDeleteArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PalletUpdateArgs>(args: Prisma.SelectSubset<T, PalletUpdateArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PalletDeleteManyArgs>(args?: Prisma.SelectSubset<T, PalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PalletUpdateManyArgs>(args: Prisma.SelectSubset<T, PalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PalletUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PalletUpsertArgs>(args: Prisma.SelectSubset<T, PalletUpsertArgs<ExtArgs>>): Prisma.Prisma__PalletClient<runtime.Types.Result.GetResult<Prisma.$PalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PalletCountArgs>(args?: Prisma.Subset<T, PalletCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PalletCountAggregateOutputType> : number>;
    aggregate<T extends PalletAggregateArgs>(args: Prisma.Subset<T, PalletAggregateArgs>): Prisma.PrismaPromise<GetPalletAggregateType<T>>;
    groupBy<T extends PalletGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PalletGroupByArgs['orderBy'];
    } : {
        orderBy?: PalletGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PalletFieldRefs;
}
export interface Prisma__PalletClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bin<T extends Prisma.BinDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BinDefaultArgs<ExtArgs>>): Prisma.Prisma__BinClient<runtime.Types.Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movements<T extends Prisma.Pallet$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pallet$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PalletFieldRefs {
    readonly id: Prisma.FieldRef<"Pallet", 'String'>;
    readonly productId: Prisma.FieldRef<"Pallet", 'String'>;
    readonly binId: Prisma.FieldRef<"Pallet", 'String'>;
    readonly quantity: Prisma.FieldRef<"Pallet", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Pallet", 'DateTime'>;
}
export type PalletFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    where: Prisma.PalletWhereUniqueInput;
};
export type PalletFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    where: Prisma.PalletWhereUniqueInput;
};
export type PalletFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PalletFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PalletFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PalletCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PalletCreateInput, Prisma.PalletUncheckedCreateInput>;
};
export type PalletCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PalletCreateManyInput | Prisma.PalletCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PalletCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    data: Prisma.PalletCreateManyInput | Prisma.PalletCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PalletIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PalletUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PalletUpdateInput, Prisma.PalletUncheckedUpdateInput>;
    where: Prisma.PalletWhereUniqueInput;
};
export type PalletUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PalletUpdateManyMutationInput, Prisma.PalletUncheckedUpdateManyInput>;
    where?: Prisma.PalletWhereInput;
    limit?: number;
};
export type PalletUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PalletUpdateManyMutationInput, Prisma.PalletUncheckedUpdateManyInput>;
    where?: Prisma.PalletWhereInput;
    limit?: number;
    include?: Prisma.PalletIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PalletUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    where: Prisma.PalletWhereUniqueInput;
    create: Prisma.XOR<Prisma.PalletCreateInput, Prisma.PalletUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PalletUpdateInput, Prisma.PalletUncheckedUpdateInput>;
};
export type PalletDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
    where: Prisma.PalletWhereUniqueInput;
};
export type PalletDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PalletWhereInput;
    limit?: number;
};
export type Pallet$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PalletDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PalletSelect<ExtArgs> | null;
    omit?: Prisma.PalletOmit<ExtArgs> | null;
    include?: Prisma.PalletInclude<ExtArgs> | null;
};
export {};
