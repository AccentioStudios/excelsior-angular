import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-dropdown-old',
  standalone: true,
  imports: [CommonModule, ExIconComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class SelectDropdownComponent {
  @Input() id: string = 'select'
  @Input() label: string = 'Select Option'
  @Input() options: { value: string; label: string }[] = []
  @Input() selectedValue: string = ''
  @Output() selectionChange = new EventEmitter<string>()

  onSelectionChange(event: Event) {
    const select = event.target as HTMLSelectElement
    this.selectedValue = select.value
    this.selectionChange.emit(this.selectedValue)
  }
}
