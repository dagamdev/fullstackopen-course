import express from 'express'
import patientsService from '../services/patients'
import { parseDiagnosisCodes, toNewPatientEntry } from '../guards/patients'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json(patientsService.getAllPatients())
})

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedPatient = patientsService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

router.get('/:id', (req, res) => {
  const patient = patientsService.getPatientById(req.params.id)

  if (!patient) {
    res.status(404).json({
      error: 'Patient not found'
    })
    return
  }

  res.json(patient)
})

router.post('/:id/entries', (req, res) => {
  try {
    const diagnosisCodes = parseDiagnosisCodes(req.body)
  
    res.json(diagnosisCodes)
    
  } catch (error) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

export default router