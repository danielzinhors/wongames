/// <reference path="../support/index.d.ts" />

describe.skip('Cypress TS', () => {
  it.skip('should go to go goggle', () => {
    cy.google()
  })

  it('should change light/dark thee on willian justen site', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })
})
