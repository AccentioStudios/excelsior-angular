import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-dropdown',
  standalone: true,
  imports: [CommonModule, ExIconComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: string[] = []
  @Input() placeholder: string = 'Select an option'

  selectedOption: string | null = null
  dropdownOpen = false

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen
  }

  selectOption() {
    this.dropdownOpen = false
  }
  clickTest(option: string) {
    console.log(option)
    console.log('teste')
    this.selectedOption = option
  }
}
