import type { Diagnose, HealthCheckEntry, HospitalEntry, OccupationalHealthCareEntry } from "types";

export function parseDiagnosisCodes (object: unknown): Array<Diagnose['code']> {
  if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
    throw new Error('Incorrect or missing data');
  }

  return object.diagnosisCodes as Array<Diagnose['code']>;
};

function isOccupationalHealthCareEntry (object: object): object is OccupationalHealthCareEntry {
  if ('type' in object && object.type === 'OccupationalHealthcare') {
    return true
  }

  return false
}

function isHospitalEntry (object: object): object is HospitalEntry {
  if ('type' in object && object.type === 'Hospital') {
    return true
  }

  return false
}

function isHealthCheckEntry (object: object): object is HealthCheckEntry {
  if ('type' in object && object.type === 'HealthCheck') {
    return true
  }

  return false
}

export function parseEntry (object: unknown) {
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if (isOccupationalHealthCareEntry(object)) {
    const newEntry = {

    }
  }

  // sin terminar

  throw new Error('Incorrect data: a field missing');
}