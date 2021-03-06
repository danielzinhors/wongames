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

    /**
    * Custom command to check if value is less than price
    * @example cy.shouldBeLessThan( 8 )
    */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
    * Custom command to check if value is greater than price
    * @example cy.shouldBeGreaterThan(100)
    */
    shouldBeGreaterThan(value: number): Chainable<Element>

    /**
    * Custom command to check if value for price
    * @example cy.shouldBeByPrice(100)
    */
    shouldBeByPrice(value: number): Chainable<Element>

    /**
    * Custom command to check for platform
    * @example cy.shouldBeByPlatform(Windows, windows)
    */
    shouldBeByPlatform(platform: string, url: String): Chainable<Element>

    /**
    * Custom command to check for platform
    * @example cy.shouldBeByGenre(action)
    */
    shouldBeByGenre(genre: string): Chainable<Element>
  }
}
