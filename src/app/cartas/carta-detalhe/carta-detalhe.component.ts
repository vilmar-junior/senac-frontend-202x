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
  public selectedFile: File | null = null;
  public imagePreview: string | ArrayBuffer | null = null; // Para armazenar o preview da imagem
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

  // Capturar o arquivo selecionado
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // Limite de 10MB
      this.selectedFile = file;

      // Gerar o preview da imagem
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Definir o preview da imagem
      };
      reader.readAsDataURL(file);
    } else {
      alert('Tamanho de arquivo não permitido! Máximo: 10MB.');
      this.selectedFile = null;
      this.imagePreview = null; // Limpar o preview se não for um arquivo válido
    }
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

  salvar(event: Event): void {
    event.preventDefault();
    
    if(this.idCarta){
      this.atualizar();
    }else{
      this.inserir();
    }
  }

  // Inserir carta
  inserir(): void {
    this.cartaService.salvar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta salva com sucesso!', '', 'success');
        // Após salvar a carta, verificamos se há uma imagem para ser enviada
        if (this.selectedFile) {
          this.uploadImagem(resposta.id); // Faz o upload da imagem
        } else {
          this.voltar(); // Caso não haja imagem, retornamos
        }
      },
      (erro) => {
        Swal.fire('Erro ao salvar a carta: ' + erro.error, 'error');
      }
    );
  }

  // Atualizar carta
  atualizar(): void {
    this.cartaService.atualizar(this.carta).subscribe(
      (resposta) => {
        Swal.fire('Carta atualizada com sucesso!', '', 'success');
        // Após atualizar a carta, verificamos se há uma imagem para ser enviada
        if (this.selectedFile) {
          this.uploadImagem(resposta.id); // Faz o upload da imagem
        } else {
          this.voltar(); // Caso não haja imagem, retornamos
        }
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a carta: ' + erro.error, 'error');
      }
    );
  }

  uploadImagem(cartaId: number): void {
    const formData = new FormData();
    formData.append('imagem', this.selectedFile!, this.selectedFile!.name);

    this.cartaService.uploadImagem(cartaId, formData).subscribe({
      next: () => {
        Swal.fire('Imagem carregada com sucesso!', '', 'success');
        this.voltar();
      },
      error: (erro) => {
        Swal.fire('Erro ao fazer upload da imagem: ' + erro.error, 'error');
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/cartas']);
  }
}
