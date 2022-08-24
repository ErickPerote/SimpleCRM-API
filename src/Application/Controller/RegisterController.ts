import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from 'src/Application/DTOs/RegisterUserDto';
import { UserRepository } from './../../Domain/User/UserRepository';
import { JwtService } from '@nestjs/jwt';

@Controller('register')
export class RegisterController {
    constructor(private readonly userRepository: UserRepository, private jwtService: JwtService) { }

    @Post()
    async register(@Body() body: RegisterUserDto) {
        
        let exists = await this.userRepository.findByEmail(body.email);

        if(exists) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'User already exist' }, HttpStatus.UNAUTHORIZED);
        }

        let user = await this.userRepository.create(body);

        return { 
            access_token: this.jwtService.sign({ username: user.email, id: user.id }) 
        }

    }
    
}
