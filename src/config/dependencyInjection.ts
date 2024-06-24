import { container } from "tsyringe";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";

container.register("UserRepository", { useClass: UserRepository });
container.register("UserService", { useClass: UserService });