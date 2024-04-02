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
    minLength: 8,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! - example: 756-123-0987`
    },
    required: true
  }
})


mongoose.connect(dbUrl).then(() => {
  console.log('Conected to the data base')
}).catch(err => {
  console.error('Error connecting to the data base:', err.message)
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
