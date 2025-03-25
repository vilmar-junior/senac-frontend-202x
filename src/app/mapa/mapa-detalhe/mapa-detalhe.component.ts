import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mapa-detalhe',
  templateUrl: './mapa-detalhe.component.html',
  styleUrls: ['./mapa-detalhe.component.scss']
})
export class MapaDetalheComponent implements OnInit {

   public latitudeSelecionada: number;
   public longitudeSelecionada: number;

   // Definição das coordenadas iniciais do mapa e do marcador (Senac Prainha)
   public center: google.maps.LatLngLiteral = { lat: -27.5849, lng: -48.5453 }; // Senac SC - Prainha (Localização exata)
   public markerPosition: google.maps.LatLngLiteral = { lat: -27.5849, lng: -48.5453 }; // Posição inicial do marcador
   public zoom: number = 12;
 
   constructor() { }
 
   ngOnInit(): void {
     // Verifica se a API do Google Maps está carregada
     if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
       console.error('Google Maps API não carregado');
       return;
     }
   }
 
   // Método chamado ao clicar no mapa
   onMapClick(event: google.maps.MapMouseEvent): void {
     // O 'event' é um MapMouseEvent, que contém informações sobre o clique do usuário no mapa
     // Especificamente, o event.latLng contém as coordenadas (latitude e longitude) do ponto onde o clique ocorreu
     if (event.latLng) {
       const lat = event.latLng.lat(); 
       const lng = event.latLng.lng(); 
       this.markerPosition = { lat, lng }; // Atualiza a posição do marcador com as novas coordenadas

       this.latitudeSelecionada = lat;
       this.longitudeSelecionada = lng;
       console.log(`Latitude: ${lat}, Longitude: ${lng}`, '', 'success'); 
     }
   }

   salvarLocalizacao(){
    //TODO mandar para o backend
    Swal.fire(`Salvando: [Latitude: ${this.latitudeSelecionada}, Longitude: ${this.longitudeSelecionada}]`, "", "success");
   }
}
