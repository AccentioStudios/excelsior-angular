import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imageUrl: string = '';
  @Input() actions: { label: string, value: string }[] = [];
  @Output() actionClick = new EventEmitter<string>();

  onActionClick(action: { label: string, value: string }) {
    this.actionClick.emit(action.value);
  }
}
