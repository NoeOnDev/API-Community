export class InvalidEmailDomainException extends Error {
  constructor() {
    super(
      "The email domain is not allowed. Only @gmail.com and @hotmail.com are permitted."
    );
    this.name = "InvalidEmailDomainException";
  }
}
