import { InvalidEmailDomainException } from "../exceptions/invalid-email-domain.exception";
import { EMAIL_DOMAINS } from "../constants/email-domains.constant";
import { ValueObject } from "./ValueObject";

export class UserEmail extends ValueObject<string> {
  private static readonly ALLOWED_DOMAINS = [
    EMAIL_DOMAINS.GMAIL,
    EMAIL_DOMAINS.HOTMAIL,
  ];

  private constructor(email: string) {
    super(email);
    this.ensureIsValid();
  }

  public static create(email: string): UserEmail {
    return new UserEmail(email);
  }

  protected ensureIsValid(): void {
    if (!this.isValidDomain(this.value)) {
      throw new InvalidEmailDomainException(
        `Invalid email domain. Allowed domains are: ${UserEmail.ALLOWED_DOMAINS.join(
          ", "
        )}`
      );
    }
  }

  private isValidDomain(email: string): boolean {
    return UserEmail.ALLOWED_DOMAINS.some((domain) =>
      email.toLowerCase().endsWith(domain)
    );
  }

  public equals(other: ValueObject<string>): boolean {
    return this.value.toLowerCase() === other.getValue().toLowerCase();
  }

  public static isValid(email: string): boolean {
    return UserEmail.ALLOWED_DOMAINS.some((domain) =>
      email.toLowerCase().endsWith(domain)
    );
  }
}
