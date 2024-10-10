import { InvalidPasswordException } from "../exceptions/invalid-password.exception";
import { ValueObject } from "./ValueObject";

export class UserPassword extends ValueObject<string> {
  private static readonly MIN_LENGTH = 8;
  private static readonly MAX_LENGTH = 50;

  private constructor(password: string) {
    super(password);
    this.ensureIsValid();
  }

  public static create(password: string): UserPassword {
    return new UserPassword(password);
  }

  public static createHashed(hashedPassword: string): UserPassword {
    return new UserPassword(hashedPassword);
  }

  protected ensureIsValid(): void {
    if (!this.hasValidLength(this.value)) {
      throw new InvalidPasswordException(
        `Password length must be between ${UserPassword.MIN_LENGTH} and ${UserPassword.MAX_LENGTH} characters`
      );
    }

    if (!this.hasRequiredCharacters(this.value)) {
      throw new InvalidPasswordException(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    }
  }

  private hasValidLength(password: string): boolean {
    return (
      password.length >= UserPassword.MIN_LENGTH &&
      password.length <= UserPassword.MAX_LENGTH
    );
  }

  private hasRequiredCharacters(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  }

  public equals(other: ValueObject<string>): boolean {
    return this.value === other.getValue();
  }

  public static isValid(password: string): boolean {
    return (
      password.length >= this.MIN_LENGTH &&
      password.length <= this.MAX_LENGTH &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  }
}
