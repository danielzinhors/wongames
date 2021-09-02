import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    //'should render sections'
    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument()
    // 'should render section elements'
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 1 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})