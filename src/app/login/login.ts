import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { ApiService } from '../core/api';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  router = inject(Router);
  private api = inject(ApiService);

  Email: string = '';
  password: string = '';

  entrar() {
    this.api.login(this.Email, this.password).subscribe({
      next: usuario => { localStorage.setItem('masyaf-usuario', JSON.stringify(usuario)); alert('Login realizado com sucesso!'); this.router.navigate(['/']); },
      error: () => alert('E-mail ou senha incorretos.')
    });
  }
}
