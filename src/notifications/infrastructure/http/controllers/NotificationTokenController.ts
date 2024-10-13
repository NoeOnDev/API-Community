import { Request, Response } from "express";
import { CreateNotificationTokenUseCase } from "../../../application/use-cases/create-notification-token.use-case";

export class NotificationTokenController {
  constructor(
    private readonly createNotificationTokenUseCase: CreateNotificationTokenUseCase
  ) {}

  async createToken(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      const token = await this.createNotificationTokenUseCase.execute(userId);
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
