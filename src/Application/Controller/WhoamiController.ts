import { Controller, Get, Body, HttpException, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { AuthenticationDto } from 'src/Application/DTOs/AuthenticationDto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('whoami')
export class WhoamiController {
    constructor() { }

    @Get()
    async whoami(@Request() req: any) {
        let user = req.user.id;
        delete user.password
        delete user.id
        return user
    }
    
}
