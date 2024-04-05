const router = require('express').Router()
const Blog = require('../models/blog')
const middlewares = require('../utils/middlewares')

router.route('/')
  .get(async (_, res, next) => {
    try {
      const blogs = await Blog.find().populate('user', {
        id: 1,
        name: 1,
        username: 1
      })

      res.status(200).json(blogs)
    } catch (error) {
      next(error)
    }
  })
  .post(middlewares.userExtractor, async (req, res, next) => {
    try {
      const { user } = req

      const newBlog = await Blog.create({
        ...req.body,
        user: user.id
      })

      user.blogs.push(newBlog)
      await user.save()

      res.status(201).json(newBlog)
    } catch (error) {
      next(error)
    }
  })

router.route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params
      const blog = await Blog.findById(id).populate('user', {
        id: 1,
        name: 1,
        username: 1
      })

      if (!blog) {
        res.status(404).json({
          error: 'blog not found'
        })
        return
      }

      res.json(blog)
    } catch (error) {
      next(error)
    }
  })
  .delete(middlewares.userExtractor, async (req, res, next) => {
    try {
      const { user } = req
      const { id } = req.params

      const blog = await Blog.findById(id)

      if (!blog) {
        res.status(404).json({
          error: 'blog not found'
        })
        return
      }

      if (blog.user.toString() !== user.id.toString()) {
        return res.status(401).json({
          error: 'the blog does not belong to the user'
        })
      }

      await blog.deleteOne()

      res.json(blog)
    } catch (error) {
      next(error)
    }
  })
  .patch(async (req, res, next) => {
    try {
      const { id } = req.params
      const { title, author, url, likes } = req.body

      if (!author && !title && !url && !likes) {
        res.status(400).json({
          error: 'no property has been provided to edit'
        })
        return
      }

      const updatedBlog = await Blog.findByIdAndUpdate(id, {
        title,
        author,
        url,
        likes
      }, { new: true, runValidators: true, context: 'query' })

      if (!updatedBlog) {
        res.status(404).json({
          error: 'blog not found'
        })
        return
      }

      res.json(updatedBlog)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
