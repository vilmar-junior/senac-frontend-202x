import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './shared/components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // módulo de requisições HTTP
    FormsModule // módulo de formulários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


