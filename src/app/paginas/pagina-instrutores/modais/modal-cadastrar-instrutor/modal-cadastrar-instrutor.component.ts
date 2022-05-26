import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
    selector: 'app-modal-cadastrar-instrutor',
    templateUrl: './modal-cadastrar-instrutor.component.html',
    styleUrls: ['./modal-cadastrar-instrutor.component.css']
})
export class ModalCadastrarInstrutorComponent implements OnInit {

    modalRef?: BsModalRef;

    constructor(
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
        console.log("Modal cadsatrar instrutor!");
    }
    
    fecharModal(): void {
        this.modalService.hide();
    }
}