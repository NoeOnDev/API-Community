"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.createUser(req.body);
                res.json(user);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error "createUser"' });
            }
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.getUserById(Number(req.params.id));
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                }
                res.json(user);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error "getUserById"' });
            }
        });
        this.userService = userService;
    }
}
exports.UserController = UserController;
