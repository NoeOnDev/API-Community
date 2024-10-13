import { NotificationDomainException } from "./NotificationDomainException";

export class InvalidExpirationTimeException extends NotificationDomainException {
  constructor() {
    super("Expiration time must be in the future.");
  }
}
