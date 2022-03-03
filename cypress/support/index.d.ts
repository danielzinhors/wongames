//load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom comend to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
