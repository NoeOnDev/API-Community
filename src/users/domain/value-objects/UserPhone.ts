import { InvalidPhoneNumberException } from "../exceptions/invalid-phone-number.exception";

export class UserPhone {
  public static readonly MEXICO_COUNTRY_CODE = "+52";
  private readonly value: string;

  private constructor(phone: string) {
    this.ensureValidPhoneNumber(phone);
    this.value = this.normalize(phone);
  }

  public static create(phone: string): UserPhone {
    return new UserPhone(phone);
  }

  private ensureValidPhoneNumber(phone: string): void {
    if (!this.isValidMexicanPhoneNumber(phone)) {
      throw new InvalidPhoneNumberException(
        "Phone number must start with +52 and contain 10 digits"
      );
    }
  }

  private isValidMexicanPhoneNumber(phone: string): boolean {
    const normalizedNumber = this.normalize(phone);
    return (
      normalizedNumber.startsWith(UserPhone.MEXICO_COUNTRY_CODE) &&
      this.getNumberWithoutCountryCode(normalizedNumber).length === 10
    );
  }

  private normalize(phone: string): string {
    return phone.replace(/[\s\-\(\)]/g, "");
  }

  private getNumberWithoutCountryCode(phone: string): string {
    return phone.replace(UserPhone.MEXICO_COUNTRY_CODE, "");
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserPhone): boolean {
    return this.normalize(this.value) === this.normalize(other.getValue());
  }

  public serialize(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }
}
