import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ex-accordion',
  template: `
    <div class="ex-accordion__container">
      <div class="ex-accordion__header" (click)="emitOnClick()">
        <ng-content select="[parent]"></ng-content>
      </div>
      <div class="ex-accordion__content" [class]="{ collapsed: isCollapsed }">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [ExIconComponent, CommonModule],
})
export class ExAccordionComponent {
  @Input() public isCollapsed?: boolean = true
  @Output() onClick = new EventEmitter<boolean>()

  emitOnClick() {
    this.onClick.emit()
  }
  // toggleCollapse() {
  //   this.isCollapsed = !this.isCollapsed
  //   this.isCollapsedChange.emit(this.isCollapsed)
  // }

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
