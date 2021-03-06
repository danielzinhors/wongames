import Game, { GameTemplateProps } from 'templates/Game'
import { initializeApollo } from '../../utils/apollo'
import { useRouter } from 'next/router'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { getSrcImg } from 'utils/utilidades'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()
  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <Game {...props} />
}

//gerar em build time
export async function getStaticPaths() {
  /*return { // use para mock
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }*/
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

/*export async function getStaticProps() { // mockado
  const descriptionHTML = `
    <img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
    * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
    <hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
    <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
    Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
    <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
    Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
    <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
    Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


    <p class="description__copyrights">
    CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
    CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
    respective owners.
  </p>`

  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      },
      gallery: mockItems,
      description: descriptionHTML,
      details: {
        developer: 'CD PROJEKT RED',
        releaseDate: '2020-12-10T23:00:00',
        platforms: ['windows'],
        publisher: 'CD PROJEKT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing']
      },
      upcomingGames: gamesMok,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMok
    }
  }
}*/

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { games, recommended }
  } = await apolloClient.query<QueryGameBySlug, QueryGameBySlugVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache' //garantir sempre dados novos no revalidate
  })

  if (!games.length) {
    return { notFound: true }
  }

  const game = games[0]
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache' //garantir sempre dados novos no revalidate
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: getSrcImg(game.cover?.src as string),
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: getSrcImg(image.src as string),
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingGames: gamesMapper(upcoming.upCommingGames),
      ...(upcoming.showcase?.upcomingGames?.title && {
        upcomingTitle: upcoming.showcase?.upcomingGames?.title
      }),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      ...(recommended?.section?.title && {
        recommendedTitle: recommended?.section?.title
      }),
      recommendedGames: gamesMapper(recommended?.section?.games)
    }
  }
}
