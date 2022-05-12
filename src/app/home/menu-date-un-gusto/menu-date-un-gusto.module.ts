import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDateUnGustoRoutingModule } from './menu-date-un-gusto-routing.module';
import { MenuDateUnGustoComponent } from './menu-date-un-gusto.component';


@NgModule({
  declarations: [MenuDateUnGustoComponent],
  imports: [
    CommonModule,
    MenuDateUnGustoRoutingModule
  ]
})
export class MenuDateUnGustoModule { }
