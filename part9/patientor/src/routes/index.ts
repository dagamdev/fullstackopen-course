import express from 'express'
import diagnoses from './diagnoses'

const router = express.Router()

router.use('/diagnoses', diagnoses)
// router.use('/diagnoses', diagnoses)

export default router