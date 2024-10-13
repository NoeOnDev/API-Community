import { CreateNotificationTokenUseCaseImpl } from "../application/use-cases/create-notification-token.use-case";
import { NotificationTokenController } from "./http/controllers/NotificationTokenController";
import { MongoNotificationTokenRepository } from "./persistence/MongoNotificationTokenRepository";
import { DefaultExpirationTimeService } from "./services/DefaultExpirationTimeService";
import { NumericTokenGeneratorService } from "./services/NumericTokenGeneratorService";

const notificationTokenRepository = new MongoNotificationTokenRepository();
const tokenGeneratorService = new NumericTokenGeneratorService();
const expirationTimeService = new DefaultExpirationTimeService();
const createNotificationTokenUseCase = new CreateNotificationTokenUseCaseImpl(
  notificationTokenRepository,
  tokenGeneratorService,
  expirationTimeService
);

export const notificationTokenController = new NotificationTokenController(
  createNotificationTokenUseCase
);
