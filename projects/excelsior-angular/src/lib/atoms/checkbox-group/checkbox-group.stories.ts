import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test'
import { ExCheckboxGroupComponent } from './checkbox-group.component'

const meta: Meta<ExCheckboxGroupComponent> = {
  title: '1.Atoms/Checkbox Card',
  component: ExCheckboxGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    text: { control: 'text' },
    checked: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
    disabled: { control: 'boolean' },
  },
  args: { checkedChange: fn() },
}

export default meta
type Story = StoryObj<ExCheckboxGroupComponent>

export const Unchecked: Story = {
  args: {
    text: 'Permitir assinar como conferente',
    label: 'O usuário vai poder verificar e conferir diversos elementos na plataforma.',
    checked: false,
    disabled: false,
  },
}

export const Checked: Story = {
  args: {
    text: 'Permitir assinar como conferente',
    label: 'O usuário vai poder verificar e conferir diversos elementos na plataforma.',
    checked: true,
    disabled: false,
  },
}

export const TestCheckbox: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    text: 'Permitir assinar como conferente',
    label: 'O usuário vai poder verificar e conferir diversos elementos na plataforma.',
    checked: true,
    disabled: true,
  },
}
