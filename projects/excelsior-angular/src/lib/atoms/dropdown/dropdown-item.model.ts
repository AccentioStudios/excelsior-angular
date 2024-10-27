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
