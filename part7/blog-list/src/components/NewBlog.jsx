import { useState } from 'react'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading
} from '@chakra-ui/react'

const NewBlog = ({ blogFormRef }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newBlog = await blogService.create({ title, url, author })
      dispatch(addBlog(newBlog))
      dispatch(notify(`Blog created: ${newBlog.title}, ${newBlog.author}`))
      blogFormRef.current.toggleVisibility()
      setAuthor('')
      setTitle('')
      setUrl('')
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormControl as={'form'} onSubmit={handleSubmit} backgroundColor={'gray.200'} rounded={'md'} p={'4'} isRequired>
      <Heading as={'h2'} fontSize={'2xl'} mb={'2'}>Create a New Blog</Heading>

      <FormLabel>
        Title:
        <Input
          type="text"
          data-testid='title'
          value={title}
          onChange={handleTitleChange}
        />
      </FormLabel>
      <FormLabel>
        URL:
        <Input
          type="text"
          data-testid='url'
          value={url}
          onChange={handleUrlChange}
        />
      </FormLabel>
      <FormLabel>
        Author:
        <Input
          type="text"
          data-testid='author'
          value={author}
          onChange={handleAuthorChange}
        />
      </FormLabel>

      <Button colorScheme='green' type="submit">Create</Button>
    </FormControl>
  )
}

export default NewBlog