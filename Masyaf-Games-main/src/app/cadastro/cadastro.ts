import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  router = inject(Router);

  nome = '';
  email = '';
  senha = '';
  confirmaSenha = '';
  cpf = '';
  telefone = '';

  cep = '';
  rua = '';
  numero = '';
  bairro = '';
  cidade = '';
  estado = '';

  vEmail(value: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  }

  vCpf(value: string): boolean {
    const digitos = value.replace(/\D/g, '');
    return digitos.length === 11;
  }

  vTelefone(value: string): boolean {
    const digitos = value.replace(/\D/g, '');
    return digitos.length === 10 || digitos.length === 11;
  }

  vCep(value: string): boolean {
    const digitos = value.replace(/\D/g, '');
    return digitos.length === 8;
  }

  senhasIguais(): boolean {
    return this.senha === this.confirmaSenha && this.senha.length > 0;
  }

  cadastrar() {
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }
}