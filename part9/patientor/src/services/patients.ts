import type { Patient } from "types"
import Patients from "../data/patients"

function getAllPatients () { 
  return Patients.map(({ssn, ...patient}) => patient)
}

function addPatient (newPatient: Omit<Patient, 'id'>) {
  const patient = {...newPatient, id: crypto.randomUUID()}
  Patients.push(patient)

  return patient
}

export default {
  getAllPatients,
  addPatient
}