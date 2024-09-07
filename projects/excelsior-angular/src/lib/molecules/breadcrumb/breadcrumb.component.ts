import { Component, Input, Output, EventEmitter } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
  @Output() navigate = new EventEmitter<string>();

  onNavigate(item: BreadcrumbItem) {
    this.navigate.emit(item.path);
  }
}
