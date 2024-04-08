describe('Blog app', function() {
  const apiEndpoint = Cypress.env('API')
  const mockUser = {
    username: 'dagamdev',
    password: 'testpass'
  }
  const mockBlog = {
    title: 'My blog',
    author: 'David Garcia',
    url: 'https://dagam.dev'
  }

  beforeEach(function() {
    cy.request('POST', `${apiEndpoint}testing/reset`)
    cy.createUser(mockUser)
    cy.visit('')
    cy.contains('Login').as('loginButton')
  })

  it('Login form is shown', function() {
    cy.get('@loginButton').click().then(() => {
      cy.contains('Login in to application')
      cy.contains('Username')
      cy.contains('Password')
    })
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.get('@loginButton').click()

      cy.contains('Username').find('input').type(mockUser.username)
      cy.contains('Password').find('input').type(mockUser.password)
      cy.get('form').submit()
      cy.contains('successfully registered')
      cy.get('.notification').should('have.css', 'background-color', 'rgba(0, 128, 0, 0.3)')
    })

    it('fails with wrong credentials', function() {
      cy.get('@loginButton').click()

      cy.contains('Username').find('input').type(mockUser.username)
      cy.contains('Password').find('input').type('incorrect')
      cy.get('form').submit()
      cy.contains('invalid username or password')
      cy.get('.notification').should('have.css', 'background-color', 'rgba(255, 0, 0, 0.3)')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.login(mockUser)
      cy.visit('')
    })

    it('A blog can be created', function() {
      cy.contains('Create new blog').click()

      cy.get('input[placeholder="Blog title..."]').type(mockBlog.title)
      cy.get('input[placeholder="Blog author..."]').type(mockBlog.author)
      cy.get('input[placeholder="Blog URL..."]').type(mockBlog.url)
      cy.get('form').submit()

      cy.get('.notification').should('contain', `A new ${mockBlog.author} blog has been created`).should('have.css', 'background-color', 'rgba(0, 128, 0, 0.3)')

      cy.contains(mockBlog.title).parent().should('contain', mockBlog.author)
    })
    
    describe('When a user blog', function () {
      const mock2Blog = {
        title: 'The Angular framework',
        author: 'Angular.io',
        url: 'https://angular.io'
      }

      this.beforeEach(() => {
        cy.createBlog(mockBlog)
        cy.visit('')
        cy.contains(mockBlog.title).parents().eq(1).as('blog')
      })
      
      it('Add like to a blog', function () {
        cy.get('@blog').find('button').click()
        cy.get('@blog').find('p').as('likes')
        cy.get('@likes').should('contain', 'Likes 0')
        cy.get('@blog').find('button').eq(1).click()
        cy.get('@likes').should('contain', 'Likes 1')
      })

      it('Delete blog', function () {
        cy.on('window:confirm', () => true)

        cy.get('@blog').find('button').click()
        cy.get('@blog').find('button').eq(2).click()

        cy.contains(mockBlog.title).should('not.exist')
      })

      it('Only creator can see delete button for a blog', function () {
        const mock2User = {
          username: 'Angular',
          password: 'angular.io'
        }
        cy.createUser(mock2User)
        cy.login(mock2User)
        cy.createBlog(mock2Blog)
        cy.visit('')

        cy.get('@blog').find('button').click()
        cy.get('@blog').contains('Delete').should('not.exist')

        cy.contains(mock2Blog.title).parents().eq(1).as('secondBlog')
        cy.get('@secondBlog').find('button').click()
        cy.get('@secondBlog').contains('Delete').should('exist')
      })

      it.only('Verify blogs are sorted by likes, with the most liked blog first', function () {
        cy.createBlog(mock2Blog)
        cy.visit('')

        cy.get('@blog').find('button').click()
        cy.get('@blog').find('button').eq(1).click()

        cy.contains(mock2Blog.title).parents().eq(1).as('newBlog')
        cy.get('@newBlog').find('button').click()
        cy.get('@newBlog').find('button').eq(1).as('addLike')
        cy.get('@addLike').click()
        cy.wait(1000)
        cy.get('@addLike').click()
        

        cy.get('li').first().contains(mock2Blog.title)
      })
    })
  })
})
