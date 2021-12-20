import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishilistButton from 'components/WishlistButton'
import formatPrice from 'utils/format-price'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">
      {price == 0 ? 'FREE' : formatPrice(price)}
    </Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText={true} />
      <WishilistButton id={id} size="large" hasText />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
