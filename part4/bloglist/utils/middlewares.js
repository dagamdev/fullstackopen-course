const logger = require('./logger')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./config')

/**
 * Unknow endpoint middleware
 * @param {import("express").Request} _ No used
 * @param {import("express").Response} res Express response
 */
function unknowEndpoint (_, res) {
  res.status(404).send({ error: 'unknown endpoint' })
}

function error (error, _, res, next) {
  logger.error('Name: ', error.name)
  logger.error('Message: ', error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    return res.status(400).json({ error: 'expected `username` to be unique' })
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'invalid token'
    })
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: 'token expired'
    })
  }

  next(error)
}

/**
 * @param {import('express').Request} req Express request
 * @returns
 */
function getTokenFrom (req) {
  const authorization = req.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

/**
 * Get authorization token middleware
 * @param {import('express').Request} req Express Request
 * @param {import('express').Response} res Express Response
 * @param {import('express').NextFunction} next Express next function
 */
function tokenExtractor (req, res, next) {
  req.token = getTokenFrom(req)

  next()
}

/**
 * Get user from DB
 * @param {import('express').Request} req Express Request
 * @param {import('express').Response} res Express Response
 * @param {import('express').NextFunction} next Express next function
 */
async function userExtractor (req, res, next) {
  try {
    const decodedToken = jwt.verify(req.token, JWT_SECRET)

    if (!decodedToken.id) {
      return res.status(401).json({
        error: 'invalid token'
      })
    }

    const user = await User.findById(decodedToken.id)

    if (!user) {
      return res.status(401).json({
        error: 'invalid token'
      })
    }

    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  unknowEndpoint,
  error,
  tokenExtractor,
  userExtractor
}
