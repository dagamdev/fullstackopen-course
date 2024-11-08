"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/ping', (_req, res) => {
    res.send('Pong');
});
const PORT = 1234;
app.listen(PORT, () => {
    console.log(`Api readi in port ${PORT}`);
});
