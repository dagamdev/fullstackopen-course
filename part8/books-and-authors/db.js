const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

require('dotenv').config()

const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL)
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connection to MongoDB:', error.message)
})
