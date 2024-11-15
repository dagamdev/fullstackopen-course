import { GENDER } from "enums"

export interface Diagnose {
  code: string
  name: string
  latin?: string
}

interface BaseEntry {
  id: string
  date: string
  specialist: string
  diagnosisCodes?: string[]
  description: string
}

export interface OccupationalHealthCareEntry extends BaseEntry {
  type: 'OccupationalHealthcare'
  employerName: string
  sickLeave?: {
    startDate: string
    endDate: string
  }
}

export interface HospitalEntry extends BaseEntry {
  type: 'Hospital'
  discharge: {
    date: string,
    criteria: string
  }
}

export interface HealthCheckEntry extends BaseEntry {
  type: 'HealthCheck'
  healthCheckRating: number
}

export type Entry = OccupationalHealthCareEntry | HospitalEntry | HealthCheckEntry

export interface Patient {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: GENDER
  occupation: string
  entries: Entry[]
}

export type NewPatient = Omit<NewPatient, 'id' | 'entries'>

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>