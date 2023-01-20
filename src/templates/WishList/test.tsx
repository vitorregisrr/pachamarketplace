import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import WishList from '.'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}
describe('<WishList />', () => {
  it('should render correctly', () => {
    renderWithTheme(<WishList {...props} />)

    expect(screen.getByRole('heading', { name: /Wishlist/i }))

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <WishList
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
