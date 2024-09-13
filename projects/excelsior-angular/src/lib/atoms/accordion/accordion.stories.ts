import { Meta, moduleMetadata, StoryObj } from '@storybook/angular'
import { ExAccordionComponent } from './accordion.component'
import { ExAccordionItemComponent } from './accordion_item.component'

const meta: Meta<ExAccordionComponent> = {
  title: '1.Atoms/Accordion',
  component: ExAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [ExAccordionItemComponent],
    }),
  ],
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<ExAccordionComponent>

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <ex-accordion> 
      <ex-accordion-item parent>
        Parent
      </ex-accordion-item>
      <ex-accordion-item>
        Child
      </ex-accordion-item>
    </ex-accordion>
    `,
  }),
}

export const CardWithIndentation: Story = {
  render: (args) => ({
    props: args,
    template: `
    <ex-accordion> 
      <ex-accordion-item [style]="'card'" parent>
        Parent
      </ex-accordion-item>
      <ex-accordion-item [style]="'card'" [density]="'dense'" [indentation]="true">
        Child
      </ex-accordion-item>
      <ex-accordion-item [style]="'card'" [density]="'dense'" [indentation]="true">
        Child
      </ex-accordion-item>
    </ex-accordion>
    `,
  }),
}
