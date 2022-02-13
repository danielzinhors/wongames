import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight,
  QueryHome_sections_popularGames_highlight,
  QueryHome_sections_upcomingGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import formatPrice from 'utils/format-price'
import { getSrcImg } from 'utils/utilidades'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: getSrcImg(banner.image?.url as string),
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

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getSrcImg(game.cover?.url as string),
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight:
    | QueryHome_sections_popularGames_highlight
    | QueryHome_sections_upcomingGames_highlight
    | QueryHome_sections_freeGames_highlight
    | null
    | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: getSrcImg(highlight.backgroundImage?.url as string),
        ...(highlight?.floatImage && {
          floatImage: getSrcImg(highlight.floatImage?.url as string)
        }),
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        img: getSrcImg(game.cover?.url as string),
        price: formatPrice(game.price)
      }))
    : []
}
