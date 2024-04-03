const { NODE_ENV } = require('./config')

module.exports = {
  info (...args) {
    if (NODE_ENV === 'test') return
    console.log(...args)
  },
  error (...args) {
    if (NODE_ENV === 'test') return
    console.error(...args)
  }
}
