import { NotificationTokenRepository } from "../../domain/repositories/NotificationTokenRepository";
import { NotificationToken } from "../../domain/entities/NotificationToken";
import { NotificationTokenModel } from "./schemas/NotificationTokenSchema";
import { NotificationTokenValue } from "../../domain/value-objects/NotificationTokenValue";
import { ExpirationTime } from "../../domain/value-objects/ExpirationTime";

export class MongoNotificationTokenRepository
  implements NotificationTokenRepository
{
  async save(token: NotificationToken): Promise<void> {
    const tokenDocument = new NotificationTokenModel({
      token: token.getToken(),
      expiresAt: token.getExpiresAt(),
      createdAt: token.getCreatedAt(),
    });
    await tokenDocument.save();
  }

  async findByToken(token: string): Promise<NotificationToken | null> {
    const tokenDocument = await NotificationTokenModel.findOne({
      token,
    }).exec();
    if (!tokenDocument) {
      return null;
    }
    return new NotificationToken(
      new NotificationTokenValue(tokenDocument.token),
      new ExpirationTime(tokenDocument.expiresAt)
    );
  }
}
