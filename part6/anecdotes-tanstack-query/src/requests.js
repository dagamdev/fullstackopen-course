import axios from 'axios'

const baseUrl = 'http://localhost:321/anecdotes'

export async function getAll () {
  return axios.get(baseUrl).then(res => res.data)
}
