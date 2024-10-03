import { Meta, StoryObj } from '@storybook/angular'
import { ExFeaturedIconComponent } from './ex-featured-icon.component'

const meta: Meta<ExFeaturedIconComponent> = {
  title: '1.Atoms/FeaturedIcon',
  component: ExFeaturedIconComponent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['user-plus', 'help-circle', 'line-chart-up-04', 'lock-04', 'key-02', 'cube-03', 'dot'],
    },

    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },

    flat: {
      control: { type: 'boolean' },
    },
    // Customize the fill color if needed
  },
  args: {
    // Default fill color
  },
}

export default meta
type Story = StoryObj<ExFeaturedIconComponent>

export const UserPlus: Story = {
  args: {
    name: 'user-plus',
    flat: false,
  },
}

export const HelpCircle: Story = {
  args: {
    name: 'help-circle',
    flat: false,
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
