import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent {
  @Input() label: string = 'Select options';
  @Input() options: { value: string, label: string }[] = [];
  @Input() selectedValues: string[] = [];
  @Output() selectionChange = new EventEmitter<string[]>();

  isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }

  onCheckboxChange(value: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedValues = [...this.selectedValues, value];
    } else {
      this.selectedValues = this.selectedValues.filter(v => v !== value);
    }
    this.selectionChange.emit(this.selectedValues);
  }
}
