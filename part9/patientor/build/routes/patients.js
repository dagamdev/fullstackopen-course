"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patients_1 = __importDefault(require("../services/patients"));
const patients_2 = require("../guards/patients");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.json(patients_1.default.getAllPatients());
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = (0, patients_2.toNewPatientEntry)(req.body);
        const addedPatient = patients_1.default.addPatient(newPatientEntry);
        res.json(addedPatient);
    }
    catch (error) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
exports.default = router;
