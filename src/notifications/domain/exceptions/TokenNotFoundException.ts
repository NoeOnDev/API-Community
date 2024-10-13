import { NotificationDomainException } from "./NotificationDomainException";

export class TokenNotFoundException extends NotificationDomainException {
  constructor(token: string) {
    super(`Token ${token} not found.`);
  }
}
