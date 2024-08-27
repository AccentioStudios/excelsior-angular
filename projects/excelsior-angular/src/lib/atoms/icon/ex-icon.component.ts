import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ex-icon',
  templateUrl: './ex-icon.component.html',
  styleUrls: ['./ex-icon.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ExIconComponent {
  @Input() name: string = ''
  @Input() size: 'small' | 'medium' | 'large' = 'medium'

  constructor() {}

  public get classes(): string[] {
    return ['ex-icon', `ex-icon--${this.size}`]
  }
}
