import { Meta, StoryObj } from '@storybook/angular'
import { SearchInputDropdownComponent } from './search-input-dropdown.component'
import { fn } from '@storybook/test'

const meta: Meta<SearchInputDropdownComponent> = {
  title: '1.Atoms/Search Input Dropdown',
  component: SearchInputDropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    options: { control: 'object' },
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
type Story = StoryObj<SearchInputDropdownComponent>

export const Default: Story = {
  args: {
    id: 'defaultSearch',
    label: 'Search',
    placeholder: 'Type to search...',
  },
}

export const WithOptions: Story = {
  args: {
    id: 'searchWithOptions',
    label: 'Search with Options',
    placeholder: 'Type to search...',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}
