/// <reference path="../support/index.d.ts" />
import {
  genreFields,
  platformsFields,
  priceFields,
  sortFields
} from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filter columns', () => {

    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')

    cy.getFields(priceFields)

    cy.getFields(genreFields)

    cy.getFields(platformsFields)

    cy.getFields(sortFields)

  })

  it('should show 15 games and show more games when show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it('should order by price greater or less', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('FREE').should('exist')
    })
    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeGreaterThan(0)
    })
  })

  it('should order by price', () => {
    cy.findByText(/highest to lowest/i).click()
    cy.wait(500)
    //
    cy.findByText('Free').click()
    cy.wait(500)
    cy.location('href').should('contain', 'price_lte=0')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('FREE').should('exist')
    })

    cy.shouldBeByPrice(50);

    cy.shouldBeByPrice(100);

    cy.shouldBeByPrice(150);

    cy.shouldBeByPrice(250);

    cy.shouldBeByPrice(500);

  })

  it('should filter by platform and genre', () => {
    cy.shouldBeByPlatform('Windows', 'windows')
    cy.shouldBeByPlatform('Linux', 'linux')
    cy.shouldBeByPlatform('Mac OS', 'mac')

    cy.shouldBeByGenre('Action')
    cy.shouldBeByGenre('Adventure')
    cy.shouldBeByGenre('Sports')
    cy.shouldBeByGenre('Puzzle')
    cy.shouldBeByGenre('Horror')
    cy.shouldBeByGenre('Platform')
    cy.shouldBeByGenre('Fantasy')
    //cy.shouldBeByGenre('RPG')
    cy.shouldBeByGenre('JRPG')
    cy.shouldBeByGenre('Simulation')
    cy.shouldBeByGenre('Strategy')
    cy.shouldBeByGenre('Shooter')

  })

  it('should be not match games', () => {
    cy.visit('/games')
    cy.findByText(/highest to lowest/i).click()
    cy.wait(500)
    cy.findByText(/linux/i).click()
    cy.wait(500)
    cy.findByText(/sports/i).click()
    cy.wait(500)
    cy.findByText(/We didn't find any games with this filter/i).should('exist')
  })

})
