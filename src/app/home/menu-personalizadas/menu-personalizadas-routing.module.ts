import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPersonalizadasComponent } from './menu-personalizadas.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPersonalizadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPersonalizadasRoutingModule { }
