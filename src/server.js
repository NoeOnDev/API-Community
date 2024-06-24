"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (_req, res) {
    res.send('Hello World');
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
