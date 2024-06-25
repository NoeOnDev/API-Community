import { User } from "../models/User";

export interface IUserRepository {
    createUser(userData: Partial<User>): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}
