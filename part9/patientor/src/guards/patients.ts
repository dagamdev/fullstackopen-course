import { GENDER } from "../enums";
import { isString, isDate } from ".";
import type { Patient } from "types";

type NewPatientEntry = Omit<Patient, 'id' | 'entries'>

function parseName (name: unknown) {
  if (!isString(name)) {
    throw new Error(`Incorrect name: ` + name)
  }

  return name
}

function parseDateOfBirth (dateOfBirth: unknown) {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect dateOfBirth: ' + dateOfBirth)
  }

  return dateOfBirth
}

function parseSsn (ssn: unknown) {
  if (!isString(ssn)) {
    throw new Error(`Incorrect ssn: ` + ssn)
  }

  return ssn
}

function isGender (param: string): param is GENDER {
  return Object.values(GENDER).map(g => g.toString()).includes(param);
}

function parseGender (gender: unknown) {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect gender: ` + gender)
  }

  return gender
}

function parseOccupation (occupation: unknown) {
  if (!isString(occupation)) {
    throw new Error(`Incorrect occupation: ` + occupation)
  }

  return occupation
}

export function toNewPatientEntry (object: unknown): NewPatientEntry {
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object)  {
    const newPatient: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation)
    };
  
    return newPatient;
  }

  throw new Error('Incorrect data: a field missing');
};