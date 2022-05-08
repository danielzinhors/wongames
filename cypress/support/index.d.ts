//load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom comend to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
    * Custom comend check banner in page
    * @example cy.google()
    */
    shouldRenderBanner(): Chainable<Element>

    /**
    * Custom comend check showcase in page
    * @example cy.google()
    */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}
