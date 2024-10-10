export class InvalidUuidException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUuidException";
  }
}
