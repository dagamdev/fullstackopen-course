import axios from 'axios'

const baseUrl = '/api/blogs'
/**
 * The access token to make requests
 * @type string | null
 */
let token = null

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

/**
 * Get session token
 * @param {{name: string, username: string, token: string}} userSession User session data
 */
const setToken = userSession => {
  token = `Bearer ${userSession.token}`
}

/**
 * Create a new blog
 * @param {{title: string, author: string, url: string}} newPostData The data to create a new blog
 */
const create = async (newBlogData) => {
  const res = await axios.post(baseUrl, newBlogData, {
    headers: { Authorization: token }
  })
  return res.data
}

const update = async (blogId, updatedData) => {
  const res = await axios.patch(`${baseUrl}/${blogId}`, updatedData, {
    headers: { Authorization: token }
  })
  return res.data
}

export default { getAll, setToken, create, update }
