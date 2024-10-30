/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { DropdownChangeEvent, SelectItem } from './dropdown-item.model'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { cloneDeep } from 'lodash'
import { ExIconComponent } from '../icon/ex-icon.component'
export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExDropdownComponent),
  multi: true,
}

@Component({
  styleUrls: ['./dropdown.component.scss'],
  selector: 'ex-dropdown-item',
  standalone: true,
  imports: [CommonModule],
  template: ` <li
    [id]="id"
    (click)="onOptionClick($event)"
    (mouseenter)="onOptionMouseEnter($event)"
    [ngClass]="{ 'ex-dropdown-item': true, 'ex-highlight': selected, 'ex-disabled': disabled, 'ex-focus': focused }"
  >
    {{ option?.label || option?.value || '' }}
  </li>`,
  host: {
    class: 'ex-dropdown-p',
  },
})
export class ExDropdownItemComponent {
  @Input() id: string | undefined
  @Input() option: SelectItem | undefined
  @Input() selected: boolean | undefined
  @Input() focused: boolean | undefined
  @Input() label: string | undefined
  @Input() disabled: boolean | undefined
  @Input() visible: boolean | undefined
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  @Output() onMouseEnter: EventEmitter<any> = new EventEmitter()
  ngOnInit() {}
  onOptionClick(event: Event) {
    this.onClick.emit(event)
  }
  onOptionMouseEnter(event: Event) {
    this.onMouseEnter.emit(event)
  }
}
@Component({
  styleUrls: ['./dropdown.component.scss'],
  selector: 'ex-dropdown',
  standalone: true,
  imports: [CommonModule, ExDropdownItemComponent, ExIconComponent],
  template: `<div class="ex-dropdown-container" (click)="toggleDropdown()" [class.open]="dropdownOpen">
    <div class="selected-value" [class.open]="dropdownOpen">
      <input class="ex-dropdown-search" type="text" [value]="selectedOption" (keyup)="filterOnChange($event)" />
      <i>
        <ex-icon [name]="'chevron-down'" />
      </i>
    </div>
    <ul class="options-list" [class.show]="dropdownOpen" style="z-index: 10000;">
      <ng-template ngFor let-option [ngForOf]="filterValue ? filteredOptions : options" let-i="index">
        <ng-container>
          <ex-dropdown-item
            [id]="id + '_ex-dropdown-item_' + i"
            [option]="option"
            [selected]="isSelected(option)"
            [label]="getOptionLabel(option)"
            [disabled]="option.disabled"
            (onClick)="onOptionSelect($event, option)"
          ></ex-dropdown-item>
        </ng-container>
      </ng-template>
      <li *ngIf="filterValue && isEmpty()" class="ex-dropdown-empty-message" role="option">
        <ng-container>
          {{ emptyLabel }}
        </ng-container>
      </li>
    </ul>
  </div> `,
  providers: [DROPDOWN_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExDropdownComponent implements OnInit {
  @Input() emptyLabel: string = 'No results found'

  ngOnInit(): void {}
  /**
   * Unique identifier of the component
   * @group Props
   */
  @Input() id: string | undefined
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  @Input() scrollHeight: string = '200px'

  @Input() options: SelectItem[] = []
  @Input() placeholder: string = 'Select an option'
  filterValue: string | undefined = undefined
  @Output() valueChange = new EventEmitter<DropdownChangeEvent>()
  selectedOption: SelectItem | null = null
  dropdownOpen = false

  filterOnChange(event: Event) {
    console.log('CULO')
    this.filterValue = (event.target as HTMLInputElement).value
  }

  get filteredOptions(): SelectItem[] {
    if (!this.filterValue) {
      return this.options
    }
    return this.options.filter((option) => option.label?.toLowerCase().includes(this.filterValue!.toLowerCase()))
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen
  }

  selectOption() {
    this.dropdownOpen = false
  }

  public generateNewUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  public isSelected(option: SelectItem): boolean {
    return this.selectedOption === option.value
  }

  public getOptionLabel(option: SelectItem): string {
    return option.label || option.value || ''
  }

  public onOptionSelect(event: Event, option: SelectItem): void {
    const originalValue = cloneDeep(this.selectedOption) as SelectItem
    this.selectedOption = option.value
    this.valueChange.emit({
      originalValue: originalValue,
      value: option,
    })
    this.selectOption()
  }

  public isEmpty(): boolean {
    if (this.filterValue) {
      return this.filteredOptions.length === 0
    }
    return this.options.length === 0
  }
}
