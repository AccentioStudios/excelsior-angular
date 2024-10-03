export interface TreeItem {
  id: string
  label: string
  children: TreeItem[]
  disabled?: boolean
  selected?: TreeItemStatus
  expanded: boolean
}
export enum TreeItemStatus {
  SELECTED = 'selected',
  UNSELECTED = 'unselected',
  INDETERMINATE = 'indeterminate',
}
