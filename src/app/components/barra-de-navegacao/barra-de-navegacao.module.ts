import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BarraDeNavegacaoComponent } from './barra-de-navegacao.component';

@NgModule({
  declarations: [ BarraDeNavegacaoComponent ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ BarraDeNavegacaoComponent ]
})
export class BarraDeNavegacaoModule { }