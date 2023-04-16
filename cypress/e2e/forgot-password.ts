///<reference path="../support/index.d.ts"/>

describe('Forgot Password', () => {
  it('should fill then input and receive a success message', () => {
    // intercepta chamadas para o endpoint
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true }
      })
      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')
    cy.findAllByPlaceholderText(/e-mail/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send e-mail/i }).click()
    cy.findByText(/You just received an e-mail/i).should('exist')
  })

  it('should fill then input an invalid email and receive an error', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad request',
          message: [
            {
              messages: [
                {
                  message: 'this email does not exist'
                }
              ]
            }
          ]
        }
      })
    })
    cy.visit('/forgot-password')
    cy.findAllByPlaceholderText(/e-mail/i).type('fake@wongames.com')
    cy.findByRole('button', { name: /send e-mail/i }).click()
    cy.findByText(/this email does not exist/i).should('exist')
  })
})
