import { NotificationService } from "../../domain/services/NotificationService";
import { twilioClient } from "../../../_config/twilio.config";
import { env } from "../../../_config/env.config";

export class SMSNotificationService implements NotificationService {
  async send(token: string, phoneNumber: string): Promise<void> {
    await twilioClient.messages.create({
      body: `Your notification token is: ${token}`,
      from: env.twilio.TWILIO_PHONE_NUMBER_SMS,
      to: phoneNumber,
    });
  }
}
