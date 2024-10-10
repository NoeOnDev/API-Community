import { InvalidEmailDomainException } from "../exceptions/invalid-email-domain.exception";
import { EMAIL_DOMAINS } from "../constants/email-domains.constant";

export class UserEmail {
  private readonly value: string;
  private static readonly ALLOWED_DOMAINS = [
    EMAIL_DOMAINS.GMAIL,
    EMAIL_DOMAINS.HOTMAIL,
  ];

  constructor(email: string) {
    this.ensureValidDomain(email);
    this.value = email;
  }

  private ensureValidDomain(email: string): void {
    if (!this.isValidDomain(email)) {
      throw new InvalidEmailDomainException();
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

  public toString(): string {
    return this.value;
  }
}
