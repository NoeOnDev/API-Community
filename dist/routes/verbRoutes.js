"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verbController_1 = require("../controllers/verbController");
const router = (0, express_1.Router)();
router.get('/verbs', verbController_1.getVerbs);
router.get('/verb', verbController_1.getVerb);
router.post('/check-answer', verbController_1.postCheckAnswer);
exports.default = router;
