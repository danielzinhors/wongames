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

export type GameTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GameTemplateProps) => {
  const { push, query } = useRouter()

  const { data, fetchMore } = useQueryGames({
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
            {data?.games.length ? (
              <>
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
