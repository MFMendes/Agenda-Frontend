import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaInicialListagemComponent } from "./paginas/pagina-inicial-listagem/pagina-inicial-listagem.component";

const routes: Routes = [
    {
        path: "pagina-inicial",
        redirectTo: 'pagina-inicial'
    },
    {
        path: 'pagina-inicial',
        component: PaginaInicialListagemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaInicialRoutingModule { }