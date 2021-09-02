import bannerSliderMock from 'components/BannerSlider/mock'
import gamesCardMock from 'components/GameCardSlider/mock'
import highligthMock from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannerSliderMock,
      newGames: gamesCardMock,
      mostPopularHighlight: highligthMock,
      mostPopularGames: gamesCardMock,
      upcommingGames: gamesCardMock,
      upcommingHighligth: highligthMock,
      upcommingMoreGames: gamesCardMock,
      freeHighligth: highligthMock,
      freeGames: gamesCardMock
    }
  }
}
