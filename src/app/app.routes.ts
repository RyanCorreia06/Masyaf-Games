import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';
import { Esqueci } from './esqueci/esqueci';
import { Detalhe } from './detalhe/detalhe';
import { Cesta } from './cesta/cesta';
import { Busca } from './busca/busca';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'login', component: Login },
  { path: 'esqueci-senha', component: Esqueci },
  { path: 'produto/:id', component: Detalhe },
  { path: 'cesta', component: Cesta },
  { path: 'busca', component: Busca },
];