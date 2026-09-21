import { Injectable, signal, computed } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

@Injectable({ providedIn: 'root' })
export class CestaService {
  itens = signal<{ produto: Produto; qtd: number }[]>([]);

  total = computed(() =>
    this.itens().reduce((soma, item) => soma + item.produto.preco * item.qtd, 0)
  );

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