import { UUID } from "./value-objects/UserUUID";

export class User {
  constructor(
    public id: number,
    public uuid: UUID = UUID.generate(),
    public name: string,
    public email: string,
    public password: string,
    public phone?: string,
    public isEmailVerified: boolean = false,
    public isPhoneVerified: boolean = false,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}

  public getUUID(): string {
    return this.uuid.getValue();
  }
}
