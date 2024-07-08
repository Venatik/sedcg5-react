import { Currency, Status } from '../entity/trip/trip.interface';
declare class BudgetDTO {
    currency: Currency;
    amount: number;
}
export declare class TripDTO {
    budget: BudgetDTO;
    destination: string;
    status: Status;
    notes: string;
    startDate: number;
    endDate: number;
    imageUrl: string;
}
declare const UpdateTripDTO_base: import("@nestjs/mapped-types").MappedType<Partial<TripDTO>>;
export declare class UpdateTripDTO extends UpdateTripDTO_base {
}
export {};
