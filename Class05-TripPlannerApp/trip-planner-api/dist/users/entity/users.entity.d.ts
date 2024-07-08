import { TripORMEntity } from 'src/trip/entity/trip/trip.entity';
export declare class UserORMEntity {
    id: number;
    email: string;
    password: string;
    trips: TripORMEntity[];
}
