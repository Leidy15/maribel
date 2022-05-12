import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPersonalizadasRoutingModule } from './menu-personalizadas-routing.module';
import { MenuPersonalizadasComponent } from './menu-personalizadas.component';


@NgModule({
  declarations: [MenuPersonalizadasComponent],
  imports: [
    CommonModule,
    MenuPersonalizadasRoutingModule
  ]
})
export class MenuPersonalizadasModule { }
