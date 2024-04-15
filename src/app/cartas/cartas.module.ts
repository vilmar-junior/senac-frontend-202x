import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartaListagemComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    FormsModule //Módulo que habilita o ngModel
  ]
})
export class CartasModule { }


