import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
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

  private paramMap = toSignal(this.route.paramMap);

  plataforma = computed(() => this.paramMap()?.get('plataforma') ?? '');

  produtos = computed(() =>
    this.produtoService.listarPorPlataforma(this.plataforma())
  );

  comprar(p: Produto) {
    this.cesta.adicionar(p);
  }
}