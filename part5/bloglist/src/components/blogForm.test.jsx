import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './blogForm'

const mockBlog = {
  title: 'My blog',
  author: 'Nexxuz',
  url: 'https://nexxuz.world'
}

describe('blogForm component tests', () => {
  test('create new blog', async () => {
    const createBlog = jest.fn()

    render(<BlogForm createBlog={createBlog} />)

    const user = userEvent.setup()
    const titleInput = screen.getByPlaceholderText('Blog title...')
    const authorInput = screen.getByPlaceholderText('Blog author...')
    const urlInput = screen.getByPlaceholderText('Blog URL...')

    await user.type(titleInput, mockBlog.title)
    await user.type(authorInput, mockBlog.author)
    await user.type(urlInput, mockBlog.url)

    const createButton = screen.getByText('Create')

    await user.click(createButton)
    screen.debug()

    expect(createBlog.mock.calls).toHaveLength(1)
    const blogData = createBlog.mock.calls[0][0]

    expect(blogData.title).toBe(mockBlog.title)
    expect(blogData.author).toBe(mockBlog.author)
    expect(blogData.url).toBe(mockBlog.url)
  }, 60_000)
})
