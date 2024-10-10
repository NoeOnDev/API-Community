export class InvalidPasswordException extends Error {
  constructor(message: string = "Invalid password") {
    super(message);
    this.name = "InvalidPasswordException";
  }
}
