import { NotificationToken } from "../../domain/entities/NotificationToken";
import { NotificationTokenRepository } from "../../domain/repositories/NotificationTokenRepository";
import { NotificationTokenValue } from "../../domain/value-objects/NotificationTokenValue";
import { ExpirationTime } from "../../domain/value-objects/ExpirationTime";
import { Timestamp } from "../../domain/value-objects/Timestamp";
import { TokenGeneratorService } from "../../domain/services/TokenGeneratorService";
import { ExpirationTimeService } from "../../domain/services/ExpirationTimeService";

export interface CreateNotificationTokenUseCase {
  execute(): Promise<string>;
}

export class CreateNotificationTokenUseCaseImpl
  implements CreateNotificationTokenUseCase
{
  constructor(
    private readonly notificationTokenRepository: NotificationTokenRepository,
    private readonly tokenGeneratorService: TokenGeneratorService,
    private readonly expirationTimeService: ExpirationTimeService
  ) {}

  async execute(): Promise<string> {
    const token = this.tokenGeneratorService.generate();
    const expirationTime = this.expirationTimeService.calculateExpirationTime();
    const creationTime = new Timestamp(new Date());

    const notificationToken = new NotificationToken(
      new NotificationTokenValue(token),
      new ExpirationTime(expirationTime),
      creationTime
    );

    await this.notificationTokenRepository.save(notificationToken);

    return token;
  }
}
