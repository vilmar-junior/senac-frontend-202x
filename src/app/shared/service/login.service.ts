import { UsuarioDTO } from './../model/dto/usuario.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/vemnox1/auth';
  private tokenKey = 'jwtToken';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Retorna o token JWT armazenado
  }
  
  constructor(private httpClient: HttpClient) { }

  autenticar(dto: UsuarioDTO): Observable<any> {
    const authHeader = 'Basic ' + btoa(`${dto.login}:${dto.senha}`);
    const headers = new HttpHeaders({
      'Authorization': authHeader
    });
    
    //return this.httpClient.post<any>(this.API + "/authenticate", {}, { headers });
    return this.httpClient.post<{ token: string }>(this.API + "/authenticate", { headers })
      .pipe(
        tap((response: { token: string }) => {
          if (response && response.token) {
            localStorage.setItem(this.tokenKey, response.token); // Armazena o token JWT no localStorage
          }
        })
      );
  }
  
  sair() {
    localStorage.removeItem('usuarioAutenticado');

    //TODO invalidar a sessão no backend

    //TODO redirecionar para a tela de login
  }
}
