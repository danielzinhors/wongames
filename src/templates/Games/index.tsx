import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Hourglass } from '@styled-icons/ionicons-outline'
import Base from 'templates/Base'
import Container from 'components/Container'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import * as S from './styles'
import Grid from 'components/Grid'
import { useQueryGames } from 'graphql/queries/games'

export type GameTemplateProps = {
  games?: GameCardProps[]
  filterItems?: ItemProps[]
}

const GamesTemplate = ({ filterItems = [] }: GameTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar items={filterItems} onFilter={handleFilter} />
          {loading ? (
            <S.Amp>
              <Hourglass size={48} aria-label={'Loading'} />
            </S.Amp>
          ) : (
            <section>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    key={game.slug}
                    slug={game.slug}
                    title={game.name}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover!.url}`}
                    price={game.price}
                  />
                ))}
              </Grid>
              <S.ShowMore>
                <S.ShowMoreButton onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMoreButton>
              </S.ShowMore>
            </section>
          )}
        </S.Main>
      </Container>
    </Base>
  )
}

export default GamesTemplate
