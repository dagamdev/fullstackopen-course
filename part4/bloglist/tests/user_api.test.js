const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)
const mongoose = require('mongoose')
const User = require('../models/user')

describe('user api', () => {
  test('user creation integrity', async () => {
    const usersRes = await api.get('/api/users')
    const newUser = {
      username: 'David',
      password: '3f'
    }

    const newUserRes = await api.post('/api/users').send(newUser)
    const users1Res = await api.get('/api/users')

    expect(usersRes.body.length).toBe(users1Res.body.length)
    expect(newUserRes.status).toBe(400)
    expect(newUserRes.body.error).toBeDefined()
  }, 60_000)
})

afterAll(() => {
  mongoose.connection.close()
})
