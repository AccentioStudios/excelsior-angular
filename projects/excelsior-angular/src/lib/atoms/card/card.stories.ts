import { Meta, StoryObj } from '@storybook/angular'
import { ExCardComponent } from './card.component'

const meta: Meta<ExCardComponent> = {
  title: '1.Atoms/Card',
  component: ExCardComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<ExCardComponent>

export const Default: Story = {
  args: {},
}
