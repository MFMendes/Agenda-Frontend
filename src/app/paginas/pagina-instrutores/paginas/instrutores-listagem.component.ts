import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare const $: any;

@Component({
    selector: 'app-instrutores-listagem',
    templateUrl: './instrutores-listagem.component.html',
    styleUrls: ['./instrutores-listagem.component.css']
})
export class InstrutoresListagemComponent implements OnInit {
    
    modalRef?: BsModalRef;
    oneAtATime = true;

    constructor(
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
        console.log("Pagina Inicial!")
    }

    abrirModal(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(
            template,
            { class: 'modal-lg modal-drawer fade-right' }
        );
        $('modal-container').addClass('modal-drawer');
    }
}