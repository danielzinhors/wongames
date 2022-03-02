import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'

import * as S from './styles'
import Container from 'components/Container'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Divider from 'components/Divider'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export type GameTemplateProps = {
  slug: string
  cover: string
  recommendedTitle?: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingTitle?: string
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  recommendedTitle = 'You may like these games',
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingTitle = 'Upcoming',
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Won Games`}
      description={gameInfo.description}
      canonical={`https://wongames.willianjusten.com.br/game/${slug}`}
      openGraph={{
        url: `https://wongames.willianjusten.com.br/game/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image src={cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>
    <S.Main>
      <S.SectionGameInfo>
        <Container>
          <GameInfo {...gameInfo} />
        </Container>
      </S.SectionGameInfo>
      <S.SectionGallery>
        <Container>{!!gallery && <Gallery items={gallery} />}</Container>
      </S.SectionGallery>
      <S.SectionDescription>
        <Container>
          <TextContent title="Description" content={description} />
        </Container>
      </S.SectionDescription>
      <S.SectionGameDetails>
        <Container>
          <GameDetails {...details} />
          <Divider />
        </Container>
      </S.SectionGameDetails>
      <Container>
        <Showcase
          title={upcomingTitle}
          highlight={upcomingHighlight}
          games={upcomingGames}
        />
        <Showcase title={recommendedTitle} games={recommendedGames} />
      </Container>
    </S.Main>
  </Base>
)

export default Game
