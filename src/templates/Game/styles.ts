import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as GalleryStyles from 'components/Gallery/styles'

export const Main = styled.main`
  margin-top: 20rem;
  ${media.greaterThan('medium')`
    margin-top: 42rem;
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.4;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}
`
const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    ${media.greaterThan('medium')`
        margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)`
  ${media.lessThan('medium')`
    margin-bottom: 40rem;
  `}
`

export const SectionGallery = styled(Section)`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
  ${GalleryStyles.Wrapper} {
    margin-top: 27rem;
  }
`
export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const SectionGameDetails = styled(Section)``
