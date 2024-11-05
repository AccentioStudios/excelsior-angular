/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core'
import { CommonModule } from '@angular/common'

import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { cloneDeep } from 'lodash'
import { ExIconComponent } from '../icon/ex-icon.component'
import { DropdownChangeEvent, SelectItem } from '../../types'
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
    [ngClass]="{
      'ex-dropdown-item': true,
      'ex-highlight': selected,
      'ex-dropdown-item--disabled': disabled === true,
      'ex-focus': focused,
    }"
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
  template: `
    <div class="ex-dropdown" [ngClass]="{ disabled: disabled }">
      <label *ngIf="label && label !== ''" [for]="id">{{ label }}</label>
      <div class="ex-dropdown-container" (click)="toggleDropdown()" [ngClass]="{ open: dropdownOpen === true }">
        <div class="selected-value" [ngClass]="{ open: dropdownOpen === true }">
          <input
            [id]="id"
            [disabled]="disabled"
            [placeholder]="placeholder"
            class="ex-dropdown-search"
            type="text"
            (ngBlur)="toggleDropdown()"
            [value]="
              initialValue?.label || initialValue?.value || selectedOption?.label || selectedOption?.value || null
            "
            (keyup)="filterOnChange($event)"
          />
          <i>
            <ex-icon [name]="'chevron-down'" />
          </i>
        </div>
        <ul
          (click)="toggleDropdown()"
          class="options-list"
          [ngClass]="{ show: dropdownOpen === true }"
          style="z-index: 10000;"
        >
          <ng-template ngFor let-option [ngForOf]="filterValue ? filteredOptions : options" let-i="index">
            <ng-container>
              <ex-dropdown-item
                [id]="_id + '_ex-dropdown-item_' + i"
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
      </div>
      <div *ngIf="haveHint && isValid !== false" class="ex-input__hint">
        {{ hintText }}
      </div>
    </div>
  `,
  providers: [DROPDOWN_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExDropdownComponent implements OnInit {
  _id: string
  filteredOptions: SelectItem[] = []
  constructor(private cdr: ChangeDetectorRef) {
    this._id = this.id || this.generateUUIDv4()
  }
  @Input() emptyLabel: string = 'No results found'
  @Input() label: string | undefined
  public isValid: boolean | null = null

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

  /**
   * Hint text to be displayed below the input. If null, no hint text will be displayed.
   * @type {string}
   */
  @Input() hintText: string | null = null

  /**
   * Validator function to validate the input value.  If the function returns false, the input will be marked as invalid.
   * @param value
   * @returns { boolean } Boolean indicating if the input is valid.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Input() validator? = (value: SelectItem): boolean => true

  @Input() options: SelectItem[] = []
  @Input() placeholder: string = 'Select an option'
  filterValue: string | undefined = undefined
  @Input() initialValue: SelectItem | null = null
  @Output() valueChange = new EventEmitter<DropdownChangeEvent>()
  @Input() disabled: boolean = false

  selectedOption: SelectItem | null = null
  public dropdownOpen = false
  public isFiltering = false

  ngOnInit() {
    if (this.initialValue) {
      // Search the option in the options array
      const selectedOption = this.options.find(
        (option) => option.value === this.initialValue?.value || option.id === this.initialValue?.id,
      )
      if (selectedOption) {
        this.selectedOption = selectedOption
      }
    }
    this.updateFilteredOptions()
  }

  validate() {
    if (this.selectedOption !== null && this.selectedOption !== undefined) {
      if (this.validator !== undefined) {
        this.isValid = this.validator(this.selectedOption)
        return // Return early if validator is defined
      }
      this.isValid = true
    }
  }
  generateUUIDv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
  get haveHint(): boolean {
    return this.hintText !== null
  }
  filterOnChange(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value
    this.isFiltering = true
    this.updateFilteredOptions()
  }

  updateFilteredOptions(): void {
    if (!this.filterValue) {
      this.isFiltering = false
      this.filteredOptions = this.options
      this.initialValue = null
      this.cdr.detectChanges()
      return
    }
    this.filteredOptions = this.options.filter((option) =>
      option.label?.toLowerCase().includes(this.filterValue!.toLowerCase()),
    )
  }

  toggleDropdown() {
    if (!this.disabled) {
      this.dropdownOpen = !this.dropdownOpen
    }
  }

  public isSelected(option: SelectItem): boolean {
    return this.selectedOption?.value === option.value
  }

  public getOptionLabel(option: SelectItem): string {
    return option.label || option.value || ''
  }

  public onOptionSelect(event: Event, option: SelectItem): void {
    if (!this.disabled) {
      if (!option.disabled) {
        this.dropdownOpen = false
        this.isFiltering = false
        this.filterValue = undefined
        const originalValue = cloneDeep(this.selectedOption) as SelectItem
        this.selectedOption = option
        this.valueChange.emit({
          originalValue: originalValue,
          value: option,
        })
        this.updateFilteredOptions()
        this.initialValue = null
        this.cdr.detectChanges()
      }
    }
  }

  public isEmpty(): boolean {
    if (this.filterValue) {
      return this.filteredOptions.length === 0
    }
    return this.options.length === 0
  }
}
