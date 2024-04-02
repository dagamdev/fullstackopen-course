const express = require('express')
const app = express()
const cors = require('cors')

const blogControllers = require('./controllers/blog.controllers')

app.use(express.json())
app.use(cors())

app.use('/api/blogs', blogControllers)

module.exports = app
