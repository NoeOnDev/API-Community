export class InvalidPhoneNumberException extends Error {
  constructor(message: string = "Invalid phone number format for Mexico") {
    super(message);
    this.name = "InvalidPhoneNumberException";
  }
}
