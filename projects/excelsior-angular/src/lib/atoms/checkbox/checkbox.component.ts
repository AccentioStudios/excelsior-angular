import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExCheckboxComponent {
  @Input() label?: string
  @Input() checked: boolean = false
  @Input() disabled: boolean | undefined = false
  @Input() indeterminate: boolean = false
  @Output() checkedChange = new EventEmitter<boolean>()

  private static id: number = 0

  componentIdNumber: number = 0

  get componentId(): string {
    return `ex-checkbox-${this.componentIdNumber}`
  }

  ngOnInit(): void {
    this.componentIdNumber = ++ExCheckboxComponent.id
  }

  toggleCheck(event: Event) {
    this.checked = !this.checked

    this.checkedChange.emit(this.checked)

    // Prevent the click event from bubbling up to the parent
    event.stopPropagation()
  }
}
