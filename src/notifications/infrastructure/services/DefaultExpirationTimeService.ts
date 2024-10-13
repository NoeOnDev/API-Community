import { ExpirationTimeService } from "../../domain/services/ExpirationTimeService";

export class DefaultExpirationTimeService implements ExpirationTimeService {
  calculateExpirationTime(): Date {
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);
    return expirationTime;
  }
}
