import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CestaService, Produto } from '../cesta/cesta-service';

@Component({
  selector: 'app-vitrine',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine {
  cesta = inject(CestaService);

  produtos: Produto[] = [
    { id: 1, nome: 'Assassin\'s Creed', preco: 199.9, imagem: '/jogo1.jpg', descricao: 'Aventura de ação e furtividade.' },
    { id: 2, nome: 'God of War', preco: 149.9, imagem: '/jogo2.jpg', descricao: 'Descrição do jogo 2.' },
    { id: 3, nome: 'Crash Bandicoot', preco: 99.9, imagem: '/jogo3.jpeg', descricao: 'Descrição do jogo 3.' },
    { id: 4, nome: 'Shadow of the Colossus', preco: 59.9, imagem: '/jogo4.jpg', descricao: 'Descrição do jogo 4.' },
  ];

  comprar(p: Produto) {
    this.cesta.adicionar(p);
  }
}