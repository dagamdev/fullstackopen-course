import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

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

describe('blog component tests', () => {
  /** @type {HTMLElement} */
  let container

  beforeEach(() => {
    container = render(<Blog blog={mockBlog} username={'dagamdev'} setBlogs={() => {}} />).container
  })

  test('show title and author of blog and hide extra info', async () => {
    screen.debug()
    screen.getByText(mockBlog.title)
    screen.getByText(mockBlog.author)

    const extraInfo = container.querySelector('.info')

    expect(extraInfo).toBeNull()
  })

  test('blog url and likes visible when clicking', async () => {
    const user = userEvent.setup()
    const showButton = screen.getByText('Show')
    await user.click(showButton)

    const info = container.querySelector('.info')
    expect(info).toBeDefined()
  })
})
