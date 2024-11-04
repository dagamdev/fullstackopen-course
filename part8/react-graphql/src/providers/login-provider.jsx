import { useEffect, useState } from "react"
import { LoginContext } from "../contexts/login-context"


export default function LoginProvider ({children}) {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) setLogin(true)
  }, [])

  return (
    <LoginContext.Provider value={{login, setLogin}}>
      {children}
    </LoginContext.Provider>
  )
}