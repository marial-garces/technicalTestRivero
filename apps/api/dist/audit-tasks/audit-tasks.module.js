"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTasksModule = void 0;
const common_1 = require("@nestjs/common");
const audit_tasks_controller_1 = require("./audit-tasks.controller");
const audit_tasks_service_1 = require("./audit-tasks.service");
const scoring_module_1 = require("../scoring/scoring.module");
let AuditTasksModule = class AuditTasksModule {
};
exports.AuditTasksModule = AuditTasksModule;
exports.AuditTasksModule = AuditTasksModule = __decorate([
    (0, common_1.Module)({
        imports: [scoring_module_1.ScoringModule],
        controllers: [audit_tasks_controller_1.AuditTasksController],
        providers: [audit_tasks_service_1.AuditTasksService],
    })
], AuditTasksModule);
//# sourceMappingURL=audit-tasks.module.js.map