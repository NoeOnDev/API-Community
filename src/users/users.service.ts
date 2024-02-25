import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async create(userData): Promise<User> {
        const user = new User(userData);
        return await user.save();
    }

    findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }
}
