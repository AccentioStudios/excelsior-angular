import { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
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
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    id: 'defaultInput',
    label: 'Default Input',
    placeholder: 'Type something...',
    value: '',
  },
};

export const WithValue: Story = {
  args: {
    id: 'withValueInput',
    label: 'Input with Value',
    placeholder: 'Type something...',
    value: 'Initial Value',
  },
};
