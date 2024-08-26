import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-search-input-dropdown',
  templateUrl: './search-input-dropdown.component.html',
  styleUrls: ['./search-input-dropdown.component.css'],
  standalone: true,
})
export class SearchInputDropdownComponent {
  @Input() id: string = 'search'
  @Input() label: string = 'Search'
  @Input() placeholder: string = 'Search...'
  @Input() options: { value: string; label: string }[] = []
  @Output() selectionChange = new EventEmitter<string>()

  searchTerm: string = ''
  showDropdown: boolean = false
  filteredOptions: { value: string; label: string }[] = []

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement
    this.searchTerm = input.value
    this.filteredOptions = this.options.filter((option) =>
      option.label.toLowerCase().includes(this.searchTerm.toLowerCase()),
    )
  }

  selectOption(option: { value: string; label: string }) {
    this.searchTerm = option.label
    this.showDropdown = false
    this.selectionChange.emit(option.value)
  }

  hideDropdown() {
    setTimeout(() => (this.showDropdown = false), 200) // Delay to allow click event on dropdown item
  }
}
