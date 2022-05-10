//load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
  gamecard?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
    * Custom command to get element by data-cy values
    * @example cy.getByDataCy('selector')
    */
    getByDataCy(selector: string): Chainable<Element>

    /**
    * Custom command check banner in page
    * @example cy.shouldRenderBanner()
    */
    shouldRenderBanner(): Chainable<Element>

    /**
    * Custom command check showcase in page
    * @example cy.shouldRenderShowcase({ name: 'showcase', highlight: true })
    */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
    * Custom command testa os fields by label
    * @example cy.getFieldsExplore({ [windows, mac] })
    */
    getFields(fields: FieldsAttributes[]): Chainable<Element>
  }
}
