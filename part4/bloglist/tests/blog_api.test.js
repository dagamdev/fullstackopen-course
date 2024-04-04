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

let blogId = ''

beforeEach(async () => {
  await Blog.deleteMany()
  const newBlogs = await Blog.insertMany(initialBlogs)
  blogId = newBlogs[0].id
}, timeout)

describe('requests GET', () => {
  test('Get all blogs', async () => {
    const res = await api.get('/api/blogs')

    expect(res.body).toHaveLength(initialBlogs.length)
    res.body.forEach(blog => {
      expect(blog.id).toBeDefined()
    })
  }, timeout)

  test('get blog by id', async () => {
    const res = await api.get(`/api/blogs/${blogId}`)

    expect(res.body.id).toBe(blogId)
    expect(res.body.title).toBe('React patterns')
    expect(res.body.author).toBe('Michael Chan')
    expect(res.body.likes).toBe(7)
  })
})

describe('requests POST', () => {
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

describe('requests DELETE', () => {
  test('delete blog', async () => {
    const res = await api.delete(`/api/blogs/${blogId}`)

    expect(res.status).toBe(200)
    expect(res.body.id).toBeDefined()
    expect(res.body.id).toBe(blogId)
  })
})

describe('requests PATCH', () => {
  test('update blog likes', async () => {
    const res = await api.patch(`/api/blogs/${blogId}`).send({ likes: 30 })

    expect(res.status).toBe(200)
    expect(res.body.likes).toBe(30)
  })

  test('update title and author', async () => {
    const res = await api.patch(`/api/blogs/${blogId}`).send({
      title: 'Hola que hace?',
      author: 'Jest Testing'
    })

    expect(res.status).toBe(200)
    expect(res.body.title).toBe('Hola que hace?')
    expect(res.body.author).toBe('Jest Testing')
    expect(res.body.likes).toBe(7)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
