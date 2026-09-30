import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  router = inject(Router);

  Email: string = '';
  password: string = '';

  entrar() {
    const salvo = localStorage.getItem('masyaf-usuario');
    if (!salvo) {
      alert('Nenhum cadastro encontrado. Cadastre-se primeiro.');
      return;
    }

    const usuario = JSON.parse(salvo);
    if (usuario.email === this.Email && usuario.senha === this.password) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/']);
    } else {
      alert('E-mail ou senha incorretos.');
    }
  }
}