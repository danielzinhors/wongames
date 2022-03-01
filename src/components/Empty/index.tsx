import Button from 'components/Button'
import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description?: string
  hasLink?: boolean
}

const Empty = ({
  title,
  description = 'Go back and explore great games and offers',
  hasLink
}: EmptyProps) => (
  <S.Wrapper>
    <Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      width={380}
      height={285}
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
