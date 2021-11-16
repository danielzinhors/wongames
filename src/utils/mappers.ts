import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight,
  QueryHome_sections_popularGames_highlight,
  QueryHome_sections_upcomingGames_highlight
} from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
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
  }))
}

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developer: game.developers[0].name,
      img: `http://localhost:1337${game.cover?.url}`,
      price: game.price
    }))
  )
}

export const highlightMapper = (
  highlight:
    | QueryHome_sections_popularGames_highlight
    | QueryHome_sections_upcomingGames_highlight
    | QueryHome_sections_freeGames_highlight
    | null
    | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.backgroundImage?.url}`,
      ...(highlight?.floatImage && {
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`
      }),
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}