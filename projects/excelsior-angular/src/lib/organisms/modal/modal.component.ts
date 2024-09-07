import { Component, Input, Output, EventEmitter,ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { ExIconComponent } from '../../atoms/icon/ex-icon.component'

interface ModalAction {
  label: string;
  value: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
  
})

export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Modal Title';
  @Input() actions: ModalAction[] = [];
  @Input() showFooter: boolean = true;
  @Output() actionClick = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();
  @ContentChild('[modalHeader]', { read: ElementRef }) modalHeader: ElementRef | undefined;
  
  hasCustomHeader: boolean = false;

  ngAfterContentInit() {
    this.hasCustomHeader = !!this.modalHeader;
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  onActionClick(action: ModalAction) {
    this.actionClick.emit(action.value);
  }
}
