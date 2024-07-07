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
exports.UpdateTripDTO = exports.TripDTO = void 0;
const trip_interface_1 = require("../entity/trip/trip.interface");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
class BudgetDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: trip_interface_1.Currency, example: trip_interface_1.Currency.MKD }),
    (0, class_validator_1.IsEnum)(trip_interface_1.Currency),
    __metadata("design:type", String)
], BudgetDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BudgetDTO.prototype, "amount", void 0);
class TripDTO {
}
exports.TripDTO = TripDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BudgetDTO),
    __metadata("design:type", BudgetDTO)
], TripDTO.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], TripDTO.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: trip_interface_1.Status }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(trip_interface_1.Status),
    __metadata("design:type", String)
], TripDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], TripDTO.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TripDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TripDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TripDTO.prototype, "imageUrl", void 0);
class UpdateTripDTO extends (0, mapped_types_1.PartialType)(TripDTO) {
}
exports.UpdateTripDTO = UpdateTripDTO;
//# sourceMappingURL=trip.dto.js.map