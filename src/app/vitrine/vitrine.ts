import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common'; import { RouterLink } from '@angular/router';
import { CestaService, Produto } from '../cesta/cesta-service'; import { ProdutoService } from '../produto/produto-service';
@Component({selector:'app-vitrine',imports:[RouterLink,CurrencyPipe],templateUrl:'./vitrine.html',styleUrl:'./vitrine.css'})
export class Vitrine implements OnInit {
 cesta=inject(CestaService); private produtoService=inject(ProdutoService);private cdr = inject(ChangeDetectorRef);
 produtos:Produto[]=[]; carregando=true; erro='';
ngOnInit() {
  this.produtoService.carregar().subscribe({
    next: (p) => {
      this.produtos = p;
      this.carregando = false;

      this.cdr.markForCheck();
    },
    error: (erro) => {
      console.error('Erro ao carregar jogos:', erro);

      this.erro = 'Não foi possível carregar os jogos.';
      this.carregando = false;

      this.cdr.markForCheck();
    }
  });
}
 comprar(p:Produto){this.cesta.adicionar(p);}
}
