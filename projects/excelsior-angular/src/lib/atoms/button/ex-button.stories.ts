import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test'
import { ExButtonComponent } from './ex-button.component'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ExButtonComponent> = {
  title: 'Components/Button',
  component: ExButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
    iconColor: {
      control: 'color',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<ExButtonComponent>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const PrimaryIcon: Story = {
  args: {
    primary: true,
    label: 'Button',
    icon: 'dot',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const Test: Story = {
  args: {
    primary: false,
    label: 'Button',
    size: 'medium',
  },
}
