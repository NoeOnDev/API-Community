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
exports.getVerbsByMeanings = exports.checkAnswer = exports.getRandomVerb = exports.getRandomVerbs = exports.getAllVerbs = void 0;
const database_1 = require("../config/database");
const getAllVerbs = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (searchTerm = '') {
    const query = searchTerm ?
        `SELECT * FROM verbs WHERE meaning ILIKE $1 OR present ILIKE $1 OR past ILIKE $1 OR past_participle ILIKE $1` :
        'SELECT * FROM verbs';
    const values = searchTerm ? [`%${searchTerm}%`] : [];
    const res = yield database_1.pool.query(query, values);
    return res.rows;
});
exports.getAllVerbs = getAllVerbs;
const getRandomVerbs = (meanings, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const query = meanings.length > 0 ?
        'SELECT * FROM verbs WHERE meaning = ANY($1::text[]) ORDER BY RANDOM() LIMIT $2' :
        'SELECT * FROM verbs ORDER BY RANDOM() LIMIT $2';
    const res = yield database_1.pool.query(query, [meanings, limit]);
    return res.rows;
});
exports.getRandomVerbs = getRandomVerbs;
const getRandomVerb = (meanings) => __awaiter(void 0, void 0, void 0, function* () {
    const query = meanings.length > 0 ?
        'SELECT * FROM verbs WHERE meaning = ANY($1::text[]) ORDER BY RANDOM() LIMIT 1' :
        'SELECT * FROM verbs ORDER BY RANDOM() LIMIT 1';
    const res = yield database_1.pool.query(query, [meanings]);
    return res.rows[0];
});
exports.getRandomVerb = getRandomVerb;
const checkAnswer = (meaning, present, past, pastParticiple) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield database_1.pool.query('SELECT * FROM verbs WHERE meaning = $1 AND present = $2 AND past = $3 AND past_participle = $4', [meaning, present, past, pastParticiple]);
    return res.rowCount > 0;
});
exports.checkAnswer = checkAnswer;
const getVerbsByMeanings = (meanings) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM verbs WHERE meaning = ANY($1::text[])';
    const res = yield database_1.pool.query(query, [meanings]);
    return res.rows;
});
exports.getVerbsByMeanings = getVerbsByMeanings;
