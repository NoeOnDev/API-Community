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
exports.getVerbsByMeaningsSpecific = exports.getRandomVerbsByMeanings = exports.postCheckAnswer = exports.getVerb = exports.getVerbs = void 0;
const verbService_1 = require("../services/verbService");
const getVerbs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.search ? req.query.search : '';
    try {
        const verbs = yield (0, verbService_1.getAllVerbs)(searchTerm);
        res.status(200).json(verbs);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getVerbs = getVerbs;
const getVerb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const meanings = req.query.meanings ? req.query.meanings.split(',') : [];
        const verb = yield (0, verbService_1.getRandomVerb)(meanings);
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
const getRandomVerbsByMeanings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const meanings = req.query.meanings ? req.query.meanings.split(',') : [];
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        const verbs = yield (0, verbService_1.getRandomVerbs)(meanings, limit);
        res.status(200).json(verbs);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getRandomVerbsByMeanings = getRandomVerbsByMeanings;
const getVerbsByMeaningsSpecific = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const meanings = req.query.meanings ? req.query.meanings.split(',') : [];
    try {
        const verbs = yield (0, verbService_1.getVerbsByMeanings)(meanings);
        res.status(200).json(verbs);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getVerbsByMeaningsSpecific = getVerbsByMeaningsSpecific;
