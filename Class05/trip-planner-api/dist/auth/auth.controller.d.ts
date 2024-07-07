import { SignupDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(signUpDTO: SignupDTO): Promise<number>;
    login(loginDTO: LoginDTO): Promise<{
        token: string;
    }>;
}
