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
exports.postCheckAnswer = exports.getVerb = exports.getVerbs = void 0;
const verbService_1 = require("../services/verbService");
const getVerbs = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verbs = yield (0, verbService_1.getAllVerbs)();
        res.status(200).json(verbs);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getVerbs = getVerbs;
const getVerb = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verb = yield (0, verbService_1.getRandomVerb)();
        res.status(200).json(verb);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getVerb = getVerb;
const postCheckAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { meaning, present, past, pastParticiple } = req.body;
    try {
        const isCorrect = yield (0, verbService_1.checkAnswer)(meaning, present, past, pastParticiple);
        res.status(200).json({ correct: isCorrect });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postCheckAnswer = postCheckAnswer;
