import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
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
  @Input() value: string = ''
  @Input() label: string = ''
  @Output() valueChange = new EventEmitter<string>()
  /**
   * Validator function to validate the input value. If the function returns a string, the input will be considered invalid and the string will be used as the error message.
   * @param value
   * @returns {string | null} Error message or undefined if the input is valid.
   */
  @Input() validator? = (value: string): string | undefined => undefined
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
   * Function to format the error message. By default, the error message is displayed as is.
   * @param string raw error
   * @returns string Formatted error message.
   */
  @Input() errorFormatter: (error: string) => string = (error) => error

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.valueChange.emit(this.value)
  }

  get isInvalid(): boolean {
    if (this.validator) {
      const error = this.validator(this.value)
      return error !== undefined
    }

    return false
  }

  get errorMessage(): string | undefined {
    if (this.validator) {
      const error = this.validator(this.value)
      if (error !== undefined) {
        const errorFormatted = this.errorFormatter(error)
        return errorFormatted
      }
      return error
    }
    return undefined
  }

  get haveHint(): boolean {
    return this.hintText !== null
  }

  get classes(): string {
    const classList = ['ex-input', this.isInvalid ? 'invalid' : '', this.disabled ? 'disabled' : ''].join(' ')

    return classList
  }
}
