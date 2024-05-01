import { useEffect, createRef } from 'react'
import blogService from './services/blogs'
import storage from './services/storage'
import Login from './components/Login'
import Blog from './components/Blog'
import NewBlog from './components/NewBlog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from './reducers/notificationReducer'
import { initializeBlogs, removeBlog, updateBlog } from './reducers/blogReducer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { setUser } from './reducers/userReducer'
import Users from './components/Users'

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

  const handleVote = async (blog) => {
    const updatedBlog = await blogService.update(blog.id, {
      likes: blog.likes + 1
    })

    dispatch(updateBlog({id: blog.id, blog: updatedBlog}))
    dispatch(notify(`You liked ${updatedBlog.title} by ${updatedBlog.author}`))
  }

  const handleLogout = () => {
    dispatch(setUser(null))
    storage.removeUser()
    notify(`Bye, ${user.username}!`)
  }

  const handleDelete = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await blogService.remove(blog.id)
      dispatch(removeBlog(blog.id))
      dispatch(notify(`Blog ${blog.title}, by ${blog.author} removed`))
    }
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
        <Routes>
          <Route path='/' element={<>
            <Togglable buttonLabel="create new blog" ref={blogFormRef}>
              <NewBlog blogFormRef={blogFormRef} />
            </Togglable>
            {blogs.slice().sort(byLikes).map(blog =>
              <Blog
                key={blog.id}
                blog={blog}
                handleVote={handleVote}
                handleDelete={handleDelete}
              />
            )}
            <Link to='/users'>
              Users
            </Link>
          </>} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App