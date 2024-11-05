import express from 'express'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello world')
})

const PORT = 400
app.listen(PORT, () => {
  console.log(`The server is runing in the port ${PORT}`)
})
