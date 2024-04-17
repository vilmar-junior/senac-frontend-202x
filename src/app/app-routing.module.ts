import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'cartas', pathMatch: 'full' },
  {
    path: 'cartas',
    loadChildren:() => import('./cartas/cartas.module').then(m => m.CartasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




