import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'mapa',
    loadChildren:() => import('./mapa/mapa.module').then(m => m.MapaModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




