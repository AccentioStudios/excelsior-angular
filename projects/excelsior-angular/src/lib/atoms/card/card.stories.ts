import { Meta, StoryObj } from '@storybook/angular'
import { CardComponent } from './card.component'

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    title: 'Card Title',
    content: 'This is the content of the card. It can hold text, images, and buttons.',
  },
}

export default meta
type Story = StoryObj<CardComponent>

export const Default: Story = {
  args: {},
}

