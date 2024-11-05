import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ExIconComponent } from '../icon/ex-icon.component'

@Component({
  selector: 'ex-button',
  standalone: true,
  imports: [CommonModule, ExIconComponent],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{
        'background-color': backgroundColor,
      }"
      [disabled]="disabled"
    >
      <i [ngStyle]="{ color: iconColor }">
        <ex-icon *ngIf="icon !== ''" [name]="icon" [size]="size" />
      </i>
      <span *ngIf="label && label !== ''" class="ex-button-content-text">
        {{ label }}
      </span>
    </button>
  `,
  styleUrls: ['./ex-button.scss'],
})
export class ExButtonComponent {
  @Input()
  primary = false

  @Input() extended = false

  @Input()
  icon: string = ''

  @Input()
  backgroundColor?: string

  @Input()
  iconColor?: string

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium'

  /**
   * Button contents
   */
  @Input()
  label = ''

  @Input()
  disabled = false

  @Output()
  onClick = new EventEmitter<Event>()

  public get classes(): string[] {
    const mode = this.primary ? 'ex-button--primary' : 'ex-button--secondary'
    const disabledClass = this.disabled ? 'ex-button--disabled' : ''
    const size = `ex-button--${this.size}`
    const extended = this.extended ? 'ex-button--extended' : ''
    const iconButton = this.icon && this.icon !== '' && (!this.label || this.label === '') ? 'ex-button--icon' : ''
    return ['ex-button', `ex-button--${this.size}`, mode, disabledClass, size, extended, iconButton]
  }
}
