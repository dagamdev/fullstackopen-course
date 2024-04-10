import axios from 'axios'

const baseUrl = 'http://localhost:321/anecdotes'

export default {
  async getAll () {
    const res = await axios.get(baseUrl)
    return res.data  
  },

  /**
   * @param {string} content 
   */
  async create (content) {
    const res = await axios.post(baseUrl, {
      content,
      votes: 0
    })
    return res.data
  }
}
