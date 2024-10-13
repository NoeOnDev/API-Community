import { Request, Response } from "express";
import { CreateNotificationTokenUseCase } from "../../../application/use-cases/create-notification-token.use-case";

export class NotificationTokenController {
  constructor(
    private readonly createNotificationTokenUseCase: CreateNotificationTokenUseCase
  ) {}

  async createToken(_req: Request, res: Response): Promise<void> {
    try {
      const token = await this.createNotificationTokenUseCase.execute();
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
