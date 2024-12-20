"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../data/patients"));
function getAllPatients() {
    return patients_1.default.map((_a) => {
        var { ssn } = _a, patient = __rest(_a, ["ssn"]);
        return patient;
    });
}
function addPatient(newPatient) {
    const patient = Object.assign(Object.assign({}, newPatient), { id: crypto.randomUUID() });
    patients_1.default.push(patient);
    return patient;
}
exports.default = {
    getAllPatients,
    addPatient
};
