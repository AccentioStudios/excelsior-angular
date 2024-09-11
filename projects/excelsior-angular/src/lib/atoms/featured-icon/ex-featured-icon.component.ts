import { Component, Input } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ex-featured-icon',
  templateUrl: './ex-featured-icon.component.html',
  styleUrls: ['./ex-featured-icon.component.scss'],
  standalone: true,
  imports: [CommonModule, ExIconComponent],
})
export class ExFeaturedIconComponent {
  @Input() name: string = ''
  @Input() solid?: boolean
  @Input() flat?: boolean
  @Input() size: 'small' | 'medium' | 'large' = 'medium'

  public get classes(): string[] {
    const classes = ['ex-featured-icon']
    if (this.solid) {
      classes.push('solid')
    } else if (this.flat) {
      classes.push('flat')
    }
    return classes
  }
}
