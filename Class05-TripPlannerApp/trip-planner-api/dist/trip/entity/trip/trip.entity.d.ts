import { Timestamp } from 'typeorm';
import { Status } from './trip.interface';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UserORMEntity } from 'src/users/entity/users.entity';
export declare class TripORMEntity {
    id: string;
    budget: BudgetORMEntity;
    destination: string;
    notes: string;
    status: Status;
    startDate: Timestamp;
    endDate: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    imageUrl: string;
    user: UserORMEntity;
}
