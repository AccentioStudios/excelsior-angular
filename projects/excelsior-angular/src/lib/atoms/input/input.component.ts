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
  @Input() type: string = 'text'
  @Input() placeholder: string = 'Enter text'
  @Input() value: string = ''
  @Input() label: string = ''
  @Output() valueChange = new EventEmitter<string>()
  @Input() validator = (value: string): boolean | null => null
  @Input() disabled: boolean = false
  @Input() iconName: string = ''

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.valueChange.emit(this.value)
  }

  get isInvalid(): boolean {
    return this.validator(this.value) === false
  }

  get classes(): string {
    const classList = ['ex-input', this.isInvalid ? 'invalid' : '', this.disabled ? 'disabled' : ''].join(' ')

    return classList
  }
}
