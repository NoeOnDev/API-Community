import { injectable } from "tsyringe";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";
import { IUserService } from "../interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData: Partial<User>): Promise<User> {
        return await this.userRepository.createUser(userData);
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.getUserById(id);
    }
}
