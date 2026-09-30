import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CestaService, Produto } from '../cesta/cesta-service';
import { ProdutoService } from '../produto/produto-service';

@Component({
  selector: 'app-detalhe',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css'
})
export class Detalhe {
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);
  cesta = inject(CestaService);

  produto?: Produto;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtoService.produtos.find(p => p.id === id);
  }

  comprar() {
    if (this.produto) {
      this.cesta.adicionar(this.produto);
    }
  }
}