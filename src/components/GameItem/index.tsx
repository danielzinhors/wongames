import { Download } from '@styled-icons/boxicons-solid/Download'
import { useCart } from 'hooks/use-cart'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  puschaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <S.Image src={img} alt={title} />
        </S.ImageBox>
        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remover</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>
      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.puschaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            <S.ImagCard src={paymentInfo.img} alt={paymentInfo.flag} />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}
export default GameItem
