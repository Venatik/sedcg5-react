import { Currency } from 'src/trip/entity/trip/trip.interface';
declare class BudgetDTO {
    currency: Currency;
    amount: number;
}
declare const UpdateBudgetDTO_base: import("@nestjs/mapped-types").MappedType<Partial<BudgetDTO>>;
export declare class UpdateBudgetDTO extends UpdateBudgetDTO_base {
}
export {};
