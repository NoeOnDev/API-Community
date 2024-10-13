import { NotificationTokenValue } from "../value-objects/NotificationTokenValue";
import { ExpirationTime } from "../value-objects/ExpirationTime";
import { Timestamp } from "../value-objects/Timestamp";
import { ExpiredTokenException } from "../exceptions/ExpiredTokenException";

export class NotificationToken {
  private readonly id: string;
  private readonly createdAt: Timestamp;

  constructor(
    private readonly token: NotificationTokenValue,
    private readonly expiresAt: ExpirationTime
  ) {
    this.id = crypto.randomUUID();
    this.createdAt = new Timestamp(new Date());
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

  getExpiresAt(): Date {
    return this.expiresAt.value;
  }
}
