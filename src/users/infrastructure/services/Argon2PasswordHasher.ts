import argon2 from "argon2";
import { PasswordHasher } from "../../domain/interfaces/PasswordHasher";

export class Argon2PasswordHasher implements PasswordHasher {
  async hash(plainPassword: string): Promise<string> {
    return argon2.hash(plainPassword);
  }

  async compare(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return argon2.verify(hashedPassword, plainPassword);
  }
}
