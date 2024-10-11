import { User } from "./User";

export interface IUserRepository {
  save(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  findByUuid(uuid: string): Promise<User | null>;
  delete(id: number): Promise<void>;
}
