import { Meta, StoryObj } from '@storybook/angular'
import { ExTreeComponent, TreeItemStatus } from './tree.component'

const meta: Meta<ExTreeComponent> = {
  title: 'Molecules/Tree',
  component: ExTreeComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'The tree items',
      control: {
        type: 'object',
      },
    },
    selectedItems: {
      description: 'The tree items selected',
      action: 'itemsSelected',
    },
    selectedItem: {
      description: 'The tree item that is the currently selected',
      action: 'itemSelected',
    },
    itemsChange: {
      description: 'The tree items changed',
      action: 'itemsChanged',
    },
  },
  args: {
    // itemsChange: (items) => console.log('items changed', items),
    selectedItems: (items) => console.log('items selected', items),
    // selectedItem: (item) => console.log('item selected', item),
    items: [
      {
        id: '1',
        label: 'Item 1',
        selected: TreeItemStatus.SELECTED,
        children: [
          {
            id: '1.1',
            label: 'Item 1.1',
            selected: TreeItemStatus.SELECTED,
            children: [],
          },
          {
            id: '1.2',
            label: 'Item 1.2',
            selected: TreeItemStatus.SELECTED,

            children: [],
          },
        ],
      },
      {
        id: '2',
        label: 'Item 2',
        selected: TreeItemStatus.UNSELECTED,
        children: [
          {
            id: '2.1',
            label: 'Item 2.1',
            selected: TreeItemStatus.UNSELECTED,
            children: [],
          },
          {
            id: '2.2',
            label: 'Item 2.2',
            selected: TreeItemStatus.UNSELECTED,
            children: [],
          },
        ],
      },
    ],
  },
}

export default meta
type Story = StoryObj<ExTreeComponent>

export const Default: Story = {
  args: {},
}