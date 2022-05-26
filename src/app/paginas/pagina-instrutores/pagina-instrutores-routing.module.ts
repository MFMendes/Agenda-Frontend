import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InstrutoresListagemComponent } from "./paginas/instrutores-listagem.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "listagem"
    },
    {
        path: 'listagem',
        component: InstrutoresListagemComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PaginaInstrutoresRoutingModule { }