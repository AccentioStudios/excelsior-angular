import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, ExIconComponent],
  standalone: true,
})
export class ExInputComponent {
  @Input() id: string = 'input'
  /**
   * Input type. Can be 'text', 'password', 'email' or 'number'.
   */
  @Input() type: 'text' | 'password' | 'email' | 'number' = 'text'
  /**
   * Placeholder text to be displayed in the input when it is empty.
   */
  @Input() placeholder: string = 'Enter text'
  /**
   * Label text to be displayed above the input.
   */
  @Input() label: string = ''
  /**
   * Value of the input.
   */
  @Input() value?: string | undefined | null = undefined
  /**
   * Event emitter for when the value of the input changes.
   */
  @Output() valueChange = new EventEmitter<string>()
  /**
   * Validator function to validate the input value.  If the function returns false, the input will be marked as invalid.
   * @param value
   * @returns { boolean } Boolean indicating if the input is valid.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Input() validator? = (value: string): boolean => true

  /**
   * Error message to be displayed below the input when the input is invalid.
   */
  @Input() errorMessage?: string | undefined = undefined

  /**
   * Boolean indicating if the input is disabled.
   */
  @Input() disabled: boolean = false
  /**
   * Icon name (ExIcon) to be displayed on the left side of the input.
   * @type {string}
   */
  @Input() iconName: string = ''
  /**
   * Hint text to be displayed below the input. If null, no hint text will be displayed.
   * @type {string}
   */
  @Input() hintText: string | null = null

  /**
   * Boolean indicating if the input should be validated on init. Is false by default.
   * @type {boolean}
   */
  @Input() validateOnInit: boolean = false

  /**
   * Boolean indicating if the input is required.
   * @type {boolean}
   * @default false
   */
  @Input() required: boolean = false

  ngOnInit() {
    if (this.validateOnInit) {
      this.validate()
    }
  }

  public isValid: boolean | null = null

  validate() {
    if (this.value !== null && this.value !== undefined) {
      if (this.validator !== undefined) {
        this.isValid = this.validator(this.value)
        return // Return early if validator is defined
      }
      this.isValid = true
    }
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.validate()
    this.valueChange.emit(this.value)
  }

  get haveHint(): boolean {
    return this.hintText !== null
  }

  get classes(): string {
    const classList = ['ex-input', this.isValid === false ? 'invalid' : '', this.disabled ? 'disabled' : ''].join(' ')
    return classList
  }
}
