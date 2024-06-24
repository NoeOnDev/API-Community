import { injectable, inject } from "tsyringe";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";
import { IUserService } from "../interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
    constructor(
        @inject("UserRepository") private userRepository: UserRepository
    ) { }

    async createUser(userData: Partial<User>): Promise<User> {
        return await this.userRepository.createUser(userData);
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.getUserById(id);
    }
}
