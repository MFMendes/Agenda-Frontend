import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/core/services/login.service";
import { LoginRequest } from "src/app/core/models/login.request";
import { Sessao } from "src/app/lib/core/models/sessao";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    loginForm!: FormGroup;

    constructor(
        private formBuiler: FormBuilder,
        private router: Router,
        private loginService: LoginService,
        private toast: ToastrService,
    ) { }

    ngOnInit(): void {
        this.iniciaLoginForm();
    }
    
    iniciaLoginForm(): void {
        this.loginForm = this.formBuiler.group({
            Login: ["", Validators.required],
            Senha: ["", Validators.required]
        })
    }

    entrar(): void {
        const request = new LoginRequest(this.loginForm.value);

        this.loginService.autenticar(request).subscribe(
            (response: Sessao) => {
                if (response.jwt) {
                    this.router.navigateByUrl("/inicio");
                }
            },
            (err) => {
                this.toast.warning(err.error.message);
            }
        );
    }
}