import bannerSliderMock from 'components/BannerSlider/mock'
import gamesCardMock from 'components/GameCardSlider/mock'
import highligthMock from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

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
