import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/loginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const sessionStorage = localStorage.getItem('userSession')

    if (sessionStorage) {
      setUser(JSON.parse(sessionStorage))
    }
  }, [])

  useEffect(() => {
    if (!user) return

    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    ).catch(console.error)
  }, [user])

  const logout = () => {
    setUser(null)
    setBlogs([])
    localStorage.removeItem('userSession')
  }

  return (
    <div>
      {user
        ? <>
          <h2>Blogs</h2>

          <div>
            <p>{user.name} logged in</p>
            <button onClick={logout}>Logout</button>
          </div>

          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </>
        : <LoginForm setUser={setUser} />
      }
    </div>
  )
}

export default App
