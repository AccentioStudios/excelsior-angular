import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test'
import { ExCheckboxComponent } from './checkbox.component'

const meta: Meta<ExCheckboxComponent> = {
  title: '1.Atoms/Checkbox',
  component: ExCheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
  },
  args: { checkedChange: fn() },
}

export default meta
type Story = StoryObj<ExCheckboxComponent>

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
}

export const TestCheckbox: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: true,
  },
}
