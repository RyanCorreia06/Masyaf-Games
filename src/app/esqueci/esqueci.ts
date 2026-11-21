import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esqueci',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './esqueci.html',
  styleUrl: './esqueci.css',
})
export class Esqueci {
  email = '';

  private vEmail(value: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  }

  enviar() {
    if (this.vEmail(this.email)) {
      alert('Enviamos um link de recuperação para ' + this.email);
    }
  }
}