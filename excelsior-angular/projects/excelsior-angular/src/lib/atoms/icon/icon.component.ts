import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-icon',
  template: `<svg class="icon"><use [attr.href]="'#' + name"></use></svg>`,
  styles: [`
    .icon {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }
  `]
})
export class IconComponent {
  @Input() name: string = '';
}