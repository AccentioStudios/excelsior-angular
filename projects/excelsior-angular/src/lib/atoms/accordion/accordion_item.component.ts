import { Component, Input } from '@angular/core'

@Component({
  selector: 'ex-accordion-item',
  template: `
    <div class="ex-accordion__item" [class]="classes">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
})
export class ExAccordionItemComponent {
  @Input() density: 'narrow' | 'dense' | 'normal' = 'normal'
  @Input() style: 'list' | 'card' = 'list'
  @Input() indentation: boolean = false

  get classes(): string {
    const classList = [
      '',
      this.density === 'dense' ? 'ex-accordion__item--dense' : '',
      this.density === 'narrow' ? 'ex-accordion__item--narrow' : '',
      this.style === 'list' ? 'ex-accordion__item--list' : '',
      this.style === 'card' ? 'ex-accordion__item--card' : '',
      this.indentation ? 'indentation' : '',
    ].join(' ')

    return classList
  }
}
