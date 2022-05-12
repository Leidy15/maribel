import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuInfantilRoutingModule } from './menu-infantil-routing.module';
import { MenuInfantilComponent } from './menu-infantil.component';


@NgModule({
  declarations: [MenuInfantilComponent],
  imports: [
    CommonModule,
    MenuInfantilRoutingModule
  ]
})
export class MenuInfantilModule { }
