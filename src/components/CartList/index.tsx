import Link from 'next/link'
import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'
import * as S from './styles'
import Empty from 'components/Empty'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}
        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>
          {hasButton && (
            <Link href="/cart" passHref>
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <>
        <Empty title="Your cart is empty" hasLink />
      </>
    )}
  </S.Wrapper>
)

export default CartList
