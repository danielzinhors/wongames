import { render, screen } from 'utils/tests/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
    expect(container.parentElement).toMatchSnapshot()
  })

  it('sould render the forgot password link', () => {
    render(<FormSignIn />)
    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('sould render the text and link to sign up', () => {
    render(<FormSignIn />)
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()
  })
})
