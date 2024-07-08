import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignupDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/login.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    registerUser(userData: SignupDTO): Promise<number>;
    signIn(userData: LoginDTO): Promise<{
        token: string;
    }>;
}
