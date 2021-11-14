import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home '

import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:dcdasasdasd
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, upCommingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    }
  })
  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      ...(sections?.upcomingGames?.title && {
        upcommingGamesTitle: sections?.upcomingGames?.title
      }),
      upcommingHighligth: highlightMapper(sections?.upcomingGames?.highlight),
      upcommingGames: gamesMapper(upCommingGames),
      ...(sections?.freeGames?.title && {
        freeGamesTitle: sections?.freeGames?.title
      }),
      freeHighligth: highlightMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(freeGames)
    }
  }
}
