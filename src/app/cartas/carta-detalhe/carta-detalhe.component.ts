import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/shared/service/cartas.service';
import { Carta } from './../../shared/model/carta';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-detalhe',
  templateUrl: './carta-detalhe.component.html',
  styleUrls: ['./carta-detalhe.component.scss']
})
export class CartaDetalheComponent implements OnInit {

  public carta: Carta = new Carta();
  public idCarta: number;

  constructor(private cartaService: CartasService,
              private router: Router, //componente para o roteamento entre telas
              private route: ActivatedRoute //para pegar os parâmetros da URL
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCarta = params['id'];
      if(this.idCarta) {
        this.buscarCarta();
      }
    });
  }

  buscarCarta(): void {
    this.cartaService.consultar(this.idCarta).subscribe(
      (carta) => {
        this.carta = carta;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a carta!', erro, 'error');
      }
    );
  }

  salvar(): void {
    if(this.idCarta){
      this.atualizar();
    }else{
      this.inserir();
    }
  }

  inserir(): void {
    this.cartaService.salvar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta salva com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a carta: ' + erro.error.mensagem, 'error');
      }
    );
  }

  atualizar(): void {
    this.cartaService.atualizar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta atualizada  com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a carta: ' + erro.error.mensagem, 'error');
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/cartas']);
  }
}
