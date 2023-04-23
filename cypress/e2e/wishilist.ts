/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessa a página não logado
    cy.visit('/wishlist')

    // redireciona e faz signIn
    cy.signIn()

    // verifica se a wishlist tá vazia
    cy.findByText(/your wishlist is empty/i).should('exist')

    // pegar um jogo e adicionar
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findAllByLabelText(/add to wishlist/i).click()
    })

    // verificar se o jogo está lá
    cy.get('.styles__Content-sc-1hoegd8-1 > .styles__Wrapper-sc-1p100cm-0').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remover esse jogo
    cy.get('.styles__Content-sc-1hoegd8-1 > .styles__Wrapper-sc-1p100cm-0').eq(0).within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    // verifica se a wishlist tá vazia
    cy.findByText(/your wishlist is empty/i).should('exist')
  });
});
