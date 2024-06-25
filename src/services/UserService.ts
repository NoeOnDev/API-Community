import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../models/User";
import { IUserService } from "../interfaces/IUserService";
import { HashService } from "./HashService";

@injectable()
export class UserService implements IUserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository,
        @inject("HashService") private hashService: HashService
    ) { }

    async createUser(userData: Partial<User>): Promise<User> {
        if (!userData.role) {
            userData.role = 'user';
        }
        if (userData.password) {
            userData.password = await this.hashService.hashPassword(userData.password);
        }
        return await this.userRepository.createUser(userData);
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.getUserById(id);
    }

    async loginUser(email: string, password: string): Promise<User | null> {
        const user = await this.userRepository.getUserByEmail(email);
        if (user && await this.hashService.comparePassword(password, user.password)) {
            return user;
        }
        return null;
    }
}
