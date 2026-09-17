"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.AuditTaskScalarFieldEnum = exports.AuditPlanScalarFieldEnum = exports.ScoreSnapshotScalarFieldEnum = exports.MovementScalarFieldEnum = exports.PalletScalarFieldEnum = exports.ProductScalarFieldEnum = exports.BinScalarFieldEnum = exports.RackScalarFieldEnum = exports.AisleScalarFieldEnum = exports.WarehouseScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/library");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "6.19.3",
    engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
};
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    Warehouse: 'Warehouse',
    Aisle: 'Aisle',
    Rack: 'Rack',
    Bin: 'Bin',
    Product: 'Product',
    Pallet: 'Pallet',
    Movement: 'Movement',
    ScoreSnapshot: 'ScoreSnapshot',
    AuditPlan: 'AuditPlan',
    AuditTask: 'AuditTask'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.WarehouseScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
};
exports.AisleScalarFieldEnum = {
    id: 'id',
    warehouseId: 'warehouseId',
    code: 'code'
};
exports.RackScalarFieldEnum = {
    id: 'id',
    aisleId: 'aisleId',
    code: 'code'
};
exports.BinScalarFieldEnum = {
    id: 'id',
    rackId: 'rackId',
    code: 'code',
    lastAuditedAt: 'lastAuditedAt',
    createdAt: 'createdAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    sku: 'sku',
    name: 'name'
};
exports.PalletScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    binId: 'binId',
    quantity: 'quantity',
    createdAt: 'createdAt'
};
exports.MovementScalarFieldEnum = {
    id: 'id',
    binId: 'binId',
    palletId: 'palletId',
    type: 'type',
    quantity: 'quantity',
    occurredAt: 'occurredAt'
};
exports.ScoreSnapshotScalarFieldEnum = {
    id: 'id',
    binId: 'binId',
    score: 'score',
    breakdown: 'breakdown',
    calculatedAt: 'calculatedAt'
};
exports.AuditPlanScalarFieldEnum = {
    id: 'id',
    createdAt: 'createdAt',
    topN: 'topN'
};
exports.AuditTaskScalarFieldEnum = {
    id: 'id',
    auditPlanId: 'auditPlanId',
    binId: 'binId',
    status: 'status',
    createdAt: 'createdAt',
    expectedQuantity: 'expectedQuantity',
    countedQuantity: 'countedQuantity',
    passed: 'passed',
    countedAt: 'countedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map