import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './atoms/badge/badge.component';
import { ExIconComponent } from './atoms/icon/ex-icon.component';

@NgModule({
  declarations: [BadgeComponent, ExIconComponent],
  imports: [CommonModule],
  exports: [BadgeComponent, ExIconComponent] // Exporta os componentes para que possam ser usados fora da biblioteca
})
export class ExcelsiorModule {}
