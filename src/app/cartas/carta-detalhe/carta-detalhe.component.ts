import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/shared/service/cartas.service';
import { Carta } from './../../shared/model/carta';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-detalhe',
  templateUrl: './carta-detalhe.component.html',
  styleUrls: ['./carta-detalhe.component.scss']
})
export class CartaDetalheComponent implements OnInit {

  public carta: Carta = new Carta();

  constructor(private cartaService: CartasService,
              private router: Router //componente para o roteamento entre telas
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    //TODO e na EDIÇÃO? Vamos alterar em breve
    this.cartaService.salvar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta salva com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        //TODO vamos lidar logo logo com o erro devolvido pela API
        Swal.fire('Erro ao salvar a carta!', erro, 'error');
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/cartas']);
  }
}
