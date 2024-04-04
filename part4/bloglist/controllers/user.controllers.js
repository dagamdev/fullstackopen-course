const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.find()

      res.json(users)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const { name, username, password } = req.body
      const passwordHash = await bcrypt.hash(password, 10)

      const newUser = await User.create({
        name,
        username,
        password: passwordHash
      })

      res.json(newUser)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
