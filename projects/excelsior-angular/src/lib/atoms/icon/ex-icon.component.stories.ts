import { Meta, StoryObj } from '@storybook/angular'
import { ExIconComponent } from './ex-icon.component'

const meta: Meta<ExIconComponent> = {
  title: '1.Atoms/Icon',
  component: ExIconComponent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['icon-home', 'icon-user', 'help-circle', 'line-chart-up-04', 'lock-04', 'key-02', 'cube-03', 'dot'],
    },

    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
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
    name: 'icon-home',
  },
}

export const User: Story = {
  args: {
    name: 'icon-user',
  },
}

export const HelpCircle: Story = {
  args: {
    name: 'help-circle',
  },
}

export const LineChartUp: Story = {
  args: {
    name: 'line-chart-up-04',
  },
}

export const Lock: Story = {
  args: {
    name: 'lock-04',
  },
}

export const Key: Story = {
  args: {
    name: 'key-02',
  },
}

export const Cube: Story = {
  args: {
    name: 'cube-03',
  },
}
export const Dot: Story = {
  args: {
    name: 'dot',
  },
}

export const Small: Story = {
  args: {
    name: 'cube-03',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    name: 'cube-03',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    name: 'cube-03',
    size: 'large',
  },
}
