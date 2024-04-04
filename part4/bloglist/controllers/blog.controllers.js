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

router.route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params
      const blog = await Blog.findById(id)

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
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params

      const deletedBlog = await Blog.findByIdAndDelete(id)

      if (!deletedBlog) {
        res.status(404).json({
          error: 'blog not found'
        })
        return
      }

      res.json(deletedBlog)
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
