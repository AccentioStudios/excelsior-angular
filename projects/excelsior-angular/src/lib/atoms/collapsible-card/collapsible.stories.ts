import { Meta, StoryObj } from '@storybook/angular'
import { ExCollapsibleComponent } from './collapsible.component'

const meta: Meta<ExCollapsibleComponent> = {
  title: '1.Atoms/Collapsible',
  component: ExCollapsibleComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<ExCollapsibleComponent>

export const Default: Story = {
  args: {
    title: 'Click to Expand',
  },
  render: (args) => ({
    props: args,
    template: `<ex-collapsable-card [title]="title"><p>This is the content inside the collapsible.</p></ex-collapsable-card>`,
  }),
}

export const OpenByDefault: Story = {
  args: {
    title: 'Open by Default',
  },
  render: (args) => ({
    props: { ...args, isCollapsed: false },
    template: `<ex-collapsable-card [title]="title" [isCollapsed]="false">This is the content inside the collapsible.</ex-collapsable-card>`,
  }),
}
