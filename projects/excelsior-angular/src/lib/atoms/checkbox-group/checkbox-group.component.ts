import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExCardComponent } from '../card/card.component'
import { ExCheckboxComponent } from '../checkbox/checkbox.component'

@Component({
  selector: 'ex-checkbox-card',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  standalone: true,
  imports: [CommonModule, ExCardComponent, ExCheckboxComponent],
})
export class ExCheckboxGroupComponent {
  @Input() text: string = 'Text Default Checkbox'

  @Input() label: string = 'Default Checkbox'
  @Input() checked: boolean = false
  @Input() disabled: boolean = false
  @Output() checkedChange = new EventEmitter<boolean>()

  toggleCheck() {
    if (this.disabled) return
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
}
