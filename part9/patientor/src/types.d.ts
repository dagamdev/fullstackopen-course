import { GENDER } from "enums"

export interface Diagnose {
  code: string
  name: string
  latin?: string
}

export interface Entry { 

}

export interface Patient {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: `${GENDER}`
  occupation: string
  entries: Entry[]
}

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>