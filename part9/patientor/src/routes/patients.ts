import express from 'express'
import patients from '../data/patients'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json(patients.map(({ssn, ...patient}) => patient))
})

export default router