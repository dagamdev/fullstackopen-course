const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const timeout = 60_000
const initialBlogs = [
  {
    title: 'Frontend, JavaScript, React, CSS, Performance',
    author: 'Miguel Angel Duran Garcia',
    url: 'https://midu.dev/',
    likes: 3568
  },
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
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(initialBlogs.length)
    response.body.forEach(blog => {
      expect(blog.id).toBeDefined()
    })
  }, timeout)

  test('exist likes', async () => {
    const newBlog = {
      title: 'Dagamblog',
      author: 'dagamdev',
      url: 'http://localhost:321/api/blogs'
    }

    const response = await api.post('/api/blogs').send(newBlog)

    expect(response.status).toBe(201)
    expect(response.body.likes).toBeDefined()
    expect(response.body.likes).toBe(0)
  }, timeout)

  test('create blog - 400 Bad Request', async () => {
    const newBlog = {
      title: 'hello',
      author: 'dagamdev'
    }

    const response = await api.post('/api/blogs').send(newBlog)

    expect(response.status).toBe(400)
  }, timeout)
})

afterAll(() => {
  mongoose.connection.close()
})
