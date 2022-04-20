import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreRoutingModule } from "./core-routing.module";
import { LoginComponent } from "./paginas/login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ]
})
export class CoreModule { }