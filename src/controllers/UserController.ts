import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.createUser(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error "createUser"' });
        }
    }

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.getUserById(Number(req.params.id));
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error "getUserById"' });
        }
    }
}