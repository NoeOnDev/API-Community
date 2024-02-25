import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() userData): Promise<User> {
        return this.usersService.create(userData);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
