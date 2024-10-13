import { NotificationToken } from "../../domain/entities/NotificationToken";
import { NotificationTokenRepository } from "../../domain/repositories/NotificationTokenRepository";
import { NotificationTokenValue } from "../../domain/value-objects/NotificationTokenValue";
import { ExpirationTime } from "../../domain/value-objects/ExpirationTime";
import { TokenGeneratorService } from "../../domain/services/TokenGeneratorService";
import { ExpirationTimeService } from "../../domain/services/ExpirationTimeService";

export interface CreateNotificationTokenUseCase {
  execute(userId: string): Promise<string>;
}

export class CreateNotificationTokenUseCaseImpl
  implements CreateNotificationTokenUseCase
{
  constructor(
    private readonly notificationTokenRepository: NotificationTokenRepository,
    private readonly tokenGeneratorService: TokenGeneratorService,
    private readonly expirationTimeService: ExpirationTimeService
  ) {}

  async execute(userId: string): Promise<string> {
    const token = this.tokenGeneratorService.generate();
    const expirationTime = this.expirationTimeService.calculateExpirationTime();

    const notificationToken = new NotificationToken(
      userId,
      new NotificationTokenValue(token),
      new ExpirationTime(expirationTime)
    );

    await this.notificationTokenRepository.save(notificationToken);

    return token;
  }
}
