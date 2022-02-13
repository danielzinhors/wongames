import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Hourglass } from '@styled-icons/ionicons-outline'
import Base from 'templates/Base'
import Container from 'components/Container'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import * as S from './styles'
import Grid from 'components/Grid'
import { useQueryGames } from 'graphql/queries/games'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'
import Empty from 'components/Empty'
import { getSrcImg } from 'utils/utilidades'

export type GameTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GameTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: (query.sort as string) || undefined
    }
  })

  if (!data) {
    return (
      <S.Amp>
        <Hourglass size={48} aria-label={'Loading'} />
      </S.Amp>
    )
  }

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    })
  }

  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar
            initialValues={parseQueryStringToFilter({
              queryString: query,
              filterItems
            })}
            items={filterItems}
            onFilter={handleFilter}
          />

          <section>
            {games.length ? (
              <>
                <Grid>
                  {games.map((game) => (
                    <GameCard
                      id={game.id}
                      key={game.slug}
                      slug={game.slug}
                      title={game.name}
                      developer={game.developers[0].name}
                      img={getSrcImg(game.cover!.url as string)}
                      price={game.price}
                    />
                  ))}
                </Grid>
                {hasMoreGames && (
                  <S.ShowMore>
                    {loading ? (
                      <S.ShowMoreLoading
                        src="/img/dots.svg"
                        alt="Loading more games..."
                      />
                    ) : (
                      <S.ShowMoreButton role="button" onClick={handleShowMore}>
                        <p>Show More</p>
                        <ArrowDown size={35} />
                      </S.ShowMoreButton>
                    )}
                  </S.ShowMore>
                )}
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
              />
            )}
          </section>
        </S.Main>
      </Container>
    </Base>
  )
}

export default GamesTemplate
