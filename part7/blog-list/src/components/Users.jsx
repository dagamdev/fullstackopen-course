import { useState, useEffect, Fragment } from "react"
import userService from '../services/users'

export default function Users () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll().then(us => {
      setUsers(us)
    }).catch(console.error)
  }, [])

  return (
    <section>
      <h2>Users</h2>

      <table>
        <tr>
          <th>Users</th>
          <th>Blogs</th>
        </tr>
        <tr>
          {users.map(u => <Fragment key={u.id}>
            <td>{u.username}</td>
            <td>{u.blogs.length}</td>
          </Fragment>)}
        </tr>
      </table>
    </section>
  )
}