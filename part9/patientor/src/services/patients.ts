import type { NewPatient } from "../types"
import Patients from "../data/patients"

function getAllPatients () { 
  return Patients.map(({ssn, ...patient}) => patient)
}

function addPatient (newPatient: NewPatient) {
  const patient = {...newPatient, id: crypto.randomUUID()}
  Patients.push(patient)

  return patient
}

function getPatientById (patientId: string) {
  return Patients.find(p => p.id === patientId)
}

export default {
  getAllPatients,
  addPatient,
  getPatientById
}