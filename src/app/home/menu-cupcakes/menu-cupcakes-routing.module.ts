import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCupcakesComponent } from './menu-cupcakes.component';

const routes: Routes = [
  {
    path: '',
    component: MenuCupcakesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCupcakesRoutingModule { }
