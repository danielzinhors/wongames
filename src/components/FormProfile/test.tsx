import { render, screen } from 'utils/tests/test-utils'

import FormProfile from '.'

const props = {
  email: 'admin@admin.com'
}

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    render(<FormProfile {...props} />)
    expect(
      screen.getByRole('heading', { name: /My profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Reset Password/i })
    ).toHaveAttribute('href', `/forgot-password?email=${props.email}`)

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
