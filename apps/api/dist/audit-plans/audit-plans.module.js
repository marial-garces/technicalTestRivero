"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditPlansModule = void 0;
const common_1 = require("@nestjs/common");
const audit_plans_controller_1 = require("./audit-plans.controller");
const audit_plans_service_1 = require("./audit-plans.service");
let AuditPlansModule = class AuditPlansModule {
};
exports.AuditPlansModule = AuditPlansModule;
exports.AuditPlansModule = AuditPlansModule = __decorate([
    (0, common_1.Module)({
        controllers: [audit_plans_controller_1.AuditPlansController],
        providers: [audit_plans_service_1.AuditPlansService],
    })
], AuditPlansModule);
//# sourceMappingURL=audit-plans.module.js.map