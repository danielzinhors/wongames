import { render, screen } from 'utils/tests/test-utils'
import theme from 'styles/theme'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = render(<ProfileMenu />)
    expect(screen.getByRole('link', { name: /My profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(screen.getByRole('link', { name: /My cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )
    expect(screen.getByRole('link', { name: /My orders/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )
    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)
    expect(screen.getByRole('link', { name: /My cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
