import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from '../model/carta';
import { CartaSeletor } from '../model/seletor/carta.seletor';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  //URL base da API de cartas
  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carta';
  
  constructor(private httpClient: HttpClient) { }
 
  listarTodas(): Observable<Array<Carta>> {
    return this.httpClient.get<Array<Carta>>(this.API + '/todas');
  }

  listarComSeletor(seletor: CartaSeletor): Observable<Array<Carta>> {
    //TODO desenvolver no backend o respectivo método 
    //(em CartaController.java) para atender a esta chamada
    return this.httpClient.post<Array<Carta>>(this.API + '/filtrar', seletor);
  }



  //TODO declarar os demais métodos disponibilizados pelo CartaController no backend
}


