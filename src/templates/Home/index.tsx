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
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  freeHighligth: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Showcase title={'News'} games={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <Showcase
        title={'Most Popular'}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title={'Upcomming'}
        games={upcommingGames}
        highlight={upcommingHighligth}
      />

      <Showcase
        title={'Free games'}
        highlight={freeHighligth}
        games={freeGames}
      />
    </Container>
  </Base>
)

export default Home
