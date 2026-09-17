import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Warehouse: "Warehouse";
    readonly Aisle: "Aisle";
    readonly Rack: "Rack";
    readonly Bin: "Bin";
    readonly Product: "Product";
    readonly Pallet: "Pallet";
    readonly Movement: "Movement";
    readonly ScoreSnapshot: "ScoreSnapshot";
    readonly AuditPlan: "AuditPlan";
    readonly AuditTask: "AuditTask";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const WarehouseScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum];
export declare const AisleScalarFieldEnum: {
    readonly id: "id";
    readonly warehouseId: "warehouseId";
    readonly code: "code";
};
export type AisleScalarFieldEnum = (typeof AisleScalarFieldEnum)[keyof typeof AisleScalarFieldEnum];
export declare const RackScalarFieldEnum: {
    readonly id: "id";
    readonly aisleId: "aisleId";
    readonly code: "code";
};
export type RackScalarFieldEnum = (typeof RackScalarFieldEnum)[keyof typeof RackScalarFieldEnum];
export declare const BinScalarFieldEnum: {
    readonly id: "id";
    readonly rackId: "rackId";
    readonly code: "code";
    readonly lastAuditedAt: "lastAuditedAt";
    readonly createdAt: "createdAt";
};
export type BinScalarFieldEnum = (typeof BinScalarFieldEnum)[keyof typeof BinScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly sku: "sku";
    readonly name: "name";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const PalletScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly binId: "binId";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
};
export type PalletScalarFieldEnum = (typeof PalletScalarFieldEnum)[keyof typeof PalletScalarFieldEnum];
export declare const MovementScalarFieldEnum: {
    readonly id: "id";
    readonly binId: "binId";
    readonly palletId: "palletId";
    readonly type: "type";
    readonly quantity: "quantity";
    readonly occurredAt: "occurredAt";
};
export type MovementScalarFieldEnum = (typeof MovementScalarFieldEnum)[keyof typeof MovementScalarFieldEnum];
export declare const ScoreSnapshotScalarFieldEnum: {
    readonly id: "id";
    readonly binId: "binId";
    readonly score: "score";
    readonly breakdown: "breakdown";
    readonly calculatedAt: "calculatedAt";
};
export type ScoreSnapshotScalarFieldEnum = (typeof ScoreSnapshotScalarFieldEnum)[keyof typeof ScoreSnapshotScalarFieldEnum];
export declare const AuditPlanScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly topN: "topN";
};
export type AuditPlanScalarFieldEnum = (typeof AuditPlanScalarFieldEnum)[keyof typeof AuditPlanScalarFieldEnum];
export declare const AuditTaskScalarFieldEnum: {
    readonly id: "id";
    readonly auditPlanId: "auditPlanId";
    readonly binId: "binId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly expectedQuantity: "expectedQuantity";
    readonly countedQuantity: "countedQuantity";
    readonly passed: "passed";
    readonly countedAt: "countedAt";
};
export type AuditTaskScalarFieldEnum = (typeof AuditTaskScalarFieldEnum)[keyof typeof AuditTaskScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
