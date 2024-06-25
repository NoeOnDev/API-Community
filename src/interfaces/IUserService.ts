import { User } from "../models/User";

export interface IUserService {
    createUser(userData: Partial<User>): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    loginUser(email: string, password: string): Promise<User | null>;
}
