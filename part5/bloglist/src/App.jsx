import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/loginForm'
import BlogForm from './components/blogForm'
import Notification from './components/notification'
import Toggleable from './components/toggleable'

const App = () => {
  /**
   * @type {[Blog[], SetState<Blog[]>]}
   */
  const [blogs, setBlogs] = useState([])

  /**
   * @type {[name: UserState, setUser: SetState<UserState>]}
   */
  const [user, setUser] = useState(null)

  /**
   * @type {[NotifiState, SetState<NotifiState>]}
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

  /** @param {Blog} blog */
  const addBlogLike = (blog) => {
    return async () => {
      try {
        const updatedBlog = await blogService.update(blog.id, {
          likes: blog.likes + 1
        })

        setBlogs(bs => bs.map(b => b.id === blog.id ? updatedBlog : b))
      } catch (error) {
        console.error(error)
      }
    }
  }

  /** @param {Omit<Blog, 'user' | 'id' | 'likes'>} blogData */
  const createBlog = async (blogData) => {
    try {
      const newBlog = await blogService.create(blogData)

      console.log({ newBlog })

      setBlogs(bs => [...bs, newBlog])
      setNotification({
        type: 'success',
        message: `A new ${blogData.author} blog has been created`
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
    <div>
      {notification && <Notification notification={notification} setNotification={setNotification} />}
      {user
        ? <>
          <h2>Blogs app</h2>

          <div className='session'>
            <p>{user.name} logged in</p>
            <button onClick={logout}>Logout</button>
          </div>

          <Toggleable buttonLabel='Create new blog' >
            <BlogForm createBlog={createBlog} />
          </Toggleable>

          <ul>
            {blogs.sort((a, b) => b.likes - a.likes).map(blog =>
              <Blog key={blog.id} blog={blog} setBlogs={setBlogs} username={user.username} addLike={addBlogLike(blog)} />
            )}
          </ul>
        </>
        : <Toggleable buttonLabel='Login'>
          <LoginForm setUser={setUser} setNotification={setNotification} />
        </Toggleable>
      }
    </div>
  )
}

export default App
