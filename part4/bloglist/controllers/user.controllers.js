const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.route('/')
  .get(async (_, res, next) => {
    try {
      const users = await User.find().populate('blogs', {
        url: 1,
        title: 1,
        author: 1,
        id: 1
      })

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

      res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
  })

router.route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await User.findById(id).populate('blogs', {
        url: 1,
        title: 1,
        author: 1,
        likes: 1,
        id: 1
      })

      if (!user) {
        res.status(404).json({
          error: 'user not found'
        })
        return
      }

      res.json(user)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
