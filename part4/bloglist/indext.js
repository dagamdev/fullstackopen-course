const app = require('./app')
const mongoose = require('mongoose')
const { PORT, DB_URL } = require('./utils/config')
const logger = require('./utils/logger')

mongoose.connect(DB_URL).then(() => {
  logger.info('Connected to the data base')
}).catch((err) => {
  logger.error(`Error connecting to the data base: ${err.message}`)
})

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
