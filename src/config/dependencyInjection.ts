import { container } from "tsyringe";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import { HashService } from "../services/HashService";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserService } from "../interfaces/IUserService";

container.register<IUserRepository>("IUserRepository", {
    useClass: UserRepository
});

container.register<IUserService>("UserService", {
    useClass: UserService
});

container.registerSingleton("HashService", HashService);
