import { Meta, StoryObj } from '@storybook/angular'
import { ExAccordionComponent } from './accordion.component'

const meta: Meta<ExAccordionComponent> = {
  title: '1.Atoms/Accordion',
  component: ExAccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<ExAccordionComponent>

export const Default: Story = {
  args: {
    isCollapsed: true,
  },
  render: (args) => ({
    props: args,
    template: `
    <ex-accordion>
    <div parent>Parent</div>
    <div child>
      <ex-accordion>
        <div parent>Parent</div>
        <div child>Child</div>
        <div child>Child</div>
      </ex-accordion>
    </div>
    <div child>Child</div>
    <div child>Child</div>
    </ex-accordion>
        <ex-accordion>
    <div parent>Parent</div>
    <div child>
      <ex-accordion>
        <div parent>Parent</div>
        <div child>Child</div>
        <div child>Child</div>
      </ex-accordion>
    </div>
    <div child>Child</div>
    <div child>Child</div>
    </ex-accordion>
    `,
  }),
}
