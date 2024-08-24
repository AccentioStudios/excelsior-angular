import { Meta, StoryObj } from '@storybook/angular'
import { ExIconComponent } from './ex-icon.component'

const meta: Meta<ExIconComponent> = {
  title: 'Components/Icon',
  component: ExIconComponent,
  tags: ['autodocs'],
  argTypes: {
    iconId: {
      control: { type: 'select' },
      options: ['icon-home', 'icon-user', 'help-circle', 'line-chart-up-04', 'lock-04', 'key-02', 'cube-03','dot'],
    },
    // Customize the fill color if needed
  },
  args: {
    // Default fill color
  },
}

export default meta
type Story = StoryObj<ExIconComponent>

export const Home: Story = {
  args: {
    iconId: 'icon-home',
  },
}

export const User: Story = {
  args: {
    iconId: 'icon-user',
  },
}

export const HelpCircle: Story = {
  args: {
    iconId: 'help-circle',
  },
}

export const LineChartUp: Story = {
  args: {
    iconId: 'line-chart-up-04',
  },
}

export const Lock: Story = {
  args: {
    iconId: 'lock-04',
  },
}

export const Key: Story = {
  args: {
    iconId: 'key-02',
  },
}

export const Cube: Story = {
  args: {
    iconId: 'cube-03',
  },
}
export const Dot: Story = {
  args: {
    iconId: 'dot',
  },
}
