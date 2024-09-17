export interface TreeItem {
  id: string
  label: string
  children: TreeItem[]
  disabled?: boolean
  selected?: TreeItemStatus
}
export enum TreeItemStatus {
  SELECTED = 'selected',
  UNSELECTED = 'unselected',
  INDETERMINATE = 'indeterminate',
}
