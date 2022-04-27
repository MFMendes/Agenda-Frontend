import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { CoreRoutingModule } from "./core-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from "./paginas/login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule, 
        ReactiveFormsModule, 
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ]
})
export class CoreModule { }