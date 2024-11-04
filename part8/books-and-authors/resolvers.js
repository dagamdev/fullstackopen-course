const { GraphQLError } = require('graphql')
const Book = require('./schemas/books')
const Author = require('./schemas/author')
const User = require('./schemas/user')
const jwt = require('jsonwebtoken')

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, {author, genre}) => {
      try {
        const authorUser = await Author.findOne({name: author})

        const books = await Book.find({
          ...(authorUser ? {author: authorUser._id} : {}),
          ...(genre ? {genres: {$in: [genre]}} : {})
        }).populate('author')

        return books
      } catch (error) {
        throw new GraphQLError(error.message)
      }
    },
    allAuthors: async () =>  {
      return await Author.find()
    },
    me: async (r, args, context) => {
      try {
        const user = await User.findOne({username: context.currentUser.username})

        return user
      } catch (error) {
        throw new GraphQLError(error.message)
      }
    },
    allGenres: async () => {
      const genres = []
      try {
        const allBooks = await Book.find()

        for (const b of allBooks) {
          for (const g of b.genres) {
            if (!genres.includes(g)) genres.push(g)
          }
        }

        return genres
      } catch (error) {
        throw new GraphQLError(error.message)
      }
    }
  },
  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError('Not authenticated', {
          extensions: {
            code: 'UN_AUTHORIZED',
          }
        })
      }

      try {
        if (await Book.findOne({title: args.title})) return null

        const newAuthor = await Author.findOneAndUpdate(
          {name: args.author},
          args,
          {new: true, upsert: true}
        )

        const newBook = await Book.create({
          ...args,
          author: newAuthor._id
        })
        const book = await newBook.populate('author')

        return book
      } catch (error) {
        throw new GraphQLError(error.message, {
          extensions: {
            code: 'BAD_BOOK_INPUT',
            invalidArgs: args,
            error
          }
        })
      }
    },
    editAuthor: async (r, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError('Not authenticated', {
          extensions: {
            code: 'UN_AUTHORIZED',
          }
        })
      }

      try {
        const author = await Author.findOneAndUpdate(
          {name: args.name},
          {born: args.setBornTo},
          {new: true}
        )
        if (!author) return null
        
        return author
      } catch (error) {
        throw new GraphQLError(error.message)
      }
    },
    createUser: async (r, args) => {
      try {
        const user = await User.create(args)
      
        return user
      } catch (error) {
        throw new GraphQLError(error.message, {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args,
            error
          }
        })
      }
    },
    login: async (r, args) => {
      try {
        const user = await User.findOne({ username: args.username })

        if (!user || args.password !== 'secret' ) {
          throw new GraphQLError('wrong credentials', {
            extensions: {
              code: 'BAD_USER_INPUT'
            }
          })        
        }
    
        const userForToken = {
          username: user.username,
          id: user._id,
        }
    
        return { value: jwt.sign(userForToken, process.env.JWT_SECRET) }
      } catch (error) {
        throw new GraphQLError(error.message, {
          extensions: {
            code: 'BAD_USER_LOGIN',
            invalidArgs: args,
            error
          }
        })
      }
    }
  },
  Author: {
    bookCount: async (author) => {
      return await Book.find({author: author.id}).countDocuments()
    }
  }
}

module.exports = resolvers