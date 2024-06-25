import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/UserController";

export class UserFactory {
    private userController: UserController;

    constructor() {
        this.userController = container.resolve(UserController);
    }

    getRouter(): Router {
        const router = Router();
        router.post("/", this.userController.createUser);
        router.get("/:id", this.userController.getUserById);
        router.post("/login", this.userController.loginUser);
        return router;
    }
}
