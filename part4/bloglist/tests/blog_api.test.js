const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('API tests', () => {
  test('Get blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(1)
  }, 100_000)
})

afterAll(() => {
  mongoose.connection.close()
})
