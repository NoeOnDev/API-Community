import { User } from "../models/User";

export interface IUserService {
    createUser(userData: Partial<User>): Promise<User>;
    getUserById(id: number): Promise<User | null>;
}
