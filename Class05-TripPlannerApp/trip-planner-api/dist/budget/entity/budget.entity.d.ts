import { TripORMEntity } from 'src/trip/entity/trip/trip.entity';
import { Currency } from 'src/trip/entity/trip/trip.interface';
export declare class BudgetORMEntity {
    id: string;
    currency: Currency;
    amount: number;
    trip: TripORMEntity;
}
