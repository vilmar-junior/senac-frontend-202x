import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    
    // Chamadas de rotas filhas
    //Exemplo: http://localhost:4200/home/cartas
    //               /home: carrega o HomeModule
    //               '' (entre 'home' e 'cartas'): carrega o HomeComponent
    //               /cartas: carrega o CartasModule
    children: [
      {
        path: 'cartas',
        loadChildren:() => import('../cartas/cartas.module').then(m => m.CartasModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
