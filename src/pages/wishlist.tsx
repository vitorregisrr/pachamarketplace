import WishListTemplate, { WishlistTemplateProps } from 'templates/WishList'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishListPage(props: WishlistTemplateProps) {
  return <WishListTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock.slice(0, 5),
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
