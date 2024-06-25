import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../models/User";
import { IUserService } from "../interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) { }

    async createUser(userData: Partial<User>): Promise<User> {
        return await this.userRepository.createUser(userData);
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.getUserById(id);
    }
}
