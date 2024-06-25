import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/shared/model/carta';
import { CartaSeletor } from 'src/app/shared/model/seletor/carta.seletor';
import { CartasService } from 'src/app/shared/service/cartas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrls: ['./carta-listagem.component.scss']
})
export class CartaListagemComponent implements OnInit {

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();
  public totalPaginas: number = 0;
  public readonly TAMANHO_PAGINA: number = 3;

  constructor(private cartaService: CartasService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;

    this.pesquisar();
    this.contarPaginas();
  }

  public pesquisar() {
    this.cartaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        Swal.fire('Erro ao consultar cartas!', erro.error.mensagem, 'error');
      }
    );
  }

  public contarPaginas() {
    this.cartaService.contarPaginas(this.seletor).subscribe(
      resultado => {
        this.totalPaginas = resultado;
      },
      erro => {
        Swal.fire('Erro ao consultar total de páginas', erro.error.mensagem, 'error');
      }
    );
  }

  atualizarPaginacao() {
    this.contarPaginas();
    this.pesquisar();
  }

  avancarPagina() {
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPagina() {
    this.seletor.pagina--;
    this.pesquisar();
  }

  irParaPagina(indicePagina: number) {
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }

  // Método para criar um array de páginas para ser utilizado no ngFor do HTML
  criarArrayPaginas(): any[] {
    return Array(this.totalPaginas).fill(0).map((x, i) => i + 1);
  }

  public limpar() {
    this.seletor = new CartaSeletor();
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
  }

  excluir(cartaSelecionada: Carta){
    Swal.fire({
      title: 'Deseja realmente excluir a carta?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.cartaService.excluir(cartaSelecionada.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir carta: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  editar(idCartaSelecionada: number){
    this.router.navigate(['/cartas/detalhe/', idCartaSelecionada]);
  }

  private consultarTodasCartas() {
    this.cartaService.listarTodas().subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        Swal.fire('Erro ao consultar cartas!', erro.error.mensagem, 'error');
      }
    );
  }
}




