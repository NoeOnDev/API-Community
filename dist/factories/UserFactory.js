"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const UserController_1 = require("../controllers/UserController");
class UserFactory {
    constructor() {
        this.userController = tsyringe_1.container.resolve(UserController_1.UserController);
    }
    getRouter() {
        const router = (0, express_1.Router)();
        router.post("/", this.userController.createUser);
        router.get("/:id", this.userController.getUserById);
        return router;
    }
}
exports.UserFactory = UserFactory;
