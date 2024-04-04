const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const timeout = 60_000
const initialBlogs = [
  {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  }
]

beforeEach(async () => {
  await Blog.deleteMany()
  await Blog.insertMany(initialBlogs)
}, timeout)

describe('API tests', () => {
  test('Get blogs', async () => {
    const res = await api.get('/api/blogs')

    expect(res.body).toHaveLength(initialBlogs.length)
    res.body.forEach(blog => {
      expect(blog.id).toBeDefined()
    })
  }, timeout)

  test('new blog', async () => {
    const newBlog = {
      url: 'https://midu.dev/',
      title: 'Frontend, JavaScript, React, CSS, Performance',
      author: 'Miguel Angel Duran Garcia',
      likes: 3568
    }

    const newBlogRes = await api.post('/api/blogs').send(newBlog)

    expect(newBlogRes.status).toBe(201)

    const blogsRes = await api.get('/api/blogs')

    expect(blogsRes.body.length).toBe(initialBlogs.length + 1)
    expect(blogsRes.body).toContainEqual(newBlogRes.body)
  }, timeout)

  test('exist likes', async () => {
    const newBlog = {
      title: 'Dagamblog',
      author: 'dagamdev',
      url: 'http://localhost:321/api/blogs'
    }

    const res = await api.post('/api/blogs').send(newBlog)

    expect(res.status).toBe(201)
    expect(res.body.likes).toBeDefined()
    expect(res.body.likes).toBe(0)
  }, timeout)

  test('create blog - 400 Bad Request', async () => {
    const newBlog = {
      title: 'hello',
      author: 'dagamdev'
    }

    const res = await api.post('/api/blogs').send(newBlog)

    expect(res.status).toBe(400)
  }, timeout)
})

afterAll(() => {
  mongoose.connection.close()
})
