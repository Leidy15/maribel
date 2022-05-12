import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuGolosinasRoutingModule } from './menu-golosinas-routing.module';
import { MenuGolosinasComponent } from './menu-golosinas.component';


@NgModule({
  declarations: [MenuGolosinasComponent],
  imports: [
    CommonModule,
    MenuGolosinasRoutingModule
  ]
})
export class MenuGolosinasModule { }
