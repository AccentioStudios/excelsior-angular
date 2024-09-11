import { Component, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExFeaturedIconComponent } from '../../atoms/featured-icon/ex-featured-icon.component'
import { ExIconComponent } from '../../atoms/icon/ex-icon.component'

interface ModalAction {
  label: string
  value: string
}

@Component({
  selector: 'ex-modal',
  imports: [CommonModule, ExIconComponent, ExFeaturedIconComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})
export class ExModalComponent {
  @Input() isVisible: boolean = false
  @Input() title?: string
  @Input() supportingText?: string
  @Input() iconName?: string
  @Output() actionClick = new EventEmitter<string>()
  @Output() onClose = new EventEmitter<void>()
  @ContentChild('[modalHeader]', { read: ElementRef }) modalHeader: ElementRef | undefined

  hasCustomHeader: boolean = false

  ngAfterContentInit() {
    this.hasCustomHeader = !!this.modalHeader
  }

  closeModal() {
    this.isVisible = false
    this.onClose.emit()
  }

  onActionClick(action: ModalAction) {
    this.actionClick.emit(action.value)
  }
}
