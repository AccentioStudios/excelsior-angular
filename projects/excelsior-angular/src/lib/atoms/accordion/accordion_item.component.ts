import { CommonModule } from '@angular/common'
import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { ExAccordionComponent } from './accordion.component'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-accordion-item',
  template: `
    <div class="ex-accordion__item" [class]="classes">
      <i #chevron class="chevron">
        <ex-icon *ngIf="withChevron" name="chevron-up"></ex-icon>
      </i>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [ExIconComponent, CommonModule],
})
export class ExAccordionItemComponent {
  @Input() density: 'narrow' | 'dense' | 'normal' = 'normal'
  @Input() style: 'list' | 'card' = 'list'
  @Input() indentation: boolean = false
  @Input() withChevron: boolean = false
  @ViewChild('chevron') chevron: ElementRef | undefined

  constructor(public _parent: ExAccordionComponent) {}

  ngAfterViewChecked() {
    if (this.chevron) {
      this.chevron.nativeElement.style.transform = !this._parent.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'
    }
  }

  get classes(): string {
    const classList = [
      '',
      this.density === 'dense' ? 'ex-accordion__item--dense' : '',
      this.density === 'narrow' ? 'ex-accordion__item--narrow' : '',
      this.style === 'list' ? 'ex-accordion__item--list' : '',
      this.style === 'card' ? 'ex-accordion__item--card' : '',
      this.indentation ? 'indentation' : '',
      this._parent.isCollapsed ? 'collapsed' : '',
      this.withChevron ? 'with-chevron' : '',
    ].join(' ')

    return classList
  }
}
