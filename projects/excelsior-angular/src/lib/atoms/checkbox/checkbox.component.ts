import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  standalone: true,
  imports: [CommonModule,],
})
export class CheckboxComponent {
  @Input() label: string = 'Default Checkbox'
  @Input() checked: boolean = false
  @Output() checkedChange = new EventEmitter<boolean>()

  toggleCheck() {
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
}
