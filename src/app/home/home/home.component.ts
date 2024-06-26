import { Component, OnInit } from '@angular/core';
import { Jogador } from './../../shared/model/jogador';
import { Router } from '@angular/router';

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
    let usuarioNoStorage = localStorage.getItem('usuarioAutenticado');

    if(usuarioNoStorage){
      this.jogadorAutenticado = JSON.parse(usuarioNoStorage);
      this.ehAdministrador = this.jogadorAutenticado?.perfil == 'ADMINISTRADOR';

      if(this.ehAdministrador){
        this.router.navigate(['/home/cartas']);
      
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(){
    localStorage.removeItem('usuarioAutenticado');
    this.router.navigate(['/login']);
  }
}





