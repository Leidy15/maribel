import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from 'src/const';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo : 'static/404'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:`${routesPath.home.path}/${routesPath.home.menu}`
  },
  {
    path: "",
    children: [
      {
        path: routesPath.home.path,
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
      }    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
