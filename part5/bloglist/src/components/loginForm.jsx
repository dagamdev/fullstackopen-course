import { useState } from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

/**
 * Login user component
 * @param {{setUser: () => void, setNotification: SetNotifi}} param0 props
 * @returns JSX
 */
export default function LoginForm ({ setUser, setNotification }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const getHandleChange = (setState) => {
    return ({ currentTarget }) => setState(currentTarget.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      localStorage.setItem('userSession', JSON.stringify(user))

      setUser(user)
      blogService.setToken(user)
      setUsername('')
      setPassword('')
      setNotification({
        type: 'success',
        message: 'successfully registered'
      })
    } catch (error) {
      console.error(error)
      setNotification({
        type: 'error',
        message: error.response.data.error
      })
    }
  }

  return (
    <>
      <h2>Login in to application</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input onChange={getHandleChange(setUsername)} value={username} type="text" required />
        </label>
        <label>
          Password
          <input onChange={getHandleChange(setPassword)} value={password} type="password" required />
        </label>

        <button>Login</button>
      </form>
    </>
  )
}
