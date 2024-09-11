import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'ex-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
})
export class ExInputComponent {
  @Input() id: string = 'input'
  @Input() type: string = 'text'
  @Input() placeholder: string = 'Enter text'
  @Input() value: string = ''
  @Input() label: string = ''
  @Output() valueChange = new EventEmitter<string>()

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.valueChange.emit(this.value)
  }
}
