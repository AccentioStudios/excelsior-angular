import { Meta, StoryObj } from '@storybook/angular'
import { action } from '@storybook/addon-actions'
import { ExInputComponent } from './input.component'

const meta: Meta<ExInputComponent> = {
  title: '1.Atoms/Input',
  component: ExInputComponent,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'ID of the input.',
      control: { type: 'text' },
    },
    type: {
      description: 'Type of the input.',
      control: {
        control: { type: 'select' },
        options: ['text', 'password', 'email', 'number'],
      },
    },
    placeholder: {
      description: 'Placeholder text to be displayed in the input when it is empty.',
      control: { type: 'text' },
    },
    value: {
      description: 'Value of the input.',
      control: { type: 'text' },
    },
    valueChange: {
      description: 'Event emitter for when the value of the input changes.',
      action: 'valueChange',
    },
    label: {
      description: 'Label text to be displayed above the input.',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Boolean indicating if the input is disabled.',
      control: { type: 'boolean' },
    },
    // Function that returns true or false
    validator: {
      description:
        'Validator function to validate the input value.  If the function returns false, the input will be marked as invalid.',
      action: 'validate',
    },
    validateOnInit: {
      description: 'Boolean indicating if the input should be validated on init. Is false by default.',
      control: { type: 'boolean' },
    },
    errorMessage: {
      description: 'Error message to be displayed below the input when the input is invalid.',
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<ExInputComponent>

export const Default: Story = {
  args: {
    id: 'defaultInput',
    label: 'Default Input',
    value: 'Example Text',
    type: 'text',
    placeholder: 'Type something...',
    hintText: 'This is a hint text',
    validator: (value: string) => value.length >= 5 && value.length <= 12,
    errorMessage: 'Input must be longer than 5 characters and shorter than 12 characters.',
    validateOnInit: false,
  },
}

export const WithValue: Story = {
  args: {
    id: 'withValueInput',
    type: 'text',
    label: 'Input with Value',
    placeholder: 'Type something...',
    value: 'Initial Value',
  },
}

export const ValidateOnInit: Story = {
  args: {
    id: 'defaultInput',
    label: 'Default Input',
    value: 'Text',
    type: 'text',
    placeholder: 'Type something...',
    hintText: 'This is a hint text',
    validator: (value: string) => value.length >= 5 && value.length <= 12,
    errorMessage: 'Input must be longer than 5 characters and shorter than 12 characters.',
    validateOnInit: true,
  },
}
