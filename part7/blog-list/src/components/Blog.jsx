import PropTypes from 'prop-types'
import { Link as LinkStyle } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
  return (
    <LinkStyle display={'block'} py={'2'} px={'4'} backgroundColor={'gray.400'} rounded={'md'} boxShadow={'md'}>
      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
    </LinkStyle>
  )
}

Blog.propTypes = {
  blog: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    user: PropTypes.object
  }).isRequired
}

export default Blog