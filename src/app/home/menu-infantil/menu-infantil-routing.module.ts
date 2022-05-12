import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInfantilComponent } from './menu-infantil.component';

const routes: Routes = [
  {
    path: '',
    component: MenuInfantilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuInfantilRoutingModule { }
