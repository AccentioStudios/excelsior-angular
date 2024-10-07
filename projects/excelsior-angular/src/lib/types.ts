export interface TreeItem {
  id: string
  label: string
  children: TreeItem[]
  isChild?: boolean
  disabled?: boolean
  selected?: TreeItemStatus
  expanded?: boolean
  getParent?: () => TreeItem | undefined
}
export enum TreeItemStatus {
  SELECTED = 'selected',
  UNSELECTED = 'unselected',
  INDETERMINATE = 'indeterminate',
}
