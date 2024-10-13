import { CreateNotificationTokenUseCase } from "../application/use-cases/create-notification-token.use-case";
import { NotificationTokenController } from "./http/controllers/NotificationTokenController";
import { MongoNotificationTokenRepository } from "./persistence/repositories/MongoNotificationTokenRepository";
import { DefaultExpirationTimeService } from "./services/DefaultExpirationTimeService";
import { NumericTokenGeneratorService } from "./services/NumericTokenGeneratorService";
import { NotificationServiceFactoryImpl } from "./services/NotificationServiceFactoryImpl";
import { EmailNotificationService } from "./services/EmailNotificationService";
import { SMSNotificationService } from "./services/SMSNotificationService";
import { WhatsAppNotificationService } from "./services/WhatsAppNotificationService";

const notificationTokenRepository = new MongoNotificationTokenRepository();
const tokenGeneratorService = new NumericTokenGeneratorService();
const expirationTimeService = new DefaultExpirationTimeService();
const emailService = new EmailNotificationService();
const smsService = new SMSNotificationService();
const whatsappService = new WhatsAppNotificationService();
const notificationServiceFactory = new NotificationServiceFactoryImpl(
  emailService,
  smsService,
  whatsappService
);
const createNotificationTokenUseCase = new CreateNotificationTokenUseCase(
  notificationTokenRepository,
  tokenGeneratorService,
  expirationTimeService,
  notificationServiceFactory
);

export const notificationTokenController = new NotificationTokenController(
  createNotificationTokenUseCase
);
