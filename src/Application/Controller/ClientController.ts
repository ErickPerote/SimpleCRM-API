import { Controller, Get, Body, HttpException, HttpStatus, UseGuards, Request, Post, Delete, Put, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRepository } from 'src/Domain/User/UserRepository';
import { ClientRepository } from 'src/Domain/Client/ClientRepository';

import { RegisterDto } from 'src/Application/DTOs/RegisterClientDto';
import { DeleteClientDto } from 'src/Application/DTOs/DeleteClientDto';

@UseGuards(AuthGuard('jwt'))
@Controller('client')
export class ClientController {
    constructor(private readonly userRepository: UserRepository, private readonly clientRepository: ClientRepository) { }

    @Get()
    async list(@Request() req: any) {
        let user = await this.userRepository.findClientsByUser(req.user.id);
        return user.clients
    }

    @Post()
    async create(@Body() body: RegisterDto, @Request() req: any) {
        let client = await this.clientRepository.create({ ...body, user_id: req.user.id });
        return client
    }

    @Put('/:id')
    async update(@Body() body: Partial<RegisterDto>, @Request() req: any, @Param() param: DeleteClientDto) {
        let client = await this.clientRepository.findOne(param.id);

        if(!client || client.user_id !== req.user.id) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'Client Not Found' }, HttpStatus.UNAUTHORIZED);
        }

        let data = await client.update(body)

        return data
    }
    
    @Delete('/:id')
    async delete(@Body() body: Partial<RegisterDto>, @Request() req: any, @Param() param: DeleteClientDto) {
        let client = await this.clientRepository.findOne(param.id);

        if(!client || client.user_id !== req.user.id) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'Client Not Found' }, HttpStatus.UNAUTHORIZED);
        }

        return client.destroy()
    }
}
