import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.userService.create(userCreateDto);
  }
}