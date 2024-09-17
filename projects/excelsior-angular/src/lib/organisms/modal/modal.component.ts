import { Component, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExFeaturedIconComponent } from '../../atoms/featured-icon/ex-featured-icon.component'
import { ExIconComponent } from '../../atoms/icon/ex-icon.component'

@Component({
  selector: 'ex-modal',
  imports: [CommonModule, ExIconComponent, ExFeaturedIconComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})
export class ExModalComponent {
  /**
   * The visibility of the modal
   */
  @Input() isVisible: boolean = false
  @Output() isVisibleChange = new EventEmitter<boolean>()
  /**
   * The title of the modal
   */
  @Input() title?: string
  /**
   * The text appearing below the title
   */
  @Input() supportingText?: string
  /**
   * The icon name (ExIcon) to be displayed on the modal
   */
  @Input() iconName?: string
  /**
   * The optional maximum width of the modal
   */
  @Input() maxWidth?: string
  /**
   * The function to be called when the modal is closed
   */
  @Output() onClose = new EventEmitter<void>()
  @ContentChild('[modalHeader]', { read: ElementRef }) modalHeader: ElementRef | undefined

  hasCustomHeader: boolean = false

  ngAfterContentInit() {
    this.hasCustomHeader = !!this.modalHeader
  }

  closeModal() {
    this.onClose.emit()
    this.isVisibleChange.emit(this.isVisible)
  }

  get styleWidth() {
    const styles = []
    if (this.maxWidth) {
      styles.push(`max-width: ${this.maxWidth}`)
      styles.push(`width: ${this.maxWidth}`)
    }
    return styles.join('; ')
  }
}
