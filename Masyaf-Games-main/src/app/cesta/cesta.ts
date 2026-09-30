import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CestaService } from './cesta-service';

const CHAVE_PEDIDOS = 'masyaf-pedidos';
const CHAVE_ULTIMOS_ITENS = 'masyaf-ultimos-itens';

@Component({
  selector: 'app-cesta',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  cesta = inject(CestaService);

  finalizar() {
    if (this.cesta.itens().length === 0) {
      return;
    }

    const itensComprados = this.cesta.itens();
    const totalComprado = this.cesta.total();

    const pedido = {
      data: new Date().toISOString(),
      itens: itensComprados,
      total: totalComprado
    };

    const pedidosSalvos = localStorage.getItem(CHAVE_PEDIDOS);
    const pedidos = pedidosSalvos ? JSON.parse(pedidosSalvos) : [];
    pedidos.push(pedido);
    localStorage.setItem(CHAVE_PEDIDOS, JSON.stringify(pedidos));

    localStorage.setItem(CHAVE_ULTIMOS_ITENS, JSON.stringify(itensComprados));

    alert('Pedido finalizado com sucesso!');
    this.cesta.limpar();
  }
}