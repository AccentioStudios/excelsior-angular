import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExBadgeComponent } from './atoms/badge/badge.component'
import { ExIconComponent } from './atoms/icon/ex-icon.component'

@NgModule({
  declarations: [],
  imports: [CommonModule, ExBadgeComponent, ExIconComponent], // Importa os componentes para que possam ser usados dentro da biblioteca
  exports: [ExBadgeComponent, ExIconComponent], // Exporta os componentes para que possam ser usados fora da biblioteca
})
export class ExcelsiorModule {}
