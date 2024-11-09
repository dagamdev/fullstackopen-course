"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPatientEntry = toNewPatientEntry;
const enums_1 = require("../enums");
const _1 = require(".");
function parseName(name) {
    if (!(0, _1.isString)(name)) {
        throw new Error(`Incorrect name: ` + name);
    }
    return name;
}
function parseDateOfBirth(dateOfBirth) {
    if (!(0, _1.isString)(dateOfBirth) || !(0, _1.isDate)(dateOfBirth)) {
        throw new Error('Incorrect dateOfBirth: ' + dateOfBirth);
    }
    return dateOfBirth;
}
function parseSsn(ssn) {
    if (!(0, _1.isString)(ssn)) {
        throw new Error(`Incorrect ssn: ` + ssn);
    }
    return ssn;
}
function isGender(param) {
    return Object.values(enums_1.GENDER).map(g => g.toString()).includes(param);
}
function parseGender(gender) {
    if (!(0, _1.isString)(gender) || !isGender(gender)) {
        throw new Error(`Incorrect gender: ` + gender);
    }
    return gender;
}
function parseOccupation(occupation) {
    if (!(0, _1.isString)(occupation)) {
        throw new Error(`Incorrect occupation: ` + occupation);
    }
    return occupation;
}
function toNewPatientEntry(object) {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newPatient = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)
        };
        return newPatient;
    }
    throw new Error('Incorrect data: a field missing');
}
;
