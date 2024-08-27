import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExBadgeComponent } from './atoms/badge/badge.component'
import { ExIconComponent } from './atoms/icon/ex-icon.component'
import { ExButtonComponent } from './atoms/button/ex-button.component'
import { ExCardComponent } from './atoms/card/card.component'
import { CheckboxComponent as ExCheckboxComponent } from './atoms/checkbox/checkbox.component'
import { ExCheckboxGroupComponent } from './atoms/checkbox-group/checkbox-group.component'
import { CollapsibleComponent as ExCollapsibleComponent } from './atoms/collapsable/collapsible.component'
import { SelectDropdownComponent as ExSelectDropdownComponent } from './atoms/dropdown/dropdown.component'
import { InputComponent as ExInputComponent } from './atoms/input/input.component'
import { RadioButtonComponent as ExRadioButtonComponent } from './atoms/radio/radio-button.component'
import { SearchInputDropdownComponent as ExSearchInputDropdownComponent } from './atoms/search-input/search-input-dropdown.component'

@NgModule({
  declarations: [],
  imports: [
    ExBadgeComponent,
    ExButtonComponent,
    ExCardComponent,
    ExCheckboxComponent,
    ExCheckboxGroupComponent,
    ExCollapsibleComponent,
    ExSelectDropdownComponent,
    ExIconComponent,
    ExInputComponent,
    ExRadioButtonComponent,
    ExSearchInputDropdownComponent,
  ],
  exports: [
    ExBadgeComponent,
    ExButtonComponent,
    ExCardComponent,
    ExCheckboxComponent,
    ExCheckboxGroupComponent,
    ExCollapsibleComponent,
    ExSelectDropdownComponent,
    ExIconComponent,
    ExInputComponent,
    ExRadioButtonComponent,
    ExSearchInputDropdownComponent,
  ], // Exporta os componentes para que possam ser usados fora da biblioteca
})
export class ExcelsiorModule {}
