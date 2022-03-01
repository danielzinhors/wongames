import { render, screen } from 'utils/tests/test-utils'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)
    expect(
      screen.getByRole('img', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /A simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('hould not render link when hasLink is not passed', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /Go back to store/i })
    ).not.toBeInTheDocument()
  })
})
