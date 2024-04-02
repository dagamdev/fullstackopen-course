function dummy (blogs) {
  return 1
}

function totalLikes (blogs) {
  return blogs.reduce((acc, v) => acc + v.likes, 0)
}

function favoriteBlog (blogs) {
  return blogs.reduce((acc, v) => v.likes > acc.likes ? v : acc)
}

function mostBlogs (blogs) {
  return blogs.reduce((ac, v) => {
    const blogsCount = blogs.filter(b => b.author === v.author).length

    return blogsCount > ac.blogs
      ? {
          author: v.author,
          blogs: blogsCount
        }
      : ac
  }, {
    author: '',
    blogs: 0
  })
}

function mostLikes (blogs) {
  return blogs.reduce((ac, v) => {
    const likesCount = blogs.filter(b => b.author === v.author).reduce((ac, v) => ac + v.likes, 0)

    return likesCount > ac.likes
      ? {
          author: v.author,
          likes: likesCount
        }
      : ac
  }, {
    author: '',
    likes: 0
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
