import { useParams } from "react-router-dom"
import userService from '../services/users'
import { useEffect, useState } from "react"
import Blog from "./Blog"

export default function User () {
  const {id} = useParams()
  const [user, setUser] = useState(0)

  useEffect(() => {
    userService.getById(id).then(setUser).catch(console.error)
  }, [id])


  return (
    <section>
      <h2>{user.username}</h2>

      <p>Added blogs:</p>
      {user.blogs?.map(b => <Blog key={b.id} blog={b} />)}
    </section>
  )
}