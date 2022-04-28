import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BarraDeNavegacaoModule } from 'src/app/components/barra-de-navegacao/barra-de-navegacao.module';
import { CoreModule } from './core/core.module';
import { PaginasModule } from './paginas/paginas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BarraDeNavegacaoModule,
    PaginasModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
