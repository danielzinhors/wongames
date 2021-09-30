import { Story, Meta } from '@storybook/react/types-6-0'
import CardsList, { CardsListProps } from '.'
import mockCard from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: mockCard
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
