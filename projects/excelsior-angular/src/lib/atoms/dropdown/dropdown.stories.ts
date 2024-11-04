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
    label: { control: 'text' },
    hintText: { control: 'text' },
  },
  args: {
    options: [
      { id: '1', label: 'Option 1', value: '1' },
      { id: '2', label: 'Option 2', value: '2' },
      { id: '3', label: 'Option 3', value: '3' },
    ],
    placeholder: 'Select an option',
    label: 'label',
    hintText: 'hint text',
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
      [label]="'label'"
      [hintText]="'hint text'"
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
      value: '1',
    },
  },
}
