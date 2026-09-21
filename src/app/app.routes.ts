import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';
import { Esqueci } from './esqueci/esqueci';
import { Detalhe } from './detalhe/detalhe';
import { Cesta } from './cesta/cesta';
import { Busca } from './busca/busca';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Vitrine, title: 'Masyaf Games - Vitrine' },
  { path: 'login', component: Login, title: 'Masyaf Games - Login' },
  { path: 'cadastro', component: Cadastro, title: 'Masyaf Games - Cadastro' },
  { path: 'esqueci-senha', component: Esqueci, title: 'Masyaf Games - Esqueci a senha' },
  { path: 'produto/:id', component: Detalhe, title: 'Masyaf Games - Produto' },
  { path: 'cesta', component: Cesta, title: 'Masyaf Games - Cesta' },
  { path: 'busca', component: Busca, title: 'Masyaf Games - Busca' },
  { path: '**', redirectTo: '' },
];