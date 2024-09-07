import { Meta, StoryObj } from '@storybook/angular'
import { SelectDropdownComponent } from './dropdown.component'
import { fn } from '@storybook/test'

const meta: Meta<SelectDropdownComponent> = {
  title: 'Components/Dropdown-old',
  component: SelectDropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    options: { control: 'object' },
    selectedValue: { control: 'text' },
    selectionChange: { action: 'selectionChange' },
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selectionChange: fn(),
  },
}

export default meta
type Story = StoryObj<SelectDropdownComponent>

export const Default: Story = {
  args: {
    id: 'defaultSelect',
    label: 'Select an Option',
    selectedValue: '',
  },
}

export const WithSelectedValue: Story = {
  args: {
    id: 'selectedValueSelect',
    label: 'Select an Option',
    selectedValue: 'option2',
  },
}
