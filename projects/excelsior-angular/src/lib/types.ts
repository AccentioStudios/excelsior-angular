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

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Represents an option item.
 * @group Interface
 */
export interface SelectItem<T = any> {
  id: string
  label?: string
  value: T
  icon?: string
  disabled?: boolean
}
export interface DropdownChangeEvent {
  originalValue: SelectItem
  value: SelectItem
}
