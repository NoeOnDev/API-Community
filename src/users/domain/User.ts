export class User {
  private constructor(
    public readonly id: number,
    public readonly uuid: string,
    public readonly name: string,
    public readonly email: string,
    public readonly hashedPassword: string,
    public readonly phone: string | null,
    public readonly isEmailVerified: boolean,
    public readonly isPhoneVerified: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}

  static create(
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string
  ): User {
    return new User(
      0,
      uuid,
      name,
      email,
      hashedPassword,
      null,
      false,
      false,
      new Date(),
      new Date()
    );
  }

  static reconstitute(
    id: number,
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string,
    createdAt: Date,
    updatedAt: Date,
    phone: string | null,
    isEmailVerified: boolean,
    isPhoneVerified: boolean
  ): User {
    return new User(
      id,
      uuid,
      name,
      email,
      hashedPassword,
      phone,
      isEmailVerified,
      isPhoneVerified,
      createdAt,
      updatedAt
    );
  }

  withId(id: number): User {
    return new User(
      id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.phone,
      this.isEmailVerified,
      this.isPhoneVerified,
      this.createdAt,
      this.updatedAt
    );
  }

  updateTimestamp(): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.phone,
      this.isEmailVerified,
      this.isPhoneVerified,
      this.createdAt,
      new Date()
    );
  }

  verifyEmail(): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.phone,
      true,
      this.isPhoneVerified,
      this.createdAt,
      this.updatedAt
    );
  }

  verifyPhone(phone: string): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      phone,
      this.isEmailVerified,
      true,
      this.createdAt,
      this.updatedAt
    );
  }
}
