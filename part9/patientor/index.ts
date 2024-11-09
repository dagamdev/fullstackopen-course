import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/api/ping', (_req, res) => {
  res.send('Pong')
})

const PORT = 1234
app.listen(PORT, () => {
  console.log(`Api readi in port ${PORT}`)
})