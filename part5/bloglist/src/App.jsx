import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/loginForm'
import BlogForm from './components/blogForm'
import Notification from './components/notification'
import Toggleable from './components/toggleable'

const App = () => {
  const [blogs, setBlogs] = useState([])

  /**
   * @type {[name: UserSession, setUser: SetUser]}
   */
  const [user, setUser] = useState(null)

  /**
   * @type {[NotifiState, SetNotifi]}
   */

  const [notification, setNotification] = useState(null)

  useEffect(() => {
    const sessionStorage = localStorage.getItem('userSession')

    if (sessionStorage) {
      const userSession = JSON.parse(sessionStorage)
      setUser(userSession)
      blogService.setToken(userSession)
    }
  }, [])

  useEffect(() => {
    if (!user) return

    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    ).catch(error => {
      console.error(error)
      setNotification({
        type: 'error',
        message: error.response.data.error
      })
    })
  }, [user])

  const logout = () => {
    setUser(null)
    setBlogs([])
    localStorage.removeItem('userSession')
  }

  return (
    <div>
      {notification && <Notification notification={notification} setNotification={setNotification} />}
      {user
        ? <>
          <h2>Blogs</h2>

          <div className='session'>
            <p>{user.name} logged in</p>
            <button onClick={logout}>Logout</button>
          </div>

          <Toggleable visible={false} buttonLabel='Create new blog' >
            <BlogForm setBlogs={setBlogs} setNotification={setNotification} />
          </Toggleable>

          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </>
        : <LoginForm setUser={setUser} setNotification={setNotification} />
      }
    </div>
  )
}

export default App
