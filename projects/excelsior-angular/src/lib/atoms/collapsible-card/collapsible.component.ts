import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  standalone: true,
  imports: [CommonModule, ExIconComponent],
})
export class CollapsibleComponent {
  @Input() title: string = 'Collapsible Title'
  isCollapsed: boolean = true

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }
}
