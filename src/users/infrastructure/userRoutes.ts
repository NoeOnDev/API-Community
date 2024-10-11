import { Router } from "express";
import { pool } from "../../_config/db.config";
import { PostgresUserRepository } from "./PostgresUserRepository";
import { SaveUserUseCase } from "../application/SaveUserUseCase";
import { UserController } from "./UserController";
import { UuidGenerator } from "./UuidGenerator";

const router = Router();

const uuidGenerator = new UuidGenerator();
const userRepository = new PostgresUserRepository(pool);
const saveUserUseCase = new SaveUserUseCase(userRepository, uuidGenerator);
const userController = new UserController(saveUserUseCase);

router.post("/users", (req, res) => userController.saveUser(req, res));

export default router;
