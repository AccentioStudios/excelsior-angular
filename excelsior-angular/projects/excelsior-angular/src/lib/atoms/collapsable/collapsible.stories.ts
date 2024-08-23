import { Meta, StoryObj } from '@storybook/angular';
import { CollapsibleComponent } from './collapsible.component';

const meta: Meta<CollapsibleComponent> = {
  title: 'Components/Collapsible',
  component: CollapsibleComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<CollapsibleComponent>;

export const Default: Story = {
  args: {
    title: 'Click to Expand',
  },
  render: (args) => ({
    props: args,
    template: `<app-collapsible [title]="title">This is the content inside the collapsible.</app-collapsible>`
  }),
};

export const OpenByDefault: Story = {
  args: {
    title: 'Open by Default',
  },
  render: (args) => ({
    props: { ...args, isCollapsed: false },
    template: `<app-collapsible [title]="title" [isCollapsed]="false">This is the content inside the collapsible.</app-collapsible>`
  }),
};
