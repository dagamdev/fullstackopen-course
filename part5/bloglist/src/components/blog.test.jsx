import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('show title and author of blog and hide extra info', async () => {
  /** @type {Blog} */
  const mockBlog = {
    id: '661051gd308a2544g77e1989',
    title: 'Blog title',
    url: 'https://blog.url',
    likes: 10,
    author: 'Miguel Angel',
    user: {
      id: '123913',
      name: 'David Garcia',
      username: 'dagamdev'
    }
  }

  const { container } = render(<Blog blog={mockBlog} username={'dagamdev'} setBlogs={() => {}} />)
  screen.debug()
  screen.getByText(mockBlog.title)
  screen.getByText(mockBlog.author)

  const extraInfo = container.querySelector('.info')

  expect(extraInfo).toBeNull()
})
