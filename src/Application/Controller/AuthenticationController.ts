import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthenticationDto } from '../DTOs/AuthenticationDto';
import { UserRepository } from '../../Domain/User/UserRepository';
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class AuthenticationController {
    constructor(private readonly userRepository: UserRepository,  private jwtService: JwtService) { }

    @Post()
    async register(@Body() body: AuthenticationDto) {
        
        let user = await this.userRepository.findByEmail(body.email);

        if(!user) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'User not found' }, HttpStatus.UNAUTHORIZED);
        }

        const isMatch = await user.validatePassword(body.password);
        if(!isMatch) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'Email or password incorrect' }, HttpStatus.UNAUTHORIZED);
        }

        if(user.blocked) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user blocked' }, HttpStatus.UNAUTHORIZED);
        }

        return { 
            access_token: this.jwtService.sign({ username: user.email, id: user.id }) 
        }

    }
    
}
