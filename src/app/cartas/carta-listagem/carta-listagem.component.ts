import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/shared/model/carta';
import { CartasService } from 'src/app/shared/service/cartas.service';

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrls: ['./carta-listagem.component.scss']
})
export class CartaListagemComponent implements OnInit {

  public cartas: Carta[] = [];

  constructor(private cartaService: CartasService) { }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  private consultarTodasCartas() {
    this.cartaService.listarTodas().subscribe(
      resultado => {
        // Retorno bem-sucedido da chamada HTTP
        this.cartas = resultado;
      },
      erro => {
        // Retorno com erros da chamada HTTP

        //TODO evoluir para mostrar a mensagem 
        //de erro ao usuário na tela
        console.error('Erro ao consultar cartas', erro);
      }
    );
  }
}




