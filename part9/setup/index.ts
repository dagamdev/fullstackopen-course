import express from 'express'
import { calculateBmi } from './bmiCalculator'

const app = express()
// app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello world')
})

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)
  console.log(height, weight)

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

const PORT = 400
app.listen(PORT, () => {
  console.log(`The server is runing in the port ${PORT}`)
})
