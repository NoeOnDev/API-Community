import { InvalidExpirationTimeException } from "../exceptions/InvalidExpirationTimeException";

export class ExpirationTime {
  constructor(private readonly expiresAt: Date) {
    if (expiresAt <= new Date()) {
      throw new InvalidExpirationTimeException();
    }
  }

  isBefore(date: Date): boolean {
    return this.expiresAt <= date;
  }
}
