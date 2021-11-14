import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Base from 'templates/Base'
import Container from 'components/Container'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import * as S from './styles'
import Grid from 'components/Grid'

export type GameTemplateProps = {
  games?: GameCardProps[]
  filterItems?: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems = [] }: GameTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar items={filterItems} onFilter={handleFilter} />
          <section>
            <Grid>
              {games.map((item) => (
                <GameCard key={item.title} {...item} />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        </S.Main>
      </Container>
    </Base>
  )
}

export default GamesTemplate
