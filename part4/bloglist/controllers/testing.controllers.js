const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

router.post('/reset', async (_, res, next) => {
  try {
    await Blog.deleteMany({})
    await User.deleteMany({})

    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router
