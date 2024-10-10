import { InvalidPhoneNumberException } from "../exceptions/invalid-phone-number.exception";
import { ValueObject } from "./ValueObject";

export class UserPhone extends ValueObject<string> {
  public static readonly MEXICO_COUNTRY_CODE = "+52";

  private constructor(phone: string) {
    super(phone);
    this.ensureIsValid();
  }

  public static create(phone: string): UserPhone {
    return new UserPhone(phone);
  }

  protected ensureIsValid(): void {
    if (!this.isValidMexicanPhoneNumber(this.value)) {
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

  public equals(other: ValueObject<string>): boolean {
    return this.normalize(this.value) === this.normalize(other.getValue());
  }

  public static isValid(phone: string): boolean {
    return /^\+52\d{10}$/.test(phone.replace(/[\s\-\(\)]/g, ""));
  }
}
