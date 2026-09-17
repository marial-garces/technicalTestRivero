"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTasksController = void 0;
const common_1 = require("@nestjs/common");
const audit_tasks_service_1 = require("./audit-tasks.service");
const client_1 = require("../generated/prisma/client");
const VALID_STATUSES = Object.values(client_1.TaskStatus);
let AuditTasksController = class AuditTasksController {
    constructor(auditTasksService) {
        this.auditTasksService = auditTasksService;
    }
    findAll(status) {
        if (status !== undefined && !VALID_STATUSES.includes(status)) {
            throw new common_1.BadRequestException(`status must be one of: ${VALID_STATUSES.join(', ')}`);
        }
        return this.auditTasksService.findAll(status);
    }
    findOne(id) {
        return this.auditTasksService.findOne(id);
    }
    count(id, countedQuantity) {
        if (typeof countedQuantity !== 'number' || !Number.isFinite(countedQuantity) || countedQuantity < 0) {
            throw new common_1.BadRequestException('countedQuantity must be a non-negative number');
        }
        return this.auditTasksService.count(id, countedQuantity);
    }
};
exports.AuditTasksController = AuditTasksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditTasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditTasksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/count'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('countedQuantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AuditTasksController.prototype, "count", null);
exports.AuditTasksController = AuditTasksController = __decorate([
    (0, common_1.Controller)('audit-tasks'),
    __metadata("design:paramtypes", [audit_tasks_service_1.AuditTasksService])
], AuditTasksController);
//# sourceMappingURL=audit-tasks.controller.js.map