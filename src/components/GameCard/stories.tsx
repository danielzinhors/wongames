import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/whillianjusten/300x140',
    price: 'RS 236,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    },
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WhithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WhithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
