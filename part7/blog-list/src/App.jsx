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
import { Box, Text, Heading, Flex, Button, Link as LinkStyle } from '@chakra-ui/react'

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
    <Box display={'flex'} alignItems={'center'} rowGap={'6'} flexDirection={'column'} as='main' p={'5'} backgroundColor={'gray.300'} minH={'100vh'}>
      <Router>

        <Flex as={'header'} padding={'4'} columnGap={'4'} justifyContent={'space-between'} rounded={'lg'} maxW={'800px'} w={'full'} backgroundColor={'gray.200'}>
          <Heading as={'h1'}>Blogs</Heading>
          <Flex as={'nav'} alignItems={'center'} columnGap={'3'}>
            <LinkStyle color={'blue.500'}>
              <Link to='/'>Home</Link>
            </LinkStyle>
            <LinkStyle color={'blue.500'}>
              <Link to='/users'>Users</Link>
            </LinkStyle>
          </Flex>
          <Flex alignItems={'center'} columnGap={'2'}>
            <Text>{user.username} logged in</Text>
            <Button colorScheme='red' onClick={handleLogout}>
              logout
            </Button>
          </Flex>
        </Flex>

        <Notification notification={notification} />
        
        <Routes>
          <Route path='/' element={<>
            <Togglable buttonLabel="Create new blog" ref={blogFormRef}>
              <NewBlog blogFormRef={blogFormRef} />
            </Togglable>
            <Box as='ul' display={'flex'} flexDirection={'column'} rowGap={'3'}>
              {blogs.slice().sort(byLikes).map(blog =>
                <Blog
                  key={blog.id}
                  blog={blog}
                />
              )}
            </Box>
          </>} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/blogs/:id' element={<BlogView />} />
        </Routes>

      </Router>
    </Box>
  )
}

export default App