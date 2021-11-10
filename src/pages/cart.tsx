import Cart, { CartProps } from 'templates/Cart'
import mockGames from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import paymentMock from 'components/PaymentOptions/mock'

export default function CartTemplate(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: mockGames,
      recommendedHighlight: highlightMock,
      items: itemsMock,
      total: '$ 430,00',
      cards: paymentMock
    }
  }
}
