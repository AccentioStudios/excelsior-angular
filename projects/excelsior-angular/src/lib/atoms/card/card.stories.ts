import { Meta, StoryObj } from '@storybook/angular'
import { ExCardComponent } from './card.component'

const meta: Meta<ExCardComponent> = {
  title: 'Components/Card',
  component: ExCardComponent,
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
type Story = StoryObj<ExCardComponent>

export const Default: Story = {
  args: {},
}
