import { TripCreationProps, UpdateTripProps } from './entity/trip/trip.interface';
import { TripORMEntity } from './entity/trip/trip.entity';
import { Repository } from 'typeorm';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UsersService } from 'src/users/users.service';
export declare class TripService {
    private tripRepository;
    private budgetRepository;
    private userService;
    constructor(tripRepository: Repository<TripORMEntity>, budgetRepository: Repository<BudgetORMEntity>, userService: UsersService);
    getTrips(userID?: number): Promise<TripORMEntity[]>;
    createTrip(tripCreationProps: TripCreationProps, userID?: number): Promise<string>;
    getTrip(id: string): Promise<TripORMEntity>;
    removeTrip(id: string): Promise<void>;
    updateTrip(id: string, updateTripProps: UpdateTripProps): Promise<void>;
}
