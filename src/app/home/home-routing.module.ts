import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from 'src/const';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: routesPath.home.menu,
        loadChildren: () =>
          import('./menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: routesPath.home.menuInfantil,
        loadChildren: () =>
          import('./menu-infantil/menu-infantil.module').then((m) => m.MenuInfantilModule),
      },
      {
        path: routesPath.home.cupcakes,
        loadChildren: () =>
          import('./menu-cupcakes/menu-cupcakes.module').then((m) => m.MenuCupcakesModule),
      },
      {
        path: routesPath.home.golosinas,
        loadChildren: () =>
          import('./menu-golosinas/menu-golosinas.module').then((m) => m.MenuGolosinasModule),
      },
      {
        path: routesPath.home.tortas,
        loadChildren: () =>
          import('./menu-personalizadas/menu-personalizadas.module').then((m) => m.MenuPersonalizadasModule),
      },
      {
        path: routesPath.home.gusto,
        loadChildren: () =>
          import('./menu-date-un-gusto/menu-date-un-gusto.module').then((m) => m.MenuDateUnGustoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
