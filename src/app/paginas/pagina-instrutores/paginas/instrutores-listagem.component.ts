import { HttpClient } from "@angular/common/http";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
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
        private modalService: BsModalService,
        private http: HttpClient
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

    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
        { field: 'make'},
        { field: 'model'},
        { field: 'price' }
    ];
    
    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
    };
    
    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;
    
    // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    
    // Example load data from sever
    onGridReady(params: GridReadyEvent) {
        this.rowData$ = this.http
        .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    }
    
    // Example of consuming Grid Event
    onCellClicked(e: CellClickedEvent): void {
        console.log('cellClicked', e);
    }
    
    // Example using Grid's API
    clearSelection(): void {
        this.agGrid.api.deselectAll();
    }
}