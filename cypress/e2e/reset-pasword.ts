///<reference path="../support/index.d.ts"/>

describe('Reset Password', () => {
  it('should show error if password is empty', () => {
    cy.visit('/reset-password?code=123456734')
    cy.findAllByPlaceholderText(/^confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.findByText(/password" is not allowed to be empty/i).should('exist')
  })

  it('should show error if confirm password is empty', () => {
    cy.visit('/reset-password?code=123456734')
    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.findByText(/confirm_password" is not allowed to be empty/i).should('exist')
  })

  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=123456734')
    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/^confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })
    cy.visit('/reset-password?code=wrong_code')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/^confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.findByText(/Incorrect code provided/i).should('exist')

  })


})
