import { EmailVerification } from "./EmailVerification";

export interface IEmailVerificationRepository {
  create(emailVerification: EmailVerification): Promise<void>;
  findByToken(token: string): Promise<EmailVerification | null>;
  deleteByToken(token: string): Promise<void>;
}
