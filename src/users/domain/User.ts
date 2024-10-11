export class User {
  private constructor(
    public readonly id: number,
    public readonly uuid: string,
    public readonly name: string,
    public readonly email: string,
    public readonly hashedPassword: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly phone: string | null,
    public readonly isEmailVerified: boolean,
    public readonly isPhoneVerified: boolean
  ) {}

  static create(
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string
  ): User {
    const now = new Date();
    return new User(
      0,
      uuid,
      name,
      email,
      hashedPassword,
      now,
      now,
      null,
      false,
      false
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
      createdAt,
      updatedAt,
      phone,
      isEmailVerified,
      isPhoneVerified
    );
  }

  withId(id: number): User {
    return new User(
      id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.createdAt,
      this.updatedAt,
      this.phone,
      this.isEmailVerified,
      this.isPhoneVerified
    );
  }

  updateTimestamp(): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.createdAt,
      new Date(),
      this.phone,
      this.isEmailVerified,
      this.isPhoneVerified
    );
  }

  verifyEmail(): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.createdAt,
      this.updatedAt,
      this.phone,
      true,
      this.isPhoneVerified
    );
  }

  verifyPhone(phone: string): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.createdAt,
      this.updatedAt,
      phone,
      this.isEmailVerified,
      true
    );
  }
}
