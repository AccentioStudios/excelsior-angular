import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test'
import { ExCheckboxGroupComponent } from './checkbox-group.component'

const meta: Meta<ExCheckboxGroupComponent> = {
  title: 'Components/Checkbox Card',
  component: ExCheckboxGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
  },
  args: { checkedChange: fn() },
}

export default meta
type Story = StoryObj<ExCheckboxGroupComponent>

export const Unchecked: Story = {
  args: {
    title: 'Permitir assinar como conferente',
    label: 'O usuário vai poder verificar e conferir diversos elementos na plataforma.',
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    title: 'Permitir assinar como conferente',
    label: 'O usuário vai poder verificar e conferir diversos elementos na plataforma.',
    checked: true,
  },
}

export const TestCheckbox: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: true,
  },
}
