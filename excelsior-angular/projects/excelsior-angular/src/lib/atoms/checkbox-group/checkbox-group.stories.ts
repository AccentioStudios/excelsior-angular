import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { fn } from '@storybook/test';

const meta: Meta<CheckboxGroupComponent> = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    selectedValues: { control: [] },
    selectionChange: { action: 'selectionChange' },
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selectedValues: [],
    selectionChange: fn(),
  },
};

export default meta;
type Story = StoryObj<CheckboxGroupComponent>;

export const Default: Story = {
  args: {
    label: 'Select options',
  },
};

export const Preselected: Story = {
  args: {
    label: 'Select options',
    selectedValues: ['option2'],
  },
};
