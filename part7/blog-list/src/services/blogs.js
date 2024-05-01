import axios from 'axios'
import storage from './storage'

const baseUrl = '/api/blogs'

const getConfit = () => ({
  headers : { Authorization: `Bearer ${storage.loadUser().token}` }
})

const getAll = async () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getById = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const update = async (id, newObject) => {
  const request = axios.patch(`${baseUrl}/${id}`, newObject, getConfit())
  return request.then(response => response.data)
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, getConfit())
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, getConfit())
  return response.data
}

const addComment = async (id, comment) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, {comment}, getConfit())
  return response.data
}

export default { getAll, getById, create, update, remove, addComment }