import { Router } from "express";
import { dataSource } from "../../../_helpers/ormConnection";
import { TypeORMUserRepository } from "../persistence/TypeOrmUserRepository";
import { UserEntity } from "../persistence/UserEntity";
import { SaveUserUseCase } from "../../application/SaveUserUseCase";
import { UserController } from "./UserController";
import { UuidGenerator } from "../services/UuidGenerator";
import { Argon2HashService } from "../services/Argon2HashService";

const router = Router();

dataSource.initialize();

const userEntityRepository = dataSource.getRepository(UserEntity);
const userRepository = new TypeORMUserRepository(userEntityRepository);
const uuidGenerator = new UuidGenerator();
const hashService = new Argon2HashService();
const saveUserUseCase = new SaveUserUseCase(
  userRepository,
  uuidGenerator,
  hashService
);
const userController = new UserController(saveUserUseCase);

router.post("/users", (req, res) => userController.saveUser(req, res));

export default router;
