
import { Injectable, inject } from '@angular/core';
import { Observable, tap, shareReplay } from 'rxjs';
import { Produto } from '../cesta/cesta-service';
import { ApiService } from '../core/api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private api = inject(ApiService);

  produtos: Produto[] = [];

  private produtos$?: Observable<Produto[]>;

  carregar(): Observable<Produto[]> {

    if (!this.produtos$) {

      this.produtos$ = this.api.listarJogos().pipe(

        tap(lista => {
          this.produtos = lista;
        }),

        shareReplay(1)

      );

    }

    return this.produtos$;
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.api.buscarJogo(id);
  }

  buscarPorNome(termo: string): Observable<Produto[]> {
    return this.api.buscarJogos(termo);
  }

  listarPorPlataforma(plataforma: string): Observable<Produto[]> {
    return this.api.jogosPorPlataforma(plataforma);
  }

  recarregar(): Observable<Produto[]> {
    this.produtos$ = undefined;
    return this.carregar();
  }
}
