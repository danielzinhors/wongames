import { gql } from '@apollo/client'
import { RecommendedFragment } from 'graphql/fragments/recommended'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      ...RecommendedFragment
    }
  }
  ${RecommendedFragment}
`
