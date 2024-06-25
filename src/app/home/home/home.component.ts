import { Component, OnInit } from '@angular/core';
import { Jogador } from './../../shared/model/jogador';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public jogadorAutenticado: Jogador;
  constructor() { }

  ngOnInit(): void {

    let usuarioNoStorage = localStorage.getItem('usuarioAutenticado');

    if(usuarioNoStorage){
      this.jogadorAutenticado = JSON.parse(usuarioNoStorage);
    }
  }

}
