import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {
  @Input() name: string = 'radioGroup'
  @Input() label: string = 'Select an option'
  @Input() options: { value: string; label: string }[] = []
  @Input() selectedValue: string = ''
  @Output() selectionChange = new EventEmitter<string>()

  onSelectionChange(value: string) {
    this.selectedValue = value
    this.selectionChange.emit(this.selectedValue)
  }
}
