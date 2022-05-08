/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as S from './styles'
import formatPrice from 'utils/format-price'
import CartButton from 'components/CartButton'
import WishilistButton from 'components/WishlistButton'
import Image from 'next/image'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number | bigint
  promotionalPrice?: number | bigint
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper data-cy="game-card">
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <Image
          src={img ? img : ''}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton>
        <WishilistButton id={id} />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>
            {price == 0 ? 'FREE' : formatPrice(price)}
          </S.Price>
        )}
        <S.Price>
          {(promotionalPrice || price) == 0
            ? 'FREE'
            : formatPrice(promotionalPrice || price)}
        </S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
