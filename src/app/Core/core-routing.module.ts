import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
    }
];

@NgModule({
    declarations: [],
	imports: [RouterModule.forRoot(rotas, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class CoreRoutingModule { }