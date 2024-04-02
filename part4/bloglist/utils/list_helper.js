function dummy (blogs) {
  return 1
}

function totalLikes (blogs) {
  return blogs.reduce((acc, v) => acc + v.likes, 0)
}

module.exports = {
  dummy,
  totalLikes
}
