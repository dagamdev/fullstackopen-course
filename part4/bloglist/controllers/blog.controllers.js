const router = require('express').Router()
const Blog = require('../models/blog')

router.route('/')
  .get(async (_, res, next) => {
    try {
      const blogs = await Blog.find({})

      res.status(200).json(blogs)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const blog = new Blog(req.body)
      const result = await blog.save()

      res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
