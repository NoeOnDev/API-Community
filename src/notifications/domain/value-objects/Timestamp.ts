import { InvalidTimestampException } from "../exceptions/InvalidTimestampException";

export class Timestamp {
  constructor(private readonly createdAt: Date) {
    if (!createdAt) {
      throw new InvalidTimestampException();
    }
  }

  get value(): Date {
    return this.createdAt;
  }
}
