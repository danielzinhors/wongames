import userEvent from '@testing-library/user-event'
import 'server.mock'
import { render, screen } from 'utils/tests/test-utils'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send e-mail/i })
    ).toBeInTheDocument()
  })

  it('should validate the e-mail', async () => {
    render(<FormForgotPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/e-mail/i),
      'valid@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/You just received an e-mail/i)
    ).toBeInTheDocument()
  })

  it('should show an invalid e-mail', async () => {
    render(<FormForgotPassword />)

    await userEvent.type(screen.getByPlaceholderText(/E-mail/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/"email" must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show an inexistent e-mail error', async () => {
    render(<FormForgotPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/e-mail/i),
      'false@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' }
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toHaveValue(
      'valid@email.com'
    )
  })
})
