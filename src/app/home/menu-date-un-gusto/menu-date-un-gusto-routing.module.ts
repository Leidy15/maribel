import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDateUnGustoComponent } from './menu-date-un-gusto.component';

const routes: Routes = [
  {
    path: '',
    component: MenuDateUnGustoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuDateUnGustoRoutingModule { }
