
import { Component, inject, ChangeDetectorRef } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  cesta = inject(CestaService);

  plataforma = '';
  produtos: Produto[] = [];

  constructor() {
    this.route.paramMap.subscribe(params => {

      this.plataforma = params.get('plataforma') ?? '';

      console.log('1. Plataforma recebida:', this.plataforma);

      this.produtoService.listarPorPlataforma(this.plataforma).subscribe({

        next: p => {
          this.produtos = p;

          console.log('2. Jogos recebidos:', p);
          console.log('3. Quantidade de jogos:', this.produtos.length);

          this.cdr.detectChanges();
        },

        error: erro => {
          console.error('Erro ao buscar jogos:', erro);

          this.produtos = [];

          this.cdr.detectChanges();
        }

      });

    });
  }

  comprar(p: Produto) {
    this.cesta.adicionar(p);
  }
}
