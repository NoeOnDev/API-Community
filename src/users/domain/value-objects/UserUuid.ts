import { UuidGenerator } from "../interfaces/UuidGenerator";
import { InvalidUuidException } from "../exceptions/invalid-uuid.exception";

export class UserUuid {
  private readonly value: string;

  private constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  public static create(uuidGenerator: UuidGenerator): UserUuid {
    const uuid = uuidGenerator.generate();
    return new UserUuid(uuid);
  }

  private ensureIsValidUuid(value: string): void {
    if (!this.isValidUuid(value)) {
      throw new InvalidUuidException("Invalid UUID format");
    }
  }

  private isValidUuid(value: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserUuid): boolean {
    return this.value === other.getValue();
  }

  public toString(): string {
    return this.value;
  }
}
