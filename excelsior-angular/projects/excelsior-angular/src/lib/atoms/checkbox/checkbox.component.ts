import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() label: string = 'Default Checkbox';
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleCheck() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
