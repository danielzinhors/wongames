import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home '

import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

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

  const {
    data: { banners, newGames, upCommingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })
  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text, // utilza || null, ou com destructor
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.backgroundImage?.url}`,
        ...(sections?.popularGames?.highlight?.floatImage && {
          floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`
        }),
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      ...(sections?.upcomingGames?.title && {
        upcommingGamesTitle: sections?.upcomingGames?.title
      }),
      ...(sections?.upcomingGames?.highlight && {
        upcommingHighligth: {
          title: sections?.upcomingGames?.highlight?.title,
          subtitle: sections?.upcomingGames?.highlight?.subtitle,
          backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.backgroundImage?.url}`,
          ...(sections?.upcomingGames?.highlight?.floatImage && {
            floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`
          }),
          buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
          buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
          alignment: sections?.upcomingGames?.highlight?.alignment
        }
      }),
      ...(upCommingGames.length && {
        upcommingGames: upCommingGames.map((game) => ({
          title: game.name,
          slug: game.slug,
          developer: game.developers[0].name,
          img: `http://localhost:1337${game.cover?.url}`,
          price: game.price
        }))
      }),
      ...(sections?.freeGames?.title && {
        freeGamesTitle: sections?.freeGames?.title
      }),
      ...(sections?.freeGames?.highlight && {
        freeHighligth: {
          title: sections?.freeGames?.highlight?.title,
          subtitle: sections?.freeGames?.highlight?.subtitle,
          backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.backgroundImage?.url}`,
          ...(sections?.freeGames?.highlight?.floatImage && {
            floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`
          }),
          buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
          buttonLink: sections?.freeGames?.highlight?.buttonLink,
          alignment: sections?.freeGames?.highlight?.alignment
        }
      }),
      ...(freeGames.length && {
        freeGames: freeGames.map((game) => ({
          title: game.name,
          slug: game.slug,
          developer: game.developers[0].name,
          img: `http://localhost:1337${game.cover?.url}`,
          price: game.price
        }))
      })
    }
  }
}
