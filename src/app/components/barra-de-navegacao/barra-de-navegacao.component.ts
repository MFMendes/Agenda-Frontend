import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from 'src/app/lib/core/services/sessao.service';

@Component({
  selector: 'app-barra-de-navegacao-component',
  templateUrl: './barra-de-navegacao.component.html',
  styleUrls: ['./barra-de-navegacao.component.css']
})
export class BarraDeNavegacaoComponent implements OnInit {

  constructor(
    private router: Router,
    private sessaoService: SessaoService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.sessaoService.remover();
    this.router.navigate(['']);
  }
}