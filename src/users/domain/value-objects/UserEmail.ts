import { InvalidEmailDomainException } from "../exceptions/invalid-email-domain.exception";
import { EMAIL_DOMAINS } from "../constants/email-domains.constant";

export class UserEmail {
  private readonly value: string;
  private static readonly ALLOWED_DOMAINS = [
    EMAIL_DOMAINS.GMAIL,
    EMAIL_DOMAINS.HOTMAIL,
  ];

  private constructor(email: string) {
    this.ensureValidDomain(email);
    this.value = email;
  }

  public static create(email: string): UserEmail {
    return new UserEmail(email);
  }

  private ensureValidDomain(email: string): void {
    if (!this.isValidDomain(email)) {
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

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserEmail): boolean {
    return this.value.toLowerCase() === other.getValue().toLowerCase();
  }

  public serialize(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }
}
