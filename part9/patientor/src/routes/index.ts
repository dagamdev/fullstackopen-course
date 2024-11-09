import express from 'express'
import diagnoses from './diagnoses'
import patients from './patients'

const router = express.Router()

router.use('/diagnoses', diagnoses)
router.use('/patients', patients)

export default router