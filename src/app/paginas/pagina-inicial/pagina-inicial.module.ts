import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BarraDeNavegacaoModule } from "src/app/components/barra-de-navegacao/barra-de-navegacao.module";
import { PaginaInicialRoutingModule } from "./pagina-inicial-routing.module";
import { PaginaInicialListagemComponent } from "./paginas/pagina-inicial-listagem/pagina-inicial-listagem.component";

@NgModule({
    declarations: [
        PaginaInicialListagemComponent
    ],
    imports: [
        CommonModule,
        PaginaInicialRoutingModule,
        BarraDeNavegacaoModule
    ]
})
export class PaginaInicialModule { }