import { render, screen, fireEvent } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/Shopping cart/i)).toHaveLength(2)
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)
    //TDD create
    //selecionar o nosso Menufull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    //clicar no botao de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    //clicar no botao de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('shold show register box when logged out', () => {
    render(<Menu />)
    // expect(screen.queryByText(/My profile/i)).not.toBeInTheDocument()
    // expect(screen.queryByText(/Wishilist/i)).not.toBeInTheDocument()
    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2)
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })

  it('shold show whishilist and create account when logged in', () => {
    render(<Menu username="will" />)
    // expect(screen.getByText(/My profile/i)).toBeInTheDocument()
    // expect(screen.getByText(/Wishilist/i)).toBeInTheDocument()
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
  })
})
