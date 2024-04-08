describe('Blog app', function() {
  const mockUser = {
    username: 'dagamdev',
    password: 'testpass'
  }

  beforeEach(function() {
    cy.request('POST', 'http://localhost:321/api/testing/reset')
    cy.request('POST', 'http://localhost:321/api/users', mockUser)
    cy.visit('http://localhost:5173')
  })

  it('Login form is shown', function() {
    cy.contains('Login').click().then(() => {
      cy.contains('Login in to application')
      cy.contains('Username')
      cy.contains('Password')
    })
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('Login').click()

      cy.contains('Username').find('input').type(mockUser.username)
      cy.contains('Password').find('input').type(mockUser.password)
      cy.get('form').submit()
      cy.contains('successfully registered')
      cy.get('.notification').should('have.css', 'background-color', 'rgba(0, 128, 0, 0.3)')
    })

    it('fails with wrong credentials', function() {
      cy.contains('Login').click()

      cy.contains('Username').find('input').type(mockUser.username)
      cy.contains('Password').find('input').type('incorrect')
      cy.get('form').submit()
      cy.contains('invalid username or password')
      cy.get('.notification').should('have.css', 'background-color', 'rgba(255, 0, 0, 0.3)')
    })
  })
})
