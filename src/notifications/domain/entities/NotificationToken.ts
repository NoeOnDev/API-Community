import { NotificationTokenValue } from "../value-objects/NotificationTokenValue";
import { ExpirationTime } from "../value-objects/ExpirationTime";
import { Timestamp } from "../value-objects/Timestamp";
import { ExpiredTokenException } from "../exceptions/ExpiredTokenException";

export class NotificationToken {
  private readonly id: string;

  constructor(
    private readonly token: NotificationTokenValue,
    private readonly expiresAt: ExpirationTime,
    private readonly createdAt: Timestamp
  ) {
    this.id = crypto.randomUUID();
  }

  isExpired(currentTime: Date): boolean {
    if (this.expiresAt.isBefore(currentTime)) {
      throw new ExpiredTokenException(this.token.value);
    }
    return false;
  }

  getToken(): string {
    return this.token.value;
  }

  getId(): string {
    return this.id;
  }

  getCreatedAt(): Date {
    return this.createdAt.value;
  }
}
