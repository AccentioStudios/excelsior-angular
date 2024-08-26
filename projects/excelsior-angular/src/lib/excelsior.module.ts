import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExBadgeComponent } from './atoms/badge/badge.component'
import { ExIconComponent } from './atoms/icon/ex-icon.component'
import { ExButtonComponent } from './atoms/button/ex-button.component'
import { CardComponent } from './atoms/card/card.component'
import { CheckboxComponent } from './atoms/checkbox/checkbox.component'
import { ExCheckboxGroupComponent } from './atoms/checkbox-group/checkbox-group.component'
import { CollapsibleComponent } from './atoms/collapsable/collapsible.component'
import { SelectDropdownComponent } from './atoms/dropdown/dropdown.component'
import { InputComponent } from './atoms/input/input.component'
import { RadioButtonComponent } from './atoms/radio/radio-button.component'
import { SearchInputDropdownComponent } from './atoms/search-input/search-input-dropdown.component'

@NgModule({
  declarations: [
    ExBadgeComponent,
    ExButtonComponent,
    CardComponent,
    CheckboxComponent,
    ExCheckboxGroupComponent,
    CollapsibleComponent,
    SelectDropdownComponent,
    ExIconComponent,
    InputComponent,
    RadioButtonComponent,
    SearchInputDropdownComponent,
  ],
  imports: [],
  exports: [
    ExBadgeComponent,
    ExButtonComponent,
    CardComponent,
    CheckboxComponent,
    ExCheckboxGroupComponent,
    CollapsibleComponent,
    SelectDropdownComponent,
    ExIconComponent,
    InputComponent,
    RadioButtonComponent,
    SearchInputDropdownComponent,
  ], // Exporta os componentes para que possam ser usados fora da biblioteca
})
export class ExcelsiorModule {}
