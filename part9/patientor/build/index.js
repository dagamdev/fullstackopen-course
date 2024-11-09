"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/api/ping', (_req, res) => {
    res.send('Pong');
});
app.use('/api', routes_1.default);
const PORT = 1234;
app.listen(PORT, () => {
    console.log(`Api readi in port ${PORT}`);
});
