import { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { fn } from '@storybook/test';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
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
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    name: 'defaultRadioGroup',
    label: 'Choose an Option',
    selectedValue: '',
  },
};

export const WithSelectedValue: Story = {
  args: {
    name: 'radioGroupWithSelectedValue',
    label: 'Choose an Option',
    selectedValue: 'option2',
  },
};
