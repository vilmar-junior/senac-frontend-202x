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

  constructor(private LoginService: LoginService,
              private router: Router) {
  }

  public realizarLogin() {
    this.LoginService.autenticar(this.dto).subscribe(
      (usuarioAutenticado: Jogador) => {
        Swal.fire('Sucesso', 'Usuário autenticado com sucesso', 'success');
        localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
        this.router.navigate(['/home']);
      },
      (erro) => {
        Swal.fire('Erro', erro.error.mensagem, 'error');
      }
    )
  }
  
  public cadastro() {
    //TODO desenvolver
    this.router.navigate(['login/cadastro']);
  }
}
