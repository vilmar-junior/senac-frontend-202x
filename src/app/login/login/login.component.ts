import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/shared/model/dto/usuario.dto';
import { Jogador } from 'src/app/shared/model/jogador';
import Swal from 'sweetalert2';
import { LoginService } from './../../shared/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public dto: UsuarioDTO = new UsuarioDTO();

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  public realizarLogin() {

    this.loginService.autenticar(this.dto)
    .subscribe({
      next: sucesso => {
          Swal.fire('Sucesso', 'Usuário autenticado com sucesso', 'success');
          this.router.navigate(['/home']);
      }, 
      error: erro => {
        var mensagem: string;
        if(erro.status == 401){
          mensagem = "Usuário ou senha inválidos, tente novamente";
        }else{
          mensagem = erro.error.mensagem;
        }

        Swal.fire('Erro', mensagem, 'error');
      }
    });
  }
  
  public cadastro() {
    this.router.navigate(['login/cadastro']);
  }
}
