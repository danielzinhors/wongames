import CartList, { CartListProps } from 'components/CartList'
import Container from 'components/Container'
import Divider from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedTitle?: string
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedTitle = 'You may like these games',
  recommendedHighlight,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>
        <S.Content>
          <CartList />
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>
        <Divider />
        <Showcase
          title={recommendedTitle}
          games={recommendedGames}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  )
}

export default Cart
