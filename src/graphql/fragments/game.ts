import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    id
    name
    slug
    cover {
      url
    }
    developers {
      name
    }
    publisher {
      name
    }
    categories {
      name
    }
    platforms {
      name
    }
    price
  }
`
