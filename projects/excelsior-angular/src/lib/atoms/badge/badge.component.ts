import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  standalone: true,
  imports: [CommonModule, ExIconComponent],

})
export class ExBadgeComponent {
  @Input() text: string = 'Default Badge'
  @Input() type: 'success' | 'pink' | 'warning' | 'error' | 'purple' | 'indigo' | 'indigo' | 'blue-light' = 'success'
  @Output()
  onClick = new EventEmitter<Event>()
}
