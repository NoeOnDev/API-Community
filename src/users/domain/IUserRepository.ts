import { User } from "./User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByUuid(uuid: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  delete(uuid: string): Promise<void>;
}
