import { Injectable } from '@angular/core';
import { SessaoService } from '../services/sessao.service';
import { ErrosService } from '../services/erros.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
    constructor(
        private readonly sessaoService: SessaoService,
        private readonly errosService: ErrosService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.sessaoService.isRegistrado()) {
            this.errosService.emitirNaoAutorizado();
            return false;
        }

        return true;
    }
}