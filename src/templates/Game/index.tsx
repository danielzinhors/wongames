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

export type GameTemplateProps = {
  cover: string
  recommendedTitle?: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  recommendedTitle = 'You may like these games',
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
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
          title={'Upcoming'}
          highlight={upcomingHighlight}
          games={upcomingGames}
        />
        <Showcase title={recommendedTitle} games={recommendedGames} />
      </Container>
    </S.Main>
  </Base>
)

export default Game
