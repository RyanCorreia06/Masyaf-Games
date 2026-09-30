import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CestaService, Produto } from '../cesta/cesta-service';
import { ProdutoService } from '../produto/produto-service';

@Component({
  selector: 'app-busca',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca {
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);
  cesta = inject(CestaService);

  termo = '';
  produtos: Produto[] = [];

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.termo = params.get('q') ?? '';
      this.produtos = this.produtoService.buscarPorNome(this.termo);
    });
  }

  comprar(p: Produto) {
    this.cesta.adicionar(p);
  }
}