import { GameCardProps } from 'components/GameCard'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { createContext, useContext, useEffect, useState } from 'react'
import { gamesMapper } from 'utils/mappers'
import { wishlistItems } from './mock'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}
const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [whishlistItems, setWihlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: {
      session
    },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWihlistItems(data?.wishlists[0]?.games || [])
  }, [data])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const removeFromWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(whishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
