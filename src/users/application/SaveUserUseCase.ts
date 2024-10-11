import { IUserRepository } from "../domain/IUserRepository";
import { IIdentifierGenerator } from "../domain/IIdentifierGenerator";
import { IHashService } from "../domain/IHashService";
import { User } from "../domain/User";

interface SaveUserCommand {
  name: string;
  email: string;
  password: string;
}

export class SaveUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly idGenerator: IIdentifierGenerator,
    private readonly hashService: IHashService
  ) {}

  async execute(command: SaveUserCommand): Promise<User> {
    const uuid = this.idGenerator.generate();
    const hashedPassword = await this.hashService.hash(command.password);
    const user = User.create(uuid, command.name, command.email, hashedPassword);
    return await this.userRepository.save(user);
  }
}
