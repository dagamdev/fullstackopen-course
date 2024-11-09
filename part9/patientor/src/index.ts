import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/ping', (_req, res) => {
  res.send('Pong')
})

app.use('/api', routes)

const PORT = 1234
app.listen(PORT, () => {
  console.log(`Api readi in port ${PORT}`)
})