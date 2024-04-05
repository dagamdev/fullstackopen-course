import { useState } from "react"
import loginService from '../services/login'

export default function LoginForm ({setUser}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const getHandleChange = (setState) => {
    return ({currentTarget}) => setState(currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    loginService.login({username, password}).then(data => {
      console.log('Login data: ', data)
      setUser(data)
      setUsername('')
      setPassword('')
    }).catch(console.error)
  }
  
  return (
    <>
      <h2>Login in to application</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input onChange={getHandleChange(setUsername)} value={username} type="text" />
        </label>
        <label>
          Password
          <input onChange={getHandleChange(setPassword)} value={password} type="password" />
        </label>

        <button>Login</button>
      </form>
    </>
  )
}