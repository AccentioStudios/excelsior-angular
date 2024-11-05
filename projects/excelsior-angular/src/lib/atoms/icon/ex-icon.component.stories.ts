import { Meta, StoryObj } from '@storybook/angular'
import { ExIconComponent } from './ex-icon.component'

const meta: Meta<ExIconComponent> = {
  title: '1.Atoms/Icon',
  component: ExIconComponent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['trash', 'user-plus', 'search-md', 'help-circle', 'line-chart-up', 'lock', 'key', 'cube', 'dot'],
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

export const UserPlus: Story = {
  args: {
    name: 'user-plus',
  },
}

export const HelpCircle: Story = {
  args: {
    name: 'help-circle',
  },
}

export const LineChartUp: Story = {
  args: {
    name: 'line-chart-up',
  },
}

export const Lock: Story = {
  args: {
    name: 'lock',
  },
}

export const Key: Story = {
  args: {
    name: 'key',
  },
}

export const Cube: Story = {
  args: {
    name: 'cube',
  },
}
export const Dot: Story = {
  args: {
    name: 'dot',
  },
}

export const settings: Story = {
  args: {
    name: 'settings',
  },
}

export const SearchMd: Story = {
  args: {
    name: 'search-md',
  },
}

export const Small: Story = {
  args: {
    name: 'cube',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    name: 'cube',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    name: 'cube',
    size: 'large',
  },
}
