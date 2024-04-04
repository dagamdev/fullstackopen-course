const logger = require('./logger')

/**
 * Unknow endpoint middleware
 * @param {import("express").Request} _ No used
 * @param {import("express").Response} res Express response
 */
function unknowEndpoint (_, res) {
  res.status(404).send({ error: 'unknown endpoint' })
}

function error (error, _, res, next) {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    return res.status(400).json({ error: 'expected `username` to be unique' })
  }

  next(error)
}

module.exports = {
  unknowEndpoint,
  error
}
