const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { JWT_SECRET } = require('../utils/config')

router.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid username or password'
      })
    }

    const userForToken = {
      id: user.id,
      username: user.username
    }

    const token = jwt.sign(
      userForToken,
      JWT_SECRET,
      { expiresIn: 60 * 60 * 24 * 5 }
    )

    res.status(200).send({
      token,
      name: user.name,
      username: user.username
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
