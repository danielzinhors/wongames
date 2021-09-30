import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList from '.'
import mockCards from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render cards list', () => {
    renderWithTheme(<CardsList cards={mockCards} />)
    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/cards/mastercard.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()

    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
