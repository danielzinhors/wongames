import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    img: '../../../public/img/red-dead-float.png',
    background: '../../../public/img/red-dead-img.png',
    title: 'Red Dead Redenption',
    subtitle: '<p>Play the <strong>Red Dead Redenpition</strong> now</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/red-dead'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', height: '50rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)
