import { render, screen } from 'utils/test-utils'
import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(
      <CartList items={mockItems} total={'R$ 330,00'} />
    )
    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={mockItems} total={'R$ 330,00'} hasButton />)
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty it there are no games', () => {
    render(<CartList />)
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
