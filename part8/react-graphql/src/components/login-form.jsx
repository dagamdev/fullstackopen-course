import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { LOGIN } from "../queries"
import { useLogin } from "../hooks/useLogin"

export default function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [login, result] = useMutation(LOGIN)
  const {setLogin} = useLogin()

  useEffect(() => {
    console.log(result.data)
    if (result.data) {
      localStorage.setItem('token', result.data.login.value)
      setLogin(true)
    }
  }, [result.data, setLogin])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    console.log({username, password})
    login({variables: { username, password }})

    setUsername('')
    setPassword('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <label>
        <span>Username</span>
        <input
          type="text" 
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password" 
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
      </label>

      <button>Log in</button>
    </form>
  )
}