import { NotificationDomainException } from "./NotificationDomainException";

export class ExpiredTokenException extends NotificationDomainException {
  constructor(token: string) {
    super(`Token ${token} has expired.`);
  }
}
