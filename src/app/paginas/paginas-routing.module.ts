import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacaoGuard } from "../lib/core/guards/autenticacao.guard";

const routes: Routes = [
    {
        path: 'inicio',
        canActivate: [AutenticacaoGuard],
        loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule { }