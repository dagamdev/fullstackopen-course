import express from 'express'
import { calculateBmi } from './bmiCalculator'
import { calculateExercises } from './exerciseCalculator'

const app = express()
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello world')
})

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)

  if (isNaN(height)) {
    res.status(404).json({ error: 'The height query parama is not number' })
    return
  }
  if (isNaN(weight)) {
    res.status(404).json({ error: 'The weight query parama is not number' })
    return
  }

  const bmi = calculateBmi(height, weight)
  res.json({
    height,
    weight,
    bmi
  })
})

app.post('/exercises', (req, res) => {
  const dailyExercises = req.body?.daily_exercises
  const target = req.body?.target
  const days: number[] = []

  try {
    if (typeof target !== 'number') throw new Error('The target field is not a number')
    if (!(dailyExercises instanceof Array)) throw new Error('The daily_exercises field is not a number array')

    for (const exDay of dailyExercises) {
      const day = Number(exDay)
      if (isNaN(day)) throw new Error(`The hour ${exDay} is not a number`)
      days.push(day)
    }

    res.json(calculateExercises(days, target))
  } catch (error) {
    if (error instanceof Error) {
      res.json({ error: error.message })
    } else res.json({ error: 'An error has occurred' })
  }
})

const PORT = 400
app.listen(PORT, () => {
  console.log(`The server is runing in the port ${PORT}`)
})
