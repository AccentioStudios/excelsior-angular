import { Meta, StoryObj } from '@storybook/angular'
import { ExCollapsibleComponent } from './collapsible.component'

const meta: Meta<ExCollapsibleComponent> = {
  title: '1.Atoms/Collapsible',
  component: ExCollapsibleComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    isCollapsed: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<ExCollapsibleComponent>

export const Default: Story = {
  args: {
    title: 'Click to Expand',
    isCollapsed: true,
  },
  render: (args) => ({
    props: args,
    template: `<ex-collapsable-card [title]="title" [isCollapsed]="isCollapsed"><p>This is the content inside the collapsible.</p></ex-collapsable-card>`,
  }),
}

export const OpenByDefault: Story = {
  args: {
    title: 'Open by Default',
    isCollapsed: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `<ex-collapsable-card [title]="title" [isCollapsed]="isCollapsed">This is the content inside the collapsible.</ex-collapsable-card>`,
  }),
}
