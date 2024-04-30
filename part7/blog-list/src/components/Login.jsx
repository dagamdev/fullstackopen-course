import { useState } from 'react'
import loginService from '../services/login'
import storageService from '../services/storage'
import { useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer'
import { setUser } from '../reducers/userReducer'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  
  const handleLogin = async (ev) => {
    ev.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password
      })
      dispatch(setUser(user))
      storageService.saveUser(user)
      dispatch(notify(`Welcome back, ${user.name}`))
      setUsername('')
      setPassword('')
    } catch (error) {
      console.error(error)
      notify('Wrong credentials', 'error')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          data-testid='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          data-testid='password'
          onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login