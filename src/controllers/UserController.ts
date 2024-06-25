import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { IUserService } from "../interfaces/IUserService";

@autoInjectable()
export class UserController {
    constructor(@inject("UserService") private userService?: IUserService) { }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService!.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService!.getUserById(Number(req.params.id));
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json(user);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    loginUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const user = await this.userService!.loginUser(email, password);
            if (!user) {
                res.status(401).json({ error: 'Invalid credentials' });
            } else {
                res.json(user);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
