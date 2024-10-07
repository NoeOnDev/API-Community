import { User } from "../domain/User";
import { IUserRepository } from "../domain/IUserRepository";

export class SaveUser {
  constructor(private repository: IUserRepository) {}

  async run(user: User): Promise<void> {
    await this.repository.save(user);
  }
}
