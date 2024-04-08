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
    cy.request('POST', `${apiEndpoint}users`, mockUser)
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
      this.beforeEach(() => {
        cy.createBlog(mockBlog)
        cy.visit('')
      })
      
      it.only('Add loke to a blog', function () {
        cy.contains(mockBlog.title).parents().eq(1).as('blog')

        cy.get('@blog').find('button').click()
        cy.get('@blog').find('p').as('likes')
        cy.get('@likes').should('contain', 'Likes 0')
        cy.get('@blog').find('button').eq(1).click()
        cy.get('@likes').should('contain', 'Likes 1')
      })
    })
  })
})
