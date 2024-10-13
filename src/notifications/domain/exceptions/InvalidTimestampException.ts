import { NotificationDomainException } from "./NotificationDomainException";

export class InvalidTimestampException extends NotificationDomainException {
  constructor() {
    super("Creation time must be valid.");
  }
}
