// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', ({username, password}) => {
  cy.request('POST', `${Cypress.env('API')}users`, {username, password})
})

Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', `${Cypress.env('API')}login`, {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('userSession', JSON.stringify(body))
  })
})

Cypress.Commands.add('createBlog', ({title, author, url}) => {
  const userSession = localStorage.getItem('userSession')

  if (!userSession) return
  const user = JSON.parse(userSession)

  cy.request({
    method: 'POST', 
    url: `${Cypress.env('API')}blogs`,
    body: {title, author, url},
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
})