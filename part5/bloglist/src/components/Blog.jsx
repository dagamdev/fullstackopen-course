import { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

/**
 * Blog component
 * @param {{blog: Blog, setBlogs: SetState<Blog[]>, username: string, addLike: () => void}} param0 props
 * @returns JSX
 */
export default function Blog ({ blog, setBlogs, username, addLike }) {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(s => !s)
  }

  const deleteBlog = async () => {
    const confirm = window.confirm(`Are you sure you want to delete the ${blog.title} blog?`)
    if (!confirm) return

    try {
      await blogService.delete(blog.id)

      setBlogs(bs => bs.filter(b => b.id !== blog.id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <li>
      <div>
        <h3>{blog.title}</h3>
        <strong>{blog.author}</strong>
      </div>
      <button onClick={toggleShowAll}>{showAll ? 'Hide' : 'Show'}</button>

      {showAll && <div className='info'>
        <a href={blog.url} target='_blank' rel="noreferrer">Blog url</a>
        <div>
          <p>Likes {blog.likes}</p>
          <button className='addLike' onClick={addLike}>Like</button>
        </div>
        {blog.user && <p>{blog.user.name}</p>}
        {username === blog.user?.username && <button onClick={deleteBlog}>Delete</button>}
      </div>}
    </li>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  setBlogs: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  addLike: PropTypes.func.isRequired
}
