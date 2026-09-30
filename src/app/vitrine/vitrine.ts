import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CestaService, Produto } from '../cesta/cesta-service';
import { ProdutoService } from '../produto/produto-service';

@Component({
  selector: 'app-vitrine',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine {
  cesta = inject(CestaService);
  private produtoService = inject(ProdutoService);

  produtos: Produto[] = this.produtoService.produtos as Produto[];

  comprar(p: Produto) {
    this.cesta.adicionar(p);
  }
}