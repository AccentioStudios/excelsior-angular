import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
import { fn } from '@storybook/test';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageUrl: { control: 'text' },
    actions: { control: 'object' },
    actionClick: { action: 'actionClick' },
  },
  args: {
    title: 'Card Title',
    content: 'This is the content of the card. It can hold text, images, and buttons.',
    imageUrl: 'https://via.placeholder.com/400x200',
    actions: [
      { label: 'Action 1', value: 'action1' },
      { label: 'Action 2', value: 'action2' },
    ],
    actionClick: fn(),
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {},
};

export const WithoutImage: Story = {
  args: {
    imageUrl: '',
  },
};

export const CustomActions: Story = {
  args: {
    actions: [
      { label: 'Like', value: 'like' },
      { label: 'Share', value: 'share' },
    ],
  },
};
