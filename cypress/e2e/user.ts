/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')

    const user = createUser()

    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /sign up now/i }).click()
  })})
