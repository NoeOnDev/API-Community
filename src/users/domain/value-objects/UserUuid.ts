import { UuidGenerator } from "../interfaces/UuidGenerator";
import { InvalidUuidException } from "../exceptions/invalid-uuid.exception";
import { ValueObject } from "./ValueObject";

export class UserUuid extends ValueObject<string> {
  private constructor(uuid: string) {
    super(uuid);
    this.ensureIsValid();
  }

  public static create(uuidGenerator: UuidGenerator): UserUuid {
    const uuid = uuidGenerator.generate();
    return new UserUuid(uuid);
  }

  protected ensureIsValid(): void {
    if (!this.isValidUuid(this.value)) {
      throw new InvalidUuidException("Invalid UUID format");
    }
  }

  private isValidUuid(value: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  }

  public equals(other: ValueObject<string>): boolean {
    return this.value === other.getValue();
  }

  public static isValid(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
