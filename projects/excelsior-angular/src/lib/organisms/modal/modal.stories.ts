import { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';
import { fn } from '@storybook/test'

const meta: Meta<ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    isVisible: { control: 'boolean' },
    actions: { control: 'object' },
    showFooter: { control: 'boolean' },
    actionClick: { action: 'actionClick' },
    close: { action: 'close' },
  },
  args: {
    title: 'Sample Modal',
    isVisible: true,
    actions: [
      { label: 'Confirm', value: 'confirm' },
      { label: 'Cancel', value: 'cancel' },
    ],
    showFooter: true,
    actionClick: fn(),
    close: fn(),
  },
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw;">
        <app-modal [title]="title" [isVisible]="isVisible" [actions]="actions" [showFooter]="showFooter" (actionClick)="actionClick($event)" (close)="close()">
          <div modalHeader>
          <h2>Custom Header Content</h2>
        </div>
        <p>Modal body content goes here.</p>
        </app-modal>
      </div>
    `,
  }),
};

export const WithoutFooter: Story = {
  args: {
    showFooter: false,
  },
};

export const CustomActions: Story = {
  args: {
    actions: [
      { label: 'Save', value: 'save' },
      { label: 'Close', value: 'close' },
    ],
  },
};
