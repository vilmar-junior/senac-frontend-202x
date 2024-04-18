import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/shared/model/carta';
import { CartaSeletor } from 'src/app/shared/model/seletor/carta.seletor';
import { CartasService } from 'src/app/shared/service/cartas.service';

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrls: ['./carta-listagem.component.scss']
})
export class CartaListagemComponent implements OnInit {

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private cartaService: CartasService) { }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  public pesquisar() {
    this.cartaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new CartaSeletor();
  }

  excluir(cartaSelecionada: Carta){
    //TODO pedir confirmação do usuário antes de excluir
    this.cartaService.excluir(cartaSelecionada.id).subscribe(
      resultado => {
        this.pesquisar();
      },
      erro => {
        //TODO tratar a mensagem de erro
        console.error('Erro ao excluir carta', erro);
      }
    );
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




