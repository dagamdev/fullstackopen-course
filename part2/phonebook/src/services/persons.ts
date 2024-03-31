import axios from 'axios'
import type { Person } from '@/types'

const baseUrl = '/api/persons'

function getAll () {
  return axios.get(baseUrl).then<Person[]>(res => res.data)
}

function create (newPerson: Omit<Person, 'id'>) {
  return axios.post(baseUrl, newPerson).then<Person>(res => res.data)
}

function update (id: string, newPerson: Person) {
  return axios.put(`${baseUrl}/${id}`, newPerson).then<Person>(res => res.data)
}

function remove (id: string) {
  return axios.delete(`${baseUrl}/${id}`).then<Person>(res => res.data)
}

export default { getAll, create, update, delete: remove }
