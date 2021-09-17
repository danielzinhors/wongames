import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'
import mockItem from './mock'

export default {
  title: 'Game/TextContent',
  component: TextContent,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockItem
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
