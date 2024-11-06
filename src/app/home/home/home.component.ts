import { Component, OnInit } from '@angular/core';
import { Jogador } from './../../shared/model/jogador';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public jogadorAutenticado: Jogador;
  public ehAdministrador: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('tokenUsuarioAutenticado');

    if(token){
      //Converte a String para o formato JSON (declare como any, infelizmente)
      let tokenJSON: any = jwtDecode(token); 
      this.ehAdministrador = tokenJSON?.roles == 'ADMINISTRADOR';

      if(this.ehAdministrador){
        this.router.navigate(['/home/cartas']);
      }
    } else {
     this.router.navigate(['/login']);
    }
  }

  logout(){
    localStorage.removeItem('tokenUsuarioAutenticado');
    this.router.navigate(['/login']);
  }
}





