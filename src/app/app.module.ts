import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './auth/request.interceptor';
import { HomeModule } from './home/home.module';
import { MapaModule } from './mapa/mapa.module';
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
    FormsModule, // módulo de formul�rios
    HomeModule,
    MapaModule
  ],
  
  //Adicionando o interceptor ao módulo
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
  }],  
  bootstrap: [AppComponent]
})
export class AppModule { }


