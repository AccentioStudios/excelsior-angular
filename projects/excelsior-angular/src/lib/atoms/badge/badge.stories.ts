import { Meta, StoryObj } from '@storybook/angular'
import { ExBadgeComponent } from './badge.component'


import { fn } from '@storybook/test'

const meta: Meta<ExBadgeComponent> = {
  title: 'Components/Badge',
  component: ExBadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'pink', 'warning', 'error', 'purple', 'indigo', 'indigo', 'blue-light'],
    },
    text: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<ExBadgeComponent>

export const Success: Story = {
  args: {
    text: 'Success Badge',
    type: 'success',
  },
}

export const pink: Story = {
  args: {
    text: 'Pink Badge',
    type: 'pink',
  },
}

export const Error: Story = {
  args: {
    text: 'Error Badge',
    type: 'error',
  },
}

export const Warning: Story = {
  args: {
    text: 'Warning Badge',
    type: 'warning',
  },
}

export const Purple: Story = {
  args: {
    text: 'Purple Badge',
    type: 'purple',
  },
}

export const Indigo: Story = {
  args: {
    text: 'Indigo Badge',
    type: 'indigo',
  },
}

export const BlueLight: Story = {
  args: {
    text: 'Blue Light Badge',
    type: 'blue-light',
  },
}
