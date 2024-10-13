import { NotificationToken } from "../entities/NotificationToken";

export interface NotificationTokenRepository {
  save(token: NotificationToken): Promise<void>;
  findByToken(token: string): Promise<NotificationToken | null>;
}
