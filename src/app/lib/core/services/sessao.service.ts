import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Sessao } from '../models/sessao';

@Injectable({
	providedIn: "root",
})
export class SessaoService {
    constructor(private readonly cookiesService: CookieService) {}

    registrar(sessao: Sessao) {
        this.cookiesService.set('infoUsuario', JSON.stringify(sessao), 1, '/', undefined, false, "Lax");
    }

    recuperar(): Sessao {
        const cookie = this.recuperarCookie();

        return cookie ? new Sessao(cookie) : new Sessao({});
    }

    remover(): void {
        this.cookiesService.delete('infoUsuario', '/');
    }

    isRegistrado(): boolean {
        const cookie = this.cookiesService.get('infoUsuario');

        const resposta = cookie ? true : false;

        return resposta;
    }

    private recuperarCookie(): any {
        const cookie = this.cookiesService.get('infoUsuario');
        return cookie ? JSON.parse(cookie) : null;
    }
}