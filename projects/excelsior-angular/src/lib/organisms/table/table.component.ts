import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TableColumn {
  field: string;
  header: string;
}

interface TableAction {
  label: string;
  value: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() actions: TableAction[] = [];
  @Output() actionClick = new EventEmitter<{ action: string, row: any }>();

  onActionClick(action: string, row: any) {
    this.actionClick.emit({ action, row });
  }
}
