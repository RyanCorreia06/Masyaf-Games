import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CestaService } from './cesta-service';
import { ApiService } from '../core/api';


@Component({
  selector: 'app-cesta',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  cesta = inject(CestaService);
  private api = inject(ApiService);

  finalizar() {
    if (this.cesta.itens().length === 0) return;
    const salvo = localStorage.getItem('masyaf-usuario');
    if (!salvo) { alert('Entre na sua conta para finalizar o pedido.'); return; }
    const usuario = JSON.parse(salvo);
    const itens = this.cesta.itens().map(item => ({ jogoId: item.produto.id, quantidade: item.qtd }));
    this.api.criarPedido(usuario.id, itens).subscribe({
      next: pedido => { alert(`Pedido #${pedido.id} finalizado com sucesso! Total: R$ ${pedido.total.toFixed(2)}`); this.cesta.limpar(); },
      error: erro => alert(erro.error?.message ?? 'Não foi possível finalizar o pedido.')
    });
  }
}
