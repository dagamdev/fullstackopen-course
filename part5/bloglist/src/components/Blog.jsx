import { useState } from 'react'
import blogService from '../services/blogs'

/**
 * Blog component
 * @param {{blog: Blog, setBlogs: SetState<Blog[]>}} param0 props
 * @returns JSX
 */
export default function Blog ({ blog, setBlogs }) {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(s => !s)
  }

  const addLike = async () => {
    try {
      const updatedBlog = await blogService.update(blog.id, {
        likes: blog.likes + 1
      })

      console.log(updatedBlog)

      setBlogs(bs => bs.map(b => b.id === blog.id ? updatedBlog : b))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <li>
      <h3>{blog.title}</h3>
      <button onClick={toggleShowAll}>{showAll ? 'Hide' : 'Show'}</button>

      {showAll && <div>
        <a href={blog.url} target='_blank' rel="noreferrer">Blog url</a>
        <div>
          <p>Likes {blog.likes}</p>
          <button onClick={addLike}>Like</button>
        </div>
        <p>{blog.author}</p>
      </div>}
    </li>
  )
}
