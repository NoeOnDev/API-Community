import { NotificationDomainException } from "./NotificationDomainException";

export class InvalidTokenException extends NotificationDomainException {
  constructor(token: string) {
    super(`Invalid token: ${token}. Token must be a 6-digit number.`);
  }
}
