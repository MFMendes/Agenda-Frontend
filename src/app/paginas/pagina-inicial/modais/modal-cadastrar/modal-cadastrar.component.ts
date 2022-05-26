import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
    selector: 'app-modal-cadastrar',
    templateUrl: './modal-cadastrar.component.html',
    styleUrls: ['./modal-cadastrar.component.css']
})
export class ModalCadastrarComponent implements OnInit {

    modalRef?: BsModalRef;

    constructor(
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
        console.log("Modal cadsatrar reserva!");
    }
    
    fecharModal(): void {
        this.modalService.hide();
    }
}