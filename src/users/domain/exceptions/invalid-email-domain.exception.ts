export class InvalidEmailDomainException extends Error {
  constructor(message: string = "Invalid email domain") {
    super(message);
    this.name = "InvalidEmailDomainException";
  }
}
