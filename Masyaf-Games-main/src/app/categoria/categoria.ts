import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CestaService, Produto } from '../cesta/cesta-service';
import { ProdutoService } from '../produto/produto-service';

@Component({
  selector: 'app-categoria',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css'
})
export class Categoria {
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);
  cesta = inject(CestaService);

  plataforma = '';
  produtos: Produto[] = [];

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.plataforma = params.get('plataforma') ?? '';
      this.produtos = this.produtoService.listarPorPlataforma(this.plataforma);
    });
  }

  comprar(p: Produto) {
    this.cesta.adicionar(p);
  }
}