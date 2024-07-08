import { TripService } from './trip.service';
import { TripDTO, UpdateTripDTO } from './dto/trip.dto';
import { Request } from 'express';
export declare class TripController {
    private tripService;
    constructor(tripService: TripService);
    listTrips(request: Request): Promise<import("./entity/trip/trip.entity").TripORMEntity[]>;
    addTrip(requestBody: TripDTO, request: Request): Promise<{
        message: string;
        tripId: string;
    }>;
    getTrip(id: string): Promise<import("./entity/trip/trip.entity").TripORMEntity>;
    deleteTrip(id: string): Promise<{
        message: string;
    }>;
    updateTrip(id: string, requestBody: UpdateTripDTO): Promise<{
        message: string;
    }>;
}
