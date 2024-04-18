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
    return this.httpClient.post<Array<Carta>>(this.API + '/filtrar', seletor);
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete(this.API + '/' + id);
  }

}


