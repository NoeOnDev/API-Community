import { Router } from "express";
import { DataSource } from "typeorm";
import { config } from "../../../_config/orm.config";
import { TypeORMUserRepository } from "../persistence/TypeOrmUserRepository";
import { UserEntity } from "../persistence/UserEntity";
import { SaveUserUseCase } from "../../application/SaveUserUseCase";
import { UserController } from "./UserController";
import { UuidGenerator } from "../UuidGenerator";
import { Argon2HashService } from "../Argon2HashService";

const router = Router();

const dataSource = new DataSource(config);

dataSource.initialize().then(() => {
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

  console.log("DataSource has been initialized!");
}).catch((err) => {
  console.error("Error during DataSource initialization:", err);
});

export default router;
