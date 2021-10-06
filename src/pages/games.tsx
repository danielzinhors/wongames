import GamesTemplate, { GameTemplateProps } from 'templates/Games'
import mockFilter from 'components/ExploreSidebar/mock'
import gemesMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gemesMock,
      filterItems: mockFilter
    }
  }
}
