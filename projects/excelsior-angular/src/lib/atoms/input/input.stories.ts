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
  },
  args: {
    valueChange: fn(),
  },
}

export default meta
type Story = StoryObj<ExInputComponent>

export const Default: Story = {
  args: {
    id: 'defaultInput',
    label: 'Default Input',
    placeholder: 'Type something...',
    value: '',
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
