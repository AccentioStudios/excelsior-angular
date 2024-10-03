import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ExAccordionComponent } from '../../atoms/accordion/accordion.component'
import { ExAccordionItemComponent } from '../../atoms/accordion/accordion_item.component'
import { CommonModule } from '@angular/common'
import { ExCheckboxComponent } from '../../atoms/checkbox/checkbox.component'
import { TreeItem, TreeItemStatus } from '../../types'
import { cloneDeep } from 'lodash'

@Component({
  selector: 'ex-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  standalone: true,
  imports: [ExAccordionComponent, ExAccordionItemComponent, CommonModule, ExCheckboxComponent],
})
export class ExTreeComponent {
  @Input() items: TreeItem[] = []
  public filteredItems: TreeItem[] = []
  @Input() search?: string = ''
  @Output() searchChange = new EventEmitter<TreeItem[]>()
  @Output() itemsChange = new EventEmitter<TreeItem[]>()
  @Output() selectedItems = new EventEmitter<TreeItem[]>()
  @Output() selectedItem = new EventEmitter<TreeItem>()

  ngOnInit() {
    this.updateFilteredItems()
  }

  updateFilteredItems(): void {
    const clone = cloneDeep(this.items)
    if (!this.search) {
      this.filteredItems = clone
    }
    // Return tree items (parent) that match the search string
    const filteredItems: TreeItem[] = clone.filter((item) =>
      item.label.toLowerCase().includes(this.search!.toLowerCase()),
    )
    console.log('filteredItems', filteredItems)
    this.filteredItems = filteredItems
  }

  onCollapsedChange(item: TreeItem) {
    item.expanded = !item.expanded
    this.filteredItems = this.filteredItems.map((i) => {
      if (i.id === item.id) {
        i.expanded = item.expanded
      }
      return i
    })
  }

  updateSelection() {
    this.items.forEach((parent) => {
      parent.selected = this.getTreeItemStatus(parent)
      if (parent.children.length > 0) {
        parent.children.forEach((child) => {
          child.selected = this.getTreeItemStatus(child)
          if (child.children.length > 0) {
            child.children.forEach((subChild) => {
              subChild.selected = this.getTreeItemStatus(subChild)
            })
          }
        })
      }
    })

    const allSelected: TreeItem[] = []
    this.items.forEach((item) => {
      if (item.selected === TreeItemStatus.SELECTED) {
        allSelected.push(item)
      }

      item.children.forEach((child) => {
        if (child.selected === TreeItemStatus.SELECTED) {
          allSelected.push(child)
        }
      })
    })
    this.updateFilteredItems()
    this.itemsChange.emit(this.items)
    this.selectedItems.emit(allSelected)
    this.searchChange.emit(this.filteredItems)
  }

  toggleSelectItem(proxy: TreeItem) {
    const item = this.getItemFromProxyItem(proxy)

    item!.selected = item!.selected === TreeItemStatus.SELECTED ? TreeItemStatus.UNSELECTED : TreeItemStatus.SELECTED
    if (item!.children.length > 0) {
      item!.children.forEach((child) => {
        child.selected =
          child.selected === TreeItemStatus.SELECTED ? TreeItemStatus.UNSELECTED : TreeItemStatus.SELECTED
      })
    }
    this.updateSelection()
    this.selectedItem.emit(item)
  }

  toggleSelectionFromParentToAllChildren(proxy: TreeItem) {
    const item = this.getItemFromProxyItem(proxy)

    let status = TreeItemStatus.UNSELECTED
    switch (item!.selected) {
      case TreeItemStatus.SELECTED:
        status = TreeItemStatus.UNSELECTED
        break
      case TreeItemStatus.UNSELECTED:
        status = TreeItemStatus.SELECTED
        break
      case TreeItemStatus.INDETERMINATE:
        status = TreeItemStatus.SELECTED
        break
      default:
        status = TreeItemStatus.SELECTED
        break
    }
    item!.selected = status
    item!.children.forEach((child) => {
      child.selected = status
      // this.selectedItem.emit(child)
    })
    this.updateSelection()
    this.selectedItem.emit(item)
  }

  getItemFromProxyItem(proxy: TreeItem): TreeItem | undefined {
    let item = this.items.find((item) => item.id === proxy.id)
    if (!item || item === undefined || item === null) {
      // Search recursively for the item in the children
      const operationItem = this.items
        .map((o) => o.children)
        .reduce((a, b) => a.concat(b), [])
        .find((i) => i.id.toString() === proxy.id)
      if (operationItem) {
        item = operationItem
      }
    }

    return item
  }

  getTreeItemStatus(item: TreeItem): TreeItemStatus {
    // const item = this.getItemFromProxyItem(proxy)
    let status = TreeItemStatus.INDETERMINATE

    if (item.children.length === 0) {
      return item.selected || TreeItemStatus.UNSELECTED
    }

    const selectedChildren = item.children.filter((child) => child.selected === TreeItemStatus.SELECTED).length
    const unselectedChildren = item.children.filter((child) => child.selected === TreeItemStatus.UNSELECTED).length

    if (selectedChildren === item.children.length) {
      status = TreeItemStatus.SELECTED
    }

    if (unselectedChildren === item.children.length) {
      status = TreeItemStatus.UNSELECTED
    }

    return status
  }
}
