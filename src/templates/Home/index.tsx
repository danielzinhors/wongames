import Base from 'templates/Base'
import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Container from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames?: GameCardProps[]
  upcommingHighligth?: HighlightProps
  freeHighligth?: HighlightProps
  freeGames?: GameCardProps[]
  newGamesTitle?: string
  mostPopularTitle?: string
  upcommingGamesTitle?: string
  freeGamesTitle?: string
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames = [],
  upcommingHighligth,
  freeGames = [],
  freeHighligth,
  newGamesTitle = 'New',
  mostPopularTitle = 'Popular',
  upcommingGamesTitle = 'UpComming',
  freeGamesTitle = 'Free'
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <Showcase
        title={mostPopularTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />
      {upcommingGames?.length && (
        <Showcase
          title={upcommingGamesTitle}
          games={upcommingGames}
          highlight={upcommingHighligth}
        />
      )}

      {freeGames?.length && (
        <Showcase
          title={freeGamesTitle}
          highlight={freeHighligth}
          games={freeGames}
        />
      )}
    </Container>
  </Base>
)

export default Home
