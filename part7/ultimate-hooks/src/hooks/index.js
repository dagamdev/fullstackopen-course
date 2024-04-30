import axios from "axios"
import { useState, useEffect } from "react"

/**
 * @param {string} type 
 * @returns {{type: string, value: string, onChange: () => void}}
 */
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return [{
    type,
    value,
    onChange
  }, reset]
}

/**
 * @param {string} baseUrl 
 * @returns 
 */
export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    axios.get(baseUrl).then(res => {
      setResources(res.data)
    }).catch(console.error)
  }, [baseUrl])
  
  const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    setResources(rs => [...rs, response.data])
  }
  
  const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)
    setResources(rs => rs.map(r => r.id === id ? response.data : r))
  }

  const service = {
    create,
    update
  }

  return [
    resources, service
  ]
}