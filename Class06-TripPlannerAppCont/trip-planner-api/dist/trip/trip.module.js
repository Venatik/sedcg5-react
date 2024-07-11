"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripModule = void 0;
const common_1 = require("@nestjs/common");
const trip_service_1 = require("./trip.service");
const trip_controller_1 = require("./trip.controller");
const typeorm_1 = require("@nestjs/typeorm");
const trip_entity_1 = require("./entity/trip/trip.entity");
const budget_entity_1 = require("../budget/entity/budget.entity");
const users_module_1 = require("../users/users.module");
const trip_middleware_1 = require("./trip.middleware");
let TripModule = class TripModule {
    configure(consumer) {
        consumer.apply(trip_middleware_1.TripMiddleware).forRoutes('/trip');
    }
};
exports.TripModule = TripModule;
exports.TripModule = TripModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([trip_entity_1.TripORMEntity, budget_entity_1.BudgetORMEntity]),
            users_module_1.UsersModule,
        ],
        providers: [trip_service_1.TripService],
        controllers: [trip_controller_1.TripController],
    })
], TripModule);
//# sourceMappingURL=trip.module.js.map