import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../cesta/cesta-service';

export interface Usuario { id: number; nome: string; email: string; }
export interface Cadastro { nome:string; email:string; senha:string; cpf:string; telefone:string; cep:string; rua:string; numero:string; bairro:string; cidade:string; estado:string; }
export interface ItemPedido { jogoId:number; quantidade:number; }
export interface Pedido { id:number; data:string; total:number; }
const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  listarJogos(): Observable<Produto[]> { return this.http.get<Produto[]>(`${API}/jogos`); }
  buscarJogos(nome: string): Observable<Produto[]> { return this.http.get<Produto[]>(`${API}/jogos`, { params: { nome } }); }
  jogosPorPlataforma(plataforma: string): Observable<Produto[]> { return this.http.get<Produto[]>(`${API}/jogos`, { params: { plataforma } }); }
  buscarJogo(id: number): Observable<Produto> { return this.http.get<Produto>(`${API}/jogos/${id}`); }
  cadastrar(dados: Cadastro): Observable<Usuario> { return this.http.post<Usuario>(`${API}/usuarios/cadastro`, dados); }
  login(email: string, senha: string): Observable<Usuario> { return this.http.post<Usuario>(`${API}/auth/login`, { email, senha }); }
  criarPedido(usuarioId:number,itens:ItemPedido[]):Observable<Pedido>{return this.http.post<Pedido>(`${API}/pedidos`,{usuarioId,itens});}
  historico(usuarioId:number):Observable<Pedido[]>{return this.http.get<Pedido[]>(`${API}/pedidos/usuario/${usuarioId}`);}
}
