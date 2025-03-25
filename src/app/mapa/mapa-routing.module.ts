import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaDetalheComponent } from './mapa-detalhe/mapa-detalhe.component';

const routes: Routes = [
  { path: '', component: MapaDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
