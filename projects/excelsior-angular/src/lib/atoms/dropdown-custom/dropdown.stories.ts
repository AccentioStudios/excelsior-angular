import { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component'


const meta: Meta<DropdownComponent> = {
  title: 'Components/CustomSelect',
  component: DropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    selectedOption: { control: 'text' },
    selectOption: { action: 'selectOption' }, 
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3',  'Option 4',  'Option 6', 'Option 7', 'Option 8'],
    placeholder: 'Select an option',
  },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  args: {
    selectedOption: '',
  },
};

export const WithSelectedValue: Story = {
  args: {
    selectedOption: 'Option 2',
  },
};
