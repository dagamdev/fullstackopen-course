import { useState } from 'react'

/**
 * Blog component
 * @param {{blog: Blog}} param0 props
 * @returns JSX
 */
export default function Blog ({ blog }) {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(s => !s)
  }

  return (
    <li>
      <h3>{blog.title}</h3>
      <button onClick={toggleShowAll}>{showAll ? 'Hide' : 'Show'}</button>

      {showAll && <div>
        <a href={blog.url} target='_blank' rel="noreferrer">Blog url</a>
        <div>
          <p>Likes {blog.likes}</p>
          <button>Like</button>
        </div>
        <p>{blog.author}</p>
      </div>}
    </li>
  )
}
