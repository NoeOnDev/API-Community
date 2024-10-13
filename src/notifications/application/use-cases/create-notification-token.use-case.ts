import { NotificationTokenRepository } from "../../domain/repositories/NotificationTokenRepository";
import { NotificationTokenValue } from "../../domain/value-objects/NotificationTokenValue";
import { ExpirationTime } from "../../domain/value-objects/ExpirationTime";
import { TokenGeneratorService } from "../../domain/services/TokenGeneratorService";
import { ExpirationTimeService } from "../../domain/services/ExpirationTimeService";
import { NotificationServiceFactory } from "../../domain/services/NotificationService";
import { NotificationToken } from "../../domain/entities/NotificationToken";

export class CreateNotificationTokenUseCase {
  constructor(
    private readonly notificationTokenRepository: NotificationTokenRepository,
    private readonly tokenGeneratorService: TokenGeneratorService,
    private readonly expirationTimeService: ExpirationTimeService,
    private readonly notificationServiceFactory: NotificationServiceFactory
  ) {}

  async execute(
    userId: string,
    context: string,
    contactInfo: string
  ): Promise<string> {
    const token = this.tokenGeneratorService.generate();
    const expirationTime = this.expirationTimeService.calculateExpirationTime();

    const notificationToken = new NotificationToken(
      userId,
      new NotificationTokenValue(token),
      new ExpirationTime(expirationTime)
    );

    await this.notificationTokenRepository.save(notificationToken);

    const notificationService =
      this.notificationServiceFactory.getService(context);
    await notificationService.send(token, contactInfo);

    return token;
  }
}
