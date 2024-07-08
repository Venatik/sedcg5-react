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
exports.BudgetORMEntity = void 0;
const trip_entity_1 = require("../../trip/entity/trip/trip.entity");
const trip_interface_1 = require("../../trip/entity/trip/trip.interface");
const typeorm_1 = require("typeorm");
let BudgetORMEntity = class BudgetORMEntity {
};
exports.BudgetORMEntity = BudgetORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BudgetORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BudgetORMEntity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BudgetORMEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => trip_entity_1.TripORMEntity, (trip) => trip.budget),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", trip_entity_1.TripORMEntity)
], BudgetORMEntity.prototype, "trip", void 0);
exports.BudgetORMEntity = BudgetORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'budget' })
], BudgetORMEntity);
//# sourceMappingURL=budget.entity.js.map