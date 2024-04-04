require('dotenv').config()

module.exports = {
  PORT: process.env.PORT ?? 321,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET ?? 'secret'
}
