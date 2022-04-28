import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notificacao } from '../models/notificacao.model';

@Injectable({ providedIn: 'root' })
export class NotificacoesService {
    private recebeNotificacao$ = new Subject<Notificacao>();
    private removeNotificacao$ = new Subject<Notificacao>();

    constructor(private readonly toastr: ToastrService) {
    }

    enviarNotificacao(notificacao: Notificacao) : void {
        this.recebeNotificacao$.next(notificacao);
    }

    removeNotificacao(notificacao: Notificacao) : void {
        this.removeNotificacao$.next(notificacao);
    }

    removerNotificacaoObservable(): Observable<Notificacao> {
        return this.removeNotificacao$.asObservable();
    }
    
    getNotification(): Observable<Notificacao> {
        return this.recebeNotificacao$.asObservable();
    }

    sucesso(titulo: string, texto: string): void {
        this.toastr.success(texto, titulo);
    }

    informacao(titulo: string, texto: string): void {
        this.toastr.info(texto, titulo);
    }

    aviso(titulo: string, texto: string): void {
        this.toastr.warning(texto, titulo);
    }

    erro(titulo: string, texto: string): void {
        this.toastr.error(texto, titulo, {
            timeOut: 3000
        });
    }

    customizada(titulo: string, texto: string, options: IndividualConfig): void {
        this.toastr.show(texto, titulo, options);
    }
}
