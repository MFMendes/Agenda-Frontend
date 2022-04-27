import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginRequest } from "../models/login.request";
import { Sessao } from "../models/sessao";
import { UsuarioResponse } from "../models/usuario.response";
import { SessaoService } from "./sessao.service";

@Injectable({
    providedIn: "root"
})
export class LoginService {
    
    private urlBase = environment.api;
    public usuarioLogado!: UsuarioResponse;

    constructor(
        private http: HttpClient,
        private sessaoService: SessaoService 
    ) { }

    autenticar(dados: LoginRequest): Observable<Sessao> {
        return this.http
            .post<Sessao>(this.urlBase + "/api/autenticar", dados)
            .pipe(
                tap((response: Sessao) => {
                    if (response.jwt) {
                        this.sessaoService.registrar(response)
                    }
                })
            );
    }
}