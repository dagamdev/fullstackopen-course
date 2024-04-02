const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    required: true
  }
})


mongoose.connect(dbUrl).then(() => {
  console.log('Conected to data base')
}).catch(err => {
  console.error('Error connecting to data base:', err.message)
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
