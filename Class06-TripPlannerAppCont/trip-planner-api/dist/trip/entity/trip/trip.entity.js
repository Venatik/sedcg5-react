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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripORMEntity = void 0;
const typeorm_1 = require("typeorm");
const trip_interface_1 = require("./trip.interface");
const budget_entity_1 = require("../../../budget/entity/budget.entity");
const users_entity_1 = require("../../../users/entity/users.entity");
let TripORMEntity = class TripORMEntity {
};
exports.TripORMEntity = TripORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TripORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => budget_entity_1.BudgetORMEntity, (budget) => budget.trip),
    __metadata("design:type", budget_entity_1.BudgetORMEntity)
], TripORMEntity.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripORMEntity.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripORMEntity.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripORMEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
    }),
    __metadata("design:type", typeorm_1.Timestamp)
], TripORMEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
    }),
    __metadata("design:type", typeorm_1.Timestamp)
], TripORMEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
    }),
    __metadata("design:type", typeorm_1.Timestamp)
], TripORMEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: true,
    }),
    __metadata("design:type", typeorm_1.Timestamp)
], TripORMEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripORMEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UserORMEntity, (user) => user.trips),
    __metadata("design:type", users_entity_1.UserORMEntity)
], TripORMEntity.prototype, "user", void 0);
exports.TripORMEntity = TripORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'trip' })
], TripORMEntity);
//# sourceMappingURL=trip.entity.js.map