import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() text: string = 'Default Badge';
  @Input() type: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @Output()
  onClick = new EventEmitter<Event>();
}