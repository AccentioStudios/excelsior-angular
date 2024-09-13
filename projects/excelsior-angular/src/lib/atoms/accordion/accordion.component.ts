import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-accordion',
  template: `
    <div class="ex-accordion__container">
      <div class="ex-accordion__header" (click)="toggleCollapse()">
        <ng-content select="[parent]"></ng-content>
      </div>
      <div class="ex-accordion__content" [class]="{ collapsed: isCollapsed }">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.component.scss'],
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

  // get classes(): string {
  //   const classList = [
  //     'ex-accordion',
  //     this.density === 'dense' ? 'ex-accordion--dense' : '',
  //     this.density === 'narrow' ? 'ex-accordion--narrow' : '',
  //     this.style === 'list' ? 'ex-accordion--list' : '',
  //     this.style === 'card' ? 'ex-accordion--card' : '',
  //   ].join(' ')

  //   return classList
  // }
}
