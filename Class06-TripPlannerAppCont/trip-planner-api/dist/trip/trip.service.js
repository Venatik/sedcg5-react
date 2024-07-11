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
exports.TripService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const trip_entity_1 = require("./entity/trip/trip.entity");
const typeorm_2 = require("typeorm");
const budget_entity_1 = require("../budget/entity/budget.entity");
const users_service_1 = require("../users/users.service");
let TripService = class TripService {
    constructor(tripRepository, budgetRepository, userService) {
        this.tripRepository = tripRepository;
        this.budgetRepository = budgetRepository;
        this.userService = userService;
    }
    async getTrips(userID) {
        const trips = await this.tripRepository.find({
            relations: ['budget'],
        });
        return trips;
    }
    async createTrip(tripCreationProps, userID) {
        const budgetProps = {
            amount: tripCreationProps.budget.amount,
            currency: tripCreationProps.budget.currency,
        };
        const budgetEntity = this.budgetRepository.create(budgetProps);
        await this.budgetRepository.save(budgetEntity);
        const trip = {
            destination: tripCreationProps.destination,
            status: tripCreationProps.status,
            notes: tripCreationProps.notes,
            startDate: tripCreationProps.startDate,
            endDate: tripCreationProps.endDate,
            createdAt: new Date().getTime(),
            updatedAt: null,
            imageUrl: tripCreationProps.imageUrl,
        };
        const user = await this.userService.findOneByID(userID);
        const tripEntity = this.tripRepository.create({
            ...trip,
            budget: budgetEntity,
        });
        await this.tripRepository.save(tripEntity);
        return tripEntity.id;
    }
    async getTrip(id) {
        const trip = await this.tripRepository.findOne({
            where: { id: id },
            relations: ['budget'],
        });
        if (!trip) {
            throw new common_1.HttpException(`Trip with id: ${id} is not found`, 404);
        }
        return trip;
    }
    async removeTrip(id) {
        const trip = await this.getTrip(id);
        const budgetID = trip.budget.id;
        await this.budgetRepository.delete({ id: budgetID });
        const response = await this.tripRepository.delete({ id: id });
        if (!response.affected) {
            throw new common_1.NotFoundException(`Trip with id: ${id} was not found.`);
        }
    }
    async updateTrip(id, updateTripProps) {
        const { budget, ...rest } = updateTripProps;
        const response = await this.tripRepository.update({ id: id }, rest);
        if (!response.affected) {
            throw new common_1.NotFoundException(`Trip with id: ${id} was not found.`);
        }
    }
};
exports.TripService = TripService;
exports.TripService = TripService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trip_entity_1.TripORMEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(budget_entity_1.BudgetORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService])
], TripService);
//# sourceMappingURL=trip.service.js.map