import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import blogService from '../services/blogs'
import { notify } from "../reducers/notificationReducer"
import storage from "../services/storage"
import { useEffect, useState } from "react"

export default function BlogView () {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [blog, setBlog] = useState()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')

  useEffect(() => {
    blogService.getById(id).then(setBlog).catch(console.error)
  }, [id])

  if (!blog) return null

  console.log(blog)
  
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
    try {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
        await blogService.remove(blog.id)
        dispatch(notify(`Blog ${blog.title}, by ${blog.author} removed`))
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleCreateComment = async () => {
    try {
      const updatedBlog = await blogService.addComment(blog.id, comment)
      setBlog(updatedBlog)
      setComment('')
    } catch (error) {
      console.error(error)
    }
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

      <div>
        <p>Comments</p>

        <div>
          <input type="text" value={comment} onChange={(ev) => setComment(ev.target.value)} />
          <button onClick={handleCreateComment}>Add comment</button>
        </div>

        {(blog?.comments?.length ?? 0) > 0 && <ul>
          {blog.comments.map((c, i) => <li key={i}>{c}</li>)}
        </ul>}
      </div>

      {canRemove && <button onClick={handleDelete}>
        Delete
      </button>}
    </section>
  )
}