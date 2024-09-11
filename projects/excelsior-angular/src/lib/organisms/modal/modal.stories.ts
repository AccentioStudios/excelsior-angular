import { Meta, moduleMetadata, StoryObj } from '@storybook/angular'
import { ExModalComponent } from './modal.component'
import { fn } from '@storybook/test'
import { ExButtonComponent } from '../../atoms/button/ex-button.component'

const meta: Meta<ExModalComponent> = {
  title: '3.Organism/Modal',
  component: ExModalComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ExButtonComponent],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    supportingText: { control: 'text' },
    iconName: { control: 'text' },
    isVisible: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
  args: {
    title: 'Sample Modal',
    supportingText: 'This is a sample modal...',
    iconName: 'Visualizar',
    isVisible: true,
    onClose: fn(),
  },
}

export default meta
type Story = StoryObj<ExModalComponent>

export const Default: Story = {
  render: (args) => ({
    props: args,
    styles: [
      `
      .ex-row {
        display: flex;
        justify-content: flex-end;
        gap: 0.4rem;
      }
      `,
    ],
    template: `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw;">
        <ex-modal 
        [title]="title" 
        [supportingText]="supportingText" 
        [isVisible]="isVisible"
        [iconName]="iconName"
        (onClose)="close()">
        <p>Modal body content goes here.</p>
        <div style="width:100%;" modalFooter>
        <div class="ex-row" style="width:100%;">         
        <ex-button style="width:100%;" [primary]="false" [extended]="true" label="Cancel" (click)="isVisible = false"/>
        <ex-button style="width:100%;" [primary]="true" [extended]="true" label="Ok" (click)="isVisible = false"/>
        </div>
        </div>
        </ex-modal>
      </div>
    `,
  }),
}
