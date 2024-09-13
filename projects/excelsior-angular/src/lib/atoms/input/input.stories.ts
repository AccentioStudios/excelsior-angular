import { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test'
import { ExInputComponent } from './input.component'

const meta: Meta<ExInputComponent> = {
  title: '1.Atoms/Input',
  component: ExInputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    valueChange: { action: 'valueChange' },
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<ExInputComponent>

export const Default: Story = {
  args: {
    id: 'defaultInput',
    label: 'Default Input',
    placeholder: 'Type something...',
    hintText: 'This is a hint text',
    validator: (value: string) => {
      console.log('Validating...')
      if (value.length < 5) return 'Value must have at least 5 characters'
      return undefined
    },
  },
}

export const WithValue: Story = {
  args: {
    id: 'withValueInput',
    label: 'Input with Value',
    placeholder: 'Type something...',
    value: 'Initial Value',
  },
}
