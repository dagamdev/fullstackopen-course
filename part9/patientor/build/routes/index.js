"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnoses_1 = __importDefault(require("./diagnoses"));
const patients_1 = __importDefault(require("./patients"));
const router = express_1.default.Router();
router.use('/diagnoses', diagnoses_1.default);
router.use('/patients', patients_1.default);
exports.default = router;
