describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:321/api/testing/reset')
    cy.visit('http://localhost:5173')
  })

  it('Login form is shown', function() {
    cy.contains('Login').click().then(() => {
      cy.contains('Login in to application')
      cy.contains('Username')
      cy.contains('Password')
    })
  })
})
