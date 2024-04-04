const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.route('/')
  .get(async (_, res, next) => {
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

      if (!password) {
        res.status(400).json({
          error: '`password` is required'
        })
        return
      }

      if (password.length < 3) {
        res.status(400).json({
          error: 'The password must be greater than 3 characters'
        })
        return
      }

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
