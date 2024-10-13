import { InvalidTokenException } from "../exceptions/InvalidTokenException";

export class NotificationTokenValue {
  constructor(public readonly value: string) {
    if (!/^\d{6}$/.test(value)) {
      throw new InvalidTokenException(value);
    }
  }

  static fromString(token: string): NotificationTokenValue {
    return new NotificationTokenValue(token);
  }
}
