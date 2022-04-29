import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacaoGuard } from "../lib/core/guards/autenticacao.guard";
import { LoginComponent } from "./paginas/login/login.component";

const rotas: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'paginas',
        canActivate: [AutenticacaoGuard],
        loadChildren: () => import('src/app/paginas/paginas.module').then(m => m.PaginasModule)
    }
];

@NgModule({
    declarations: [],
	imports: [RouterModule.forRoot(rotas, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class CoreRoutingModule { }