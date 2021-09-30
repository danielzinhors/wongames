import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading size="small" lineBottom color="black">
      My cards
    </Heading>
    {cards?.map((card) => (
      <S.Card key={card.number}>
        <S.CardImg src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
