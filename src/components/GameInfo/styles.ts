import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    width: 100%;
    max-width: min(${theme.grid.container}, 100%);

    ${RibbonStyles.Wrapper} {
      right: -1rem;
      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.lessThan('medium')`
      width: 90%;
    `}

    ${media.greaterThan('small')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      width: 100%auto;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
        flex-direction: row-reverse;
        > button {
          width: initial;
          margin-bottom: 0;
        }
    `}
  `}
`
