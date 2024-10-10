import { InvalidPasswordException } from "../exceptions/invalid-password.exception";

export class UserPassword {
  private readonly value: string;
  private static readonly MIN_LENGTH = 8;
  private static readonly MAX_LENGTH = 50;

  private constructor(password: string) {
    this.ensureValidPassword(password);
    this.value = password;
  }

  public static create(password: string): UserPassword {
    return new UserPassword(password);
  }

  public static createHashed(hashedPassword: string): UserPassword {
    return new UserPassword(hashedPassword);
  }

  private ensureValidPassword(password: string): void {
    if (!this.hasValidLength(password)) {
      throw new InvalidPasswordException(
        `Password length must be between ${UserPassword.MIN_LENGTH} and ${UserPassword.MAX_LENGTH} characters`
      );
    }

    if (!this.hasRequiredCharacters(password)) {
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

  public getValue(): string {
    return this.value;
  }
}
