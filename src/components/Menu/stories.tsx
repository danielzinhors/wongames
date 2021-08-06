import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => <Menu />

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
