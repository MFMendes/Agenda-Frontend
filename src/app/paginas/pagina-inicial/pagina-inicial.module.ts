import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { ModalModule } from "ngx-bootstrap/modal";
import { BarraDeNavegacaoModule } from "src/app/components/barra-de-navegacao/barra-de-navegacao.module";
import { ModalCadastrarComponent } from "./modais/modal-cadastrar/modal-cadastrar.component";
import { PaginaInicialRoutingModule } from "./pagina-inicial-routing.module";
import { PaginaInicialListagemComponent } from "./paginas/pagina-inicial-listagem/pagina-inicial-listagem.component";

@NgModule({
    declarations: [
        PaginaInicialListagemComponent,
        ModalCadastrarComponent
    ],
    imports: [
        CommonModule,
        PaginaInicialRoutingModule,
        BarraDeNavegacaoModule,
        ModalModule.forRoot(),
        AccordionModule.forRoot()
    ]
})
export class PaginaInicialModule { }