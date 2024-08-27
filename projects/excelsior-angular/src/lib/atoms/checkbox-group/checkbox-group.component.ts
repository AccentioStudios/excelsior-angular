import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExCardComponent } from '../card/card.component'

@Component({
  selector: 'ex-checkbox-card',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
  standalone: true,
  imports: [CommonModule, ExCardComponent],
})
export class ExCheckboxGroupComponent {
  @Input() label: string = 'Default Checkbox'
  @Input() title: string = 'Default Checkbox'
  @Input() checked: boolean = false
  @Output() checkedChange = new EventEmitter<boolean>()

  toggleCheck() {
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
}
