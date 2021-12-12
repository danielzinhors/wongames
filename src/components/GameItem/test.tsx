import { render, screen } from 'utils/tests/test-utils'

import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Read Dead Redenption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...props} />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(
      screen.getByRole('heading', { name: /Read Dead Redenption 2/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      number: '**** **** **** 4326',
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      puschaseDate: 'Puschase made on 07/20/2020 at 20:32'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.puschaseDate)).toBeInTheDocument()
  })
})
