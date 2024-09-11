import { Meta, StoryObj } from '@storybook/angular'
import { TableComponent } from './table.component'
import { fn } from '@storybook/test'

const meta: Meta<TableComponent> = {
  title: '1.Atoms/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
    actions: { control: 'object' },
    actionClick: { action: 'actionClick' },
  },
  args: {
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'age', header: 'Age' },
      { field: 'email', header: 'Email' },
    ],
    data: [
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    ],
    actions: [
      { label: 'Edit', value: 'edit' },
      { label: 'Delete', value: 'delete' },
    ],
    actionClick: fn(),
  },
}

export default meta
type Story = StoryObj<TableComponent>

export const Default: Story = {
  args: {},
}

export const NoActions: Story = {
  args: {
    actions: [],
  },
}

export const CustomColumns: Story = {
  args: {
    columns: [
      { field: 'product', header: 'Product' },
      { field: 'price', header: 'Price' },
      { field: 'quantity', header: 'Quantity' },
    ],
    data: [
      { product: 'Laptop', price: '$1000', quantity: 2 },
      { product: 'Phone', price: '$500', quantity: 5 },
      { product: 'Tablet', price: '$300', quantity: 10 },
    ],
  },
}
