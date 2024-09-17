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
    title: {
      description: 'The title of the modal',
      control: 'text',
    },
    supportingText: {
      description: 'The text appearing below the title',
      control: 'text',
    },
    iconName: {
      description: 'The icon name (ExIcon) to be displayed on the modal',
      control: 'text',
    },
    isVisible: {
      description: 'The visibility of the modal',
      control: 'boolean',
    },
    onClose: {
      description: 'The function to be called when the modal is closed',
      action: 'onClose',
    },
    maxWidth: {
      description: 'The optional maximum width of the modal',
      control: 'text',
    },
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
  args: {
    title: 'Sample Modal',
    supportingText: 'This is a sample modal...',
    iconName: 'Visualizar',
    isVisible: true,
    maxWidth: '60%',
  },
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
        [maxWidth]="maxWidth"
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
