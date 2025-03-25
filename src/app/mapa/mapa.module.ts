import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapaDetalheComponent } from './mapa-detalhe/mapa-detalhe.component';
import { MapaRoutingModule } from './mapa-routing.module';


@NgModule({
  declarations: [
    MapaDetalheComponent
  ],
  imports: [
    CommonModule,
    MapaRoutingModule,
    GoogleMapsModule
  ]
})
export class MapaModule { }
