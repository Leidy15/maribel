import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCupcakesRoutingModule } from './menu-cupcakes-routing.module';
import { MenuCupcakesComponent } from './menu-cupcakes.component';


@NgModule({
  declarations: [MenuCupcakesComponent],
  imports: [
    CommonModule,
    MenuCupcakesRoutingModule
  ]
})
export class MenuCupcakesModule { }
