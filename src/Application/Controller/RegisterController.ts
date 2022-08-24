import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from 'src/Application/DTOs/RegisterUserDto';
import { UserRepository } from './../../Domain/User/UserRepository';

@Controller('register')
export class RegisterController {
    constructor(private readonly userRepository: UserRepository) { }

    @Post()
    async register(@Body() body: RegisterUserDto) {
        
        let exists = await this.userRepository.findByEmail(body.email);

        if(exists) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'User already exist' }, HttpStatus.UNAUTHORIZED);
        }

        this.userRepository.create(body);
    }
    
}
