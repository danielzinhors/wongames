import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { MockedProvider } from '@apollo/client/testing'

import Games from '.'
import { fetchMoreMock, gamesMock } from './mocks'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByLabelText(/Loading/i)).toBeInTheDocument()
  })
})

describe('<Games />', () => {
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )
    //aguardando os dados
    expect(screen.getByLabelText(/Loading/i)).toBeInTheDocument()
    //agora já com os dados
    // get quando tem o elemento
    // query qndo não temo elemento
    //find para esperara até encontrar
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    // screen.logTestingPlaygroundURL()
    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })
})
