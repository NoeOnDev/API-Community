import { NotificationService } from "../../domain/services/NotificationService";
import { twilioClient } from "../../../_config/twilio.config";
import { env } from "../../../_config/env.config";

export class WhatsAppNotificationService implements NotificationService {
  async send(token: string, phoneNumber: string): Promise<void> {
    await twilioClient.messages.create({
      body: `Your notification token is: ${token}`,
      from: `whatsapp:${env.twilio.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${phoneNumber}`,
    });
  }
}
