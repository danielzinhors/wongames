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

//Add testing library commands
import '@testing-library/cypress/add-commands';
import 'cypress-plugin-stripe-elements';
import { User } from './generate'
Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('getByDataCy', (selector, ...args) => {cy.get(`[data-cy="${selector}"]`, ...args)})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /horizon zero dawn/i })
    cy.findByRole('link', { name: /buy now/i })
    cy.get(':nth-child(2) > button').click()
    cy.wait(500)
    cy.findByRole('heading', { name: /huge promotion!/i })
    cy.findByRole('link', { name: /browse games/i })
    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)
    cy.findByRole('heading', { name: /cyberpunk 2077/i })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false, gamecard = true }) => {
  cy.getByDataCy(`${name}`).within(() => {
    cy.findByRole('heading', { name }).should('exist')
    if (gamecard) {
      cy.getByDataCy("game-card").should('have.length.gt', 0)
    }
    cy.getByDataCy("Highlight").should(highlight ? 'exist' : 'not.exist')
    if (highlight) {
      cy.getByDataCy("Highlight").within(() => {
        cy.findByRole('link').should('have.attr', 'href')

      })
    }
  })
})

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({ label }) => {
    cy.findByText(label).should('exist')
  })

})

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text') //transforma em texto
    .then( $el => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text') //transforma em texto
    .then( $el => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', value)
})

Cypress.Commands.add('shouldBeByPrice', (value) => {
  cy.findByText(`Under $${value}`).click()
    cy.wait(500)
    cy.location('href').should('contain', `price_lte=${value}`)
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(value)
    })
})

Cypress.Commands.add('shouldBeByPlatform', (platform, url) => {
  cy.findByText(platform).click()
  cy.wait(500)
  cy.location('href').should('contain', `platforms=${url}`)
})

Cypress.Commands.add('shouldBeByGenre', (genre) => {
  cy.findByText(genre).click()
  cy.wait(500)
  let genreMin = genre.toLowerCase()
  cy.location('href').should('contain', `categories=${genreMin}`)
})

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/username/i).type(user.username)
  cy.findByPlaceholderText(/email/i).type(user.email)
  cy.findByPlaceholderText(/^password/i).type(user.password)
  cy.findByPlaceholderText(/confirm password/i).type(user.password)
  cy.findByRole('button', { name: /sign up now/i }).click()
})

Cypress.Commands.add('signIn', (email = 'e2e@wongames.com', password = '123456') => {
  cy.url().should('contain', `${Cypress.config().baseUrl}/sign-in`)
  cy.findByPlaceholderText(/e-mail/i).type(email)
  cy.findByPlaceholderText(/^password/i).type(password)
  cy.findByRole('button', { name: /sign in now/i }).click()
})

Cypress.Commands.add('addToCartByIndex', (index) => {
  cy.getByDataCy('game-card').eq(index).within(() => {
    cy.findByRole('button', { name: /add to cart/i }).click()
  })
})

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('game-card').eq(index).within(() => {
    cy.findByRole('button', { name: /remove from cart/i }).click()
  })
})
