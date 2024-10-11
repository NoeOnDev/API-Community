import { IUserRepository } from "../domain/IUserRepository";
import { IIdentifierGenerator } from "../domain/IIdentifierGenerator";
import { User } from "../domain/User";

interface SaveUserCommand {
  name: string;
  email: string;
}

export class SaveUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly idGenerator: IIdentifierGenerator
  ) {}

  async execute(command: SaveUserCommand): Promise<User> {
    const uuid = this.idGenerator.generate();
    const user = User.create(uuid, command.name, command.email);
    return await this.userRepository.save(user);
  }
}
