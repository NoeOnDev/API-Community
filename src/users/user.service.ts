import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async create(userCreateDto: UserCreateDto): Promise<User> {
    const user = new User();
    user.firstName = userCreateDto.firstName;
    user.lastName = userCreateDto.lastName;
    user.birthday = userCreateDto.birthday;
    user.phone = userCreateDto.phone;
    user.username = userCreateDto.username;
    user.email = userCreateDto.email;
    user.password = userCreateDto.password;

    return user.save();
  }
}
