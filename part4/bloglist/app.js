const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { DB_URL, NODE_ENV } = require('./utils/config')
const logger = require('./utils/logger')
const morgan = require('morgan')

const middlewares = require('./utils/middlewares')
const blogControllers = require('./controllers/blog.controllers')

mongoose.set('bufferTimeoutMS', 30_000)

mongoose.connect(DB_URL).then(() => {
  logger.info('Connected to the data base')
}).catch((err) => {
  logger.error(`Error connecting to the data base: ${err.message}`)
})

app.use(express.json())
app.use(cors())
app.use(morgan(NODE_ENV === 'dev' ? 'dev' : 'common'))

app.use('/api/blogs', blogControllers)

app.use(middlewares.unknowEndpoint)
app.use(middlewares.error)

module.exports = app
