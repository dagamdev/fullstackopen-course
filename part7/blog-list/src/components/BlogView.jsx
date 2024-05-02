import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import blogService from '../services/blogs'
import { notify } from "../reducers/notificationReducer"
import storage from "../services/storage"
import { useEffect, useState } from "react"
import { Heading, Link, Input, Box, Button } from '@chakra-ui/react'

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
      <Heading as={'h2'} fontSize={'3xl'}>{blog?.title}</Heading>

      <Box my={'4'}>
        <Link href={blog?.url} color="blue.500" isExternal>{blog?.url}</Link>
        <Box display={'flex'}>
          <p style={{margin: 0}}>{blog?.likes} likes</p>
          <Button onClick={handleVote}>Like</Button>
        </Box>
        <p>Added by {blog?.author}</p>
      </Box>

      <div>
        <Heading as={'h4'} fontSize={'lg'}>Comments</Heading>

        <Box>
          <Input type="text" value={comment} onChange={(ev) => setComment(ev.target.value)} />
          <Button colorScheme="green" onClick={handleCreateComment}>Add comment</Button>
        </Box>

        {(blog?.comments?.length ?? 0) > 0 && <ul>
          {blog.comments.map((c, i) => <li key={i}>{c}</li>)}
        </ul>}
      </div>

      {canRemove && <Button colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>}
    </section>
  )
}