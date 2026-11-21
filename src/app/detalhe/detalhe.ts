
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class Detalhe implements OnInit {

  private route = inject(ActivatedRoute);
  private produtos = inject(ProdutoService);
  private cdr = inject(ChangeDetectorRef);

  cesta = inject(CestaService);
  produto?: Produto;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtos.buscarPorId(id).subscribe({
      next: (p) => {
        this.produto = p;

        console.log('Produto atribuído ao componente:', this.produto);

        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar produto:', erro);
        this.produto = undefined;
        this.cdr.detectChanges();
      }
    });
  }

  comprar() {
    if (this.produto) {
      this.cesta.adicionar(this.produto);
    }
  }
}
