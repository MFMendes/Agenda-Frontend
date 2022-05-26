import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Sessao } from "../../lib/core/models/sessao";
import { SessaoService } from "../../lib/core/services/sessao.service";
import { LoginRequest } from "../models/login.request";
import { UsuarioResponse } from "../models/usuario.response";

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
            .post<Sessao>(this.urlBase + "/usuariosAcesso/autenticar", dados)
            .pipe(
                tap((response: Sessao) => {
                    if (response.jwt) {
                        this.sessaoService.registrar(response)
                    }
                })
            );
    }
}