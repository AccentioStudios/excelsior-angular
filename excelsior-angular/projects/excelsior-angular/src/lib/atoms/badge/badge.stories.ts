import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { fn } from '@storybook/test';



const meta: Meta<BadgeComponent> = {
    title: 'Components/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    argTypes: {
    type: {
        control: { type: 'select' },
        options: ['primary', 'success', 'warning', 'danger'],
        },
        text: { control: 'text' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  };
  
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
    args: {
        text: 'Primary Badge',
        type: 'primary',
    },
  };
  
  export const Success: Story = {
    args: {
        text: 'Success Badge',
        type: 'success',
    },
  };

  export const Danger: Story = {
    args: {
        text: 'Danger Badge',
        type: 'danger',
    },
  };
  
  export const Warning: Story = {
    args: {
       text: 'Warning Badge',
        type: 'warning',
    },
  };