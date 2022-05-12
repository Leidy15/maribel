import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGolosinasComponent } from './menu-golosinas.component';

const routes: Routes = [
  {
    path: '',
    component: MenuGolosinasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuGolosinasRoutingModule { }
