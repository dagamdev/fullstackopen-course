import { useEffect, createRef } from 'react'
import storage from './services/storage'
import Login from './components/Login'
import Blog from './components/Blog'
import NewBlog from './components/NewBlog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from './reducers/notificationReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { setUser } from './reducers/userReducer'
import Users from './components/Users'
import User from './components/User'
import BlogView from './components/BlogView'

const App = () => {
  const blogs = useSelector(({blogs}) => blogs)
  const user = useSelector(({user}) => user)
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const user = storage.loadUser()
    if (user) {
      dispatch(setUser(user))
    }
    dispatch(initializeBlogs())
  }, [dispatch])

  const blogFormRef = createRef()

  const handleLogout = () => {
    dispatch(setUser(null))
    storage.removeUser()
    notify(`Bye, ${user.username}!`)
  }

  if (!user) {
    return (
      <div>
        <h2>blogs</h2>
        <Notification notification={notification} />
        <Login />
      </div>
    )
  }

  const byLikes = (a, b) => b.likes - a.likes

  return (
    <main>
      <h2>Blogs</h2>
      <Notification notification={notification} />
      <div>
        {user.username} logged in
        <button onClick={handleLogout}>
          logout
        </button>
      </div>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
        </nav>
        <Routes>
          <Route path='/' element={<>
            <Togglable buttonLabel="create new blog" ref={blogFormRef}>
              <NewBlog blogFormRef={blogFormRef} />
            </Togglable>
            {blogs.slice().sort(byLikes).map(blog =>
              <Blog
                key={blog.id}
                blog={blog}
              />
            )}
          </>} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/blogs/:id' element={<BlogView />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App