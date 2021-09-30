import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)
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
    expect(screen.getByRole('link', { name: /Sign out/i })).toHaveAttribute(
      'href',
      '/logout'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('sholu render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)
    expect(screen.getByRole('link', { name: /My cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
