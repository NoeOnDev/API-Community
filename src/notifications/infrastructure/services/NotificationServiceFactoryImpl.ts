import { NotificationServiceFactory } from "../../domain/services/NotificationService";
import { NotificationService } from "../../domain/services/NotificationService";
import { EmailNotificationService } from "./EmailNotificationService";
import { SMSNotificationService } from "./SMSNotificationService";
import { WhatsAppNotificationService } from "./WhatsAppNotificationService";

export class NotificationServiceFactoryImpl
  implements NotificationServiceFactory
{
  constructor(
    private readonly emailService: EmailNotificationService,
    private readonly smsService: SMSNotificationService,
    private readonly whatsappService: WhatsAppNotificationService
  ) {}

  getService(context: string): NotificationService {
    switch (context) {
      case "email":
        return this.emailService;
      case "sms":
        return this.smsService;
      case "whatsapp":
        return this.whatsappService;
      default:
        throw new Error(`Unsupported context: ${context}`);
    }
  }
}
