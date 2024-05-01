import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import blogService from '../services/blogs'
import { notify } from "../reducers/notificationReducer"
import storage from "../services/storage"
import { useEffect, useState } from "react"

export default function BlogView () {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [blog, setBlog] = useState()

  useEffect(() => {
    blogService.getById(id).then(setBlog).catch(console.error)
  }, [id])

  const canRemove = blog?.user ? blog.user?.username === storage.me() : false

  const handleVote = async () => {
    try {
      const updatedBlog = await blogService.update(blog.id, {
        likes: blog.likes + 1
      })
  
      setBlog(updatedBlog)
      dispatch(notify(`You liked ${updatedBlog.title} by ${updatedBlog.author}`))
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async () => {
    // try {
    //   if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
    //     await blogService.remove(blog.id)
    //     dispatch(removeBlog(blog.id))
    //     dispatch(notify(`Blog ${blog.title}, by ${blog.author} removed`))
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <section>
      <h2>{blog?.title}</h2>

      <div>
        <a href={blog?.url} target="_blank">{blog?.url}</a>
        <div>
          <p style={{margin: 0}}>{blog?.likes} likes</p>
          <button onClick={handleVote}>Like</button>
        </div>
        <p>Added by {blog?.author}</p>
      </div>

      {canRemove && <button onClick={handleDelete}>
        Remove
      </button>}
    </section>
  )
}