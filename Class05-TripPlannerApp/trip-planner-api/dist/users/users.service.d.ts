import { Repository } from 'typeorm';
import { UserORMEntity } from './entity/users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserORMEntity>);
    findOneByEmail(email: string): Promise<UserORMEntity>;
    findOneByID(userID: number): Promise<UserORMEntity>;
    createUser(email: string, password: string): Promise<number>;
}
