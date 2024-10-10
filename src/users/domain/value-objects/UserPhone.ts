import { InvalidPhoneNumberException } from "../exceptions/invalid-phone-number.exception";

export class UserPhone {
  public static readonly MEXICO_COUNTRY_CODE = "+52";
  private readonly value: string;

  constructor(userPhone: string) {
    this.ensureValidPhoneNumber(userPhone);
    this.value = this.normalize(userPhone);
  }

  private ensureValidPhoneNumber(userPhone: string): void {
    if (!this.isValidMexicanPhoneNumber(userPhone)) {
      throw new InvalidPhoneNumberException(
        "Phone number must start with +52 and contain 10 digits"
      );
    }
  }

  private isValidMexicanPhoneNumber(userPhone: string): boolean {
    const normalizedNumber = this.normalize(userPhone);
    return (
      normalizedNumber.startsWith(UserPhone.MEXICO_COUNTRY_CODE) &&
      this.getNumberWithoutCountryCode(normalizedNumber).length === 10
    );
  }

  private normalize(userPhone: string): string {
    return userPhone.replace(/[\s\-\(\)]/g, "");
  }

  private getNumberWithoutCountryCode(userPhone: string): string {
    return userPhone.replace(UserPhone.MEXICO_COUNTRY_CODE, "");
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserPhone): boolean {
    return this.normalize(this.value) === this.normalize(other.getValue());
  }

  public toString(): string {
    return this.value;
  }
}
