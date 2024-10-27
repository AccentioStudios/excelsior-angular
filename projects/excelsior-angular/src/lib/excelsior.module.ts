import { NgModule } from '@angular/core'
import { ExBadgeComponent } from './atoms/badge/badge.component'
import { ExIconComponent } from './atoms/icon/ex-icon.component'
import { ExButtonComponent } from './atoms/button/ex-button.component'
import { ExCardComponent } from './atoms/card/card.component'
import { ExCheckboxComponent as ExCheckboxComponent } from './atoms/checkbox/checkbox.component'
import { ExCheckboxGroupComponent } from './atoms/checkbox-group/checkbox-group.component'
import { ExCollapsibleComponent as ExCollapsibleComponent } from './atoms/collapsible-card/collapsible.component'
import { ExInputComponent } from './atoms/input/input.component'
import { RadioButtonComponent as ExRadioButtonComponent } from './atoms/radio/radio-button.component'
import { SearchInputDropdownComponent as ExSearchInputDropdownComponent } from './atoms/search-input/search-input-dropdown.component'
import { ExLayoutMainComponent } from './atoms/layout-main/ex-layout-main.component'
import { ExModalComponent } from './organisms/modal/modal.component'
import { ExAccordionComponent } from './atoms/accordion/accordion.component'
import { ExAccordionItemComponent } from './atoms/accordion/accordion_item.component'
import { ExTreeComponent } from './molecules/tree/tree.component'
import { ExDropdownComponent } from './atoms/dropdown/dropdown.component'

@NgModule({
  imports: [
    ExBadgeComponent,
    ExButtonComponent,
    ExCardComponent,
    ExCheckboxComponent,
    ExCheckboxGroupComponent,
    ExCollapsibleComponent,
    ExIconComponent,
    ExInputComponent,
    ExDropdownComponent,
    ExRadioButtonComponent,
    ExSearchInputDropdownComponent,
    ExLayoutMainComponent,
    ExModalComponent,
    ExAccordionComponent,
    ExAccordionItemComponent,
    ExTreeComponent,
  ],
  exports: [
    // Atoms
    ExBadgeComponent,
    ExButtonComponent,
    ExCardComponent,
    ExCheckboxComponent,
    ExCheckboxGroupComponent,
    ExCollapsibleComponent,
    ExDropdownComponent,
    ExIconComponent,
    ExInputComponent,
    ExDropdownComponent,
    ExRadioButtonComponent,
    ExSearchInputDropdownComponent,
    ExLayoutMainComponent,
    ExAccordionComponent,
    ExAccordionItemComponent,

    // Molecules
    ExTreeComponent,

    // Organisms
    ExModalComponent,
  ],
})
export class ExcelsiorModule {}
