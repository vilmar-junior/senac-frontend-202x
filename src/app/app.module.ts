import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { HomeModule } from './home/home.module';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // módulo de requisições HTTP
    FormsModule, // módulo de formulários
    HomeModule
  ],
  
  //Adicionando o interceptor ao módulo
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
  }],  
  bootstrap: [AppComponent]
})
export class AppModule { }


