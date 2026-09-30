import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
  plataforma: string;
}

const CHAVE_STORAGE = 'masyaf-cesta';

@Injectable({ providedIn: 'root' })
export class CestaService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  itens = signal<{ produto: Produto; qtd: number }[]>(this.carregarDoStorage());

  total = computed(() =>
    this.itens().reduce((soma, item) => soma + item.produto.preco * item.qtd, 0)
  );

  quantidadeItens = computed(() =>
    this.itens().reduce((soma, item) => soma + item.qtd, 0)
  );

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(this.itens()));
      }
    });
  }

  private carregarDoStorage(): { produto: Produto; qtd: number }[] {
    if (!this.isBrowser) {
      return [];
    }
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    return salvo ? JSON.parse(salvo) : [];
  }

  adicionar(p: Produto) {
    const lista = [...this.itens()];
    const existente = lista.find(item => item.produto.id === p.id);
    if (existente) {
      existente.qtd++;
    } else {
      lista.push({ produto: p, qtd: 1 });
    }
    this.itens.set(lista);
  }

  limpar() {
    this.itens.set([]);
  }
}