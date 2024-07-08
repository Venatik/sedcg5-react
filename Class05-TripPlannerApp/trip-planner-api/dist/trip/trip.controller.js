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
exports.TripController = void 0;
const common_1 = require("@nestjs/common");
const trip_service_1 = require("./trip.service");
const trip_dto_1 = require("./dto/trip.dto");
let TripController = class TripController {
    constructor(tripService) {
        this.tripService = tripService;
    }
    async listTrips(request) {
        const trips = await this.tripService.getTrips();
        return trips;
    }
    async addTrip(requestBody, request) {
        console.log('Request body', requestBody);
        console.log('USER IN ADD TRIP FROM REQUEST', request['user']);
        const tripCreationProps = {
            budget: requestBody.budget,
            destination: requestBody.destination,
            notes: requestBody.notes,
            status: requestBody.status,
            startDate: requestBody.startDate,
            endDate: requestBody.endDate,
            imageUrl: requestBody.imageUrl,
        };
        const id = await this.tripService.createTrip(tripCreationProps);
        return { message: 'Success created', tripId: id };
    }
    async getTrip(id) {
        const trip = await this.tripService.getTrip(id);
        return trip;
    }
    async deleteTrip(id) {
        await this.tripService.removeTrip(id);
        return { message: 'Delete success' };
    }
    async updateTrip(id, requestBody) {
        await this.tripService.updateTrip(id, requestBody);
        return { message: 'Update trip success.' };
    }
};
exports.TripController = TripController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "listTrips", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trip_dto_1.TripDTO, Object]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "addTrip", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "getTrip", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "deleteTrip", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, trip_dto_1.UpdateTripDTO]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "updateTrip", null);
exports.TripController = TripController = __decorate([
    (0, common_1.Controller)('trip'),
    __metadata("design:paramtypes", [trip_service_1.TripService])
], TripController);
//# sourceMappingURL=trip.controller.js.map