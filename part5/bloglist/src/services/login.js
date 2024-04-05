import axios from 'axios'

const baseUrl = '/api/login'
let token = null

/**
 * Login service
 * @param {{username: string, password: string}} credentials Credential from login
 */
const login = async credentials => {
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

export default { login }