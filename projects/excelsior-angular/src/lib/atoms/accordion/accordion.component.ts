import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  standalone: true,
  imports: [ExIconComponent],
})
export class ExAccordionComponent {
  @Input() isCollapsed: boolean = true
  @Output() isCollapsedChange = new EventEmitter<boolean>()
  @ViewChild('chevron') chevron: ElementRef | undefined

  ngAfterViewChecked() {
    if (this.chevron) {
      this.chevron.nativeElement.style.transform = !this.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
    this.isCollapsedChange.emit(this.isCollapsed)

    if (this.chevron) {
      this.chevron.nativeElement.style.transform = !this.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'
    }
  }
}
