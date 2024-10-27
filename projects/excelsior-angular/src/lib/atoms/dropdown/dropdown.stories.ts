import { Meta, StoryObj } from '@storybook/angular'
import { ExDropdownComponent } from './dropdown.component'

const meta: Meta<ExDropdownComponent> = {
  title: '1.Atoms/Dropdown',
  component: ExDropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    valueChange: { action: 'selectOption' },
  },
  args: {
    options: [
      { id: '1', label: 'Option 1', value: 'Option 1' },
      { id: '1', label: 'Option 2', value: 'Option 2' },
      { id: '1', label: 'Option 3', value: 'Option 3' },
    ],
    placeholder: 'Select an option',
  },
}

export default meta
type Story = StoryObj<ExDropdownComponent>

export const Default: Story = {
  args: {
    valueChange: (items) => console.log('items changed', items),
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="height: 220px">
      <ex-dropdown
      [options]="options"
      [placeholder]="placeholder"
      (selectOption)="selectOption($event)"
      (valueChange)="valueChange"
      ></ex-dropdown>
    </div>
    `,
  }),
}

export const WithSelectedValue: Story = {
  args: {
    selectedOption: {
      id: '1',
      label: 'Option 1',
      value: 'Option 1',
    },
  },
}
