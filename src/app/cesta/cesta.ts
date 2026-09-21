import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CestaService } from './cesta-service';

@Component({
  selector: 'app-cesta',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  cesta = inject(CestaService);
}