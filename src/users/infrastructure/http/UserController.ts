import { Request, Response } from "express";
import { SaveUserUseCase } from "../../application/SaveUserUseCase";

export class UserController {
  private saveUserUseCase: SaveUserUseCase;

  constructor(saveUserUseCase: SaveUserUseCase) {
    this.saveUserUseCase = saveUserUseCase;
  }

  async saveUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const savedUser = await this.saveUserUseCase.execute({
        name,
        email,
        password,
      });

      const { hashedPassword, ...userWithoutPassword } = savedUser;

      res.status(201).json({
        message: "User saved successfully",
        user: userWithoutPassword,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }
}
