import { NotificationService } from "../../domain/services/NotificationService";
import { transporter } from "../../../_config/transporter.config";
import { env } from "../../../_config/env.config";

export class EmailNotificationService implements NotificationService {
  async send(token: string, email: string): Promise<void> {
    const mailOptions = {
      from: env.email.EMAIL_USER,
      to: email,
      subject: "Notification Token",
      text: `Your notification token is: ${token}`,
    };

    await transporter.sendMail(mailOptions);
  }
}
