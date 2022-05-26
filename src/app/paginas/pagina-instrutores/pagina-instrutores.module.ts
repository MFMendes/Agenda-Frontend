import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";
import { ModalModule } from "ngx-bootstrap/modal";
import { BarraDeNavegacaoModule } from "src/app/components/barra-de-navegacao/barra-de-navegacao.module";
import { ModalCadastrarInstrutorComponent } from "./modais/modal-cadastrar-instrutor/modal-cadastrar-instrutor.component";
import { PaginaInstrutoresRoutingModule } from "./pagina-instrutores-routing.module";
import { InstrutoresListagemComponent } from "./paginas/instrutores-listagem.component";

@NgModule({
    declarations: [
        InstrutoresListagemComponent,
        ModalCadastrarInstrutorComponent
    ],
    imports: [
        CommonModule,
        PaginaInstrutoresRoutingModule,
        BarraDeNavegacaoModule,
        ModalModule.forRoot(),
        HttpClientModule,
        AgGridModule
    ]
})
export class PaginaInstrutoresModule { }