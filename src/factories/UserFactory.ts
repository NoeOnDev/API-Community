import { Router } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import { UserController } from "../controllers/UserController";

export class UserFactory {
    private userRepository: UserRepository;
    private userService: UserService;
    private userController: UserController;

    constructor() {
        this.userRepository = new UserRepository();
        this.userService = new UserService(this.userRepository);
        this.userController = new UserController(this.userService);
    }

    getRouter(): Router {
        const router = Router();
        router.post("/", this.userController.createUser);
        router.get("/:id", this.userController.getUserById);
        return router;
    }
}
