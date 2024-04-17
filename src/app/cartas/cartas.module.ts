import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { FormsModule } from '@angular/forms';
import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';


@NgModule({
  declarations: [
    CartaListagemComponent,
    CartaDetalheComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    FormsModule //Módulo que habilita o ngModel
  ]
})
export class CartasModule { }


