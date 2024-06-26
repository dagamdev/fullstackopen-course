const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { DB_URL, NODE_ENV } = require('./utils/config')
const logger = require('./utils/logger')
const morgan = require('morgan')

const middlewares = require('./utils/middlewares')
const blogControllers = require('./controllers/blog.controllers')
const userControllers = require('./controllers/user.controllers')
const loginControllers = require('./controllers/login.controllers')

mongoose.set('bufferTimeoutMS', 30_000)

mongoose.connect(DB_URL).then(() => {
  logger.info('Connected to the data base')
}).catch((err) => {
  logger.error(`Error connecting to the data base: ${err.message}`)
})

app.use(express.json())
app.use(cors())
app.use(morgan(NODE_ENV === 'dev' ? 'dev' : 'tiny'))

app.use(middlewares.tokenExtractor)

app.use('/api/blogs', blogControllers)
app.use('/api/users', userControllers)
app.use('/api/login', loginControllers)

if (NODE_ENV === 'test') {
  const testingControllers = require('./controllers/testing.controllers')

  app.use('/api/testing', testingControllers)
}

app.use(middlewares.unknowEndpoint)
app.use(middlewares.error)

module.exports = app
