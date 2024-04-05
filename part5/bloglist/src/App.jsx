import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/loginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!user) return

    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )  
  }, [user])

  return (
    <div>
      {user
        ? <>
          <h2>Blogs</h2>

          <p>{user.name} logged in</p>

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