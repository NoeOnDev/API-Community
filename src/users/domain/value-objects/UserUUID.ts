import { v4 as uuidv4 } from "uuid";

export class UUID {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static generate(): UUID {
    return new UUID(uuidv4());
  }

  public static fromString(value: string): UUID {
    if (!UUID.isValid(value)) {
      throw new Error("Invalid UUID value.");
    }
    return new UUID(value);
  }

  private static isValid(value: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UUID): boolean {
    return this.value === other.value;
  }
}
